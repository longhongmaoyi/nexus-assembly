import type { Metadata } from 'next'
import { AssemblyHeader } from '@/components/assembly/header'
import { RevealObserver } from '@/components/assembly/reveal-observer'
import { AssemblyHero } from '@/components/assembly/hero'
import { AssemblyStatsBar } from '@/components/assembly/stats-bar'
import { AssemblyProductLine } from '@/components/assembly/product-line'
import { AssemblyIndustriesStrip } from '@/components/assembly/industries-strip'
import { AssemblyWhyChoose } from '@/components/assembly/why-choose'
import { AssemblyProcessBand, AssemblyCtaBand } from '@/components/assembly/process-band'
import { AssemblyNewsletter } from '@/components/assembly/newsletter'
import { AssemblyFooter } from '@/components/assembly/footer'
import { assemblyCopy } from '@/lib/assembly-content'
import type { Locale, LocalizedText } from '@/lib/i18n'
import { SITE_URL } from '@/lib/seo'

type Localized = Record<Locale, string>
const pickLocale = (value: Localized, locale: Locale) => value[locale]

export async function generateMetadata(props: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const params = await props.params
  const locale = params.locale as Locale
  const title = pickLocale(assemblyCopy.hero.title, locale)
  const description = pickLocale(assemblyCopy.hero.subtitle, locale)

  return {
    title,
    description,
    alternates: {
      canonical: `${SITE_URL}/${locale}`,
      languages: {
        'en-CA': `${SITE_URL}/en`,
        'zh-CN': `${SITE_URL}/zh`,
        'fr-CA': `${SITE_URL}/fr`,
        'x-default': `${SITE_URL}/en`,
      },
    },
    openGraph: {
      type: 'website',
      url: `${SITE_URL}/${locale}`,
      siteName: 'NEXUS CANADA ASSEMBLY CENTRE',
      title,
      description,
      locale: locale === 'en' ? 'en-CA' : locale === 'zh' ? 'zh-CN' : 'fr-CA',
      alternateLocale: locale === 'en' ? ['zh-CN', 'fr-CA'] : locale === 'zh' ? ['en-CA', 'fr-CA'] : ['en-CA', 'zh-CN'],
      images: [{ url: '/images/hero.png', alt: title }],
    },
    twitter: { card: 'summary_large_image', title, description, images: ['/images/hero.png'] },
    robots: { index: true, follow: true },
  }
}

export function AssemblyHomePage({ locale }: { locale: Locale }) {
  return (
    <>
      <RevealObserver />
      <AssemblyHeader locale={locale} />
      <main className="font-body text-assembly-ink">
        <AssemblyHero locale={locale} />
        <AssemblyStatsBar locale={locale} />
        <AssemblyProductLine locale={locale} />
        <AssemblyIndustriesStrip locale={locale} />
        <AssemblyWhyChoose locale={locale} />
        <AssemblyProcessBand locale={locale} />
        <AssemblyCtaBand locale={locale} />
        <AssemblyNewsletter locale={locale} />
      </main>
      <AssemblyFooter locale={locale} />
    </>
  )
}
