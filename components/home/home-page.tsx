import Link from 'next/link'
import Image from 'next/image'
import {
  ArrowRight,
  BadgeCheck,
  ChevronRight,
  ClipboardCheck,
  Clock,
  Factory,
  Globe2,
  Layers,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  Ship,
  Sofa,
  Wrench,
  Zap,
  type LucideIcon,
} from 'lucide-react'
import { PRODUCTS } from '@/lib/products'
import { ABOUT, ASSEMBLY, COMPLIANCE, HOME } from '@/lib/content'
import { CONTACT_LABELS, CTA, SITE } from '@/lib/site'
import { tr, type Locale } from '@/lib/i18n'
import { SectionHeading, FeatureIcon, CheckItem, btn } from '@/components/site/ui'
import { Reveal } from '@/components/site/reveal'
import { ContactForm } from '@/components/site/forms'

const WHY_ICONS = [Factory, Globe2, ClipboardCheck, BadgeCheck, Ship]
const CAPABILITY_ICONS = [Wrench, Zap, Layers, Sofa]
const VALUE_ICONS = [ShieldCheck, ClipboardCheck, Globe2]

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
      <HeroSection locale={locale} />
      <WhySection locale={locale} />
      <ProductsSection locale={locale} />
      <CustomizeSection locale={locale} />
      <ProcessSection locale={locale} />
      <AssemblySection locale={locale} />
      <QualitySection locale={locale} />
      <PartnerSection locale={locale} />
      <AboutSection locale={locale} />
      <ContactSection locale={locale} />
    </>
  )
}

function HeroSection({ locale }: { locale: Locale }) {
  return (
    <section className="relative isolate overflow-hidden bg-navy-950">
      <Image
        src="/images/hero-banner.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="-z-10 object-cover object-center animate-kenburns lg:object-[30%_center]"
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
        <p className="mt-5 max-w-xl text-lg leading-relaxed text-navy-100/85">{tr(locale, HOME.heroSub)}</p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Link href={`/${locale}/configure`} className={btn.primary}>
            {tr(locale, CTA.configureProduct)}
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link href="#products" className={btn.outlineLight}>
            {tr(locale, CTA.browseProducts)}
          </Link>
        </div>
        <div
          aria-hidden
          className="mt-10 h-px max-w-md bg-gradient-to-r from-brand-500/50 via-white/15 to-transparent"
        />
        <div className="mt-6 flex flex-wrap items-center gap-x-7 gap-y-3 text-sm font-medium text-navy-100/75">
          <span className="inline-flex items-center gap-2">
            <BadgeCheck className="h-4 w-4 text-brand-400" />
            CSA Z240 / A277
          </span>
          <span className="inline-flex items-center gap-2">
            <MapPin className="h-4 w-4 text-brand-400" />
            Markham, Ontario
          </span>
          <span className="inline-flex items-center gap-2">
            <Globe2 className="h-4 w-4 text-brand-400" />
            EN · 中文 · FR
          </span>
        </div>
      </div>
    </section>
  )
}

