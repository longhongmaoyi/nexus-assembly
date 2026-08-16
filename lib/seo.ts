export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || 'https://www.nexusassembly.ca').replace(/\/+$/, '')
export const SITE_NAME = 'NEXUS CANADA ASSEMBLY CENTRE'
export const DEFAULT_SOCIAL_IMAGE = '/images/hero.png'

export const languageTags: Record<string, string> = {
  en: 'en-CA',
  zh: 'zh-CN',
  fr: 'fr-CA',
}

export function localePath(locale: string, slug?: string) {
  return `/${locale}${slug ? `/${slug}` : ''}`
}

export function absoluteUrl(locale: string, slug?: string) {
  return `${SITE_URL}${localePath(locale, slug)}`
}
