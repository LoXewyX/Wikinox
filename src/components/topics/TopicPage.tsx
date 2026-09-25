import { ArrowLeft, ArrowRight } from "lucide-preact";

import Header from "@/components/layout/Header";
import PageContainer from "@/components/layout/PageContainer";
import MarkdownRenderer, {
  type MarkdownDirectiveComponents,
} from "@/components/content/MarkdownRenderer";
import TableOfContents from "@/components/content/TableOfContents";
import { extractTableOfContents } from "@/lib/markdown";
import { topics } from "@/data/topics";
import { useI18n } from "@/providers/I18nProvider";

import type { TopicId } from "@/data/topics";

interface TopicPageProps {
  id: TopicId;
  content: string;
  directiveComponents?: MarkdownDirectiveComponents;
}

interface LessonNavigationProps {
  previousTopic: (typeof topics)[number] | null;
  nextTopic: (typeof topics)[number] | null;
}

function LessonNavigation({ previousTopic, nextTopic }: LessonNavigationProps) {
  const { t } = useI18n();

  return (
    <nav
      aria-label={t.common.lessonNavigation}
      className="grid grid-cols-2 gap-4 border-t border-neutral-200 pt-6 dark:border-neutral-800"
    >
      {previousTopic ? (
        <a
          href={`/Wikinox/topics/${previousTopic.id}`}
          className={[
            "group flex min-w-0 items-center gap-3 rounded-lg border",
            "border-neutral-200 px-4 py-3",
            "transition-colors",
            "hover:border-neutral-300 hover:bg-neutral-50",
            "dark:border-neutral-800",
            "dark:hover:border-neutral-700 dark:hover:bg-neutral-900",
          ].join(" ")}
        >
          <ArrowLeft
            size={18}
            strokeWidth={1.8}
            className={[
              "shrink-0 text-neutral-400",
              "transition-transform group-hover:-translate-x-0.5",
              "dark:text-neutral-500",
            ].join(" ")}
          />

          <span className="min-w-0">
            <span className="block text-xs text-neutral-400 dark:text-neutral-500">
              {t.common.previous}
            </span>

            <span className="mt-1 block truncate text-sm font-medium text-neutral-900 dark:text-neutral-100">
              {t.topics.topic[previousTopic.id]}
            </span>
          </span>
        </a>
      ) : (
        <div />
      )}

      {nextTopic ? (
        <a
          href={`/Wikinox/topics/${nextTopic.id}`}
          className={[
            "group flex min-w-0 items-center justify-end gap-3 rounded-lg border",
            "border-neutral-200 px-4 py-3 text-right",
            "transition-colors",
            "hover:border-neutral-300 hover:bg-neutral-50",
            "dark:border-neutral-800",
            "dark:hover:border-neutral-700 dark:hover:bg-neutral-900",
          ].join(" ")}
        >
          <span className="min-w-0">
            <span className="block text-xs text-neutral-400 dark:text-neutral-500">
              {t.common.next}
            </span>

            <span className="mt-1 block truncate text-sm font-medium text-neutral-900 dark:text-neutral-100">
              {t.topics.topic[nextTopic.id]}
            </span>
          </span>

          <ArrowRight
            size={18}
            strokeWidth={1.8}
            className={[
              "shrink-0 text-neutral-400",
              "transition-transform group-hover:translate-x-0.5",
              "dark:text-neutral-500",
            ].join(" ")}
          />
        </a>
      ) : (
        <div />
      )}
    </nav>
  );
}

export default function TopicPage({
  id,
  content,
  directiveComponents = {},
}: TopicPageProps) {
  const tableOfContents = extractTableOfContents(content);

  const currentIndex = topics.findIndex((topic) => topic.id === id);

  const previousTopic = currentIndex > 0 ? topics[currentIndex - 1] : null;

  const nextTopic =
    currentIndex >= 0 && currentIndex < topics.length - 1
      ? topics[currentIndex + 1]
      : null;

  return (
    <div className="min-h-screen bg-white text-neutral-900 dark:bg-neutral-950 dark:text-neutral-100">
      <Header />

      <PageContainer>
        <div className="grid grid-cols-1 gap-10 xl:grid-cols-[16rem_minmax(0,1fr)]">
          <TableOfContents items={tableOfContents} />

          <article className="min-w-0 max-w-4xl">
            <LessonNavigation
              previousTopic={previousTopic}
              nextTopic={nextTopic}
            />

            <div className="mt-8">
              <MarkdownRenderer
                content={content}
                directiveComponents={directiveComponents}
              />
            </div>

            <div className="mt-12">
              <LessonNavigation
                previousTopic={previousTopic}
                nextTopic={nextTopic}
              />
            </div>
          </article>
        </div>
      </PageContainer>
    </div>
  );
}
