import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { ABOUT } from '@/lib/content'
import { CTA } from '@/lib/site'
import { defaultLocale, isLocale, tr } from '@/lib/i18n'
import { languageAlternates } from '@/lib/seo'
import { PageHero, SectionHeading, btn } from '@/components/site/ui'
import { Reveal } from '@/components/site/reveal'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const loc = isLocale(locale) ? locale : defaultLocale
  return {
    title: tr(loc, ABOUT.badge),
    description: tr(loc, ABOUT.sub),
    alternates: {
      canonical: `/${loc}/about`,
      languages: languageAlternates('/about'),
    },
  }
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const loc = isLocale(locale) ? locale : defaultLocale
  return (
    <>
      <PageHero eyebrow={tr(loc, ABOUT.badge)} title={tr(loc, ABOUT.title)} description={tr(loc, ABOUT.sub)} />

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-site px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-brand-500/30 bg-brand-50 p-8 sm:p-12">
            <h2 className="font-display text-xs font-bold uppercase tracking-[0.25em] text-brand-700">
              {tr(loc, ABOUT.missionTitle)}
            </h2>
            <p className="mt-4 max-w-4xl font-display text-xl leading-relaxed text-navy-900 sm:text-2xl">
              {tr(loc, ABOUT.mission)}
            </p>
          </div>

          <div className="mt-16">
            <SectionHeading eyebrow={tr(loc, ABOUT.valuesTitle)} title={tr(loc, ABOUT.valuesTitle)} center />
            <div className="mx-auto mt-10 grid max-w-5xl gap-6 md:grid-cols-3">
              {ABOUT.values.map((v, i) => (
                <Reveal key={v.title.en} delay={i * 60}>
                  <div className="h-full rounded-2xl border border-navy-100 bg-white p-6 shadow-card">
                    <span className="font-display text-3xl font-black text-brand-500">{String(i + 1).padStart(2, '0')}</span>
                    <h3 className="mt-3 font-display text-lg font-bold text-navy-950">{tr(loc, v.title)}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-navy-600">{tr(loc, v.desc)}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <div className="mt-20 grid gap-10 lg:grid-cols-2">
            <div>
              <h3 className="font-display text-2xl font-bold text-navy-950">{tr(loc, ABOUT.approachTitle)}</h3>
              <ul className="mt-6 space-y-3">
                {ABOUT.approachPoints.map((p, i) => (
                  <li key={p.en} className="flex items-start gap-3 text-sm leading-relaxed text-navy-700">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-navy-950 font-display text-xs font-bold text-brand-400">
                      {i + 1}
                    </span>
                    {tr(loc, p)}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col justify-center rounded-2xl bg-navy-950 p-8 sm:p-10">
              <h3 className="font-display text-2xl font-bold text-white">{tr(loc, ABOUT.ctaTitle)}</h3>
              <p className="mt-3 leading-relaxed text-navy-100/80">{tr(loc, ABOUT.ctaBody)}</p>
              <div className="mt-6 flex flex-wrap gap-4">
                <Link href={`/${loc}/contact`} className={btn.primary}>
                  {tr(loc, CTA.contactUs)}
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link href={`/${loc}/engineering-compliance`} className={btn.outlineLight}>
                  {tr(loc, { en: 'Quality & Compliance', zh: '质量与合规', fr: 'Qualité et conformité' })}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
