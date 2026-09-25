import { Card, CardContent } from "@/components/ui/Card";

interface FractionDiagramProps {
  numerator?: number | string;
  denominator?: number | string;
}

export default function FractionDiagram({
  numerator = 3,
  denominator = 4,
}: FractionDiagramProps) {
  const safeDenominator = Math.max(1, Math.floor(Number(denominator)));

  const safeNumerator = Math.max(0, Math.floor(Number(numerator)));

  const wholeUnits = Math.floor(safeNumerator / safeDenominator);

  const remainder = safeNumerator % safeDenominator;
  const isImproper = safeNumerator > safeDenominator;

  const unitsToRender = isImproper ? wholeUnits + (remainder > 0 ? 1 : 0) : 1;

  const renderUnit = (unitIndex: number) => {
    const isLastUnit = unitIndex === unitsToRender - 1;

    const partsInUnit = safeDenominator;

    const filledParts =
      isImproper && isLastUnit && remainder > 0
        ? remainder
        : isImproper
          ? safeDenominator
          : safeNumerator;

    return (
      <div key={unitIndex} className="w-full max-w-md">
        <div
          className="grid overflow-hidden rounded-lg border border-neutral-300 dark:border-neutral-700"
          style={{
            gridTemplateColumns: `repeat(${partsInUnit}, minmax(0, 1fr))`,
          }}
        >
          {Array.from({ length: partsInUnit }, (_, index) => (
            <div
              key={index}
              className={[
                "h-16 border-r last:border-r-0",
                "border-neutral-300 dark:border-neutral-700",
                index < filledParts
                  ? "bg-neutral-900 dark:bg-neutral-100"
                  : "bg-neutral-100 dark:bg-neutral-800",
              ].join(" ")}
            />
          ))}
        </div>

        {isImproper && (
          <div className="mt-2 text-center text-xs text-neutral-500 dark:text-neutral-500">
            {unitIndex + 1}
          </div>
        )}
      </div>
    );
  };

  return (
    <Card className="my-8 overflow-hidden">
      <CardContent className="p-5">
        <div className="flex flex-col items-center gap-5">
          <div
            className="flex w-full flex-col items-center gap-4"
            role="img"
            aria-label={`${safeNumerator}/${safeDenominator}`}
          >
            {Array.from({ length: unitsToRender }, (_, index) =>
              renderUnit(index),
            )}
          </div>

          <div className="text-center">
            <div className="text-2xl font-semibold">
              {safeNumerator}/{safeDenominator}
            </div>

            {isImproper && remainder > 0 && (
              <p className="mt-2 text-sm text-neutral-500 dark:text-neutral-400">
                {wholeUnits} + {remainder}/{safeDenominator}
              </p>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
