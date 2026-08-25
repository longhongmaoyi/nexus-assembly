import Link from 'next/link'
import Image from 'next/image'
import {
  ArrowRight,
  BadgeCheck,
  ChevronRight,
  ClipboardCheck,
  Factory,
  Globe2,
  Ship,
} from 'lucide-react'
import { PRODUCTS } from '@/lib/products'
import { HOME } from '@/lib/content'
import { CTA } from '@/lib/site'
import { tr, type Locale } from '@/lib/i18n'
import { SectionHeading, FeatureIcon, CheckItem, btn } from '@/components/site/ui'
import { Reveal } from '@/components/site/reveal'

const WHY_ICONS = [Factory, Globe2, ClipboardCheck, BadgeCheck, Ship]

const PROCESS_IMAGES = [
  '/images/process/step-01.jpg',
  '/images/process/step-02.jpg',
  '/images/process/step-03.jpg',
  '/images/process/step-04.jpg',
]

const SUPPLIER_BULLETS = [
  {
    en: 'Engineering-ready manufacturing packages',
    zh: '成品级工程技术包',
    fr: 'Forfaits de fabrication prêts pour l’ingénierie',
  },
  {
    en: 'Predictable, recurring Canadian orders',
    zh: '可预期的持续性加拿大订单',
    fr: 'Commandes canadiennes récurrentes et prévisibles',
  },
  {
    en: 'Certification and QC handled locally',
    zh: '认证与质检本地处理',
    fr: 'Certification et QC gérés localement',
  },
]
const SUPPLIERS_LINK_LABEL = {
  en: 'Partner with us',
  zh: '成为合作伙伴',
  fr: 'Devenir partenaire',
}
const CLIENT_BULLETS = [
  {
    en: 'Pre-shipment inspection at origin factories',
    zh: '原产地工厂发货前检验',
    fr: 'Inspection avant expédition aux usines d’origine',
  },
  {
    en: 'Compliance completion in Markham, Ontario',
    zh: '安大略省万锦市合规收尾',
    fr: 'Mise en conformité à Markham, Ontario',
  },
  {
    en: 'Nationwide delivery and local warranty support',
    zh: '全加配送与本地质保支持',
    fr: 'Livraison pancanadienne et soutien de garantie local',
  },
]
const CLIENTS_LINK_LABEL = {
  en: 'Explore client services',
  zh: '了解客户服务',
  fr: 'Explorer les services aux clients',
}

