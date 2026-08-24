import type { Metadata } from 'next'
import { COMPLIANCE } from '@/lib/content'
import { defaultLocale, isLocale, tr, type Locale } from '@/lib/i18n'
import { languageAlternates } from '@/lib/seo'
import { PageHero, CheckItem } from '@/components/site/ui'
import { Reveal } from '@/components/site/reveal'
import { Flame, Layers, PlugZap, Droplets, Fan, ShieldCheck, Truck } from 'lucide-react'

const PAGE_PATH = '/engineering-compliance'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const loc = isLocale(locale) ? locale : defaultLocale
  return {
    title:
      loc === 'zh' ? '质量与合规' : loc === 'fr' ? 'Qualité et conformité' : 'Quality & Compliance',
    description: tr(loc, COMPLIANCE.sub),
    alternates: {
      canonical: `/${loc}${PAGE_PATH}`,
      languages: languageAlternates(PAGE_PATH),
    },
  }
}

export default async function CompliancePage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const loc = isLocale(locale) ? locale : defaultLocale

  return (
    <>
      <PageHero eyebrow={tr(loc, COMPLIANCE.badge)} title={tr(loc, COMPLIANCE.title)} description={tr(loc, COMPLIANCE.sub)} />

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-site px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-5">
            {COMPLIANCE.intro.map((para, i) => (
              <p key={i} className="leading-relaxed text-navy-700">
                {tr(loc, para)}
              </p>
            ))}
          </div>

          <DomainsGrid locale={loc} />
        </div>
      </section>

      <StandardsAndReview locale={loc} />
    </>
  )
}

function DomainsGrid({ locale }: { locale: Locale }) {
  const icons = [Layers, PlugZap, Droplets, Fan, Flame, ShieldCheck, Truck]
  return (
    <div className="mt-14">
      <h2 className="font-display text-2xl font-bold text-navy-950 sm:text-3xl">{tr(locale, COMPLIANCE.domainsTitle)}</h2>
      <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {COMPLIANCE.domains.map((domain, i) => {
          const Icon = icons[i] ?? ShieldCheck
          return (
            <Reveal key={domain.id} delay={(i % 3) * 60}>
              <article className="flex h-full flex-col rounded-2xl border border-navy-100 bg-white p-6 shadow-card transition hover:-translate-y-0.5 hover:shadow-card-lg">
                <span className="flex h-11 w-11 items-center justify-center rounded-full border border-navy-100 bg-navy-50 text-brand-600">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 font-display text-lg font-bold text-navy-950">{tr(locale, domain.name)}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-navy-500">{tr(locale, domain.summary)}</p>
                <ul className="mt-4 space-y-2 border-t border-navy-100 pt-4">
                  {domain.points.map((point, j) => (
                    <CheckItem key={j}>{tr(locale, point)}</CheckItem>
                  ))}
                </ul>
              </article>
            </Reveal>
          )
        })}
      </div>
    </div>
  )
}

function StandardsAndReview({ locale }: { locale: Locale }) {
  return (
    <section className="bg-navy-950 py-16 sm:py-20">
      <div className="mx-auto grid max-w-site gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div>
          <h2 className="font-display text-2xl font-bold text-white">{tr(locale, COMPLIANCE.standardsTitle)}</h2>
          <ul className="mt-6 space-y-3">
            {COMPLIANCE.standards.map((standard, i) => (
              <li key={i} className="flex items-start gap-3 rounded-xl border border-white/10 bg-navy-900 px-4 py-3.5 text-sm leading-relaxed text-navy-100/85">
                <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-brand-400" />
                {tr(locale, standard)}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-display text-2xl font-bold text-white">{tr(locale, COMPLIANCE.reviewTitle)}</h2>
          <ol className="mt-6 space-y-4">
            {COMPLIANCE.reviewSteps.map((step, i) => (
              <li key={step.title.en} className="flex gap-4">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-500 font-display text-sm font-black text-navy-950">
                  {i + 1}
                </span>
                <div>
                  <h3 className="font-display font-bold text-white">{tr(locale, step.title)}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-navy-100/75">{tr(locale, step.desc)}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}

