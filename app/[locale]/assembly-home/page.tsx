import { notFound } from 'next/navigation'
import { AssemblyHomePage } from '@/components/assembly/home-page'
import { assemblyCopy } from '@/lib/assembly-content'
import { isLocale, type Locale } from '@/lib/i18n'
import { SITE_URL } from '@/lib/seo'

export const dynamic = 'force-dynamic'

export async function generateMetadata(props: {
  params: Promise<{ locale: string }>
}) {
  const params = await props.params
  if (!isLocale(params.locale)) return {}
  const locale = params.locale as Locale
  const title = assemblyCopy.hero.title[locale]
  const description = assemblyCopy.hero.subtitle[locale]

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

export default async function Page(props: {
  params: Promise<{ locale: string }>
}) {
  const params = await props.params
  if (!isLocale(params.locale)) notFound()
  const locale = params.locale as Locale

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            url: `${SITE_URL}/${locale}`,
            name: assemblyCopy.hero.title[locale],
            description: assemblyCopy.hero.subtitle[locale],
            inLanguage: locale === 'en' ? 'en-CA' : locale === 'zh' ? 'zh-CN' : 'fr-CA',
          }),
        }}
      />
      <AssemblyHomePage locale={locale} />
    </>
  )
}
