'use client'

import { usePathname, useRouter } from 'next/navigation'
import { locales, type Locale } from '@/lib/i18n'

const toggleLabels: Record<Locale, string> = {
  en: 'EN',
  zh: '中文',
  fr: 'FR',
}

export function LocaleSwitcher({ locale }: { locale: Locale }) {
  const pathname = usePathname()
  const router = useRouter()

  const changeLocale = (nextLocale: Locale) => {
    if (nextLocale === locale) return
    const segments = pathname.split('/')
    if (segments[1] && locales.includes(segments[1] as Locale)) {
      segments[1] = nextLocale
      router.push(segments.join('/') || `/${nextLocale}`)
      return
    }
    router.push(`/${nextLocale}`)
  }

  return (
    <div
      className="inline-flex items-center gap-1 text-xs font-bold tracking-wide"
      role="group"
      aria-label="Language switcher"
    >
      {locales.map((item, index) => (
        <span key={item} className="flex items-center gap-1">
          {index > 0 && <span className="text-white/40">|</span>}
          <button
            type="button"
            onClick={() => changeLocale(item)}
            aria-pressed={item === locale}
            className={
              item === locale
                ? 'cursor-default text-white'
                : 'text-white/60 transition-colors hover:text-white'
            }
          >
            {toggleLabels[item]}
          </button>
        </span>
      ))}
    </div>
  )
}
