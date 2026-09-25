import { Card, CardContent } from "@/components/ui/Card";

interface NumberLineProps {
  min?: number | string;
  max?: number | string;
  highlight?: number[] | string;
}

export default function NumberLine({
  min = -5,
  max = 5,
  highlight = [],
}: NumberLineProps) {
  const safeMin = Number(min);
  const safeMax = Number(max);

  const safeHighlight =
    typeof highlight === "string"
      ? highlight.split(",").map(Number).filter(Number.isFinite)
      : highlight;

  const values = Array.from(
    {
      length: Math.max(0, Math.floor(safeMax) - Math.floor(safeMin) + 1),
    },
    (_, index) => Math.floor(safeMin) + index,
  );

  const width = values.length * 80 + 40;

  return (
    <Card className="my-8 overflow-hidden">
      <CardContent className="p-5">
        <div className="overflow-x-auto">
          <svg
            viewBox={`0 0 ${width} 100`}
            className="mx-auto min-w-150"
            role="img"
            aria-label="Number line"
          >
            <line
              x1="20"
              y1="45"
              x2={width - 20}
              y2="45"
              stroke="#a3a3a3"
              className="dark:stroke-neutral-600"
              strokeWidth="2"
            />
            <polygon
              points={`${width - 20},45 ${width - 30},40 ${width - 30},50`}
              fill="#a3a3a3"
              className="dark:fill-neutral-600"
            />
            {values.map((value, index) => {
              const x = 20 + index * 80;
              const active = safeHighlight.includes(value);

              return (
                <g key={value}>
                  <line
                    x1={x}
                    y1="35"
                    x2={x}
                    y2="55"
                    stroke={active ? "#171717" : "#737373"}
                    className={
                      active
                        ? "dark:stroke-neutral-100"
                        : "dark:stroke-neutral-500"
                    }
                    strokeWidth={active ? 3 : 2}
                  />
                  <circle
                    cx={x}
                    cy="45"
                    r={active ? 7 : 4}
                    fill={active ? "#171717" : "#737373"}
                    className={
                      active ? "dark:fill-neutral-100" : "dark:fill-neutral-500"
                    }
                  />
                  <text
                    x={x}
                    y="78"
                    textAnchor="middle"
                    fill="#404040"
                    className="dark:fill-neutral-300"
                    fontSize="14"
                  >
                    {value}
                  </text>
                </g>
              );
            })}
          </svg>
        </div>
      </CardContent>
    </Card>
  );
}
