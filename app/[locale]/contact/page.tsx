import type { Metadata } from 'next'
import { Mail, MapPin, Phone, Clock } from 'lucide-react'
import { ContactForm } from '@/components/site/forms'
import { CONTACT_LABELS, SITE } from '@/lib/site'
import { defaultLocale, isLocale, tr } from '@/lib/i18n'
import { languageAlternates } from '@/lib/seo'
import { PageHero } from '@/components/site/ui'

const PAGE_PATH = '/contact'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const loc = isLocale(locale) ? locale : defaultLocale
  const titles = {
    en: 'Contact Us',
    zh: '联系我们',
    fr: 'Nous joindre',
  }
  const descs = {
    en: 'Reach the NEXUS Assembly Centre team in Markham, Ontario for quotations, partnerships and support.',
    zh: '联系位于安大略省万锦市的 NEXUS 组装中心团队，获取报价、合作与支持。',
    fr: 'Joignez l’équipe du Centre d’assemblage NEXUS à Markham, Ontario pour soumissions, partenariats et soutien.',
  }
  return {
    title: titles[loc],
    description: descs[loc],
    alternates: {
      canonical: `/${loc}${PAGE_PATH}`,
      languages: languageAlternates(PAGE_PATH),
    },
  }
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const loc = isLocale(locale) ? locale : defaultLocale

  const infoItems = [
    { icon: MapPin, label: CONTACT_LABELS.address, value: SITE.addressLine },
    { icon: Phone, label: CONTACT_LABELS.phone, value: SITE.phone, href: `tel:${SITE.phoneHref}` },
    { icon: Mail, label: CONTACT_LABELS.email, value: SITE.email, href: `mailto:${SITE.email}` },
    { icon: Clock, label: CONTACT_LABELS.hours, value: tr(loc, SITE.hours) },
  ]

  return (
    <>
      <PageHero
        eyebrow={tr(loc, CONTACT_LABELS.email)}
        title={
          tr(loc, {
            en: 'Let’s talk about your unit.',
            zh: '让我们聊聊您的项目。',
            fr: 'Parlons de votre unité.',
          })
        }
        description={
          tr(loc, {
            en: 'Quotations, supplier partnerships, inspections or delivery — send us a note and our team replies within two business days.',
            zh: '报价、供应商合作、检验或交付——请给我们留言，团队将在两个工作日内回复。',
            fr: 'Soumissions, partenariats fournisseurs, inspections ou livraison — écrivez-nous et notre équipe répond sous deux jours ouvrables.',
          })
        }
      />

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto grid max-w-site gap-12 px-4 sm:px-6 lg:grid-cols-5 lg:px-8">
          <div className="space-y-4 lg:col-span-2">
            {infoItems.map(({ icon: Icon, label, value, href }) => (
              <div key={label.en} className="flex items-start gap-4 rounded-2xl border border-navy-100 bg-navy-50/60 p-5">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-navy-100 bg-white text-brand-600">
                  <Icon className="h-5 w-5" />
                </span>
                <div>
                  <p className="font-display text-xs font-bold uppercase tracking-widest text-navy-400">{tr(loc, label)}</p>
                  {href ? (
                    <a href={href} className="mt-1 block text-sm font-semibold text-navy-900 transition hover:text-brand-600">
                      {value}
                    </a>
                  ) : (
                    <p className="mt-1 text-sm font-semibold text-navy-900">{value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
          <div className="lg:col-span-3">
            <ContactForm locale={loc} />
          </div>
        </div>
      </section>
    </>
  )
}
