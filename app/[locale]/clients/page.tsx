import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, ClipboardList, FileSearch, Home, ShieldCheck, Truck, Wrench } from 'lucide-react'
import { CLIENTS } from '@/lib/content'
import { defaultLocale, isLocale, tr, type Locale } from '@/lib/i18n'
import { languageAlternates } from '@/lib/seo'
import { PageHero, SectionHeading, btn } from '@/components/site/ui'
import { Reveal } from '@/components/site/reveal'

const PAGE_PATH = '/clients'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const loc = isLocale(locale) ? locale : defaultLocale
  return {
    title: loc === 'zh' ? '客户中心' : loc === 'fr' ? 'Clients' : 'For Clients',
    description: tr(loc, CLIENTS.sub),
    alternates: {
      canonical: `/${loc}${PAGE_PATH}`,
      languages: languageAlternates(PAGE_PATH),
    },
  }
}

export default async function ClientsPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const loc = isLocale(locale) ? locale : defaultLocale

  return (
    <>
      <PageHero eyebrow={tr(loc, CLIENTS.badge)} title={tr(loc, CLIENTS.title)} description={tr(loc, CLIENTS.sub)} />

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-site px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow={tr(loc, { en: 'Services', zh: '服务', fr: 'Services' })} title={tr(loc, CLIENTS.servicesTitle)} />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <ServiceCards locale={loc} />
          </div>
        </div>
      </section>

      <FaqSection locale={loc} />
    </>
  )
}

function ServiceCards({ locale }: { locale: Locale }) {
  const icons = [Home, Wrench, FileSearch, ShieldCheck, Truck, ClipboardList]
  return (
    <>
      {CLIENTS.services.map((service, i) => {
        const Icon = icons[i] ?? ShieldCheck
        return (
          <Reveal key={service.title.en} delay={(i % 3) * 60}>
            <div className="h-full rounded-2xl border border-navy-100 bg-navy-50/60 p-6 transition hover:-translate-y-0.5 hover:shadow-card">
              <span className="flex h-11 w-11 items-center justify-center rounded-full border border-navy-100 bg-white text-brand-600">
                <Icon className="h-5 w-5" />
              </span>
              <h3 className="mt-4 font-display text-lg font-bold text-navy-900">{tr(locale, service.title)}</h3>
              <p className="mt-2 text-sm leading-relaxed text-navy-600">{tr(locale, service.desc)}</p>
            </div>
          </Reveal>
        )
      })}
    </>
  )
}

function FaqSection({ locale }: { locale: Locale }) {
  return (
    <>
      <section className="bg-navy-50/60 py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="FAQ" title={tr(locale, CLIENTS.faqTitle)} center />
          <div className="mt-10 space-y-3">
            {CLIENTS.faqs.map((faq) => (
              <details
                key={faq.q.en}
                className="group rounded-2xl border border-navy-100 bg-white px-6 py-5 shadow-card transition open:border-brand-500/40"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display font-semibold text-navy-950 [&::-webkit-details-marker]:hidden">
                  {tr(locale, faq.q)}
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 text-brand-600 transition-transform group-open:rotate-45" aria-hidden="true"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-navy-600">{tr(locale, faq.a)}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy-950 py-16 sm:py-20">
        <div className="mx-auto max-w-site px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-start justify-between gap-8 rounded-2xl border border-brand-500/30 bg-gradient-to-br from-navy-900 to-navy-800 p-8 sm:p-12 lg:flex-row lg:items-center">
            <div>
              <h2 className="font-display text-2xl font-bold tracking-tight text-white sm:text-3xl">{tr(locale, CLIENTS.ctaTitle)}</h2>
              <p className="mt-3 max-w-xl text-navy-100/80">{tr(locale, CLIENTS.ctaBody)}</p>
            </div>
            <Link href={`/${locale}/configure`} className={btn.primary}>
              {tr(locale, { en: 'Configure Your Product', zh: '定制您的产品', fr: 'Configurez votre produit' })}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

