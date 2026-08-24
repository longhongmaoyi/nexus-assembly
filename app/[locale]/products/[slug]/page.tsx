import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { PRODUCT_SLUGS, getProduct, getTier, getUpgradesFor } from '@/lib/products'
import { defaultLocale, isLocale, tr } from '@/lib/i18n'
import { languageAlternates } from '@/lib/seo'
import { btn } from '@/components/site/ui'
import { Reveal } from '@/components/site/reveal'

interface Props {
  params: Promise<{ locale: string; slug: string }>
}

export function generateStaticParams() {
  return PRODUCT_SLUGS.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params
  const loc = isLocale(locale) ? locale : defaultLocale
  const product = getProduct(slug)
  if (!product) return {}
  return {
    title: tr(loc, product.name),
    description: `${tr(loc, product.tagline)} ${tr(loc, product.cardSub)}`,
    alternates: {
      canonical: `/${loc}/products/${slug}`,
      languages: languageAlternates(`/products/${slug}`),
    },
    openGraph: {
      images: [{ url: product.image }],
    },
  }
}

export default async function ProductDetailPage({ params }: Props) {
  const { locale, slug } = await params
  const loc = isLocale(locale) ? locale : defaultLocale
  const product = getProduct(slug)
  if (!product) notFound()

  return (
    <>
      <ProductHero locale={loc} slug={product.slug} />
      <OverviewSection locale={loc} slug={product.slug} />
      <PackagesSection locale={loc} slug={product.slug} />
      <UpgradesSection locale={loc} slug={product.slug} />
    </>
  )
}

function ProductHero({ locale, slug }: { locale: 'en' | 'zh' | 'fr'; slug: string }) {
  const product = getProduct(slug)
  if (!product) return null
  return (
    <section className="relative overflow-hidden bg-navy-950">
      <div
        aria-hidden
        className="absolute inset-0"
        style={{ background: 'radial-gradient(60% 120% at 85% 0%, rgba(122,193,67,0.16), transparent 70%)' }}
      />
      <div className="relative mx-auto grid max-w-site items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:py-20">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-brand-400">
            {tr(locale, { en: 'Products', zh: '产品中心', fr: 'Produits' })} · {tr(locale, product.shortName)}
          </p>
          <h1 className="mt-3 font-display text-4xl font-bold tracking-tight text-white sm:text-5xl">
            {tr(locale, product.name)}
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-navy-100/85">{tr(locale, product.tagline)}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href={`/${locale}/configure?product=${product.slug}`} className={btn.primary}>
              {tr(locale, { en: 'Configure this unit', zh: '定制此产品', fr: 'Configurer cette unité' })}
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href={`/${locale}/contact`} className={btn.outlineLight}>
              {tr(locale, { en: 'Request a Quote', zh: '获取报价', fr: 'Demander une soumission' })}
            </Link>
          </div>
        </div>
        <div className="relative h-72 overflow-hidden rounded-2xl border border-white/10 sm:h-96">
          <Image src={product.image} alt="" fill sizes="(max-width: 1024px) 100vw, 560px" priority className="object-cover" />
        </div>
      </div>
    </section>
  )
}

function OverviewSection({ locale, slug }: { locale: 'en' | 'zh' | 'fr'; slug: string }) {
  const product = getProduct(slug)
  if (!product) return null
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto grid max-w-site gap-12 px-4 sm:px-6 lg:grid-cols-5 lg:px-8">
        <div className="lg:col-span-3">
          <h2 className="font-display text-xs font-bold uppercase tracking-[0.25em] text-brand-600">
            {tr(locale, { en: 'Overview', zh: '产品概述', fr: 'Aperçu' })}
          </h2>
          {product.description.map((para, i) => (
            <p key={i} className="mt-4 leading-relaxed text-navy-700">
              {tr(locale, para)}
            </p>
          ))}
        </div>
        <div className="lg:col-span-2">
          <ul className="space-y-3 rounded-2xl bg-navy-50 p-6">
            {product.highlights.map((h, i) => (
              <li key={i} className="flex items-start gap-2.5 text-sm leading-relaxed text-navy-800">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-500" />
                {tr(locale, h)}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

function PackagesSection({ locale, slug }: { locale: 'en' | 'zh' | 'fr'; slug: string }) {
  const product = getProduct(slug)
  if (!product) return null
  return (
    <section className="bg-navy-50/60 py-16 sm:py-20">
      <div className="mx-auto max-w-site px-4 sm:px-6 lg:px-8">
        <h2 className="font-display text-2xl font-bold text-navy-950 sm:text-3xl">
          {tr(locale, { en: 'Package tiers', zh: '套餐等级', fr: 'Forfaits' })}
        </h2>
        <p className="mt-2 max-w-2xl text-navy-600">
          {tr(locale, {
            en: 'Pick a tier in the configurator as your base specification, then fine-tune with upgrades.',
            zh: '在配置器中选择一个等级作为基础规格，再通过升级项微调。',
            fr: 'Choisissez un forfait dans le configurateur comme spécification de base, puis affinez avec les améliorations.',
          })}
        </p>
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {product.packages.map((pkg, i) => {
            const tier = getTier(pkg.id)
            return (
              <Reveal key={pkg.id} delay={i * 60}>
                <div className="flex h-full flex-col rounded-2xl border border-navy-100 bg-white p-6 shadow-card">
                  <span className="font-display text-xs font-bold uppercase tracking-widest text-brand-600">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="mt-2 font-display text-xl font-bold text-navy-950">{tr(locale, tier.name)}</h3>
                  <p className="mt-1 text-sm text-brand-700">{tr(locale, tier.tagline)}</p>
                  <ul className="mt-4 space-y-2">
                    {pkg.features.map((f, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm leading-relaxed text-navy-700">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-500" />
                        {tr(locale, f)}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function UpgradesSection({ locale, slug }: { locale: 'en' | 'zh' | 'fr'; slug: string }) {
  const product = getProduct(slug)
  if (!product) return null
  const upgrades = getUpgradesFor(product)
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-site px-4 sm:px-6 lg:px-8">
        <h2 className="font-display text-2xl font-bold text-navy-950 sm:text-3xl">
          {tr(locale, { en: 'Available upgrades', zh: '可选升级项', fr: 'Améliorations disponibles' })}
        </h2>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {upgrades.map((u) => (
            <div
              key={u.id}
              className="rounded-2xl border border-navy-100 p-5 transition hover:border-brand-500/50 hover:shadow-card"
            >
              <h3 className="font-display text-base font-bold text-navy-950">{tr(locale, u.name)}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-navy-600">{tr(locale, u.description)}</p>
              <p className="mt-3 text-xs leading-relaxed text-navy-400">
                {u.examples.map((e) => tr(locale, e)).join(' · ')}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-12 flex flex-wrap items-center gap-6 rounded-2xl bg-navy-950 p-8">
          <div className="min-w-[240px] flex-1">
            <h3 className="font-display text-xl font-bold text-white">
              {tr(locale, { en: 'Ready to spec it out?', zh: '准备好配置了吗？', fr: 'Prêt à spécifier votre unité ?' })}
            </h3>
            <p className="mt-2 text-sm text-navy-100/80">
              {tr(locale, {
                en: 'Open the configurator pre-loaded with this product line.',
                zh: '打开配置器，已自动载入该产品线。',
                fr: 'Ouvrez le configurateur préchargé avec cette gamme.',
              })}
            </p>
          </div>
          <Link href={`/${locale}/configure?product=${product.slug}`} className={btn.primary}>
            {tr(locale, { en: 'Start configuring', zh: '开始定制', fr: 'Commencer la configuration' })}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
