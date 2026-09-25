import { ArrowRight, Check, Search, SlidersHorizontal, X } from "lucide-preact";
import { useMemo, useState } from "preact/hooks";

import Header from "@/components/layout/Header";
import PageContainer from "@/components/layout/PageContainer";
import { topics, type Category, type Difficulty } from "@/data/topics";
import { useI18n } from "@/providers/I18nProvider";

type FilterDifficulty = "all" | Difficulty;
type FilterCategory = "all" | Category;

export default function HomePage() {
  const { t } = useI18n();

  const [search, setSearch] = useState("");
  const [difficulty, setDifficulty] = useState<FilterDifficulty>("all");
  const [category, setCategory] = useState<FilterCategory>("all");
  const [filtersOpen, setFiltersOpen] = useState(false);

  const filteredTopics = useMemo(() => {
    const normalizedSearch = search.trim().toLowerCase();

    return topics.filter((topic) => {
      const title = t.topics.topic[topic.id].toLowerCase();

      const matchesSearch =
        normalizedSearch.length === 0 || title.includes(normalizedSearch);

      const matchesDifficulty =
        difficulty === "all" || topic.difficulty === difficulty;

      const matchesCategory = category === "all" || topic.category === category;

      return matchesSearch && matchesDifficulty && matchesCategory;
    });
  }, [search, difficulty, category, t]);

  const hasFilters =
    search.trim().length > 0 || difficulty !== "all" || category !== "all";

  const hasAdvancedFilters = difficulty !== "all" || category !== "all";

  const clearFilters = () => {
    setSearch("");
    setDifficulty("all");
    setCategory("all");
  };

  const categories: Category[] = [
    "foundations",
    "algebra",
    "linear-algebra",
    "functions",
    "calculus",
    "engineering",
  ];

  const difficulties: Difficulty[] = ["basic", "intermediate", "advanced"];

  return (
    <div className="min-h-screen bg-white text-neutral-900 dark:bg-neutral-950 dark:text-neutral-100">
      <Header />

      <PageContainer>
        {/* Hero */}
        <section className="pt-16 sm:pt-20 lg:pt-24">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-semibold tracking-tight text-neutral-950 dark:text-neutral-50 sm:text-5xl lg:text-6xl">
              {t.home.title}
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-7 text-neutral-500 dark:text-neutral-400 sm:text-lg sm:leading-8">
              {t.home.description}
            </p>
          </div>

          {/* Search */}
          <div className="mt-10 max-w-3xl">
            <div className="flex h-12 items-center gap-3 border-b border-neutral-300 transition-colors focus-within:border-neutral-900 dark:border-neutral-700 dark:focus-within:border-neutral-100">
              <Search
                size={18}
                strokeWidth={1.8}
                className="shrink-0 text-neutral-400 dark:text-neutral-500"
              />

              <input
                type="search"
                value={search}
                onInput={(event) => setSearch(event.currentTarget.value)}
                placeholder={t.home.searchPlaceholder}
                className="min-w-0 flex-1 bg-transparent text-sm text-neutral-900 outline-none placeholder:text-neutral-400 dark:text-neutral-100 dark:placeholder:text-neutral-500"
              />

              {search && (
                <button
                  type="button"
                  onClick={() => setSearch("")}
                  aria-label={t.home.clearSearch}
                  className="rounded-md p-1 text-neutral-400 transition-colors hover:text-neutral-900 dark:text-neutral-500 dark:hover:text-neutral-100"
                >
                  <X size={15} />
                </button>
              )}
            </div>

            {/* Filter toggle */}
            <div className="mt-4 flex items-center justify-between">
              <button
                type="button"
                onClick={() => setFiltersOpen((open) => !open)}
                aria-expanded={filtersOpen}
                className={[
                  "inline-flex items-center gap-2",
                  "text-xs font-medium",
                  "text-neutral-500",
                  "transition-colors",
                  "hover:text-neutral-900",
                  "dark:text-neutral-400",
                  "dark:hover:text-neutral-100",
                ].join(" ")}
              >
                <SlidersHorizontal size={14} strokeWidth={1.8} />

                <span>{t.home.filters.category}</span>

                {hasAdvancedFilters && (
                  <span className="flex h-4 min-w-4 items-center justify-center rounded-full bg-neutral-900 px-1 text-[10px] font-semibold text-white dark:bg-neutral-100 dark:text-neutral-900">
                    {(difficulty !== "all" ? 1 : 0) +
                      (category !== "all" ? 1 : 0)}
                  </span>
                )}
              </button>

              {hasFilters && (
                <button
                  type="button"
                  onClick={clearFilters}
                  className="text-xs font-medium text-neutral-400 transition-colors hover:text-neutral-900 dark:text-neutral-500 dark:hover:text-neutral-100"
                >
                  {t.home.clearFilters}
                </button>
              )}
            </div>
          </div>
        </section>

        {/* Filters */}
        {filtersOpen && (
          <section className="border-y border-neutral-200 py-5 dark:border-neutral-800">
            <div className="grid gap-5 sm:grid-cols-2">
              {/* Categories */}
              <div>
                <div className="mb-2 text-[11px] font-medium uppercase tracking-wider text-neutral-400 dark:text-neutral-500">
                  {t.home.filters.category}
                </div>

                <div className="flex flex-wrap gap-1.5">
                  <FilterButton
                    active={category === "all"}
                    onClick={() => setCategory("all")}
                  >
                    {t.home.filters.all}
                  </FilterButton>

                  {categories.map((item) => (
                    <FilterButton
                      key={item}
                      active={category === item}
                      onClick={() => setCategory(item)}
                    >
                      {t.topics.categories[item]}
                    </FilterButton>
                  ))}
                </div>
              </div>

              {/* Difficulty */}
              <div>
                <div className="mb-2 text-[11px] font-medium uppercase tracking-wider text-neutral-400 dark:text-neutral-500">
                  {t.home.filters.difficulty}
                </div>

                <div className="flex flex-wrap gap-1.5">
                  <FilterButton
                    active={difficulty === "all"}
                    onClick={() => setDifficulty("all")}
                  >
                    {t.home.filters.all}
                  </FilterButton>

                  {difficulties.map((item) => (
                    <FilterButton
                      key={item}
                      active={difficulty === item}
                      onClick={() => setDifficulty(item)}
                    >
                      {t.topics.difficulty[item]}
                    </FilterButton>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Results */}
        <section className="pb-16 pt-8 sm:pb-20">
          <div className="mb-5 flex min-h-8 items-center justify-between gap-4">
            <div className="flex items-center gap-2.5">
              <h2 className="text-lg font-semibold tracking-tight text-neutral-950 dark:text-neutral-100">
                {t.home.topics}
              </h2>

              <span className="text-xs tabular-nums text-neutral-400 dark:text-neutral-500">
                {filteredTopics.length}
              </span>
            </div>
          </div>

          {filteredTopics.length > 0 ? (
            <div className="divide-y divide-neutral-200 border-y border-neutral-200 dark:divide-neutral-800 dark:border-neutral-800">
              {filteredTopics.map((topic, index) => (
                <a
                  key={topic.id}
                  href={`/Wikinox/topics/${topic.id}`}
                  className={[
                    "group flex items-center gap-4",
                    "min-h-20 py-4 sm:py-5",
                    "transition-colors",
                    "hover:bg-neutral-50",
                    "dark:hover:bg-neutral-900",
                    "focus-visible:outline-none",
                    "focus-visible:ring-2",
                    "focus-visible:ring-inset",
                    "focus-visible:ring-neutral-400",
                    "dark:focus-visible:ring-neutral-600",
                  ].join(" ")}
                >
                  <span className="w-7 shrink-0 text-xs tabular-nums text-neutral-300 dark:text-neutral-700">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <h3 className="truncate text-sm font-medium text-neutral-900 dark:text-neutral-100 sm:text-base">
                        {t.topics.topic[topic.id]}
                      </h3>

                      <ArrowRight
                        size={15}
                        strokeWidth={1.7}
                        className={[
                          "shrink-0 text-neutral-300",
                          "transition-all duration-150",
                          "group-hover:translate-x-1",
                          "group-hover:text-neutral-700",
                          "dark:text-neutral-700",
                          "dark:group-hover:text-neutral-300",
                        ].join(" ")}
                      />
                    </div>

                    <div className="mt-1.5 flex min-w-0 items-center gap-2 text-[11px] text-neutral-400 dark:text-neutral-500">
                      <span className="truncate">
                        {t.topics.categories[topic.category]}
                      </span>

                      <span
                        aria-hidden="true"
                        className="text-neutral-300 dark:text-neutral-700"
                      >
                        ·
                      </span>

                      <span className="shrink-0">
                        {t.topics.difficulty[topic.difficulty]}
                      </span>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          ) : (
            <div className="border-y border-neutral-200 px-6 py-16 text-center dark:border-neutral-800">
              <Search
                size={24}
                strokeWidth={1.5}
                className="mx-auto text-neutral-300 dark:text-neutral-700"
              />

              <h3 className="mt-4 font-medium text-neutral-900 dark:text-neutral-100">
                {t.home.noResults}
              </h3>

              <p className="mt-2 text-sm text-neutral-500 dark:text-neutral-400">
                {t.home.noResultsDescription}
              </p>

              <button
                type="button"
                onClick={clearFilters}
                className="mt-5 text-sm font-medium text-neutral-900 underline underline-offset-4 transition-colors hover:text-neutral-500 dark:text-neutral-100 dark:hover:text-neutral-400"
              >
                {t.home.clearFilters}
              </button>
            </div>
          )}
        </section>
      </PageContainer>
    </div>
  );
}

interface FilterButtonProps {
  active: boolean;
  onClick: () => void;
  children: preact.ComponentChildren;
}

function FilterButton({ active, onClick, children }: FilterButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={[
        "inline-flex items-center gap-1.5",
        "rounded-md border px-2.5 py-1.5",
        "text-xs font-medium",
        "transition-colors",
        active
          ? [
              "border-neutral-900 bg-neutral-900 text-white",
              "dark:border-neutral-100 dark:bg-neutral-100 dark:text-neutral-900",
            ].join(" ")
          : [
              "border-neutral-200 bg-white text-neutral-500",
              "hover:border-neutral-300 hover:text-neutral-900",
              "dark:border-neutral-800 dark:bg-neutral-950 dark:text-neutral-400",
              "dark:hover:border-neutral-700 dark:hover:text-neutral-100",
            ].join(" "),
      ].join(" ")}
    >
      {active && <Check size={12} strokeWidth={2} />}

      {children}
    </button>
  );
}