export function HomePage({ locale }: { locale: Locale }) {
  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-navy-950">
        <Image
          src="/images/hero-banner.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="-z-10 object-cover object-center"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-r from-navy-950/95 via-navy-950/70 to-navy-950/25"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-t from-navy-950/85 via-transparent to-navy-950/40"
        />
        <div className="relative mx-auto max-w-site px-4 py-24 sm:px-6 lg:px-8 lg:py-36">
          <p className="inline-flex rounded-full border border-brand-500/40 bg-brand-500/10 px-3.5 py-1.5 text-xs font-semibold text-brand-300 backdrop-blur-sm">
            {tr(locale, HOME.heroBadge)}
          </p>
          <h1 className="mt-5 max-w-3xl font-display text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl xl:text-6xl">
            {tr(locale, HOME.heroTitleA)}
            <br />
            <span className="text-brand-400">{tr(locale, HOME.heroTitleB)}</span>
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-navy-100/85">
            {tr(locale, HOME.heroSub)}
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href={`/${locale}/configure`} className={btn.primary}>
              {tr(locale, CTA.configureProduct)}
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href={`/${locale}/products`} className={btn.outlineLight}>
              {tr(locale, CTA.browseProducts)}
            </Link>
          </div>
        </div>
      </section>

      {/* Why NEXUS */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-site px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow={tr(locale, HOME.whyKicker)}
            title={tr(locale, HOME.whyTitle)}
            subtitle={tr(locale, HOME.whyBody)}
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {HOME.whyPoints.map((point, i) => (
              <Reveal key={point.title.en} delay={i * 60}>
                <div className="h-full rounded-2xl border border-navy-100 bg-navy-50/60 p-6 transition hover:-translate-y-0.5 hover:shadow-card">
                  <FeatureIcon icon={WHY_ICONS[i] ?? Factory} />
                  <h3 className="mt-4 font-display text-lg font-bold text-navy-900">{tr(locale, point.title)}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-navy-600">{tr(locale, point.desc)}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <ProductsSection locale={locale} />
      <ProcessSection locale={locale} />

      {/* Supplier / Client CTAs */}
      <section className="bg-navy-50/60 py-20">
        <div className="mx-auto grid max-w-site gap-6 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <Reveal>
            <PartnerCard
              locale={locale}
              title={HOME.supplierCtaTitle}
              bullets={SUPPLIER_BULLETS}
              linkLabel={SUPPLIERS_LINK_LABEL}
              href={`/${locale}/suppliers`}
            />
          </Reveal>
          <Reveal delay={80}>
            <PartnerCard
              locale={locale}
              title={HOME.clientCtaTitle}
              bullets={CLIENT_BULLETS}
              linkLabel={CLIENTS_LINK_LABEL}
              href={`/${locale}/clients`}
            />
          </Reveal>
        </div>
      </section>
    </>
  )
}

function ProductsSection({ locale }: { locale: Locale }) {
  return (
    <section className="bg-navy-50/60 py-20">
      <div className="mx-auto max-w-site px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={tr(locale, HOME.productsKicker)}
          title={tr(locale, HOME.productsTitle)}
          subtitle={tr(locale, HOME.productsBody)}
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {PRODUCTS.map((product, i) => (
            <Reveal key={product.slug} delay={i * 50}>
              <Link
                href={`/${locale}/products/${product.slug}`}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-navy-100 bg-white shadow-card transition hover:-translate-y-1 hover:shadow-card-lg"
              >
                <div className="relative h-44 overflow-hidden bg-navy-100">
                  <Image
                    src={product.image}
                    alt=""
                    fill
                    sizes="(max-width: 768px) 100vw, 380px"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-display text-xl font-bold text-navy-950">{tr(locale, product.name)}</h3>
                  <p className="mt-1 text-sm text-brand-600">{tr(locale, product.cardSub)}</p>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-navy-600">{tr(locale, product.tagline)}</p>
                  <span className="mt-5 inline-flex items-center gap-1.5 font-display text-sm font-bold text-navy-900 transition group-hover:text-brand-600">
                    {tr(locale, CTA.learnMore)}
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}

          {/* Configurator promo tile */}
          <Reveal delay={250}>
            <Link
              href={`/${locale}/configure`}
              className="group flex h-full flex-col overflow-hidden rounded-2xl bg-navy-950 shadow-card transition hover:-translate-y-1 hover:shadow-card-lg"
            >
              <div className="relative h-44 overflow-hidden">
                <Image
                  src="/images/configurator-trailer.jpg"
                  alt=""
                  fill
                  sizes="(max-width: 768px) 100vw, 380px"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
                <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/20 to-transparent" />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <p className="font-display text-xs font-bold uppercase tracking-widest text-brand-400">
                  {tr(locale, HOME.configureKicker)}
                </p>
                <h3 className="mt-3 font-display text-xl font-bold text-white">{tr(locale, HOME.configureTitle)}</h3>
                <ul className="mt-4 space-y-2.5">
                  {HOME.configurePoints.map((point) => (
                    <CheckItem key={point.en} dark>
                      {tr(locale, point)}
                    </CheckItem>
                  ))}
                </ul>
                <span className="mt-5 inline-flex items-center gap-1.5 font-display text-sm font-bold text-brand-400 transition group-hover:text-brand-300">
                  {tr(locale, HOME.configureCta)}
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
                </span>
              </div>
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

function ProcessSection({ locale }: { locale: Locale }) {
  return (
    <section className="bg-navy-950 py-20">
      <div className="mx-auto max-w-site px-4 sm:px-6 lg:px-8">
        <SectionHeading dark eyebrow={tr(locale, HOME.processKicker)} title={tr(locale, HOME.processTitle)} />
        <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {HOME.processSteps.map((step, i) => (
            <Reveal key={step.title.en} delay={i * 60}>
              <li className="group relative h-full overflow-hidden rounded-2xl border border-white/10 bg-navy-900">
                <div className="relative h-40 overflow-hidden sm:h-44">
                  <Image
                    src={PROCESS_IMAGES[i]}
                    alt=""
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 300px"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div
                    aria-hidden
                    className="absolute inset-0 bg-gradient-to-t from-navy-900 via-navy-900/10 to-transparent"
                  />
                </div>
                <div className="relative p-6">
                  <span className="font-display text-4xl font-black text-brand-500/90">{String(i + 1).padStart(2, '0')}</span>
                  <h3 className="mt-3 font-display text-lg font-bold text-white">{tr(locale, step.title)}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-navy-100/75">{tr(locale, step.desc)}</p>
                </div>
                {i < PROCESS_IMAGES.length - 1 && (
                  <span
                    aria-hidden
                    className="absolute -right-4 top-[92px] z-10 hidden h-9 w-9 items-center justify-center rounded-full bg-brand-500 text-navy-950 shadow-card-lg lg:flex"
                  >
                    <ChevronRight className="h-5 w-5" strokeWidth={3} />
                  </span>
                )}
              </li>
            </Reveal>
          ))}
        </ol>
        <div className="mt-12 flex flex-wrap items-center justify-between gap-6 rounded-2xl border border-brand-500/30 bg-gradient-to-br from-navy-900 to-navy-800 p-8">
          <div>
            <h3 className="font-display text-xl font-bold text-white sm:text-2xl">{tr(locale, HOME.configureTitle)}</h3>
            <p className="mt-2 max-w-xl text-sm leading-relaxed text-navy-100/80">{tr(locale, HOME.configureBody)}</p>
          </div>
          <Link href={`/${locale}/configure`} className={btn.primary}>
            {tr(locale, HOME.configureCta)}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}

function PartnerCard({
  locale,
  title,
  bullets,
  linkLabel,
  href,
}: {
  locale: Locale
  title: { en: string; zh: string; fr: string }
  bullets: { en: string; zh: string; fr: string }[]
  linkLabel: { en: string; zh: string; fr: string }
  href: string
}) {
  return (
    <div className="flex h-full flex-col justify-between rounded-2xl border border-navy-100 bg-white p-8 shadow-card">
      <div>
        <h3 className="font-display text-2xl font-bold text-navy-950">{tr(locale, title)}</h3>
        <ul className="mt-4 space-y-3">
          {bullets.map((b) => (
            <CheckItem key={b.en}>{tr(locale, b)}</CheckItem>
          ))}
        </ul>
      </div>
      <Link href={href} className={`${btn.outlineDark} mt-6 self-start`}>
        {tr(locale, linkLabel)}
        <ArrowRight className="h-4 w-4" />
      </Link>
    </div>
  )
}

