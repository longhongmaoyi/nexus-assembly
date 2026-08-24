import type { Metadata } from 'next'
import { SUPPLIERS } from '@/lib/content'
import { defaultLocale, isLocale, tr, type Locale } from '@/lib/i18n'
import { languageAlternates } from '@/lib/seo'
import { PageHero, SectionHeading } from '@/components/site/ui'
import { Reveal } from '@/components/site/reveal'
import { SupplierForm } from '@/components/site/forms'
import { FileCheck2, HandshakeIcon, MapPinned, RefreshCcw, ShieldCheck, TrendingUp } from 'lucide-react'

const PAGE_PATH = '/suppliers'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const loc = isLocale(locale) ? locale : defaultLocale
  return {
    title:
      loc === 'zh' ? '供应商合作' : loc === 'fr' ? 'Fournisseurs' : 'For Suppliers',
    description: tr(loc, SUPPLIERS.sub),
    alternates: {
      canonical: `/${loc}${PAGE_PATH}`,
      languages: languageAlternates(PAGE_PATH),
    },
  }
}

export default async function SuppliersPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const loc = isLocale(locale) ? locale : defaultLocale

  return (
    <>
      <PageHero eyebrow={tr(loc, SUPPLIERS.badge)} title={tr(loc, SUPPLIERS.title)} description={tr(loc, SUPPLIERS.sub)} />

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-site px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-5">
            {SUPPLIERS.intro.map((para, i) => (
              <p key={i} className="leading-relaxed text-navy-700">
                {tr(loc, para)}
              </p>
            ))}
          </div>

          <div className="mt-14">
            <SectionHeading eyebrow={tr(loc, { en: 'Benefits', zh: '合作权益', fr: 'Avantages' })} title={tr(loc, SUPPLIERS.benefitsTitle)} />
            <BenefitsGrid locale={loc} />
          </div>
        </div>
      </section>

      <ProcessSection locale={loc} />

      <ApplySection locale={loc} />
    </>
  )
}

function BenefitsGrid({ locale }: { locale: Locale }) {
  const icons = [FileCheck2, RefreshCcw, ShieldCheck, HandshakeIcon, MapPinned, TrendingUp]
  return (
    <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {SUPPLIERS.benefits.map((benefit, i) => {
        const Icon = icons[i] ?? HandshakeIcon
        return (
          <Reveal key={benefit.title.en} delay={(i % 3) * 60}>
            <div className="h-full rounded-2xl border border-navy-100 bg-navy-50/60 p-6 transition hover:-translate-y-0.5 hover:shadow-card">
              <span className="flex h-11 w-11 items-center justify-center rounded-full border border-navy-100 bg-white text-brand-600">
                <Icon className="h-5 w-5" />
              </span>
              <h3 className="mt-4 font-display text-lg font-bold text-navy-900">{tr(locale, benefit.title)}</h3>
              <p className="mt-2 text-sm leading-relaxed text-navy-600">{tr(locale, benefit.desc)}</p>
            </div>
          </Reveal>
        )
      })}
    </div>
  )
}

function ProcessSection({ locale }: { locale: Locale }) {
  return (
    <section className="bg-navy-950 py-16 sm:py-20">
      <div className="mx-auto max-w-site px-4 sm:px-6 lg:px-8">
        <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">{tr(locale, SUPPLIERS.processTitle)}</h2>
        <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SUPPLIERS.processSteps.map((step, i) => (
            <Reveal key={step.title.en} delay={(i % 3) * 60}>
              <li className="relative h-full rounded-2xl border border-white/10 bg-navy-900 p-6">
                <span className="font-display text-4xl font-black text-brand-500/90">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="mt-3 font-display text-lg font-bold text-white">{tr(locale, step.title)}</h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-100/75">{tr(locale, step.desc)}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}

function ApplySection({ locale }: { locale: Locale }) {
  return (
    <section className="bg-navy-50/60 py-16 sm:py-20">
      <div className="mx-auto grid max-w-site gap-12 px-4 sm:px-6 lg:grid-cols-5 lg:px-8">
        <div className="lg:col-span-2">
          <h2 className="font-display text-3xl font-bold tracking-tight text-navy-950">{tr(locale, SUPPLIERS.ctaTitle)}</h2>
          <p className="mt-4 leading-relaxed text-navy-700">{tr(locale, SUPPLIERS.ctaBody)}</p>
          <ul className="mt-8 space-y-4">
            {SUPPLIERS.intro.map((para, i) => (
              <li key={i} className="rounded-xl border border-navy-100 bg-white px-4 py-3 text-xs leading-relaxed text-navy-500">
                {tr(locale, para)}
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-3xl border border-navy-100 bg-white p-7 shadow-card sm:p-9 lg:col-span-3">
          <SupplierForm locale={locale} />
        </div>
      </div>
    </section>
  )
}