function WhySection({ locale }: { locale: Locale }) {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-site px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow={tr(locale, HOME.whyKicker)}
            title={tr(locale, HOME.whyTitle)}
            subtitle={tr(locale, HOME.whyBody)}
          />
        </Reveal>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {HOME.whyPoints.map((point, i) => (
            <Reveal key={point.title.en} delay={i * 60}>
              <div className="h-full rounded-2xl border border-navy-100 bg-navy-50/60 p-6 transition duration-300 hover:-translate-y-1 hover:border-brand-500/30 hover:shadow-card-lg">
                <FeatureIcon icon={WHY_ICONS[i] ?? Factory} />
                <h3 className="mt-4 font-display text-lg font-bold text-navy-900">{tr(locale, point.title)}</h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-600">{tr(locale, point.desc)}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function ProductsSection({ locale }: { locale: Locale }) {
  return (
    <section id="products" className="bg-navy-50/60 py-20 sm:py-24">
      <div className="mx-auto max-w-site px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow={tr(locale, HOME.productsKicker)}
            title={tr(locale, HOME.productsTitle)}
            subtitle={tr(locale, HOME.productsBody)}
          />
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {PRODUCTS.map((product, i) => (
            <Reveal key={product.slug} delay={i * 50}>
              <Link
                href={`/${locale}/products/${product.slug}`}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-navy-100 bg-white shadow-card transition duration-300 hover:-translate-y-1 hover:border-brand-500/30 hover:shadow-card-lg"
              >
                <div className="relative h-48 overflow-hidden bg-navy-100">
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
              className="group flex h-full flex-col overflow-hidden rounded-2xl bg-navy-950 shadow-card transition duration-300 hover:-translate-y-1 hover:border-brand-500/30 hover:shadow-card-lg"
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

function CustomizeSection({ locale }: { locale: Locale }) {
  return (
    <section id="customization" className="relative overflow-hidden bg-navy-950 py-20 sm:py-24">
      <div
        aria-hidden
        className="absolute inset-0"
        style={{ background: 'radial-gradient(60% 120% at 15% 0%, rgba(122,193,67,0.14), transparent 65%)' }}
      />
      <div className="relative mx-auto grid max-w-site items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <Reveal direction="right">
          <p className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.22em] text-brand-400">
            <span aria-hidden className="h-px w-8 bg-brand-500" />
            {tr(locale, HOME.configureKicker)}
          </p>
          <h2 className="mt-4 text-balance font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {tr(locale, HOME.configureTitle)}
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-navy-100/80 sm:text-lg">
            {tr(locale, HOME.configureBody)}
          </p>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {HOME.configurePoints.map((point, i) => (
              <Reveal key={point.en} delay={i * 70}>
                <li className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 p-4">
                  <BadgeCheck className="mt-0.5 h-5 w-5 shrink-0 text-brand-400" />
                  <span className="text-sm leading-6 text-navy-100/90">{tr(locale, point)}</span>
                </li>
              </Reveal>
            ))}
          </ul>
          <div className="mt-8">
            <Link href={`/${locale}/configure`} className={btn.primary}>
              {tr(locale, HOME.configureCta)}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>
        <Reveal direction="left" delay={120}>
          <div className="relative">
            <div
              aria-hidden
              className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-brand-500/25 via-transparent to-transparent blur-2xl"
            />
            <div className="relative overflow-hidden rounded-2xl border border-white/10 shadow-card-lg">
              <Image
                src="/images/configurator-trailer.jpg"
                alt=""
                width={612}
                height={376}
                sizes="(max-width: 1024px) 100vw, 560px"
                className="h-auto w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-5 -left-5 rounded-2xl border border-white/10 bg-navy-900/95 px-5 py-4 shadow-card-lg backdrop-blur">
              <p className="font-display text-2xl font-black text-brand-400">6</p>
              <p className="text-xs font-medium text-navy-100/75">
                {tr(locale, { en: 'guided steps', zh: '步引导流程', fr: 'étapes guidées' })}
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function ProcessSection({ locale }: { locale: Locale }) {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-site px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading eyebrow={tr(locale, HOME.processKicker)} title={tr(locale, HOME.processTitle)} />
        </Reveal>
        <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {HOME.processSteps.map((step, i) => (
            <Reveal key={step.title.en} delay={i * 60}>
              <li className="group relative h-full overflow-hidden rounded-2xl border border-navy-100 bg-navy-50/60 shadow-card transition duration-300 hover:-translate-y-1 hover:border-brand-500/30 hover:shadow-card-lg">
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
                    className="absolute inset-0 bg-gradient-to-t from-navy-50 via-transparent to-transparent"
                  />
                </div>
                <div className="relative p-6">
                  <span className="font-display text-4xl font-black text-brand-600/90">{String(i + 1).padStart(2, '0')}</span>
                  <h3 className="mt-3 font-display text-lg font-bold text-navy-900">{tr(locale, step.title)}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-navy-600">{tr(locale, step.desc)}</p>
                </div>
                {i < PROCESS_IMAGES.length - 1 && (
                  <span
                    aria-hidden
                    className="absolute -right-4 top-[92px] z-10 hidden h-9 w-9 items-center justify-center rounded-full bg-brand-500 text-white shadow-card-lg lg:flex"
                  >
                    <ChevronRight className="h-5 w-5" strokeWidth={3} />
                  </span>
                )}
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}

function AssemblySection({ locale }: { locale: Locale }) {
  return (
    <section id="assembly" className="bg-navy-50/60 py-20 sm:py-24">
      <div className="mx-auto max-w-site px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow={tr(locale, ASSEMBLY.badge)}
            title={tr(locale, ASSEMBLY.title)}
            subtitle={tr(locale, ASSEMBLY.sub)}
          />
        </Reveal>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {ASSEMBLY.capabilities.map((cap, i) => (
            <Reveal key={cap.title.en} delay={i * 60}>
              <div className="h-full rounded-2xl border border-navy-100 bg-white p-6 shadow-card transition duration-300 hover:-translate-y-1 hover:border-brand-500/30 hover:shadow-card-lg">
                <FeatureIcon icon={CAPABILITY_ICONS[i] ?? Wrench} />
                <h3 className="mt-4 font-display text-lg font-bold text-navy-900">{tr(locale, cap.title)}</h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-600">{tr(locale, cap.desc)}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link href={`/${locale}/assembly`} className={btn.outlineDark}>
            {tr(locale, {
              en: 'Explore the Assembly Centre',
              zh: '深入了解组装中心',
              fr: 'Découvrir le centre d’assemblage',
            })}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}

function QualitySection({ locale }: { locale: Locale }) {
  return (
    <section id="quality" className="relative overflow-hidden bg-navy-950 py-20 sm:py-24">
      <div
        aria-hidden
        className="absolute inset-0"
        style={{ background: 'radial-gradient(60% 120% at 85% 0%, rgba(122,193,67,0.12), transparent 65%)' }}
      />
      <div className="relative mx-auto max-w-site px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            dark
            eyebrow={tr(locale, COMPLIANCE.badge)}
            title={tr(locale, COMPLIANCE.title)}
            subtitle={tr(locale, COMPLIANCE.sub)}
          />
        </Reveal>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {COMPLIANCE.reviewSteps.map((step, i) => (
            <Reveal key={step.title.en} delay={i * 60}>
              <div className="h-full rounded-2xl border border-white/10 bg-white/5 p-6 transition duration-300 hover:-translate-y-1 hover:border-brand-500/40">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-500/15 font-display text-sm font-black text-brand-400">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="mt-4 font-display text-lg font-bold text-white">{tr(locale, step.title)}</h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-100/75">{tr(locale, step.desc)}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={120}>
          <div className="mt-12 rounded-2xl border border-brand-500/25 bg-gradient-to-br from-navy-900 to-navy-800 p-8">
            <h3 className="font-display text-lg font-bold text-white">{tr(locale, COMPLIANCE.standardsTitle)}</h3>
            <ul className="mt-5 flex flex-wrap gap-2.5">
              {COMPLIANCE.standards.map((standard) => (
                <li
                  key={standard.en}
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium text-navy-100/85"
                >
                  <ShieldCheck className="h-3.5 w-3.5 shrink-0 text-brand-400" />
                  {tr(locale, standard)}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function PartnerSection({ locale }: { locale: Locale }) {
  return (
    <section className="bg-navy-50/60 py-20 sm:py-24">
      <div className="mx-auto grid max-w-site gap-6 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <Reveal>
          <div id="suppliers">
            <PartnerCard
              locale={locale}
              title={HOME.supplierCtaTitle}
              bullets={SUPPLIER_BULLETS}
              linkLabel={SUPPLIERS_LINK_LABEL}
              href={`/${locale}/suppliers`}
            />
          </div>
        </Reveal>
        <Reveal delay={80}>
          <div id="clients">
            <PartnerCard
              locale={locale}
              title={HOME.clientCtaTitle}
              bullets={CLIENT_BULLETS}
              linkLabel={CLIENTS_LINK_LABEL}
              href={`/${locale}/clients`}
            />
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function AboutSection({ locale }: { locale: Locale }) {
  return (
    <section id="about" className="bg-white py-20 sm:py-24">
      <div className="mx-auto grid max-w-site gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <Reveal direction="right">
          <SectionHeading
            eyebrow={tr(locale, ABOUT.badge)}
            title={tr(locale, ABOUT.title)}
            subtitle={tr(locale, ABOUT.sub)}
          />
          <div className="mt-8 rounded-2xl border-l-4 border-brand-500 bg-navy-50/60 p-6">
            <h3 className="font-display text-sm font-bold uppercase tracking-widest text-navy-900">
              {tr(locale, ABOUT.missionTitle)}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-navy-600">{tr(locale, ABOUT.mission)}</p>
          </div>
        </Reveal>
        <div className="space-y-4">
          {ABOUT.values.map((value, i) => (
            <Reveal key={value.title.en} delay={i * 70} direction="left">
              <div className="flex items-start gap-4 rounded-2xl border border-navy-100 bg-navy-50/40 p-5">
                <FeatureIcon icon={VALUE_ICONS[i] ?? ShieldCheck} />
                <div>
                  <h3 className="font-display text-lg font-bold text-navy-900">{tr(locale, value.title)}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-navy-600">{tr(locale, value.desc)}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function ContactSection({ locale }: { locale: Locale }) {
  const infoItems: {
    icon: LucideIcon
    label: { en: string; zh: string; fr: string }
    value: string
    href?: string
  }[] = [
    { icon: MapPin, label: CONTACT_LABELS.address, value: SITE.addressLine },
    { icon: Phone, label: CONTACT_LABELS.phone, value: SITE.phone, href: `tel:${SITE.phoneHref}` },
    { icon: Mail, label: CONTACT_LABELS.email, value: SITE.email, href: `mailto:${SITE.email}` },
    { icon: Clock, label: CONTACT_LABELS.hours, value: tr(locale, SITE.hours) },
  ]

  return (
    <section id="contact" className="relative overflow-hidden bg-navy-950 py-20 sm:py-24">
      <div
        aria-hidden
        className="absolute inset-0"
        style={{ background: 'radial-gradient(60% 120% at 85% 100%, rgba(122,193,67,0.12), transparent 65%)' }}
      />
      <div className="relative mx-auto max-w-site px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            dark
            center
            eyebrow={tr(locale, CTA.contactUs)}
            title={tr(locale, {
              en: 'Let’s talk about your unit.',
              zh: '让我们聊聊您的项目。',
              fr: 'Parlons de votre unité.',
            })}
            subtitle={tr(locale, {
              en: 'Quotations, supplier partnerships, inspections or delivery — send us a note and our team replies within two business days.',
              zh: '报价、供应商合作、检验或交付——请给我们留言，团队将在两个工作日内回复。',
              fr: 'Soumissions, partenariats fournisseurs, inspections ou livraison — écrivez-nous et notre équipe répond sous deux jours ouvrables.',
            })}
          />
        </Reveal>
        <div className="mt-12 grid gap-10 lg:grid-cols-2">
          <div className="space-y-4">
            {infoItems.map(({ icon: Icon, label, value, href }) => (
              <Reveal key={label.en} direction="right">
                <div className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-5">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/5 text-brand-400">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-navy-100/60">{tr(locale, label)}</p>
                    {href ? (
                      <a
                        href={href}
                        className="mt-1 block text-sm font-medium text-white transition hover:text-brand-400"
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="mt-1 text-sm font-medium text-white/90">{value}</p>
                    )}
                  </div>
                </div>
              </Reveal>
            ))}
            <Reveal direction="right">
              <Link
                href={`/${locale}/contact`}
                className="inline-flex items-center gap-1.5 pt-1 font-display text-sm font-bold text-brand-400 transition hover:text-brand-300"
              >
                {tr(locale, {
                  en: 'Visit the full contact page',
                  zh: '访问完整联系页面',
                  fr: 'Visiter la page contact complète',
                })}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Reveal>
          </div>
          <Reveal direction="left" delay={100}>
            <div className="rounded-2xl bg-white p-6 shadow-card-lg sm:p-8">
              <ContactForm locale={locale} />
            </div>
          </Reveal>
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
