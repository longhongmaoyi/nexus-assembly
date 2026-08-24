'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  localeNames,
  localeShortLabels,
  locales,
  stripLocale,
  type Locale,
} from '@/lib/i18n'
import { SWITCHER } from '@/lib/copy'

const LOCALE_COOKIE = 'nexus-locale'

export function LocaleSwitcher({ locale, compact = false }: { locale: Locale; compact?: boolean }) {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const pathname = usePathname() || '/en'

  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('mousedown', onClick)
    return () => document.removeEventListener('mousedown', onClick)
  }, [])

  function pathFor(next: Locale): string {
    const rest = stripLocale(pathname)
    return `/${next}${rest === '/' ? '' : rest}`
  }

  function switchTo(next: Locale) {
    document.cookie = `${LOCALE_COOKIE}=${next};path=/;max-age=31536000;samesite=lax`
    setOpen(false)
    window.location.assign(pathFor(next))
  }

  if (compact) {
    return (
      <div className="flex items-center gap-1">
        {locales.map((l) => (
          <button
            key={l}
            type="button"
            onClick={() => switchTo(l)}
            aria-current={l === locale ? 'true' : undefined}
            className={`rounded-full px-2.5 py-1 text-xs font-semibold transition ${
              l === locale
                ? 'bg-lime text-navy'
                : 'text-white/70 hover:bg-white/10 hover:text-white'
            }`}
          >
            {localeShortLabels[l]}
          </button>
        ))}
      </div>
    )
  }

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={SWITCHER.label[locale]}
        className="flex items-center gap-1.5 rounded-full border border-white/20 px-3 py-1.5 text-sm font-medium text-white transition hover:border-lime hover:text-lime"
      >
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <circle cx="12" cy="12" r="10" />
          <line x1="2" y1="12" x2="22" y2="12" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
        <span>{localeShortLabels[locale]}</span>
      </button>

      {open && (
        <ul
          role="listbox"
          className="absolute right-0 z-50 mt-2 w-40 overflow-hidden rounded-xl border border-navy-100 bg-white py-1 shadow-xl"
        >
          {locales.map((l) => (
            <li key={l}>
              <Link
                href={pathFor(l)}
                role="option"
                aria-selected={l === locale}
                onClick={(e) => {
                  e.preventDefault()
                  switchTo(l)
                }}
                className={`block px-4 py-2 text-sm transition hover:bg-navy-50 ${
                  l === locale ? 'font-bold text-navy-900' : 'text-navy-900/70'
                }`}
              >
                {localeNames[l]}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
