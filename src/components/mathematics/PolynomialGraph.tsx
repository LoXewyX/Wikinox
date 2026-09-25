import { useEffect, useMemo, useRef } from "preact/hooks";
import JXG from "jsxgraph";
import {
  compile,
  parse,
  type ConstantNode,
  type OperatorNode,
  type ParenthesisNode,
  type SymbolNode,
  type MathNode,
} from "mathjs";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { useI18n } from "@/providers/I18nProvider";
import { useTheme } from "@/providers/ThemeProvider";

interface PolynomialGraphProps {
  expression: string;
  min?: number | string;
  max?: number | string;
}

interface PolynomialInfo {
  degree: number | null;
  roots: number[];
  yIntercept: number | null;
}

const COLORS = {
  light: {
    axis: "#111111",
    curve: "#2563eb",
    root: "#dc2626",
    yIntercept: "#16a34a",
    text: "#111111",
  },
  dark: {
    axis: "#e5e5e5",
    curve: "#60a5fa",
    root: "#f87171",
    yIntercept: "#4ade80",
    text: "#e5e5e5",
  },
};

const SAMPLE_COUNT = 1000;
const ROOT_ITERATIONS = 50;
const ROOT_TOLERANCE = 1e-10;
const ROOT_MERGE_DISTANCE = 1e-4;
const MAX_GRAPH_Y = 1e5;

function normalizeExpression(expression: string): string {
  return expression.replace(/\s+/g, "").replace(/−/g, "-");
}

function createEvaluator(expression: string) {
  try {
    const compiled = compile(expression);

    return (x: number): number => {
      try {
        const result = compiled.evaluate({ x });

        if (typeof result !== "number") {
          return Number.NaN;
        }

        return Number.isFinite(result) ? result : Number.NaN;
      } catch {
        return Number.NaN;
      }
    };
  } catch {
    return () => Number.NaN;
  }
}

function getPolynomialDegree(expression: string): number | null {
  try {
    const root = parse(expression);

    function degreeOf(node: MathNode): number | null {
      switch (node.type) {
        case "ConstantNode":
          return 0;

        case "SymbolNode": {
          const symbol = node as SymbolNode;
          return symbol.name === "x" ? 1 : null;
        }

        case "ParenthesisNode": {
          const parenthesis = node as ParenthesisNode;
          return degreeOf(parenthesis.content);
        }

        case "OperatorNode": {
          const operator = node as OperatorNode;

          switch (operator.op) {
            case "+":
            case "-": {
              const degrees = operator.args.map(degreeOf);

              if (degrees.some((degree) => degree === null)) {
                return null;
              }

              return Math.max(...(degrees as number[]));
            }

            case "*": {
              const degrees = operator.args.map(degreeOf);

              if (degrees.some((degree) => degree === null)) {
                return null;
              }

              return (degrees as number[]).reduce(
                (total, degree) => total + degree,
                0,
              );
            }

            case "/": {
              if (operator.args.length !== 2) {
                return null;
              }

              const numeratorDegree = degreeOf(operator.args[0]);
              const denominatorDegree = degreeOf(operator.args[1]);

              if (numeratorDegree === null || denominatorDegree === null) {
                return null;
              }

              return numeratorDegree - denominatorDegree;
            }

            case "^": {
              if (operator.args.length !== 2) {
                return null;
              }

              const base = operator.args[0];
              const exponent = operator.args[1];

              const baseDegree = degreeOf(base);

              if (baseDegree === null) {
                return null;
              }

              if (exponent.type !== "ConstantNode") {
                return null;
              }

              const constant = exponent as ConstantNode;
              const exponentValue = Number(constant.value);

              if (
                !Number.isFinite(exponentValue) ||
                !Number.isInteger(exponentValue) ||
                exponentValue < 0
              ) {
                return null;
              }

              return baseDegree * exponentValue;
            }

            default:
              return null;
          }
        }

        default:
          return null;
      }
    }

    return degreeOf(root);
  } catch {
    return null;
  }
}

