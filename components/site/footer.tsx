import Link from 'next/link'
import NexusLogo from '@/components/NexusLogo'
import { CONTACT_LABELS, FOOTER_ABOUT, FOOTER_COLS, LEGAL, SITE } from '@/lib/site'
import { tr, type Locale } from '@/lib/i18n'

export function SiteFooter({ locale }: { locale: Locale }) {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-navy-950 text-white">
      <div className="mx-auto max-w-site px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Link href={`/${locale}`} aria-label={SITE.name} className="inline-block">
              <NexusLogo className="w-44 h-auto" />
            </Link>
            <p className="mt-5 max-w-sm leading-relaxed text-white/60">
              {tr(locale, FOOTER_ABOUT)}
            </p>
            <p className="mt-6 font-display font-semibold tracking-wide text-brand-400">
              {tr(locale, SITE.tagline)}
            </p>
          </div>

          {FOOTER_COLS.map((col) => (
            <div key={col.links.length} className="lg:col-span-3">
              <h3 className="font-display text-sm font-bold uppercase tracking-widest text-white/90">
                {tr(locale, col.title)}
              </h3>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={`/${locale}${link.href}`}
                      className="text-sm text-white/60 transition hover:text-brand-400"
                    >
                      {tr(locale, link.label)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="lg:col-span-4 xl:col-span-3">
            <h3 className="font-display text-sm font-bold uppercase tracking-widest text-white/90">
              {tr(locale, CONTACT_LABELS.address)}
            </h3>
            <address className="mt-4 space-y-3 text-sm not-italic leading-relaxed text-white/60">
              <p>{SITE.addressLine}</p>
              <p>
                <span className="text-white/40">{tr(locale, CONTACT_LABELS.phone)}: </span>
                <a href={`tel:${SITE.phoneHref}`} className="transition hover:text-brand-400">
                  {SITE.phone}
                </a>
              </p>
              <p>
                <span className="text-white/40">{tr(locale, CONTACT_LABELS.email)}: </span>
                <a href={`mailto:${SITE.email}`} className="transition hover:text-brand-400">
                  {SITE.email}
                </a>
              </p>
              <p>
                <span className="text-white/40">{tr(locale, CONTACT_LABELS.hours)}: </span>
                {tr(locale, SITE.hours)}
              </p>
            </address>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-white/45 sm:flex-row">
          <p>
            © {year} {SITE.legalName}. {tr(locale, LEGAL.rights)}
          </p>
          <p className="flex items-center gap-4">
            <span>{tr(locale, LEGAL.privacy)}</span>
            <span aria-hidden="true">·</span>
            <span>{tr(locale, LEGAL.terms)}</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
