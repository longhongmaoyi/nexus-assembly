'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import NexusLogo from '@/components/NexusLogo'
import { LocaleSwitcher } from '@/components/site/locale-switcher'
import { NAV, CTA, SITE } from '@/lib/site'
import { tr, type Locale } from '@/lib/i18n'

export function SiteHeader({ locale }: { locale: Locale }) {
  const [openMenu, setOpenMenu] = useState<string | null>(null)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileSection, setMobileSection] = useState<number | null>(null)
  const hoverTimer = useRef<ReturnType<typeof setTimeout> | null>(null)
  const pathname = usePathname() || '/en'

  useEffect(() => {
    setMobileOpen(false)
    setOpenMenu(null)
  }, [pathname])

  function hrefFor(itemHref?: string): string | null {
    if (itemHref === undefined) return null
    return itemHref === '' ? `/${locale}` : `/${locale}${itemHref}`
  }

  function isActive(itemHref?: string): boolean {
    const target = hrefFor(itemHref)
    if (!target) return false
    if (itemHref === '') return pathname === `/${locale}`
    return pathname === target || pathname.startsWith(`${target}/`)
  }

  function openWithDelay(label: string) {
    if (hoverTimer.current) clearTimeout(hoverTimer.current)
    setOpenMenu(label)
  }
  function closeWithDelay() {
    if (hoverTimer.current) clearTimeout(hoverTimer.current)
    hoverTimer.current = setTimeout(() => setOpenMenu(null), 120)
  }

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-navy-950/95 backdrop-blur">
      <div className="mx-auto flex h-[76px] max-w-site items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link
          href={`/${locale}`}
          aria-label={`${SITE.name} — ${tr(locale, { en: 'Home', zh: '首页', fr: 'Accueil' })}`}
          className="shrink-0"
        >
          <NexusLogo className="w-40 h-auto sm:w-48" />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label={tr(locale, { en: 'Main', zh: '主导航', fr: 'Principale' })}>
          {NAV.map((item) => {
            const label = tr(locale, item.label)
            const link = hrefFor(item.href)
            if (!item.children) {
              return (
                <Link
                  key={label}
                  href={link as string}
                  className={`rounded-full px-3 py-2 text-sm font-medium transition xl:px-4 ${
                    isActive(item.href)
                      ? 'bg-white/10 text-brand-400'
                      : 'text-white/85 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  {label}
                </Link>
              )
            }
            const menuOpen = openMenu === label
            return (
              <div
                key={label}
                className="relative"
                onMouseEnter={() => openWithDelay(label)}
                onMouseLeave={closeWithDelay}
              >
                <button
                  type="button"
                  aria-expanded={menuOpen}
                  onClick={() => setOpenMenu(menuOpen ? null : label)}
                  className={`flex items-center gap-1 rounded-full px-3 py-2 text-sm font-medium transition xl:px-4 ${
                    item.children.some((c) => isActive(c.href))
                      ? 'text-brand-400'
                      : 'text-white/85 hover:text-white'
                  }`}
                >
                  {label}
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={`transition-transform ${menuOpen ? 'rotate-180' : ''}`} aria-hidden="true"><polyline points="6 9 12 15 18 9"/></svg>
                </button>

                {menuOpen && (
                  <div className="absolute left-1/2 top-full w-[520px] -translate-x-1/2 pt-2">
                    <div className="grid grid-cols-2 gap-1 overflow-hidden rounded-2xl border border-navy-100 bg-white p-2 shadow-card-lg">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={`/${locale}${child.href}`}
                          onClick={() => setOpenMenu(null)}
                          className="group rounded-xl p-3 transition hover:bg-navy-50"
                        >
                          <span className="block font-display text-sm font-semibold text-navy-900 group-hover:text-brand-600">
                            {tr(locale, child.label)}
                          </span>
                          <span className="mt-0.5 block text-xs leading-relaxed text-navy-500">
                            {tr(locale, child.desc)}
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )
          })}
        </nav>

        {/* Right cluster */}
        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <div className="hidden md:block">
            <LocaleSwitcher locale={locale} />
          </div>
          <Link
            href={`/${locale}/contact`}
            className="hidden rounded-full bg-brand-500 px-4 py-2.5 font-display text-sm font-bold text-navy-950 shadow-md transition hover:-translate-y-0.5 hover:bg-brand-400 sm:inline-flex xl:px-6"
          >
            {tr(locale, CTA.requestQuote)}
          </Link>
          <button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            aria-expanded={mobileOpen}
            aria-label={tr(locale, { en: 'Menu', zh: '菜单', fr: 'Menu' })}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-white transition hover:bg-white/10 lg:hidden"
          >
            {mobileOpen ? (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
            ) : (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
            )}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <MobileNav
          locale={locale}
          section={mobileSection}
          setSection={setMobileSection}
          close={() => setMobileOpen(false)}
        />
      )}
    </header>
  )
}

function MobileNav({
  locale,
  section,
  setSection,
  close,
}: {
  locale: Locale
  section: number | null
  setSection: (v: number | null) => void
  close: () => void
}) {
  function linkFor(itemHref?: string): string {
    return itemHref === undefined || itemHref === '' ? `/${locale}` : `/${locale}${itemHref}`
  }
  return (
    <nav className="max-h-[calc(100vh-76px)] overflow-y-auto border-t border-white/10 bg-navy-950 px-4 pb-8 pt-4 lg:hidden">
      <ul className="space-y-1">
        {NAV.map((item, i) => {
          const label = tr(locale, item.label)
          const link = linkFor(item.href)
          if (!item.children) {
            return (
              <li key={label}>
                <Link href={link as string} onClick={close} className="block rounded-lg px-3 py-3 font-medium text-white hover:bg-white/10">
                  {label}
                </Link>
              </li>
            )
          }
          const expanded = section === i
          return (
            <li key={label}>
              <button
                type="button"
                aria-expanded={expanded}
                onClick={() => setSection(expanded ? null : i)}
                className="flex w-full items-center justify-between rounded-lg px-3 py-3 font-medium text-white hover:bg-white/10"
              >
                {label}
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={`transition-transform ${expanded ? 'rotate-180' : ''}`} aria-hidden="true"><polyline points="6 9 12 15 18 9"/></svg>
              </button>
              {expanded && (
                <ul className="mb-2 ml-3 space-y-1 border-l border-white/10 pl-3">
                  {item.children.map((child) => (
                    <li key={child.href}>
                      <Link
                        href={`/${locale}${child.href}`}
                        onClick={close}
                        className="block rounded-lg px-3 py-2.5 text-sm text-white/80 hover:bg-white/10 hover:text-brand-400"
                      >
                        {tr(locale, child.label)}
                        <span className="block text-xs text-white/45">{tr(locale, child.desc)}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          )
        })}
      </ul>
      <div className="mt-6 space-y-4 border-t border-white/10 pt-6">
        <LocaleSwitcher locale={locale} compact />
        <Link
          href={`/${locale}/contact`}
          onClick={close}
          className="block rounded-full bg-brand-500 px-6 py-3 text-center font-display font-bold text-navy-950"
        >
          {tr(locale, CTA.requestQuote)}
        </Link>
      </div>
    </nav>
  )
}
