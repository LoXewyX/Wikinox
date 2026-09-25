import { ArrowLeft } from "lucide-preact";

import Header from "@/components/layout/Header";
import PageContainer from "@/components/layout/PageContainer";
import { useI18n } from "@/providers/I18nProvider";

export default function NotFoundPage() {
  const { t } = useI18n();

  return (
    <div className="min-h-screen bg-white text-neutral-900 dark:bg-neutral-950 dark:text-neutral-100">
      <Header />

      <PageContainer>
        <section className="relative flex min-h-[calc(100vh-4rem)] items-center justify-center overflow-hidden">
          {/* Decorative background */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 flex items-center justify-center"
          >
            <span className="select-none text-[clamp(12rem,30vw,28rem)] font-black leading-none tracking-tighter text-neutral-100 dark:text-neutral-900">
              404
            </span>
          </div>

          <div className="relative z-10 flex max-w-lg flex-col items-center text-center">
            <h1 className="text-3xl font-bold tracking-tight text-neutral-950 sm:text-4xl dark:text-neutral-50">
              {t.errors.notFound}
            </h1>

            <p className="mt-4 max-w-md text-sm leading-6 text-neutral-500 sm:text-base dark:text-neutral-400">
              La página que buscas no existe o puede haber sido movida.
            </p>

            <a
              href="/"
              className={[
                "group mt-8 inline-flex items-center gap-2.5",
                "rounded-lg border px-5 py-2.5",
                "border-neutral-300 bg-white",
                "text-sm font-medium text-neutral-800",
                "shadow-sm",
                "transition-all duration-200",
                "hover:border-neutral-400 hover:bg-neutral-50 hover:text-neutral-950",
                "hover:shadow-md",
                "active:scale-[0.98]",
                "focus-visible:outline-none focus-visible:ring-2",
                "focus-visible:ring-neutral-300 focus-visible:ring-offset-2",
                "dark:border-neutral-700 dark:bg-neutral-900",
                "dark:text-neutral-200",
                "dark:hover:border-neutral-600 dark:hover:bg-neutral-800",
                "dark:hover:text-neutral-50",
                "dark:focus-visible:ring-neutral-700",
                "dark:focus-visible:ring-offset-neutral-950",
              ].join(" ")}
            >
              <ArrowLeft
                size={16}
                strokeWidth={2}
                className="transition-transform duration-200 group-hover:-translate-x-0.5"
              />

              <span>{t.common.home}</span>
            </a>
          </div>
        </section>
      </PageContainer>
    </div>
  );
}
