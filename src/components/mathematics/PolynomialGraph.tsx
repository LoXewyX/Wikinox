import { useEffect, useMemo, useRef } from "preact/hooks";
import { Parser } from "expr-eval";

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

interface ThemeColors {
  axis: string;
  grid: string;
  zeroGrid: string;
  text: string;
  curve: string;
  root: string;
  yIntercept: string;
  background: string;
}

type FunctionPlot = (options: Record<string, unknown>) => FunctionPlotInstance;

interface FunctionPlotInstance {
  root?: SVGSVGElement | Element;
}

const COLORS = {
  light: {
    axis: "#737373",
    grid: "#e5e5e5",
    zeroGrid: "#bdbdbd",
    text: "#171717",
    curve: "#171717",
    root: "#dc2626",
    yIntercept: "#16a34a",
    background: "#fafafa",
  },

  dark: {
    axis: "#a3a3a3",
    grid: "#262626",
    zeroGrid: "#525252",
    text: "#f5f5f5",
    curve: "#f5f5f5",
    root: "#f87171",
    yIntercept: "#4ade80",
    background: "#171717",
  },
};

const SAMPLE_COUNT = 1000;
const ROOT_ITERATIONS = 50;
const ROOT_TOLERANCE = 1e-10;
const ROOT_MERGE_DISTANCE = 1e-4;
const MAX_GRAPH_Y = 1e5;

const parser = new Parser({
  operators: {
    add: true,
    concatenate: false,
    conditional: false,
    divide: true,
    factorial: false,
    multiply: true,
    power: true,
    remainder: true,
    subtract: true,
    logical: false,
    comparison: false,
    in: false,
    assignment: false,
  },
});

function resolveFunctionPlot(module: unknown): FunctionPlot | null {
  if (typeof module === "function") {
    return module as FunctionPlot;
  }

  if (typeof module !== "object" || module === null) {
    return null;
  }

  const firstLevel = module as {
    default?: unknown;
  };

  if (typeof firstLevel.default === "function") {
    return firstLevel.default as FunctionPlot;
  }

  if (typeof firstLevel.default === "object" && firstLevel.default !== null) {
    const secondLevel = firstLevel.default as {
      default?: unknown;
    };

    if (typeof secondLevel.default === "function") {
      return secondLevel.default as FunctionPlot;
    }
  }

  return null;
}

function normalizeExpression(expression: string): string {
  return expression
    .replace(/\s+/g, "")
    .replace(/−/g, "-")
    .replace(/π/g, "PI")
    .replace(/\bpi\b/gi, "PI")
    .replace(/\be\b/g, "E");
}

