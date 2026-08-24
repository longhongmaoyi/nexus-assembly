import { locales, languageTags } from '@/lib/i18n'
import { SITE } from '@/lib/site'

/** Build hreflang alternates for a locale-neutral path, e.g. '/products'. */
export function languageAlternates(path: string): Record<string, string> {
  const languages: Record<string, string> = {
    'x-default': `${SITE.url}/en${path === '/' ? '' : path}`,
  }
  for (const l of locales) {
    languages[languageTags[l]] = `${SITE.url}/${l}${path === '/' ? '' : path}`
  }
  return languages
}
