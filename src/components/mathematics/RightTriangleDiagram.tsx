import { useI18n } from "@/providers/I18nProvider";
interface RightTriangleDiagramProps {
  adjacent?: number | string;
  opposite?: number | string;
  hypotenuse?: number | string;
  angle?: number | string;
  mode?: "pythagoras" | "trigonometry";
  showHypotenuse?: boolean;
}
export default function RightTriangleDiagram({
  adjacent = 4,
  opposite = 3,
  hypotenuse,
  angle,
  mode = "pythagoras",
  showHypotenuse = true,
}: RightTriangleDiagramProps) {
  const { t } = useI18n();
  const a = Number(adjacent);
  const o = Number(opposite);
  const h = hypotenuse !== undefined ? Number(hypotenuse) : Math.hypot(a, o);
  const theta =
    angle !== undefined ? Number(angle) : (Math.atan2(o, a) * 180) / Math.PI;
  const sinTheta = o / h;
  const cosTheta = a / h;
  const tanTheta = o / a;
  const isExactDecimal = (value: number): boolean => {
    if (!Number.isFinite(value)) return false;
    const rounded = Number(value.toFixed(6));
    return Math.abs(value - rounded) < 1e-10;
  };
  const equalitySymbol = (value: number): string =>
    isExactDecimal(value) ? "=" : "≈";
  const formatValue = (value: number, decimals = 4): string => {
    if (!Number.isFinite(value)) return "—";
    if (isExactDecimal(value)) return Number(value.toFixed(6)).toString();
    return value.toFixed(decimals);
  };
  const vertexX = 55;
  const vertexY = 195;
  const maxWidth = 200;
  const maxHeight = 130;
  const scale = Math.min(
    maxWidth / Math.abs(a || 1),
    maxHeight / Math.abs(o || 1),
  );
  const base = Math.abs(a) * scale;
  const height = Math.abs(o) * scale;
  const x1 = vertexX;
  const y1 = vertexY;
  const x2 = vertexX + base;
  const y2 = vertexY;
  const x3 = vertexX + base;
  const y3 = vertexY - height;
  const geometricTheta = Math.atan2(height, base);
  const dx = x3 - x1;
  const dy = y3 - y1;
  const hypotenuseLength = Math.hypot(dx, dy);
  const hypotenuseAngle = (Math.atan2(dy, dx) * 180) / Math.PI;
  const midX = (x1 + x3) / 2;
  const midY = (y1 + y3) / 2;
  const normalX = -dy / hypotenuseLength;
  const normalY = dx / hypotenuseLength;
  const labelOffset = Math.min(17, hypotenuseLength * 0.08);
  const hypotenuseLabelX = midX + normalX * labelOffset;
  const hypotenuseLabelY = midY + normalY * labelOffset;
  const angleRadius = Math.min(42, base * 0.35, height * 0.35);
  const thetaRadians = geometricTheta;
  const arcStartX = x1 + angleRadius;
  const arcStartY = y1;
  const arcEndX = x1 + angleRadius * Math.cos(thetaRadians);
  const arcEndY = y1 - angleRadius * Math.sin(thetaRadians);
  const largeArcFlag = 0;
  const angleArcPath =
    `M ${arcStartX} ${arcStartY} ` +
    `A ${angleRadius} ${angleRadius} 0 ` +
    `${largeArcFlag} 0 ${arcEndX} ${arcEndY}`;
  const labelRadius = angleRadius * 0.62;
  const thetaLabelX = x1 + labelRadius * Math.cos(thetaRadians / 2);
  const thetaLabelY = y1 - labelRadius * Math.sin(thetaRadians / 2);
  const adjacentLabelX = x1 + base / 2;
  const adjacentLabelY = y1 + 23;
  const oppositeLabelX = x2 + 14;
  const oppositeLabelY = y1 - height / 2;
  return (
    <section className="my-8 overflow-hidden rounded-xl border border-neutral-200 bg-neutral-50 text-neutral-900 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-100">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-neutral-200 px-5 py-4 dark:border-neutral-800">
        <h3 className="font-semibold">{t.mathematics.rightTriangle.title}</h3>
        {mode === "trigonometry" && (
          <span className="rounded-md bg-neutral-200 px-2.5 py-1 text-sm font-medium text-neutral-700 dark:bg-neutral-800 dark:text-neutral-300">
            θ {equalitySymbol(theta)} {formatValue(theta, 2)}°
          </span>
        )}
      </div>
      <div className="px-4 py-6 sm:px-5">
        <svg
          viewBox="0 0 340 250"
          className="mx-auto block w-full max-w-md overflow-visible"
          role="img"
          aria-label={t.mathematics.rightTriangle.ariaLabel}
        >
          <polygon
            points={`${x1},${y1} ${x2},${y2} ${x3},${y3}`}
            className="fill-neutral-200 stroke-neutral-600 dark:fill-neutral-800 dark:stroke-neutral-400"
            strokeWidth="3"
            strokeLinejoin="round"
          />
          <path
            d={`
              M ${x2 - 20} ${y2}
              V ${y2 - 20}
              H ${x2}
            `}
            fill="none"
            className="stroke-neutral-500 dark:stroke-neutral-400"
            strokeWidth="2"
          />
          {mode === "trigonometry" && (
            <>
              <path
                d={angleArcPath}
                fill="none"
                className="stroke-neutral-700 dark:stroke-neutral-300"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <text
                x={thetaLabelX}
                y={thetaLabelY}
                textAnchor="middle"
                dominantBaseline="middle"
                fontSize="15"
                fontWeight="600"
                className="fill-neutral-900 dark:fill-neutral-100"
              >
                θ
              </text>
            </>
          )}
          <text
            x={adjacentLabelX}
            y={adjacentLabelY}
            textAnchor="middle"
            fontSize="13"
            className="fill-neutral-700 dark:fill-neutral-300"
          >
            {t.mathematics.rightTriangle.adjacent} = {a}
          </text>
          <text
            x={oppositeLabelX}
            y={oppositeLabelY}
            textAnchor="start"
            dominantBaseline="middle"
            fontSize="13"
            className="fill-neutral-700 dark:fill-neutral-300"
          >
            {t.mathematics.rightTriangle.opposite} = {o}
          </text>
          {showHypotenuse && (
            <g
              transform={`
                translate(
                  ${hypotenuseLabelX}
                  ${hypotenuseLabelY}
                )
                rotate(${hypotenuseAngle})
              `}
            >
              <text
                x="0"
                y="0"
                textAnchor="middle"
                dominantBaseline="middle"
                fontSize="13"
                className="fill-neutral-800 dark:fill-neutral-200"
              >
                {t.mathematics.rightTriangle.hypotenuse} {equalitySymbol(h)}{" "}
                {formatValue(h, 2)}
              </text>
            </g>
          )}
        </svg>
        {mode === "trigonometry" && (
          <div className="mx-auto mt-2 max-w-md border-t border-neutral-200 dark:border-neutral-800">
            <div className="grid gap-3 sm:grid-cols-3">
              <div className="rounded-lg border border-neutral-200 bg-white p-4 dark:border-neutral-800 dark:bg-neutral-950">
                <div className="mb-2 text-sm font-semibold text-neutral-900 dark:text-neutral-100">
                  sin θ
                </div>
                <div className="space-y-1 font-mono text-sm text-neutral-700 dark:text-neutral-300">
                  <div>
                    = {o} / {formatValue(h, 2)}
                  </div>
                  <div>
                    {equalitySymbol(sinTheta)} {formatValue(sinTheta)}
                  </div>
                </div>
              </div>
              <div className="rounded-lg border border-neutral-200 bg-white p-4 dark:border-neutral-800 dark:bg-neutral-950">
                <div className="mb-2 text-sm font-semibold text-neutral-900 dark:text-neutral-100">
                  cos θ
                </div>
                <div className="space-y-1 font-mono text-sm text-neutral-700 dark:text-neutral-300">
                  <div>
                    = {a} / {formatValue(h, 2)}
                  </div>
                  <div>
                    {equalitySymbol(cosTheta)} {formatValue(cosTheta)}
                  </div>
                </div>
              </div>
              <div className="rounded-lg border border-neutral-200 bg-white p-4 dark:border-neutral-800 dark:bg-neutral-950">
                <div className="mb-2 text-sm font-semibold text-neutral-900 dark:text-neutral-100">
                  tan θ
                </div>
                <div className="space-y-1 font-mono text-sm text-neutral-700 dark:text-neutral-300">
                  <div>
                    = {o} / {a}
                  </div>
                  <div>
                    {equalitySymbol(tanTheta)} {formatValue(tanTheta)}
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-3 rounded-lg border border-neutral-200 bg-neutral-100 px-4 py-3 text-sm dark:border-neutral-800 dark:bg-neutral-950">
              <span className="font-semibold text-neutral-900 dark:text-neutral-100">
                θ
              </span>
              <span className="mx-2 text-neutral-500">=</span>
              <span className="font-mono text-neutral-700 dark:text-neutral-300">
                arctan({o} / {a})
              </span>
              <span className="mx-2 text-neutral-500">
                {equalitySymbol(theta)}
              </span>
              <span className="font-semibold text-neutral-900 dark:text-neutral-100">
                {formatValue(theta, 2)}°
              </span>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
