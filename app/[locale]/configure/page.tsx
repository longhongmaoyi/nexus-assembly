import type { Metadata } from 'next'
import Image from 'next/image'
import { Configurator } from '@/components/configure/configurator'
import { CFG } from '@/lib/copy'
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
    title: tr(loc, CFG.title),
    description: tr(loc, CFG.subtitle),
    alternates: {
      canonical: `/${loc}/configure`,
      languages: languageAlternates('/configure'),
    },
  }
}

export default async function ConfigurePage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const loc = isLocale(locale) ? locale : defaultLocale
  return (
    <>
      <section className="bg-navy-950">
        <div className="mx-auto grid max-w-site items-center gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1fr_auto] lg:px-8">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-brand-400">{tr(loc, CFG.kicker)}</p>
            <h1 className="mt-3 font-display text-3xl font-bold text-white sm:text-4xl">{tr(loc, CFG.title)}</h1>
            <p className="mt-4 max-w-2xl text-navy-100/85">{tr(loc, CFG.subtitle)}</p>
          </div>
          <div className="relative hidden h-44 w-72 overflow-hidden rounded-2xl border border-white/10 shadow-card-lg md:block">
            <Image
              src="/images/configurator-trailer.jpg"
              alt=""
              fill
              priority
              sizes="288px"
              className="object-cover"
            />
          </div>
        </div>
      </section>
      <Configurator locale={loc} />
    </>
  )
}
