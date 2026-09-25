import { ChevronDown, Moon, Sun } from "lucide-preact";
import { useLocation } from "preact-iso";
import { useState } from "preact/hooks";

import { localeNames, locales } from "@/i18n";
import { useI18n } from "@/providers/I18nProvider";
import { useTheme } from "@/providers/ThemeProvider";

export default function Header() {
  const { locale, setLocale } = useI18n();
  const { route } = useLocation();
  const { theme, setTheme } = useTheme();

  const [languageOpen, setLanguageOpen] = useState(false);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 border-b border-neutral-200 bg-white/90 backdrop-blur-xl dark:border-neutral-800 dark:bg-neutral-950/90">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <a
            href="/Wikinox"
            onClick={(event) => {
              event.preventDefault();
              route("/Wikinox");
            }}
            className="text-lg font-semibold tracking-tight text-neutral-900 transition-opacity hover:opacity-70 dark:text-neutral-100"
          >
            Wikinox
          </a>

          <div className="flex items-center gap-1">
            {/* Tema */}
            <button
              type="button"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              aria-label="Cambiar tema"
              className={[
                "relative inline-flex size-9 items-center justify-center",
                "rounded-md text-neutral-500",
                "transition-colors",
                "hover:bg-neutral-100 hover:text-neutral-900",
                "focus-visible:outline-none focus-visible:ring-2",
                "focus-visible:ring-neutral-300",
                "dark:text-neutral-400",
                "dark:hover:bg-neutral-800 dark:hover:text-neutral-100",
                "dark:focus-visible:ring-neutral-700",
              ].join(" ")}
            >
              <Sun className="size-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute size-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />

              <span className="sr-only">Cambiar tema</span>
            </button>

            {/* Idioma */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setLanguageOpen((open) => !open)}
                aria-haspopup="menu"
                aria-expanded={languageOpen}
                className={[
                  "inline-flex h-9 items-center gap-1.5 rounded-md px-2.5",
                  "text-xs font-medium uppercase tracking-wide",
                  "text-neutral-500 transition-colors",
                  "hover:bg-neutral-100 hover:text-neutral-900",
                  "focus-visible:outline-none focus-visible:ring-2",
                  "focus-visible:ring-neutral-300",
                  "dark:text-neutral-400",
                  "dark:hover:bg-neutral-800 dark:hover:text-neutral-100",
                  "dark:focus-visible:ring-neutral-700",
                ].join(" ")}
              >
                {locale}

                <ChevronDown
                  size={14}
                  strokeWidth={1.8}
                  className={[
                    "transition-transform duration-150",
                    languageOpen ? "rotate-180" : "",
                  ].join(" ")}
                />
              </button>

              {languageOpen && (
                <div
                  role="menu"
                  className={[
                    "absolute right-0 top-full z-50 mt-2 w-40",
                    "overflow-hidden rounded-md border p-1 shadow-md",
                    "border-neutral-200 bg-white",
                    "dark:border-neutral-700 dark:bg-neutral-950",
                  ].join(" ")}
                >
                  {locales.map((item) => {
                    const active = item === locale;

                    return (
                      <button
                        key={item}
                        type="button"
                        role="menuitem"
                        onClick={() => {
                          setLocale(item);
                          setLanguageOpen(false);
                        }}
                        className={[
                          "flex w-full items-center rounded-sm px-3 py-2",
                          "text-sm transition-colors",
                          active
                            ? [
                                "bg-neutral-100 text-neutral-900",
                                "dark:bg-neutral-800 dark:text-neutral-100",
                              ].join(" ")
                            : [
                                "text-neutral-600 hover:bg-neutral-50",
                                "hover:text-neutral-900",
                                "dark:text-neutral-400",
                                "dark:hover:bg-neutral-900",
                                "dark:hover:text-neutral-100",
                              ].join(" "),
                        ].join(" ")}
                      >
                        <span>{localeNames[item]}</span>

                        <span className="ml-auto text-[10px] uppercase tracking-wide text-neutral-400 dark:text-neutral-500">
                          {item}
                        </span>
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      <div className="h-16" aria-hidden="true" />
    </>
  );
}