function findRoots(
  evaluate: (x: number) => number,
  min: number,
  max: number,
): number[] {
  if (!Number.isFinite(min) || !Number.isFinite(max) || min >= max) {
    return [];
  }

  const roots: number[] = [];
  const step = (max - min) / SAMPLE_COUNT;

  let previousX = min;
  let previousY = evaluate(previousX);

  for (let i = 1; i <= SAMPLE_COUNT; i++) {
    const x = min + i * step;
    const y = evaluate(x);

    if (Number.isFinite(previousY) && Number.isFinite(y)) {
      // Exact zero.
      if (Math.abs(previousY) < ROOT_TOLERANCE) {
        roots.push(previousX);
      }

      // Sign change.
      if (previousY * y < 0) {
        let left = previousX;
        let right = x;
        let leftY = previousY;

        for (let iteration = 0; iteration < ROOT_ITERATIONS; iteration++) {
          const middle = (left + right) / 2;
          const middleY = evaluate(middle);

          if (!Number.isFinite(middleY)) {
            break;
          }

          if (Math.abs(middleY) < ROOT_TOLERANCE) {
            left = middle;
            right = middle;
            break;
          }

          if (leftY * middleY <= 0) {
            right = middle;
          } else {
            left = middle;
            leftY = middleY;
          }
        }

        roots.push((left + right) / 2);
      }
    }

    previousX = x;
    previousY = y;
  }

  return roots
    .filter(Number.isFinite)
    .sort((a, b) => a - b)
    .filter(
      (root, index, array) =>
        index === 0 || Math.abs(root - array[index - 1]) > ROOT_MERGE_DISTANCE,
    )
    .map((root) => Number(root.toFixed(6)));
}

function formatNumber(value: number): string {
  if (!Number.isFinite(value)) {
    return "—";
  }

  if (Number.isInteger(value)) {
    return String(value);
  }

  return Number(value.toFixed(3)).toString();
}

function analyzePolynomial(
  expression: string,
  min: number,
  max: number,
): PolynomialInfo {
  const evaluate = createEvaluator(expression);

  const yIntercept = evaluate(0);

  return {
    degree: getPolynomialDegree(expression),
    roots: findRoots(evaluate, min, max),
    yIntercept: Number.isFinite(yIntercept) ? yIntercept : null,
  };
}

function createGraphSegments(
  evaluate: (x: number) => number,
  min: number,
  max: number,
) {
  const segments: Array<[number[], number[]]> = [];

  const xs: number[] = [];
  const ys: number[] = [];

  const step = (max - min) / SAMPLE_COUNT;

  const pushSegment = () => {
    if (xs.length > 1) {
      segments.push([xs.splice(0), ys.splice(0)]);
    } else {
      xs.length = 0;
      ys.length = 0;
    }
  };

  let previousY: number | null = null;

  for (let i = 0; i <= SAMPLE_COUNT; i++) {
    const x = min + i * step;
    const y = evaluate(x);

    const valid =
      Number.isFinite(x) && Number.isFinite(y) && Math.abs(y) <= MAX_GRAPH_Y;

    if (!valid) {
      pushSegment();
      previousY = null;
      continue;
    }

    /*
     * Prevent a visually incorrect line when the function
     * grows abruptly between two samples.
     */
    if (previousY !== null && Math.abs(y - previousY) > MAX_GRAPH_Y) {
      pushSegment();
    }

    xs.push(x);
    ys.push(y);

    previousY = y;
  }

  pushSegment();

  return segments;
}