function createEvaluator(expression: string) {
  try {
    const parsed = parser.parse(expression);

    return (x: number): number => {
      try {
        const result = parsed.evaluate({ x });

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
    const parsed = parser.parse(expression);

    const symbols = parsed.symbols({
      withMembers: true,
    });

    const allowedSymbols = new Set(["x", "E", "PI"]);

    if (symbols.some((symbol) => !allowedSymbols.has(symbol))) {
      return null;
    }

    const evaluate = (x: number): number => {
      try {
        const value = parsed.evaluate({ x });

        return typeof value === "number" && Number.isFinite(value)
          ? value
          : Number.NaN;
      } catch {
        return Number.NaN;
      }
    };

    const MAX_DEGREE = 20;
    const values: number[] = [];

    for (let x = 0; x <= MAX_DEGREE + 1; x++) {
      const value = evaluate(x);

      if (!Number.isFinite(value) || Math.abs(value) > 1e15) {
        return null;
      }

      values.push(value);
    }

    const isApproximatelyEqual = (a: number, b: number) => {
      const scale = Math.max(1, Math.abs(a), Math.abs(b));

      return Math.abs(a - b) <= 1e-9 * scale;
    };

    let differences = values;

    for (let degree = 0; degree <= MAX_DEGREE; degree++) {
      const first = differences[0];

      if (differences.every((value) => isApproximatelyEqual(value, first))) {
        return degree;
      }

      const next: number[] = [];

      for (let i = 1; i < differences.length; i++) {
        next.push(differences[i] - differences[i - 1]);
      }

      differences = next;
    }

    return null;
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
      if (Math.abs(previousY) < ROOT_TOLERANCE) {
        roots.push(previousX);
      }

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

function getYDomain(
  evaluate: (x: number) => number,
  min: number,
  max: number,
): [number, number] {
  const values: number[] = [];

  for (let i = 0; i <= 100; i++) {
    const x = min + ((max - min) * i) / 100;

    const y = evaluate(x);

    if (Number.isFinite(y) && Math.abs(y) <= MAX_GRAPH_Y) {
      values.push(y);
    }
  }

  if (values.length === 0) {
    return [-10, 10];
  }

  const minY = Math.min(...values);

  const maxY = Math.max(...values);

  let yMin: number;
  let yMax: number;

  if (minY === maxY) {
    const padding = Math.max(Math.abs(minY) * 0.2, 1);

    yMin = minY - padding;
    yMax = maxY + padding;
  } else {
    const padding = Math.max((maxY - minY) * 0.1, 1);

    yMin = minY - padding;
    yMax = maxY + padding;
  }

  /*
   * Keep the x-axis visible.
   */
  if (yMin > 0) {
    yMin = 0;
  }

  if (yMax < 0) {
    yMax = 0;
  }

  yMin = Math.max(yMin, -MAX_GRAPH_Y);

  yMax = Math.min(yMax, MAX_GRAPH_Y);

  return [yMin, yMax];
}

function styleAxisLabels(svg: SVGSVGElement, colors: ThemeColors): void {
  svg.querySelectorAll(".axis-label").forEach((element) => {
    const node = element as SVGTextElement;

    node.style.setProperty("fill", colors.text, "important");

    node.style.setProperty("font-size", "14px", "important");

    node.style.setProperty("font-family", "inherit", "important");
  });

  svg.querySelectorAll(".x.axis text, .y.axis text").forEach((element) => {
    const node = element as SVGTextElement;

    const text = node.textContent?.trim();

    if (text === "x" || text === "f(x)") {
      node.style.setProperty("fill", colors.text, "important");

      node.style.setProperty("font-size", "14px", "important");

      node.style.setProperty("font-family", "inherit", "important");
    }
  });
}

function styleGraph(svg: SVGSVGElement, colors: ThemeColors): void {
  svg.style.background = colors.background;

  /*
   * Grid.
   *
   * The grid lines corresponding to
   * x = 0 and y = 0 are slightly
   * stronger than the normal grid.
   */
  svg.querySelectorAll(".tick").forEach((tick) => {
    const tickElement = tick as SVGGElement;

    const text = tickElement.querySelector("text")?.textContent?.trim();

    const line = tickElement.querySelector("line") as SVGLineElement | null;

    if (!line) {
      return;
    }

    const isZero = text === "0";

    line.style.setProperty(
      "stroke",
      isZero ? colors.zeroGrid : colors.grid,
      "important",
    );

    line.style.setProperty(
      "stroke-width",
      isZero ? "1.5px" : "1px",
      "important",
    );

    line.style.setProperty("opacity", "1", "important");
  });

  /*
   * Axis paths.
   */
  svg.querySelectorAll(".x.axis path, .y.axis path").forEach((path) => {
    const element = path as SVGPathElement;

    element.style.setProperty("stroke", colors.axis, "important");

    element.style.setProperty("stroke-width", "1px", "important");

    element.style.setProperty("stroke-dasharray", "none", "important");

    element.style.setProperty("fill", "none", "important");
  });

  /*
   * Tick text.
   */
  svg.querySelectorAll(".tick text").forEach((text) => {
    const element = text as SVGTextElement;

    element.style.setProperty("fill", colors.text, "important");

    element.style.setProperty("font-size", "12px", "important");

    element.style.setProperty("font-family", "inherit", "important");
  });

  /*
   * Hide x = -3 and x = 3,
   * as in FunctionGraph.
   */
  svg.querySelectorAll(".x.axis .tick text").forEach((text) => {
    const element = text as SVGTextElement;

    const value = element.textContent?.trim();

    if (value === "-3" || value === "3") {
      element.style.display = "none";
    }
  });

  /*
   * Function curve.
   */
  svg.querySelectorAll(".graph path").forEach((path) => {
    const element = path as SVGPathElement;

    element.style.setProperty("stroke", colors.curve, "important");

    element.style.setProperty("stroke-width", "3.5px", "important");

    element.style.setProperty("stroke-linecap", "round", "important");

    element.style.setProperty("stroke-linejoin", "round", "important");

    element.style.setProperty("stroke-dasharray", "none", "important");

    element.style.setProperty("fill", "none", "important");
  });

  /*
   * Root and y-intercept points.
   */
  svg.querySelectorAll(".root-point").forEach((element) => {
    const circle = element as SVGCircleElement;

    circle.style.setProperty("stroke", colors.background, "important");

    circle.style.setProperty("stroke-width", "2px", "important");
  });

  svg.querySelectorAll(".y-intercept-point").forEach((element) => {
    const circle = element as SVGCircleElement;

    circle.style.setProperty("stroke", colors.background, "important");

    circle.style.setProperty("stroke-width", "2px", "important");
  });

  styleAxisLabels(svg, colors);
}

export default function PolynomialGraph({
  expression,
  min = -10,
  max = 10,
}: PolynomialGraphProps) {
  const { t } = useI18n();
  const { resolvedTheme } = useTheme();

  const text = t.mathematics.polynomialGraph;

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

    let cancelled = false;

    const renderGraph = async () => {
      container.innerHTML = "";

      let functionPlot: FunctionPlot | null = null;

      try {
        const module = await import("function-plot");

        if (cancelled) {
          return;
        }

        functionPlot = resolveFunctionPlot(module);
      } catch (error) {
        console.error("Could not load function-plot:", error);

        return;
      }

      if (!functionPlot || cancelled) {
        console.error("function-plot did not resolve to a function.");

        return;
      }

      const colors = isDarkMode ? COLORS.dark : COLORS.light;

      const width = Math.max(container.clientWidth, 300);

      const height = 500;

      const [yMin, yMax] = getYDomain(evaluate, safeMin, safeMax);

      /*
       * Function curve.
       */
      const data: Record<string, unknown>[] = [
        {
          fn: (scope: { x: number }) => {
            const x = scope.x;

            if (typeof x !== "number") {
              return Number.NaN;
            }

            const y = evaluate(x);

            if (!Number.isFinite(y) || Math.abs(y) > MAX_GRAPH_Y) {
              return Number.NaN;
            }

            return y;
          },

          fnType: "linear",
          graphType: "polyline",
          sampler: "builtIn",
          nSamples: SAMPLE_COUNT,

          color: colors.curve,

          skipTip: true,
        },
      ];

      /*
       * Root markers.
       */
      const visibleRoots = info.roots.filter(
        (root) => root >= safeMin && root <= safeMax,
      );

      if (visibleRoots.length > 0) {
        data.push({
          points: visibleRoots.map((root) => [root, 0]),

          fnType: "points",
          graphType: "scatter",

          color: colors.root,

          attr: {
            r: 5,
            class: "root-point",
          },

          skipTip: true,
        });
      }

      /*
       * Y-intercept marker.
       */
      if (
        info.yIntercept !== null &&
        info.yIntercept >= yMin &&
        info.yIntercept <= yMax
      ) {
        data.push({
          points: [[0, info.yIntercept]],

          fnType: "points",
          graphType: "scatter",

          color: colors.yIntercept,

          attr: {
            r: 5,
            class: "y-intercept-point",
          },

          skipTip: true,
        });
      }

      try {
        functionPlot({
          target: container,

          width,
          height,

          grid: true,

          xAxis: {
            domain: [safeMin, safeMax],
            label: "x",
            ticks: 9,
          },

          yAxis: {
            domain: [yMin, yMax],
            label: "f(x)",
            ticks: 9,
          },

          /*
           * Graph is informational rather
           * than interactive.
           */
          disableZoom: true,
          resize: false,

          data,

          tip: {
            xLine: false,
            yLine: false,
          },
        });
      } catch (error) {
        console.error("Could not render polynomial graph:", error);

        return;
      }

      if (cancelled) {
        return;
      }

      const svg = container.querySelector("svg") as SVGSVGElement | null;

      if (!svg) {
        return;
      }

      svg.style.pointerEvents = "none";

      svg.style.userSelect = "none";

      svg.style.touchAction = "none";

      container.style.userSelect = "none";

      container.style.touchAction = "none";

      container.style.backgroundColor = colors.background;

      styleGraph(svg, colors);
    };

    void renderGraph();

    return () => {
      cancelled = true;
      container.innerHTML = "";
    };
  }, [evaluate, safeMin, safeMax, info, isDarkMode]);

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
          className="h-125 w-full overflow-hidden"
          role="img"
          aria-label={text.ariaLabel}
        />

        <div className="mt-5 grid gap-3 border-t border-neutral-200 pt-5 dark:border-neutral-800 sm:grid-cols-3">
          <div className="rounded-lg border border-neutral-200 bg-white p-3 dark:border-neutral-800 dark:bg-neutral-950">
            <div className="text-xs text-neutral-500 dark:text-neutral-400">
              {text.degree}
            </div>

            <div className="mt-1 text-lg font-semibold text-neutral-900 dark:text-neutral-100">
              {info.degree ?? "—"}
            </div>
          </div>

          <div className="rounded-lg border border-neutral-200 bg-white p-3 dark:border-neutral-800 dark:bg-neutral-950">
            <div className="text-xs text-neutral-500 dark:text-neutral-400">
              {text.realRoots}
            </div>

            <div className="mt-1 wrap-break-words text-lg font-semibold text-neutral-900 dark:text-neutral-100">
              {info.roots.length > 0
                ? info.roots.map(formatNumber).join(", ")
                : text.none}
            </div>
          </div>

          <div className="rounded-lg border border-neutral-200 bg-white p-3 dark:border-neutral-800 dark:bg-neutral-950">
            <div className="text-xs text-neutral-500 dark:text-neutral-400">
              {text.yIntercept}
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
