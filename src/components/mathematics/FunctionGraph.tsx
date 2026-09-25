import { useEffect, useMemo, useRef, useState } from "preact/hooks";
import JXG from "jsxgraph";
import { compile } from "mathjs";
import { ChevronDown } from "lucide-preact";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { useI18n } from "@/providers/I18nProvider";
import { useTheme } from "@/providers/ThemeProvider";

interface FunctionGraphProps {
  expression: string;
  restriction?: string;
  showWorkings?: boolean;
}

interface ParsedRestriction {
  min: number;
  max: number;
}

interface SamplePoint {
  x: number;
  y: number;
}

type Evaluator = (x: number) => number | null;

const COLORS = {
  light: "#111111",
  dark: "#e5e5e5",
  curve: "#2563eb",
  input: "#2563eb",
  output: "#dc2626",
  point: "#16a34a",
  inputLine: "#f59e0b",
  outputLine: "#9333ea",
};

const DEFAULT_RESTRICTION: ParsedRestriction = {
  min: -10,
  max: 10,
};

const SAMPLE_COUNT = 1000;
const MAX_SAMPLE_POINTS = 5;
const MAX_SEGMENT_JUMP = 100;
const MAX_SAMPLE_Y = 100000;

const SAMPLE_X_VALUES = [-4, -3, -2, -1, 0, 1, 2, 3, 4];

function formatNumber(value: number): string {
  return Number.isInteger(value)
    ? String(value)
    : Number(value.toFixed(4)).toString();
}

function evaluateBound(value: string): number | null {
  try {
    const result = compile(value).evaluate();
    const numeric = typeof result === "number" ? result : Number(result);

    return Number.isFinite(numeric) ? numeric : null;
  } catch {
    return null;
  }
}

function parseRestriction(restriction?: string): ParsedRestriction {
  if (!restriction) {
    return DEFAULT_RESTRICTION;
  }

  const normalized = restriction.replace(/\s+/g, "").replace(/−/g, "-");

  let match = normalized.match(/^(.+?)<=x<=(.+)$/);

  if (match) {
    const min = evaluateBound(match[1]);
    const max = evaluateBound(match[2]);

    if (min !== null && max !== null && min < max) {
      return { min, max };
    }

    return DEFAULT_RESTRICTION;
  }

  match = normalized.match(/^x>=(.+)$/);

  if (match) {
    const min = evaluateBound(match[1]);

    if (min !== null) {
      return {
        min,
        max: DEFAULT_RESTRICTION.max,
      };
    }

    return DEFAULT_RESTRICTION;
  }

  match = normalized.match(/^x>(.+)$/);

  if (match) {
    const min = evaluateBound(match[1]);

    if (min !== null) {
      return {
        min,
        max: DEFAULT_RESTRICTION.max,
      };
    }

    return DEFAULT_RESTRICTION;
  }

  match = normalized.match(/^x<=(.+)$/);

  if (match) {
    const max = evaluateBound(match[1]);

    if (max !== null) {
      return {
        min: DEFAULT_RESTRICTION.min,
        max,
      };
    }

    return DEFAULT_RESTRICTION;
  }

  match = normalized.match(/^x<(.+)$/);

  if (match) {
    const max = evaluateBound(match[1]);

    if (max !== null) {
      return {
        min: DEFAULT_RESTRICTION.min,
        max,
      };
    }
  }

  return DEFAULT_RESTRICTION;
}

function createEvaluator(expression: string): Evaluator {
  try {
    const compiled = compile(expression);

    return (x: number) => {
      try {
        const result = compiled.evaluate({ x });
        const value = typeof result === "number" ? result : Number(result);

        return Number.isFinite(value) ? value : null;
      } catch {
        return null;
      }
    };
  } catch {
    return () => null;
  }
}

function createSegments(
  evaluate: Evaluator,
  min: number,
  max: number,
): Array<Array<[number, number]>> {
  const segments: Array<Array<[number, number]>> = [];
  const step = (max - min) / SAMPLE_COUNT;

  let segment: Array<[number, number]> = [];
  let previousY: number | null = null;

  const pushSegment = () => {
    if (segment.length > 1) {
      segments.push(segment);
    }

    segment = [];
  };

  for (let i = 0; i <= SAMPLE_COUNT; i++) {
    const x = min + step * i;
    const y = evaluate(x);

    if (y === null || Math.abs(y) > MAX_SAMPLE_Y) {
      pushSegment();
      previousY = null;
      continue;
    }

    if (previousY !== null && Math.abs(y - previousY) > MAX_SEGMENT_JUMP) {
      pushSegment();
    }

    segment.push([x, y]);
    previousY = y;
  }

  pushSegment();

  return segments;
}

