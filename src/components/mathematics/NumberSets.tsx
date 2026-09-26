import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { useI18n } from "@/providers/I18nProvider";

export default function NumberSets() {
  const { t } = useI18n();

  const text = t.mathematics.numberSets;

  return (
    <Card>
      <CardHeader>
        <CardTitle>{text.title}</CardTitle>

        <p className="text-sm text-neutral-500 dark:text-neutral-400">
          {text.description}
        </p>
      </CardHeader>

      <CardContent>
        <div className="flex justify-center overflow-x-auto">
          <svg viewBox="0 0 900 560" className="w-full h-auto">
            <circle
              cx="450"
              cy="290"
              r="255"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            />
            <circle
              cx="360"
              cy="305"
              r="135"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            />
            <circle
              cx="360"
              cy="325"
              r="85"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            />
            <circle
              cx="360"
              cy="345"
              r="42"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            />
            <circle
              cx="613"
              cy="305"
              r="72"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            />
            <text
              x="360"
              y="353"
              textAnchor="middle"
              className="font-[KaTeX\_AMS] fill-neutral-900 text-[24px] font-semibold dark:fill-neutral-100"
            >
              N
            </text>
            <text
              x="360"
              y="280"
              textAnchor="middle"
              className="font-[KaTeX\_AMS] fill-neutral-900 text-[28px] font-semibold dark:fill-neutral-100"
            >
              Z
            </text>
            <text
              x="360"
              y="215"
              textAnchor="middle"
              className="font-[KaTeX\_AMS] fill-neutral-900 text-[32px] font-semibold dark:fill-neutral-100"
            >
              Q
            </text>
            <text
              x="613"
              y="314"
              textAnchor="middle"
              className="font-[KaTeX\_AMS] fill-neutral-900 text-[30px] font-semibold dark:fill-neutral-100"
            >
              I
            </text>
            <text
              x="450"
              y="90"
              textAnchor="middle"
              className="font-[KaTeX\_AMS] fill-neutral-900 text-[36px] font-semibold dark:fill-neutral-100"
            >
              R
            </text>
          </svg>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-5">
          <div className="text-center">
            <div className="font-[KaTeX\_AMS] font-semibold text-neutral-900 dark:text-neutral-100">
              N
            </div>
            <div className="text-sm text-neutral-500 dark:text-neutral-400">
              {text.natural}
            </div>
          </div>

          <div className="text-center">
            <div className="font-[KaTeX\_AMS] font-semibold text-neutral-900 dark:text-neutral-100">
              Z
            </div>
            <div className="text-sm text-neutral-500 dark:text-neutral-400">
              {text.integers}
            </div>
          </div>

          <div className="text-center">
            <div className="font-[KaTeX\_AMS] font-semibold text-neutral-900 dark:text-neutral-100">
              Q
            </div>
            <div className="text-sm text-neutral-500 dark:text-neutral-400">
              {text.rational}
            </div>
          </div>

          <div className="text-center">
            <div className="font-[KaTeX\_AMS] font-semibold text-neutral-900 dark:text-neutral-100">
              I
            </div>
            <div className="text-sm text-neutral-500 dark:text-neutral-400">
              {text.irrational}
            </div>
          </div>

          <div className="text-center">
            <div className="font-[KaTeX\_AMS] font-semibold dark:text-neutral-100">
              R
            </div>
            <div className="text-sm text-neutral-500 dark:text-neutral-400">
              {text.real}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
