import { en } from "./en";
import { es } from "./es";
import { ca } from "./ca";

export const locales = ["en", "es", "ca"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export const localeNames: Record<Locale, string> = {
  en: "English",
  es: "Español",
  ca: "Català",
};

export const translations = { en, es, ca };

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function getLocale(value: string | undefined): Locale {
  if (value && isLocale(value)) return value;

  return defaultLocale;
}

export function getTranslations(locale: Locale) {
  return translations[locale];
}
