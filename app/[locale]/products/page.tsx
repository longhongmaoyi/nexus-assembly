import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { PRODUCT_SLUGS, getProduct } from '@/lib/products'
import { defaultLocale, isLocale, tr } from '@/lib/i18n'
import { languageAlternates } from '@/lib/seo'
import { PageHero, btn } from '@/components/site/ui'
import { Reveal } from '@/components/site/reveal'

const PAGE_PATH = '/products'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const loc = isLocale(locale) ? locale : defaultLocale
  const titles = { en: 'Products', zh: '产品中心', fr: 'Produits' }
  const descs = {
    en: 'Browse the five NEXUS product lines: modular living spaces, mobile commercial units, enclosed trailers, industrial solutions and commercial waste solutions.',
    zh: '浏览 NEXUS 五大产品线：模块化居住空间、移动商业单元、封闭式拖车、工业解决方案与商业垃圾解决方案。',
    fr: 'Découvrez les cinq gammes NEXUS : espaces de vie modulaires, unités commerciales mobiles, remorques fermées, solutions industrielles et déchets commerciaux.',
  }
  return {
    title: titles[loc],
    description: descs[loc],
    alternates: {
      canonical: `/${loc}${PAGE_PATH}`,
      languages: languageAlternates(PAGE_PATH),
    },
  }
}

export default async function ProductsPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const loc = isLocale(locale) ? locale : defaultLocale

  return (
    <>
      <PageHero
        eyebrow={tr(loc, { en: 'Our Product Solutions', zh: '产品解决方案', fr: 'Nos solutions de produits' })}
        title={tr(loc, {
          en: 'Five product lines. One Canadian assembly standard.',
          zh: '五大产品线，一个加拿大组装标准。',
          fr: 'Cinq gammes. Une norme canadienne d’assemblage.',
        })}
        description={tr(loc, {
          en: 'Every category ships in Standard, Comfort and Premium packages and can be personalized through our online configurator.',
          zh: '每个品类均提供标准版、舒适版与尊享版套餐，并可通过在线配置器个性化定制。',
          fr: 'Chaque catégorie est offerte en forfaits Standard, Confort et Premium et personnalisable en ligne.',
        })}
      />

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto grid max-w-site gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          {PRODUCT_SLUGS.map((slug, i) => {
            const product = getProduct(slug)
            if (!product) return null
            return (
              <Reveal key={slug} delay={(i % 2) * 60}>
                <Link
                  href={`/${loc}/products/${slug}`}
                  className="group flex h-full flex-col overflow-hidden rounded-3xl border border-navy-100 bg-white shadow-card transition hover:-translate-y-1 hover:shadow-card-lg"
                >
                  <div className="relative h-56 overflow-hidden bg-navy-100 sm:h-64">
                    <Image
                      src={product.image}
                      alt=""
                      fill
                      sizes="(max-width: 1024px) 100vw, 560px"
                      className="object-cover transition duration-500 group-hover:scale-105"
                    />
                    <span className="absolute left-4 top-4 rounded-full bg-navy-950/85 px-3 py-1 font-display text-xs font-bold uppercase tracking-widest text-brand-400 backdrop-blur">
                      {tr(loc, product.shortName)}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-7">
                    <h2 className="font-display text-2xl font-bold text-navy-950">{tr(loc, product.name)}</h2>
                    <p className="mt-1 text-sm font-semibold text-brand-600">{tr(loc, product.cardSub)}</p>
                    <p className="mt-3 flex-1 leading-relaxed text-navy-600">{tr(loc, product.tagline)}</p>
                    <span className="mt-5 inline-flex items-center gap-1.5 font-display text-sm font-bold text-navy-900 transition group-hover:text-brand-600">
                      {tr(loc, { en: 'View details', zh: '查看详情', fr: 'Voir les détails' })}
                      <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            )
          })}

          <Reveal delay={120}>
            <div className="flex h-full flex-col justify-between rounded-3xl bg-navy-950 p-8 shadow-card">
              <div>
                <p className="font-display text-xs font-bold uppercase tracking-[0.25em] text-brand-400">
                  {tr(loc, { en: 'Online Configurator', zh: '在线配置器', fr: 'Configurateur en ligne' })}
                </p>
                <h2 className="mt-3 font-display text-2xl font-bold text-white">
                  {tr(loc, { en: "Can't find an exact match?", zh: '没有完全匹配的产品？', fr: 'Pas exactement votre modèle ?' })}
                </h2>
                <p className="mt-3 leading-relaxed text-navy-100/75">
                  {tr(loc, {
                    en: 'Configure a base model with Standard, Comfort or Premium packages, then add upgrades — or send us your own drawings for a custom build.',
                    zh: '选择基础型号与标准版、舒适版或尊享版套餐，再添加升级项——或直接发送您的图纸进行定制。',
                    fr: 'Choisissez un modèle de base avec les forfaits Standard, Confort ou Premium, ajoutez des améliorations — ou envoyez vos plans sur mesure.',
                  })}
                </p>
              </div>
              <Link href={`/${loc}/configure`} className={`${btn.primary} mt-6 self-start`}>
                {tr(loc, { en: 'Open Configurator', zh: '打开配置器', fr: 'Ouvrir le configurateur' })}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
