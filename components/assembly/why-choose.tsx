import { IconImage } from '@/components/assembly/icon-image'
import { assemblyCopy } from '@/lib/assembly-content'
import type { Locale, LocalizedText } from '@/lib/i18n'

type Localized = Record<Locale, string>

export function AssemblyWhyChoose({ locale }: { locale: Locale }) {
  const localized = (value: Localized) => value[locale]
  const eyebrow = assemblyCopy.whyChoose.eyebrow

  return (
    <section className="bg-assembly-panel px-6 py-12 text-assembly-navy sm:px-8 sm:py-14 lg:py-16">
      <div className="mx-auto max-w-[1440px]">
        <div className="mb-10 text-center" data-reveal>
          <p className="mb-3 text-[0.7rem] font-bold uppercase tracking-[0.2em] text-assembly-red">
            {localized(eyebrow)}
          </p>
          <h2 className="text-[clamp(2rem,4vw,2.75rem)] font-display font-bold leading-[0.94]">
            {localized(eyebrow)}
          </h2>
        </div>

        <div className="mx-auto grid max-w-4xl gap-6 sm:grid-cols-2 lg:grid-cols-5" data-reveal>
          {assemblyCopy.whyChoose.features.map((feature, index) => {
            return (
              <div key={index} className="flex flex-col items-center text-center" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-sm">
                  <IconImage name={feature.icon} className="h-11 w-11" />
                </div>
                <h3 className="mb-2 text-xl font-bold">{localized(feature.title)}</h3>
                <p className="text-base text-assembly-slate">{localized(feature.subtitle)}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
