import ReactMarkdown from "react-markdown";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";

import type { TocItem } from "@/lib/markdown";
import { useI18n } from "@/providers/I18nProvider";

interface TableOfContentsProps {
  items: TocItem[];
}

export default function TableOfContents({ items }: TableOfContentsProps) {
  const { t } = useI18n();

  if (items.length === 0) return null;

  return (
    <aside className="hidden xl:block">
      <nav
        aria-label={t.common.content}
        className="sticky top-24 max-h-[calc(100vh-7rem)] overflow-y-auto"
      >
        <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
          {t.common.content}
        </p>

        <div className="border-l border-neutral-200 dark:border-neutral-800">
          {items.map((item) => {
            const levelClass =
              item.level === 1
                ? [
                    "pl-4",
                    "font-semibold",
                    "text-neutral-900",
                    "dark:text-neutral-100",
                  ].join(" ")
                : item.level === 2
                  ? ["pl-4", "text-neutral-600", "dark:text-neutral-400"].join(
                      " ",
                    )
                  : [
                      "pl-8",
                      "text-xs",
                      "text-neutral-500",
                      "dark:text-neutral-500",
                    ].join(" ");

            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={[
                  "group relative block border-l-2 border-transparent",
                  "-ml-px py-1.5 pr-3",
                  "transition-colors duration-150",
                  "hover:border-neutral-400",
                  "hover:text-neutral-900",
                  "dark:hover:border-neutral-500",
                  "dark:hover:text-neutral-100",
                  "focus-visible:outline-none",
                  "focus-visible:border-neutral-500",
                  "dark:focus-visible:border-neutral-400",
                  levelClass,
                ].join(" ")}
              >
                <span className="block transition-colors">
                  <ReactMarkdown
                    remarkPlugins={[remarkMath]}
                    rehypePlugins={[rehypeKatex]}
                    components={{
                      p: ({ children }) => <>{children}</>,
                    }}
                  >
                    {item.title}
                  </ReactMarkdown>
                </span>
              </a>
            );
          })}
        </div>
      </nav>
    </aside>
  );
}
