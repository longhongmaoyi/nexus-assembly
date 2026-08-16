import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { MapleLeaf } from '@/components/assembly/maple-leaf'
import { HeroParallaxImage } from '@/components/assembly/hero-parallax'
import { IconImage } from '@/components/assembly/icon-image'
import { assemblyCopy } from '@/lib/assembly-content'
import type { Locale, LocalizedText } from '@/lib/i18n'

type Localized = Record<Locale, string>

export function AssemblyHero({ locale }: { locale: Locale }) {
  const localized = (value: Localized) => value[locale]

  const FeatureIcon = ({ name }: { name: string }) => (
    <IconImage name={name} className="h-10 w-10" />
  )

  return (
    <section className="relative flex min-h-[560px] items-end overflow-hidden bg-assembly-navy text-white">
      <HeroParallaxImage />

      <div className="absolute inset-0 bg-assembly-navy/75" />
      <div className="pointer-events-none absolute inset-y-0 left-0 w-2/3 bg-gradient-to-r from-assembly-navy/80 via-assembly-navy/40 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-assembly-navy/80 to-transparent" />

      <div className="relative mx-auto w-full max-w-[1440px] px-6 py-10 sm:px-8 sm:py-12 lg:py-16">
        <div className="max-w-3xl" data-reveal>
          <p className="mb-3 flex items-center gap-3 text-[0.7rem] font-bold uppercase tracking-[0.2em] text-assembly-red">
            <MapleLeaf className="h-4 w-4 text-assembly-red" />
            {localized(assemblyCopy.hero.eyebrow)}
          </p>

          <h1 className="text-[clamp(2.5rem,5vw,5rem)] font-display font-bold leading-[0.92] tracking-[-0.04em]">
            {localized(assemblyCopy.hero.title)}
          </h1>

          <ul className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-2 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-white/90">
            {assemblyCopy.hero.services.map((service, index) => (
              <li key={index} className="flex items-center gap-3">
                {index > 0 && <span className="text-assembly-red">•</span>}
                {localized(service)}
              </li>
            ))}
          </ul>
        </div>

        <div
          className="mx-auto mt-8 grid max-w-5xl grid-cols-2 gap-4 border-t border-white/10 pt-5 sm:grid-cols-3 lg:grid-cols-6 lg:gap-3"
          data-reveal
        >
          {assemblyCopy.features.map((feature) => (
            <div key={feature.icon} className="flex flex-col items-center text-center">
              <div className="mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-white/10">
                <FeatureIcon name={feature.icon} />
              </div>
              <span className="text-sm font-semibold text-white">{localized(feature.label)}</span>
            </div>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap gap-4" data-reveal>
          <Link
            href={`/${locale}/products`}
            className="inline-flex items-center justify-center gap-2 rounded-md bg-assembly-red px-8 py-3 text-xs font-bold uppercase tracking-[0.1em] text-white shadow-sm transition-all hover:bg-assembly-red/90 hover:shadow-md active:scale-[0.98] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-assembly-red/25"
          >
            {localized(assemblyCopy.hero.primaryCta)}
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href={`/${locale}/assembly-centre`}
            className="inline-flex items-center justify-center gap-2 rounded-md bg-assembly-navy px-8 py-3 text-xs font-bold uppercase tracking-[0.1em] text-white ring-1 ring-inset ring-white/25 transition-all hover:bg-assembly-navy/80 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/25"
          >
            {localized(assemblyCopy.hero.secondaryCta)}
          </Link>
        </div>
      </div>
    </section>
  )
}

