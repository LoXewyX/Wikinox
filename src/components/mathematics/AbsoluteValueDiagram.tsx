import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { useI18n } from "@/providers/I18nProvider";

export default function AbsoluteValueDiagram() {
  const { t } = useI18n();
  const text = t.mathematics.absoluteValue;

  return (
    <Card className="my-8 overflow-hidden">
      <CardHeader>
        <CardTitle>{text.title}</CardTitle>
      </CardHeader>

      <CardContent className="p-5">
        <svg
          viewBox="0 0 600 140"
          className="block w-full"
          role="img"
          aria-label={text.ariaLabel}
        >
          <line
            x1="60"
            y1="60"
            x2="540"
            y2="60"
            stroke="#737373"
            strokeWidth="2"
            className="dark:stroke-neutral-500"
          />
          <polygon
            points="540,60 530,55 530,65"
            fill="#737373"
            className="dark:fill-neutral-500"
          />
          <line
            x1="180"
            y1="48"
            x2="180"
            y2="72"
            stroke="#737373"
            strokeWidth="2"
            className="dark:stroke-neutral-500"
          />
          <line
            x1="300"
            y1="45"
            x2="300"
            y2="75"
            stroke="#171717"
            strokeWidth="3"
            className="dark:stroke-neutral-100"
          />
          <line
            x1="420"
            y1="48"
            x2="420"
            y2="72"
            stroke="#737373"
            strokeWidth="2"
            className="dark:stroke-neutral-500"
          />
          <circle
            cx="180"
            cy="60"
            r="6"
            fill="white"
            stroke="#171717"
            strokeWidth="2"
            className="dark:fill-neutral-950 dark:stroke-neutral-100"
          />
          <circle
            cx="300"
            cy="60"
            r="6"
            fill="#171717"
            stroke="#171717"
            strokeWidth="2"
            className="dark:fill-neutral-100 dark:stroke-neutral-100"
          />
          <circle
            cx="420"
            cy="60"
            r="6"
            fill="white"
            stroke="#171717"
            strokeWidth="2"
            className="dark:fill-neutral-950 dark:stroke-neutral-100"
          />
          <line
            x1="180"
            y1="95"
            x2="300"
            y2="95"
            stroke="#404040"
            strokeWidth="2"
            className="dark:stroke-neutral-400"
          />
          <line
            x1="300"
            y1="95"
            x2="420"
            y2="95"
            stroke="#404040"
            strokeWidth="2"
            className="dark:stroke-neutral-400"
          />
          <text
            x="180"
            y="115"
            textAnchor="middle"
            fill="#404040"
            fontSize="14"
            className="dark:fill-neutral-300"
          >
            −5
          </text>
          <text
            x="300"
            y="115"
            textAnchor="middle"
            fill="#404040"
            fontSize="14"
            className="dark:fill-neutral-300"
          >
            0
          </text>
          <text
            x="420"
            y="115"
            textAnchor="middle"
            fill="#404040"
            fontSize="14"
            className="dark:fill-neutral-300"
          >
            5
          </text>
          <text
            x="240"
            y="90"
            textAnchor="middle"
            fill="#525252"
            fontSize="12"
            className="dark:fill-neutral-400"
          >
            5 {text.units}
          </text>
          <text
            x="360"
            y="90"
            textAnchor="middle"
            fill="#525252"
            fontSize="12"
            className="dark:fill-neutral-400"
          >
            5 {text.units}
          </text>
        </svg>
        <p className="mt-4 text-center text-sm text-neutral-600 dark:text-neutral-400">
          {text.description}
        </p>
      </CardContent>
    </Card>
  );
}
