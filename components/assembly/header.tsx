'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, Search } from 'lucide-react'
import { AssemblyBrandMark } from '@/components/assembly/brand-mark'
import { LocaleSwitcher } from '@/components/assembly/locale-switcher'
import type { Locale, LocalizedText } from '@/lib/i18n'
import { assemblyNavigation, assemblyCopy } from '@/lib/assembly-content'

type Localized = Record<Locale, string>

export function AssemblyHeader({ locale }: { locale: Locale }) {
  const localized = (value: Localized) => value[locale]
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const isActive = (slug: string) => {
    if (slug === 'home') {
      return pathname === `/${locale}` || pathname.endsWith('/assembly-home')
    }
    return pathname === `/${locale}/${slug}`
  }

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-assembly-navy/95 backdrop-blur-md">
        <div className="mx-auto flex h-20 w-full max-w-[1440px] items-center justify-between gap-4 px-6 sm:px-8">
          <AssemblyBrandMark locale={locale} />

          <nav className="hidden items-center gap-7 xl:flex" aria-label="Primary navigation">
            {assemblyNavigation.map((item) => (
              <Link
                key={item.slug}
                href={item.slug === 'home' ? `/${locale}/assembly-home` : `/${locale}/${item.slug}`}
                className={`pb-1.5 pt-1 text-sm font-semibold transition-colors ${
                  isActive(item.slug)
                    ? 'border-b-2 border-assembly-red text-white'
                    : 'border-b-2 border-transparent text-white/80 hover:border-assembly-red/50 hover:text-white'
                }`}
              >
                {localized(item.label)}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-6 xl:flex">
            <button
              type="button"
              aria-label={localized({ en: 'Search', zh: '搜索', fr: 'Rechercher' })}
              className="text-white/70 transition-colors hover:text-white"
            >
              <Search className="h-5 w-5" />
            </button>
            <LocaleSwitcher locale={locale} />
            <Link
              href={`/${locale}/contact`}
              className="inline-flex items-center justify-center gap-2 rounded-md bg-assembly-red px-6 py-2.5 text-xs font-bold uppercase tracking-[0.1em] text-white transition-colors hover:bg-assembly-red/90 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-assembly-red/25"
            >
              {localized(assemblyCopy.nav.quote)}
            </Link>
          </div>

          <button
            type="button"
            aria-label={localized({ en: 'Menu', zh: '菜单', fr: 'Menu' })}
            aria-controls="assembly-mobile-menu"
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="rounded-md p-2 text-white hover:bg-white/10 xl:hidden"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        <div
          id="assembly-mobile-menu"
          className={`overflow-hidden border-t border-white/10 bg-assembly-navy transition-all duration-300 xl:hidden ${
            mobileMenuOpen ? 'max-h-screen' : 'max-h-0'
          }`}
        >
          <nav className="flex flex-col gap-1 px-4 py-2" aria-label="Mobile navigation">
            {assemblyNavigation.map((item) => (
              <Link
                key={item.slug}
                href={item.slug === 'home' ? `/${locale}/assembly-home` : `/${locale}/${item.slug}`}
                className="py-3 text-base font-semibold text-white transition-colors hover:text-assembly-red"
                onClick={() => setMobileMenuOpen(false)}
              >
                {localized(item.label)}
              </Link>
            ))}
            <div className="flex items-center justify-between border-t border-white/10 py-4">
              <LocaleSwitcher locale={locale} />
              <Link
                href={`/${locale}/contact`}
                className="inline-flex items-center justify-center gap-2 rounded-md bg-assembly-red px-5 py-2 text-xs font-bold uppercase tracking-[0.1em] text-white transition-colors hover:bg-assembly-red/90"
              >
                {localized(assemblyCopy.nav.quote)}
              </Link>
            </div>
          </nav>
        </div>
      </header>
    </>
  )
}
