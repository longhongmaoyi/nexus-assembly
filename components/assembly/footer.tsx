import Link from 'next/link'
import { Mail, Phone, MapPin } from 'lucide-react'
import { AssemblyBrandMark } from '@/components/assembly/brand-mark'
import { LocaleSwitcher } from '@/components/assembly/locale-switcher'
import { assemblyCopy } from '@/lib/assembly-content'
import type { Locale, LocalizedText } from '@/lib/i18n'

type Localized = Record<Locale, string>

export function AssemblyFooter({ locale }: { locale: Locale }) {
  const localized = (value: Localized) => value[locale]

  const footerCol = (
    title: LocalizedText,
    links: { slug: string; label: LocalizedText }[],
  ) => (
    <div>
      <h3 className="text-sm font-bold uppercase tracking-[0.15em] text-assembly-red">{localized(title)}</h3>
      <div className="mt-4 grid gap-2.5">
        {links.map((link) => (
          <Link
            key={link.slug}
            href={`/${locale}/${link.slug}`}
            className="text-sm text-assembly-slate hover:text-assembly-navy transition-colors"
          >
            {localized(link.label)}
          </Link>
        ))}
      </div>
    </div>
  )

  return (
    <footer className="border-t border-assembly-border/30 bg-assembly-navy text-white">
      <div className="mx-auto w-full max-w-[1440px] px-6 py-10 sm:px-8 lg:py-12">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
          <div className="sm:col-span-2 lg:col-span-1">
            <AssemblyBrandMark locale={locale} />
            <p className="mt-4 text-xs font-medium text-assembly-slate/70">
              {localized(assemblyCopy.footer.tagline)}
            </p>
          </div>

          <div className="sm:col-span-2 lg:col-span-4">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {footerCol(assemblyCopy.footerLinks.products.title, assemblyCopy.footerLinks.products.links)}
              {footerCol(assemblyCopy.footerLinks.company.title, assemblyCopy.footerLinks.company.links)}
              {footerCol(assemblyCopy.footerLinks.resources.title, assemblyCopy.footerLinks.resources.links)}

              <div>
                <h3 className="text-sm font-bold uppercase tracking-[0.15em] text-assembly-red">
                  {localized(assemblyCopy.footer.contactTitle)}
                </h3>
                <div className="mt-4 grid gap-3">
                  <div className="flex items-start gap-3">
                    <Mail className="mt-0.5 h-5 w-5 shrink-0 text-assembly-red/70" />
                    <div>
                      <p className="text-xs uppercase tracking-[0.1em] text-assembly-slate/60">
                        {localized(assemblyCopy.footer.emailLabel)}
                      </p>
                      <a
                        href={`mailto:${localized(assemblyCopy.footer.email)}`}
                        className="text-sm text-white hover:text-assembly-red transition-colors"
                      >
                        {localized(assemblyCopy.footer.email)}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="mt-0.5 h-5 w-5 shrink-0 text-assembly-red/70" />
                    <div>
                      <p className="text-xs uppercase tracking-[0.1em] text-assembly-slate/60">
                        {localized(assemblyCopy.footer.phoneLabel)}
                      </p>
                      <a
                        href={`tel:${localized(assemblyCopy.footer.phone).replace(/\s/g, '')}`}
                        className="text-sm text-white hover:text-assembly-red transition-colors"
                      >
                        {localized(assemblyCopy.footer.phone)}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-assembly-red/70" />
                    <div>
                      <p className="text-xs uppercase tracking-[0.1em] text-assembly-slate/60">
                        {localized(assemblyCopy.footer.addressLabel)}
                      </p>
                      <address className="text-sm not-italic">
                        {localized(assemblyCopy.footer.address)}
                      </address>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-assembly-border/30 pt-6 text-sm text-assembly-slate/60 sm:flex-row">
          <span>
            © {new Date().getFullYear()} {localized(assemblyCopy.footer.legalName)}{' '}
            {localized(assemblyCopy.footer.rights)}
          </span>
          <div className="flex items-center gap-4">
            <span className="text-xs font-semibold uppercase tracking-[0.1em] text-assembly-red">
              {localized(assemblyCopy.footer.tagline)}
            </span>
            <span className="text-xs uppercase tracking-[0.1em]">
              {localized(assemblyCopy.footer.languagesLabel)}:
            </span>
            <LocaleSwitcher locale={locale} />
          </div>
        </div>
      </div>
    </footer>
  )
}
