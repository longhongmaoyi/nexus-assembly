'use client'

import Image from 'next/image'
import Link from 'next/link'
import { IconImage } from '@/components/assembly/icon-image'
import { assemblyCopy } from '@/lib/assembly-content'
import type { Locale, LocalizedText } from '@/lib/i18n'

type Localized = Record<Locale, string>

export function AssemblyProcessBand({ locale }: { locale: Locale }) {
  const localized = (value: Localized) => value[locale]
  const steps = assemblyCopy.processSteps

  return (
    <section className="bg-white px-6 py-12 sm:px-8 sm:py-14 lg:py-16">
      <div className="mx-auto max-w-[1440px]">
        <div className="mb-10 text-center" data-reveal>
          <p className="mb-3 text-[0.7rem] font-bold uppercase tracking-[0.2em] text-assembly-red">
            {localized(assemblyCopy.process.eyebrow)}
          </p>
          <h2 className="text-[clamp(2rem,4vw,2.75rem)] font-display font-bold text-assembly-navy leading-[0.94]">
            {localized(assemblyCopy.process.title)}
          </h2>
        </div>

        {/* Mobile: vertical stepper */}
        <div data-reveal className="lg:hidden">
          <ol className="relative flex flex-col">
            <div className="absolute top-0 bottom-0 left-[19px] w-0.5 bg-assembly-border" />
            {steps.map((step, index) => {
              return (
                <li key={step.title.en} className="relative mb-8 pb-8 last:mb-0 last:pb-0">
                  <div className="absolute left-[-5px] top-0 flex h-8 w-8 items-center justify-center rounded-full border-2 border-assembly-red bg-white">
                    <span className="text-xs font-bold text-assembly-red">{String(index + 1).padStart(2, '0')}</span>
                  </div>
                  <div className="ml-10 flex items-start gap-6">
                    <div className="mt-1 flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-assembly-panel">
                      <IconImage name={step.icon} className="h-11 w-11" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-assembly-navy">{localized(step.title)}</h3>
                      <p className="mt-1 text-base text-assembly-slate">{localized(step.body)}</p>
                    </div>
                  </div>
                </li>
              )
            })}
          </ol>
        </div>

        {/* Desktop: horizontal timeline */}
        <div data-reveal className="hidden lg:block">
          <ol className="relative flex w-full">
            <div className="absolute top-10 left-0 right-0 h-0.5 bg-assembly-border" />
            {steps.map((step, index) => {
              return (
                <li key={step.title.en} className="relative flex flex-1 flex-col items-center">
                  <div className="absolute -top-1 flex h-8 w-8 items-center justify-center rounded-full border-2 border-assembly-red bg-white">
                    <span className="text-xs font-bold text-assembly-red">{String(index + 1).padStart(2, '0')}</span>
                  </div>
                  <div className="mt-14 flex h-28 w-28 items-center justify-center rounded-2xl bg-assembly-panel">
                    <IconImage name={step.icon} className="h-14 w-14" />
                  </div>
                  <h3 className="mt-6 text-center text-xl font-bold text-assembly-navy">{localized(step.title)}</h3>
                  <p className="mt-3 max-w-xs text-center text-base text-assembly-slate">{localized(step.body)}</p>
                </li>
              )
            })}
          </ol>
        </div>
      </div>
    </section>
  )
}

export function AssemblyCtaBand({ locale }: { locale: Locale }) {
  const localized = (value: Localized) => value[locale]

  return (
    <section className="relative border-t border-assembly-border/20 bg-assembly-panel px-6 py-12 sm:px-8 sm:py-14">
      <div className="mx-auto max-w-[1440px]">
        <div
          className="relative flex flex-col items-center justify-between gap-12 overflow-hidden rounded-2xl border border-assembly-border/30 bg-assembly-navy px-8 py-10 text-white sm:flex-row sm:px-14"
          data-reveal
        >
          <div className="absolute inset-0 bg-assembly-blueprint opacity-30" aria-hidden="true" />
          <Image
            src="/images/hero.png"
            alt=""
            fill
            quality={75}
            sizes="100vw"
            className="absolute inset-0 -z-10 object-cover opacity-10"
          />

          <div className="relative max-w-xl">
            <h2 className="text-[clamp(1.75rem,4vw,2.5rem)] font-display font-bold leading-[0.94]">
              {localized(assemblyCopy.ctaBand.title)}
            </h2>
            <p className="mt-4 text-base text-white/80">{localized(assemblyCopy.ctaBand.body)}</p>
          </div>

          <div className="relative flex flex-col gap-3 sm:flex-row">
            <Link
              href={`/${locale}/contact`}
              className="inline-flex items-center justify-center gap-2 rounded-md bg-assembly-red px-8 py-3 text-xs font-bold uppercase tracking-[0.1em] text-white transition-colors hover:bg-assembly-red/90 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-assembly-red/25"
            >
              {localized(assemblyCopy.ctaBand.primaryCta)}
            </Link>
            <Link
              href={`/${locale}/contact`}
              className="inline-flex items-center justify-center gap-2 rounded-md border border-white/30 px-8 py-3 text-xs font-bold uppercase tracking-[0.1em] text-white transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/25"
            >
              {localized(assemblyCopy.ctaBand.secondaryCta)}
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