export default function PolynomialGraph({
  expression,
  min = -10,
  max = 10,
}: PolynomialGraphProps) {
  const { t } = useI18n();
  const { resolvedTheme } = useTheme();

  const boardRef = useRef<HTMLDivElement>(null);

  const safeMin = useMemo(() => {
    const value = Number(min);
    return Number.isFinite(value) ? value : -10;
  }, [min]);

  const safeMax = useMemo(() => {
    const value = Number(max);
    return Number.isFinite(value) ? value : 10;
  }, [max]);

  const normalizedExpression = useMemo(
    () => normalizeExpression(expression),
    [expression],
  );

  const evaluate = useMemo(
    () => createEvaluator(normalizedExpression),
    [normalizedExpression],
  );

  const info = useMemo(
    () => analyzePolynomial(normalizedExpression, safeMin, safeMax),
    [normalizedExpression, safeMin, safeMax],
  );

  const isDarkMode = resolvedTheme === "dark";

  useEffect(() => {
    const container = boardRef.current;

    if (
      !container ||
      !Number.isFinite(safeMin) ||
      !Number.isFinite(safeMax) ||
      safeMin >= safeMax
    ) {
      return;
    }

    const colors = isDarkMode ? COLORS.dark : COLORS.light;

    const board = JXG.JSXGraph.initBoard(container, {
      boundingbox: [safeMin, 10, safeMax, -10],

      axis: true,
      grid: true,

      showNavigation: false,
      showCopyright: false,

      zoom: {
        min: 0.2,
        max: 20,
      },

      pan: {
        enabled: true,
      },

      defaultAxes: {
        x: {
          strokeColor: colors.axis,
          highlightStrokeColor: colors.axis,

          ticks: {
            strokeColor: colors.axis,
            highlightStrokeColor: colors.axis,

            label: {
              strokeColor: colors.text,
              highlightStrokeColor: colors.text,
              fontSize: 12,
            },
          },

          label: {
            strokeColor: colors.text,
            highlightStrokeColor: colors.text,
            fontSize: 14,
          },
        },

        y: {
          strokeColor: colors.axis,
          highlightStrokeColor: colors.axis,

          ticks: {
            strokeColor: colors.axis,
            highlightStrokeColor: colors.axis,

            label: {
              strokeColor: colors.text,
              highlightStrokeColor: colors.text,
              fontSize: 12,
            },
          },

          label: {
            strokeColor: colors.text,
            highlightStrokeColor: colors.text,
            fontSize: 14,
          },
        },
      },
    });

    const segments = createGraphSegments(evaluate, safeMin, safeMax);

    for (const [xs, ys] of segments) {
      board.create("curve", [xs, ys], {
        strokeColor: colors.curve,
        strokeWidth: 3,
        fixed: true,
        highlight: false,
      });
    }

    for (const root of info.roots) {
      board.create("point", [root, 0], {
        name: `(${formatNumber(root)}, 0)`,

        size: 5,

        strokeColor: colors.root,
        fillColor: colors.root,

        fixed: true,
        highlight: false,

        label: {
          offset: [8, 8],
          fontSize: 13,
          strokeColor: colors.root,
        },
      });
    }

    if (info.yIntercept !== null && Math.abs(info.yIntercept) <= MAX_GRAPH_Y) {
      board.create("point", [0, info.yIntercept], {
        name: `(0, ${formatNumber(info.yIntercept)})`,

        size: 5,

        strokeColor: colors.yIntercept,
        fillColor: colors.yIntercept,

        fixed: true,
        highlight: false,

        label: {
          offset: [8, 8],
          fontSize: 13,
          strokeColor: colors.yIntercept,
        },
      });
    }

    board.fullUpdate();

    return () => {
      JXG.JSXGraph.freeBoard(board);
    };
  }, [evaluate, safeMin, safeMax, info.roots, info.yIntercept, isDarkMode]);

  return (
    <Card className="my-8 overflow-hidden">
      <CardHeader>
        <CardTitle>
          <span className="font-mono text-base font-medium">
            f(x) = {normalizedExpression}
          </span>
        </CardTitle>
      </CardHeader>

      <CardContent>
        <div
          ref={boardRef}
          className="h-125 w-full"
          role="img"
          aria-label={t.mathematics.polynomialGraph.ariaLabel}
        />

        <div className="mt-5 grid gap-3 border-t border-neutral-200 pt-5 dark:border-neutral-800 sm:grid-cols-3">
          <div className="rounded-lg border border-neutral-200 bg-white p-3 dark:border-neutral-800 dark:bg-neutral-950">
            <div className="text-xs text-neutral-500 dark:text-neutral-400">
              {t.mathematics.polynomialGraph.degree}
            </div>

            <div className="mt-1 text-lg font-semibold text-neutral-900 dark:text-neutral-100">
              {info.degree ?? "—"}
            </div>
          </div>

          <div className="rounded-lg border border-neutral-200 bg-white p-3 dark:border-neutral-800 dark:bg-neutral-950">
            <div className="text-xs text-neutral-500 dark:text-neutral-400">
              {t.mathematics.polynomialGraph.realRoots}
            </div>

            <div className="mt-1 wrap-break-words text-lg font-semibold text-neutral-900 dark:text-neutral-100">
              {info.roots.length > 0
                ? info.roots.map(formatNumber).join(", ")
                : t.mathematics.polynomialGraph.none}
            </div>
          </div>

          <div className="rounded-lg border border-neutral-200 bg-white p-3 dark:border-neutral-800 dark:bg-neutral-950">
            <div className="text-xs text-neutral-500 dark:text-neutral-400">
              {t.mathematics.polynomialGraph.yIntercept}
            </div>

            <div className="mt-1 text-lg font-semibold text-neutral-900 dark:text-neutral-100">
              {info.yIntercept !== null
                ? `(0, ${formatNumber(info.yIntercept)})`
                : "—"}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
