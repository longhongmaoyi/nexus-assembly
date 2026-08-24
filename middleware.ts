import { NextRequest, NextResponse } from 'next/server'
import { defaultLocale, locales, type Locale } from '@/lib/i18n'

const LOCALE_COOKIE = 'nexus-locale'

function detectLocale(req: NextRequest): Locale {
  const cookie = req.cookies.get(LOCALE_COOKIE)?.value
  if (cookie && (locales as readonly string[]).includes(cookie)) return cookie as Locale
  const accept = (req.headers.get('accept-language') || '').toLowerCase()
  for (const l of locales) {
    if (accept.startsWith(l)) return l
  }
  return defaultLocale
}

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl
  const hasLocale = locales.some((l) => pathname === `/${l}` || pathname.startsWith(`/${l}/`))
  if (hasLocale) return NextResponse.next()

  const locale = detectLocale(req)
  const url = req.nextUrl.clone()
  url.pathname = pathname === '/' ? `/${locale}` : `/${locale}${pathname}`
  return NextResponse.redirect(url)
}

export const config = {
  // Skip Next internals, static files (anything with a dot) and images
  matcher: ['/((?!_next|images|api|.*\\..*).*)'],
}
