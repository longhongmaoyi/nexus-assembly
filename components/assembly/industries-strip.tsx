import Image from 'next/image'
import { assemblyCopy } from '@/lib/assembly-content'
import type { Locale, LocalizedText } from '@/lib/i18n'

type Localized = Record<Locale, string>

export function AssemblyIndustriesStrip({ locale }: { locale: Locale }) {
  const localized = (value: Localized) => value[locale]

  return (
    <section className="px-6 py-12 sm:px-8 sm:py-14 lg:py-16">
      <div className="mx-auto max-w-[1440px]">
        <div className="mb-8 text-center" data-reveal>
          <p className="mb-3 text-[0.7rem] font-bold uppercase tracking-[0.2em] text-assembly-red">
            {localized(assemblyCopy.industries.eyebrow)}
          </p>
          <h2 className="text-[clamp(2rem,4vw,2.75rem)] font-display font-bold text-assembly-navy leading-[0.94]">
            {localized(assemblyCopy.industries.eyebrow)}
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6" data-reveal>
          {assemblyCopy.industryTiles.map((tile, index) => (
            <div
              key={tile.key}
              className="group relative flex aspect-[1/1] shrink-0 cursor-pointer flex-col items-center justify-end overflow-hidden rounded-xl border border-assembly-border"
              style={{ animationDelay: `${index * 60}ms` }}
            >
              <Image
                src={tile.image}
                alt=""
                fill
                quality={90}
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
              <span className="relative z-10 pb-6 text-center text-xl font-display font-bold text-white">
                {localized(tile.label)}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
