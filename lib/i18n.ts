export const locales = ['en', 'zh', 'fr'] as const
export type Locale = (typeof locales)[number]

export const defaultLocale: Locale = 'en'

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale)
}

export interface LocalizedText {
  en: string
  zh: string
  fr: string
}

/** Define a trilingual string inline. */
export function t(en: string, zh: string, fr: string): LocalizedText {
  return { en, zh, fr }
}

/** Resolve a localized string for a locale. */
export function tr(locale: Locale, value: LocalizedText): string {
  return value[locale]
}

/** Full names for the language switcher menu. */
export const localeNames: Record<Locale, string> = {
  en: 'English',
  zh: '中文',
  fr: 'Français',
}

/** Short labels for the language switcher button. */
export const localeShortLabels: Record<Locale, string> = {
  en: 'EN',
  zh: '中文',
  fr: 'FR',
}

/** Value for the <html lang> attribute. */
export const htmlLang: Record<Locale, string> = {
  en: 'en',
  zh: 'zh-CN',
  fr: 'fr-CA',
}

/** BCP47 tags for hreflang alternates / OG locale. */
export const languageTags: Record<Locale, string> = {
  en: 'en-CA',
  zh: 'zh-CN',
  fr: 'fr-CA',
}

/** Strip a leading locale segment from a pathname ('/zh/products' -> '/products'). */
export function stripLocale(pathname: string): string {
  for (const l of locales) {
    if (pathname === `/${l}`) return '/'
    if (pathname.startsWith(`/${l}/`)) return pathname.slice(l.length + 1)
  }
  return pathname
}
