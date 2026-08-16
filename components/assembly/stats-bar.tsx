'use client'

import { useEffect, useRef, useState } from 'react'
import { IconImage } from '@/components/assembly/icon-image'
import { assemblyCopy } from '@/lib/assembly-content'
import type { Locale, LocalizedText } from '@/lib/i18n'

type Localized = Record<Locale, string>

const STAT_PLACEHOLDERS = false

export function AssemblyStatsBar({ locale }: { locale: Locale }) {
  const localized = (value: Localized) => value[locale]
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => { if (entry.isIntersecting) setIsVisible(true) }),
      { threshold: 0.3 },
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  const prefersReducedMotion =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches

  return (
    <section ref={ref} className="border-y border-assembly-border/30 bg-white py-8">
      <div className="mx-auto grid w-full max-w-[1440px] grid-cols-2 gap-6 px-6 py-3 sm:grid-cols-3 lg:grid-cols-5 sm:px-8">
        {assemblyCopy.stats.map((stat, index) => {
          let displayValue = stat.value
          if (isVisible && !prefersReducedMotion) {
            displayValue = animateStatValue(stat.value)
          }
          return (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="mb-2 flex h-14 w-14 items-center justify-center rounded-full bg-assembly-red/10">
                <IconImage name={stat.icon} className="h-9 w-9" />
              </div>
              <dt className="text-3xl font-display font-bold text-assembly-navy">{displayValue}</dt>
              <dd className="mt-1 text-base text-assembly-slate">
                {localized(stat.label)}
              </dd>
            </div>
          )
        })}
      </div>
    </section>
  )
}

function animateStatValue(value: string): string {
  const match = value.match(/^([\d,]+)/)
  if (!match) return value
  const numStr = match[1].replace(/,/g, '')
  const num = parseInt(numStr, 10)
  const suffix = value.slice(match[0].length)
  return num.toLocaleString() + suffix
}
