import type { ComponentChildren } from "preact";
import { createContext } from "preact";
import { useContext, useState } from "preact/hooks";

import { defaultLocale, getTranslations, isLocale, type Locale } from "@/i18n";

const LOCALE_STORAGE_KEY = "mathweb-locale";

function getStoredLocale(): Locale {
  if (typeof window === "undefined") return defaultLocale;

  const storedLocale = window.localStorage.getItem(LOCALE_STORAGE_KEY);

  return storedLocale && isLocale(storedLocale) ? storedLocale : defaultLocale;
}

interface I18nContextValue {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: ReturnType<typeof getTranslations>;
}

const I18nContext = createContext<I18nContextValue | null>(null);

interface I18nProviderProps {
  children: ComponentChildren;
}

export function I18nProvider({ children }: I18nProviderProps) {
  const [locale, setLocaleState] = useState<Locale>(getStoredLocale);

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale);
    window.localStorage.setItem(LOCALE_STORAGE_KEY, newLocale);
  };

  const t = getTranslations(locale);

  return (
    <I18nContext.Provider
      value={{
        locale,
        setLocale,
        t,
      }}
    >
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const context = useContext(I18nContext);

  if (!context) throw new Error("useI18n must be used inside I18nProvider");

  return context;
}
