import type { MetadataRoute } from 'next'
import { locales, languageTags } from '@/lib/i18n'
import { SITE } from '@/lib/site'
import { PRODUCT_SLUGS } from '@/lib/products'

const PATHS = [
  '',
  '/products',
  ...PRODUCT_SLUGS.map((slug) => `/products/${slug}`),
  '/configure',
  '/assembly',
  '/engineering-compliance',
  '/suppliers',
  '/clients',
  '/about',
  '/contact',
]

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = []

  for (const path of PATHS) {
    const languages: Record<string, string> = {
      'x-default': `${SITE.url}/en${path}`,
    }
    for (const l of locales) {
      languages[languageTags[l]] = `${SITE.url}/${l}${path}`
    }

    for (const l of locales) {
      entries.push({
        url: `${SITE.url}/${l}${path}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: path === '' ? 1 : 0.7,
        alternates: { languages },
      })
    }
  }

  return entries
}
