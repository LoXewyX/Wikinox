import { useEffect, useMemo, useRef, useState } from "preact/hooks";
import { Parser } from "expr-eval";
import { ChevronDown, ChevronUp, Table2 } from "lucide-preact";
import { useI18n } from "@/providers/I18nProvider";
import { useTheme } from "@/providers/ThemeProvider";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";

interface FunctionGraphProps {
  expression: string;
  min?: number | string;
  max?: number | string;
}

interface ThemeColors {
  axis: string;
  grid: string;
  zeroGrid: string;
  text: string;
  curve: string;
  point: string;
  background: string;
}

interface TablePoint {
  x: number;
  y: number;
  operation: string;
}

interface TableData {
  points: TablePoint[];
}

type FunctionPlot = (options: Record<string, unknown>) => unknown;

const SAMPLE_COUNT = 100;
const TABLE_POINTS = 5;
const MAX_SAMPLE_Y = 1e6;

const parser = new Parser();

const COLORS = {
  light: {
    axis: "#737373",
    grid: "#e5e5e5",
    zeroGrid: "#bdbdbd",
    text: "#171717",
    curve: "#171717",
    point: "#171717",
    background: "#fafafa",
  },
  dark: {
    axis: "#a3a3a3",
    grid: "#262626",
    zeroGrid: "#525252",
    text: "#f5f5f5",
    curve: "#f5f5f5",
    point: "#f5f5f5",
    background: "#171717",
  },
};

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

function parseDomain(
  value: number | string | undefined,
  fallback: number,
): number {
  const parsed = Number(value);

  return Number.isFinite(parsed) ? parsed : fallback;
}

function evaluateExpression(expression: string, x: number): number {
  try {
    const parsed = parser.parse(expression);
    const result = parsed.evaluate({ x });

    if (typeof result !== "number") {
      return Number.NaN;
    }

    return Number.isFinite(result) ? result : Number.NaN;
  } catch {
    return Number.NaN;
  }
}

