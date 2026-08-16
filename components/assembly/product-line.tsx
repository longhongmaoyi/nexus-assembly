'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Check } from 'lucide-react'
import { assemblyCopy } from '@/lib/assembly-content'
import type { Locale, LocalizedText } from '@/lib/i18n'

type Localized = Record<Locale, string>

export function AssemblyProductLine({ locale }: { locale: Locale }) {
  const localized = (value: Localized) => value[locale]
  const products = assemblyCopy.products
  const categories = assemblyCopy.productCategories
  const [activeCategory, setActiveCategory] = useState<string>('all')

  const tabs: { key: string; label: Localized }[] = [
    { key: 'all', label: assemblyCopy.productsSection.tabAll },
    ...Object.entries(categories).map(([key, label]) => ({ key, label })),
  ]

  const filtered = activeCategory === 'all'
    ? products
    : products.filter((p) => p.category === activeCategory)

  return (
    <section className="bg-white px-6 py-12 sm:px-8 sm:py-14 lg:py-16">
      <div className="mx-auto max-w-[1440px]">
        <div className="mb-8 text-center" data-reveal>
          <p className="mb-3 text-[0.7rem] font-bold uppercase tracking-[0.2em] text-assembly-red">
            {localized(assemblyCopy.productsSection.eyebrow)}
          </p>
          <h2 className="text-[clamp(2rem,4vw,2.75rem)] font-display font-bold text-assembly-navy leading-[0.94]">
            {localized(assemblyCopy.productsSection.eyebrow)}
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base text-assembly-slate">
            {localized(assemblyCopy.productsSection.body)}
          </p>
        </div>

        <div
          className="mb-8 flex flex-wrap items-center gap-3 border-b border-assembly-border"
          data-reveal
          role="tablist"
          aria-label="Product category filter"
        >
          {tabs.map((tab) => (
            <button
              key={tab.key}
              type="button"
              role="tab"
              aria-selected={activeCategory === tab.key}
              onClick={() => setActiveCategory(tab.key)}
              className={`
                -mb-px border-b-2 px-1 py-3 text-sm font-medium transition-all
                ${activeCategory === tab.key
                  ? 'border-assembly-red text-assembly-red'
                  : 'border-transparent text-assembly-slate hover:text-assembly-navy'}
              `}
            >
              {localized(tab.label)}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3" data-reveal>
          {filtered.map((product, index) => (
            <ProductCard
              key={product.title.en}
              product={product}
              locale={locale}
              localized={localized}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

function ProductCard({
  product,
  locale,
  localized,
  index,
}: {
  product: (typeof assemblyCopy.products)[number]
  locale: Locale
  localized: (value: Localized) => string
  index: number
}) {
  return (
    <div
      className="group relative flex flex-col overflow-hidden rounded-xl border border-assembly-border bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
      style={{ animationDelay: `${index * 80}ms` }}
    >
      {product.badge && (
        <span className="absolute top-4 left-4 z-10 rounded-md bg-assembly-red px-2.5 py-1 text-[0.65rem] font-bold uppercase tracking-[0.1em] text-white">
          {localized(product.badge)}
        </span>
      )}

      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={product.image}
          alt={localized(product.title)}
          fill
          quality={92}
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="mb-3 text-xl font-display font-bold text-assembly-navy">
          {localized(product.title)}
        </h3>
        <ul className="mb-5 space-y-1.5 text-sm text-assembly-slate">
          {product.specs.slice(0, 3).map((spec, i) => (
            <li key={`${product.title.en}-${i}`} className="flex items-start gap-2">
              <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-assembly-red" aria-hidden="true" />
              {localized(spec)}
            </li>
          ))}
        </ul>
        <Link
          href={product.href}
          className="mt-auto inline-flex items-center justify-center gap-2 rounded-md bg-assembly-navy px-5 py-2.5 text-xs font-bold uppercase tracking-[0.1em] text-white transition-colors hover:bg-assembly-navy/85 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-assembly-navy/25"
        >
          {localized(assemblyCopy.productsSection.viewDetails)}
        </Link>
      </div>
    </div>
  )
}