function getSamplePoints(
  evaluate: Evaluator,
  restriction: ParsedRestriction,
): SamplePoint[] {
  const points: SamplePoint[] = [];

  for (const x of SAMPLE_X_VALUES) {
    if (x < restriction.min || x > restriction.max) {
      continue;
    }

    const y = evaluate(x);

    if (y === null || Math.abs(y) > MAX_SAMPLE_Y) {
      continue;
    }

    points.push({ x, y });

    if (points.length >= MAX_SAMPLE_POINTS) {
      break;
    }
  }

  return points;
}

function formatOperation(expression: string, x: number): string {
  return expression.replace(/\bx\b/g, `(${formatNumber(x)})`);
}

export default function FunctionGraph({
  expression,
  restriction,
  showWorkings = false,
}: FunctionGraphProps) {
  const { t } = useI18n();
  const { resolvedTheme } = useTheme();

  const boardRef = useRef<HTMLDivElement>(null);

  const [showTable, setShowTable] = useState(false);

  const isDarkMode = resolvedTheme === "dark";

  const parsedRestriction = useMemo(
    () => parseRestriction(restriction),
    [restriction],
  );

  const evaluate = useMemo(() => createEvaluator(expression), [expression]);

  const samplePoints = useMemo(
    () => getSamplePoints(evaluate, parsedRestriction),
    [evaluate, parsedRestriction],
  );

  useEffect(() => {
    const container = boardRef.current;

    if (!container) {
      return;
    }

    const neutralColor = isDarkMode ? COLORS.dark : COLORS.light;

    const colors = showWorkings
      ? {
          curve: COLORS.curve,
          input: COLORS.input,
          output: COLORS.output,
          point: COLORS.point,
          inputLine: COLORS.inputLine,
          outputLine: COLORS.outputLine,
        }
      : {
          curve: neutralColor,
          input: neutralColor,
          output: neutralColor,
          point: neutralColor,
          inputLine: neutralColor,
          outputLine: neutralColor,
        };

    const board = JXG.JSXGraph.initBoard(container, {
      boundingbox: [-10, 10, 10, -10],
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
          strokeColor: neutralColor,
          highlightStrokeColor: neutralColor,

          ticks: {
            strokeColor: neutralColor,
            highlightStrokeColor: neutralColor,

            label: {
              strokeColor: neutralColor,
              highlightStrokeColor: neutralColor,
              fontSize: 12,
            },
          },

          label: {
            strokeColor: neutralColor,
            highlightStrokeColor: neutralColor,
            fontSize: 14,
          },
        },

        y: {
          strokeColor: neutralColor,
          highlightStrokeColor: neutralColor,

          ticks: {
            strokeColor: neutralColor,
            highlightStrokeColor: neutralColor,

            label: {
              strokeColor: neutralColor,
              highlightStrokeColor: neutralColor,
              fontSize: 12,
            },
          },

          label: {
            strokeColor: neutralColor,
            highlightStrokeColor: neutralColor,
            fontSize: 14,
          },
        },
      },
    });

    const segments = createSegments(
      evaluate,
      parsedRestriction.min,
      parsedRestriction.max,
    );

    for (const segment of segments) {
      const xs = segment.map(([x]) => x);
      const ys = segment.map(([, y]) => y);

      board.create("curve", [xs, ys], {
        strokeColor: colors.curve,
        strokeWidth: showWorkings ? 3 : 3.5,
        fixed: true,
      });
    }

    if (showWorkings) {
      for (const { x, y } of samplePoints) {
        board.create("point", [x, 0], {
          name: formatNumber(x),
          size: 4,
          strokeColor: colors.input,
          fillColor: colors.input,
          fixed: true,

          label: {
            offset: [-6, -20],
            fontSize: 13,
            strokeColor: colors.input,
          },
        });

        board.create("point", [0, y], {
          name: formatNumber(y),
          size: 4,
          strokeColor: colors.output,
          fillColor: colors.output,
          fixed: true,

          label: {
            offset: [8, 4],
            fontSize: 13,
            strokeColor: colors.output,
          },
        });

        board.create(
          "segment",
          [
            [x, 0],
            [x, y],
          ],
          {
            strokeColor: colors.inputLine,
            strokeWidth: 1.5,
            dash: 2,
            fixed: true,
          },
        );

        board.create(
          "segment",
          [
            [0, y],
            [x, y],
          ],
          {
            strokeColor: colors.outputLine,
            strokeWidth: 1.5,
            dash: 2,
            fixed: true,
          },
        );

        board.create("point", [x, y], {
          name: `(${formatNumber(x)}, ${formatNumber(y)})`,
          size: 5,
          strokeColor: colors.point,
          fillColor: colors.point,
          fixed: true,

          label: {
            offset: [8, 8],
            fontSize: 13,
            strokeColor: colors.point,
          },
        });
      }
    }

    board.create("text", [9, -1, "x"], {
      fixed: true,
      fontSize: 16,
      strokeColor: colors.input,
    });

    board.create("text", [0.4, 9, "f(x)"], {
      fixed: true,
      fontSize: 16,
      strokeColor: colors.output,
    });

    board.fullUpdate();

    return () => {
      JXG.JSXGraph.freeBoard(board);
    };
  }, [evaluate, parsedRestriction, samplePoints, showWorkings, isDarkMode]);

  return (
    <Card className="my-8 overflow-hidden">
      <CardHeader>
        <CardTitle>
          <span className="font-mono text-base">f(x) = {expression}</span>
        </CardTitle>
      </CardHeader>

      <CardContent className="p-4 sm:p-6">
        <div
          ref={boardRef}
          className="h-125 w-full overflow-hidden rounded-lg"
          role="img"
          aria-label={t.mathematics.functionGraph.ariaLabel}
        />

        {samplePoints.length > 0 && (
          <div className="mt-5 border-t border-neutral-200 pt-4 dark:border-neutral-800">
            <button
              type="button"
              onClick={() => setShowTable((value) => !value)}
              className="flex w-full items-center justify-between rounded-lg px-3 py-2 text-left transition-colors hover:bg-neutral-50 dark:hover:bg-neutral-900"
              aria-expanded={showTable}
            >
              <div>
                <p className="text-sm font-medium text-neutral-900 dark:text-neutral-100">
                  {t.mathematics.functionGraph.tableDescription}
                </p>

                <p className="mt-1 text-xs text-neutral-500 dark:text-neutral-400">
                  {showTable ? "Ocultar operaciones" : "Mostrar operaciones"}
                </p>
              </div>

              <span
                className={`text-lg text-neutral-500 transition-transform duration-200 dark:text-neutral-400 ${
                  showTable ? "rotate-180" : ""
                }`}
                aria-hidden="true"
              >
                <ChevronDown size={24} />
              </span>
            </button>

            {showTable && (
              <div className="mt-4 overflow-x-auto rounded-lg border border-neutral-200 dark:border-neutral-800">
                <table className="w-full text-sm">
                  <thead className="bg-neutral-50 dark:bg-neutral-900">
                    <tr>
                      <th className="px-4 py-2 text-left font-medium text-neutral-900 dark:text-neutral-100">
                        x
                      </th>

                      <th className="px-4 py-2 text-left font-medium text-neutral-900 dark:text-neutral-100">
                        {t.mathematics.functionGraph.operation}
                      </th>

                      <th className="px-4 py-2 text-left font-medium text-neutral-900 dark:text-neutral-100">
                        f(x)
                      </th>

                      <th className="px-4 py-2 text-left font-medium text-neutral-900 dark:text-neutral-100">
                        {t.mathematics.functionGraph.point}
                      </th>
                    </tr>
                  </thead>

                  <tbody className="divide-y divide-neutral-200 dark:divide-neutral-800">
                    {samplePoints.map(({ x, y }) => {
                      const operation = formatOperation(expression, x);

                      return (
                        <tr
                          key={`${x}-${y}`}
                          className="text-neutral-700 dark:text-neutral-300"
                        >
                          <td className="px-4 py-2 font-medium text-blue-600 dark:text-blue-400">
                            {formatNumber(x)}
                          </td>

                          <td className="px-4 py-2 font-mono text-sm text-neutral-800 dark:text-neutral-200">
                            f(
                            {formatNumber(x)}) = {operation}
                          </td>

                          <td className="px-4 py-2 font-medium text-red-600 dark:text-red-400">
                            {formatNumber(y)}
                          </td>

                          <td className="px-4 py-2 font-medium text-green-600 dark:text-green-400">
                            ({formatNumber(x)}, {formatNumber(y)})
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