function getFunctionYDomain(
  expression: string,
  min: number,
  max: number,
): [number, number] {
  const values: number[] = [];

  for (let i = 0; i <= SAMPLE_COUNT; i++) {
    const x = min + ((max - min) * i) / SAMPLE_COUNT;

    const y = evaluateExpression(expression, x);

    if (Number.isFinite(y) && Math.abs(y) <= MAX_SAMPLE_Y) {
      values.push(y);
    }
  }

  if (values.length === 0) {
    return [-10, 10];
  }

  const minY = Math.min(...values);
  const maxY = Math.max(...values);

  if (minY === maxY) {
    const padding = Math.max(Math.abs(minY) * 0.2, 1);

    return [
      Math.max(-MAX_SAMPLE_Y, minY - padding),
      Math.min(MAX_SAMPLE_Y, maxY + padding),
    ];
  }

  const padding = Math.max((maxY - minY) * 0.1, 1);

  let yMin = Math.max(-MAX_SAMPLE_Y, minY - padding);

  let yMax = Math.min(MAX_SAMPLE_Y, maxY + padding);

  if (yMin > 0) {
    yMin = 0;
  }

  if (yMax < 0) {
    yMax = 0;
  }

  return [yMin, yMax];
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

function formatOperation(expression: string, x: number): string {
  return expression.replace(
    /(?<![A-Za-z0-9_])x(?![A-Za-z0-9_])/g,
    `(${formatNumber(x)})`,
  );
}

function styleFunctionCurve(svg: SVGSVGElement, colors: ThemeColors) {
  svg.querySelectorAll(".graph path").forEach((path) => {
    const element = path as SVGPathElement;

    element.style.setProperty("stroke", colors.curve, "important");

    element.style.setProperty("fill", "none", "important");

    element.style.setProperty("stroke-width", "2px", "important");
  });
}

function styleSamplePoints(svg: SVGSVGElement, colors: ThemeColors) {
  svg.querySelectorAll("circle").forEach((circle) => {
    const element = circle as SVGCircleElement;

    element.setAttribute("r", "4.5");

    element.style.setProperty("fill", colors.point, "important");

    element.style.setProperty("stroke", colors.background, "important");

    element.style.setProperty("stroke-width", "2px", "important");

    element.style.setProperty("paint-order", "stroke fill", "important");
  });
}

function styleAxisLabels(svg: SVGSVGElement, colors: ThemeColors) {
  svg.querySelectorAll("text").forEach((text) => {
    const element = text as SVGTextElement;

    element.style.setProperty("fill", colors.text, "important");
  });
}

function styleGraph(svg: SVGSVGElement, colors: ThemeColors) {
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

  svg.querySelectorAll(".x.axis path, .y.axis path").forEach((path) => {
    const element = path as SVGPathElement;

    element.style.setProperty("stroke", colors.axis, "important");

    element.style.setProperty("fill", "none", "important");
  });
}

export default function FunctionGraph({
  expression,
  min = -3,
  max = 3,
}: FunctionGraphProps) {
  const { t } = useI18n();
  const { resolvedTheme } = useTheme();

  const boardRef = useRef<HTMLDivElement>(null);

  const [showTable, setShowTable] = useState(false);

  const safeMin = useMemo(() => parseDomain(min, -3), [min]);

  const safeMax = useMemo(() => parseDomain(max, 3), [max]);

  const tableData = useMemo<TableData>(() => {
    const points: TablePoint[] = [];

    if (
      !Number.isFinite(safeMin) ||
      !Number.isFinite(safeMax) ||
      safeMin >= safeMax
    ) {
      return { points };
    }

    for (let i = 0; i < TABLE_POINTS; i++) {
      const ratio = i / (TABLE_POINTS - 1);

      const x = safeMin + (safeMax - safeMin) * ratio;

      const y = evaluateExpression(expression, x);

      if (!Number.isFinite(y)) {
        continue;
      }

      points.push({
        x,
        y,
        operation: formatOperation(expression, x),
      });
    }

    return { points };
  }, [expression, safeMin, safeMax]);

  useEffect(() => {
    let cancelled = false;

    const renderGraph = async () => {
      const container = boardRef.current;

      if (
        !container ||
        !Number.isFinite(safeMin) ||
        !Number.isFinite(safeMax) ||
        safeMin >= safeMax
      ) {
        return;
      }

      const colors = resolvedTheme === "dark" ? COLORS.dark : COLORS.light;

      container.innerHTML = "";

      const module = await import("function-plot");

      if (cancelled) {
        return;
      }

      const functionPlot = resolveFunctionPlot(module);

      if (!functionPlot) {
        return;
      }

      const width = Math.max(container.clientWidth, 300);

      const height = 500;

      const [yMin, yMax] = getFunctionYDomain(expression, safeMin, safeMax);

      const data: Record<string, unknown>[] = [
        {
          fn: (scope: { x?: number }) => {
            const x = scope.x;

            if (typeof x !== "number") {
              return Number.NaN;
            }

            const y = evaluateExpression(expression, x);

            if (!Number.isFinite(y) || Math.abs(y) > MAX_SAMPLE_Y) {
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

      if (showTable && tableData.points.length > 0) {
        data.push({
          points: tableData.points.map(({ x, y }) => [x, y]),

          fnType: "points",
          graphType: "scatter",

          color: colors.point,

          attr: {
            r: 4.5,
          },

          skipTip: true,
        });
      }

      functionPlot({
        target: container,

        width,
        height,

        grid: true,

        xAxis: {
          domain: [safeMin, safeMax],
          label: "x",
        },

        yAxis: {
          domain: [yMin, yMax],
          label: "f(x)",
        },

        disableZoom: true,

        data,

        tip: {
          xLine: false,
          yLine: false,
        },
      });

      if (cancelled) {
        return;
      }

      const svg = container.querySelector("svg") as SVGSVGElement | null;

      if (!svg) {
        return;
      }

      styleGraph(svg, colors);

      styleFunctionCurve(svg, colors);

      styleSamplePoints(svg, colors);

      styleAxisLabels(svg, colors);

      svg.querySelectorAll(".x.axis .tick text").forEach((text) => {
        const value = text.textContent?.trim();

        if (value === "-3" || value === "3") {
          (text as SVGTextElement).style.setProperty(
            "display",
            "none",
            "important",
          );
        }
      });
    };

    renderGraph();

    return () => {
      cancelled = true;

      if (boardRef.current) {
        boardRef.current.innerHTML = "";
      }
    };
  }, [expression, safeMin, safeMax, resolvedTheme, tableData, showTable]);

  return (
    <Card className="my-8 overflow-hidden">
      <CardHeader>
        <div className="flex items-center justify-between gap-4">
          <CardTitle>
            <span className="font-mono text-base font-medium">
              f(x) = {expression}
            </span>
          </CardTitle>

          <button
            type="button"
            onClick={() => setShowTable((value) => !value)}
            aria-expanded={showTable}
            className={[
              "group flex shrink-0 items-center gap-2",
              "rounded-lg border px-3 py-2",
              "text-sm font-medium",
              "border-neutral-200 bg-neutral-50",
              "text-neutral-700",
              "hover:border-neutral-300 hover:bg-neutral-100",
              "dark:border-neutral-800 dark:bg-neutral-950",
              "dark:text-neutral-200",
              "dark:hover:border-neutral-700",
              "dark:hover:bg-neutral-900",
              "focus:outline-none",
              "focus-visible:ring-2",
              "focus-visible:ring-neutral-400",
              "dark:focus-visible:ring-neutral-600",
              "transition-colors duration-200",
            ].join(" ")}
          >
            <Table2
              size={16}
              className="text-neutral-500 transition-colors duration-200 group-hover:text-neutral-700 dark:text-neutral-400 dark:group-hover:text-neutral-200"
            />
            {showTable ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </button>
        </div>
      </CardHeader>

      <CardContent>
        <div ref={boardRef} className="h-125 w-full" role="img" />

        <div
          className={[
            "grid transition-[grid-template-rows,opacity]",
            "duration-300 ease-in-out",
            showTable
              ? "grid-rows-[1fr] opacity-100"
              : "grid-rows-[0fr] opacity-0",
          ].join(" ")}
        >
          <div className="min-h-0 overflow-hidden">
            <div className="pt-6">
              <div className="overflow-x-auto rounded-lg border border-neutral-200 dark:border-neutral-800">
                <table className="w-full text-sm">
                  <thead className="border-b border-neutral-200 bg-neutral-100 dark:border-neutral-800 dark:bg-neutral-950">
                    <tr>
                      <th className="px-4 py-3 text-left font-medium">x</th>

                      <th className="px-4 py-3 text-left font-medium">f(x)</th>

                      <th className="px-4 py-3 text-left font-medium">
                        {t.mathematics.functionGraph.operation}
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    {tableData.points.map((point, index) => (
                      <tr
                        key={index}
                        className="border-b border-neutral-100 last:border-0 dark:border-neutral-800"
                      >
                        <td className="px-4 py-3 font-mono">
                          {formatNumber(point.x)}
                        </td>

                        <td className="px-4 py-3 font-mono">
                          {formatNumber(point.y)}
                        </td>

                        <td className="px-4 py-3 font-mono text-neutral-500 dark:text-neutral-400">
                          {point.operation}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
