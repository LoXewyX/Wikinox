import type { ComponentChildren } from "preact";

interface CardProps {
  children: ComponentChildren;
  className?: string;
}

interface CardSectionProps {
  children: ComponentChildren;
  className?: string;
}

export function Card({
  children,
  className = "",
}: CardProps) {
  return (
    <div
      className={[
        "rounded-xl border border-neutral-200",
        "bg-neutral-50 text-neutral-900",
        "dark:border-neutral-800",
        "dark:bg-neutral-900 dark:text-neutral-100",
        className,
      ].join(" ")}
    >
      {children}
    </div>
  );
}

export function CardHeader({
  children,
  className = "",
}: CardSectionProps) {
  return (
    <div
      className={[
        "border-b border-neutral-200 px-5 py-4",
        "dark:border-neutral-800",
        className,
      ].join(" ")}
    >
      {children}
    </div>
  );
}

export function CardTitle({
  children,
  className = "",
}: CardSectionProps) {
  return (
    <h3
      className={[
        "font-semibold",
        "text-neutral-900 dark:text-neutral-100",
        className,
      ].join(" ")}
    >
      {children}
    </h3>
  );
}

export function CardDescription({
  children,
  className = "",
}: CardSectionProps) {
  return (
    <p
      className={[
        "mt-1 text-sm",
        "text-neutral-500 dark:text-neutral-400",
        className,
      ].join(" ")}
    >
      {children}
    </p>
  );
}

export function CardContent({
  children,
  className = "",
}: CardSectionProps) {
  return (
    <div
      className={[
        "px-5 py-6",
        className,
      ].join(" ")}
    >
      {children}
    </div>
  );
}

export function CardFooter({
  children,
  className = "",
}: CardSectionProps) {
  return (
    <div
      className={[
        "flex items-center border-t border-neutral-200",
        "px-5 py-4",
        "dark:border-neutral-800",
        className,
      ].join(" ")}
    >
      {children}
    </div>
  );
}
