import type { Metadata } from 'next'
import Link from 'next/link'
import { ASSEMBLY } from '@/lib/content'
import { defaultLocale, isLocale, tr } from '@/lib/i18n'
import { languageAlternates } from '@/lib/seo'
import { PageHero, SectionHeading, FeatureIcon, CheckItem, CtaBand } from '@/components/site/ui'
import { Reveal } from '@/components/site/reveal'
import { Boxes, HardHat, Layers, Paintbrush, ShieldCheck, Wrench } from 'lucide-react'

const PAGE_PATH = '/assembly'

const CAP_ICONS = [Layers, Wrench, ShieldCheck, Paintbrush, Boxes]

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const loc = isLocale(locale) ? locale : defaultLocale
  return {
    title: tr(loc, ASSEMBLY.badge),
    description: tr(loc, ASSEMBLY.sub),
    alternates: {
      canonical: `/${loc}${PAGE_PATH}`,
      languages: languageAlternates(PAGE_PATH),
    },
  }
}

export default async function AssemblyPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const loc = isLocale(locale) ? locale : defaultLocale

  return (
    <>
      <PageHero eyebrow={tr(loc, ASSEMBLY.badge)} title={tr(loc, ASSEMBLY.title)} description={tr(loc, ASSEMBLY.sub)} />

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-site px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-5">
            {ASSEMBLY.intro.map((para, i) => (
              <p key={i} className="leading-relaxed text-navy-700">
                {tr(loc, para)}
              </p>
            ))}
          </div>

          <div className="mt-14">
            <SectionHeading eyebrow={tr(loc, { en: 'Capabilities', zh: '能力', fr: 'Capacités' })} title={tr(loc, ASSEMBLY.capabilitiesTitle)} />
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {ASSEMBLY.capabilities.map((cap, i) => (
                <Reveal key={cap.title.en} delay={i * 60}>
                  <div className="h-full rounded-2xl border border-navy-100 bg-white p-6 shadow-card transition hover:-translate-y-0.5 hover:shadow-card-lg">
                    <FeatureIcon icon={CAP_ICONS[i] ?? HardHat} />
                    <h3 className="mt-4 font-display text-lg font-bold text-navy-900">{tr(loc, cap.title)}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-navy-600">{tr(loc, cap.desc)}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <div className="mt-16 grid items-center gap-10 rounded-3xl bg-navy-950 p-8 sm:p-12 lg:grid-cols-2">
            <div>
              <h3 className="font-display text-2xl font-bold text-white sm:text-3xl">{tr(loc, ASSEMBLY.facilityTitle)}</h3>
              <ul className="mt-6 space-y-3">
                {ASSEMBLY.facilityPoints.map((point, i) => (
                  <CheckItem key={i} dark>
                    {tr(loc, point)}
                  </CheckItem>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-brand-500/30 bg-gradient-to-br from-navy-900 to-navy-800 p-6 sm:p-8">
              <h4 className="font-display text-lg font-bold text-white">{tr(loc, ASSEMBLY.ctaTitle)}</h4>
              <p className="mt-2 text-sm leading-relaxed text-navy-100/80">{tr(loc, ASSEMBLY.ctaBody)}</p>
              <Link
                href={`/${loc}/contact`}
                className="mt-5 inline-flex rounded-md bg-brand-500 px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-brand-600"
              >
                {tr(loc, { en: 'Book a visit', zh: '预约参观', fr: 'Réserver une visite' })}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        title={tr(loc, { en: 'See the floor for yourself.', zh: '亲临现场参观。', fr: 'Venez voir l’atelier vous-même.' })}
        description={tr(loc, ASSEMBLY.ctaBody)}
      />
    </>
  )
}
