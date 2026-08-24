import type { Metadata } from 'next'
import { Space_Grotesk, Inter } from 'next/font/google'
import { notFound } from 'next/navigation'
import { SiteHeader } from '@/components/site/header'
import { SiteFooter } from '@/components/site/footer'
import {
  htmlLang,
  isLocale,
  languageTags,
  locales,
  tr,
  type Locale,
} from '@/lib/i18n'
import { SITE } from '@/lib/site'
import '../globals.css'

const display = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
})

const body = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
})

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

function resolveLocale(locale: string): Locale {
  return isLocale(locale) ? locale : 'en'
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const loc = resolveLocale(locale)
  return {
    metadataBase: new URL(SITE.url),
    title: {
      default: `${SITE.name} | ${tr(loc, SITE.tagline)}`,
      template: `%s | ${SITE.name}`,
    },
    description: tr(loc, SITE.description),
    applicationName: SITE.name,
    keywords: [
      'modular assembly Canada',
      'NEXUS Assembly Centre',
      'CSA certified modular',
      'A277 certification',
      'custom trailers Ontario',
    ],
    robots: { index: true, follow: true },
    openGraph: {
      type: 'website',
      siteName: SITE.name,
      url: `${SITE.url}/${loc}`,
      locale: languageTags[loc].replace('-', '_'),
      images: [{ url: '/images/og-image.jpg', width: 1200, height: 630 }],
    },
    twitter: {
      card: 'summary_large_image',
      images: ['/images/og-image.jpg'],
    },
    alternates: {
      canonical: `/${loc}`,
      languages: languageAlternates('/'),
    },
  }
}

/** Build hreflang alternates for a locale-neutral path ('/products'). */
export function languageAlternates(path: string): Record<string, string> {
  const languages: Record<string, string> = {
    'x-default': `${SITE.url}/en${path === '/' ? '' : path}`,
  }
  for (const l of locales) {
    languages[languageTags[l]] = `${SITE.url}/${l}${path === '/' ? '' : path}`
  }
  return languages
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  if (!isLocale(locale)) notFound()

  return (
    <html lang={htmlLang[locale]} className={`${display.variable} ${body.variable}`}>
      <body className="bg-white font-body text-navy antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-lime focus:px-4 focus:py-2 focus:text-navy"
        >
          {tr(locale, SKIP_TO_CONTENT)}
        </a>
        <SiteHeader locale={locale} />
        <main id="main">{children}</main>
        <SiteFooter locale={locale} />
      </body>
    </html>
  )
}

const SKIP_TO_CONTENT = {
  en: 'Skip to main content',
  zh: '跳转到主要内容',
  fr: 'Aller au contenu principal',
}
