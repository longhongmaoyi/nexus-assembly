import type { Metadata } from 'next'
import { HomePage } from '@/components/home/home-page'
import { HOME } from '@/lib/content'
import { SITE } from '@/lib/site'
import { defaultLocale, isLocale, tr } from '@/lib/i18n'
import { languageAlternates } from '@/lib/seo'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const loc = isLocale(locale) ? locale : defaultLocale
  return {
    title: { absolute: `${SITE.name} | ${tr(loc, SITE.tagline)}` },
    description: tr(loc, SITE.description),
    alternates: {
      canonical: `/${loc}`,
      languages: languageAlternates('/'),
    },
  }
}

export default async function LocaleHomePage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  return <HomePage locale={isLocale(locale) ? locale : defaultLocale} />
}
