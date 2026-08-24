import Link from 'next/link'
import { ArrowRight, CheckCircle2, type LucideIcon } from 'lucide-react'
import type { ReactNode } from 'react'

export const btn = {
  primary:
    'inline-flex items-center justify-center gap-2 rounded-md bg-brand-500 px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-brand-600',
  outlineLight:
    'inline-flex items-center justify-center gap-2 rounded-md border border-white/40 px-6 py-3 text-sm font-bold text-white transition-colors hover:border-white hover:bg-white/10',
  outlineDark:
    'inline-flex items-center justify-center gap-2 rounded-md border border-navy-200 px-6 py-3 text-sm font-bold text-navy-900 transition-colors hover:border-navy-900',
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  dark = false,
  center = false,
}: {
  eyebrow?: string
  title: string
  subtitle?: string
  dark?: boolean
  center?: boolean
}) {
  return (
    <div className={center ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}>
      {eyebrow ? (
        <p className={`text-xs font-bold uppercase tracking-[0.22em] ${dark ? 'text-brand-400' : 'text-brand-600'}`}>
          {eyebrow}
        </p>
      ) : null}
      <h2 className={`mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl ${dark ? 'text-white' : 'text-navy-900'}`}>
        {title}
      </h2>
      {subtitle ? (
        <p className={`mt-4 text-base sm:text-lg ${dark ? 'text-navy-100/80' : 'text-navy-500'}`}>{subtitle}</p>
      ) : null}
    </div>
  )
}

export function PageHero({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow: string
  title: string
  description?: string
  children?: ReactNode
}) {
  return (
    <section className="relative overflow-hidden bg-navy-950">
      <div
        aria-hidden
        className="absolute inset-0"
        style={{ background: 'radial-gradient(60% 120% at 80% 0%, rgba(122,193,67,0.16), transparent 70%)' }}
      />
      <div className="relative mx-auto max-w-site px-4 py-16 sm:px-6 lg:py-20">
        <p className="text-xs font-bold uppercase tracking-[0.25em] text-brand-400">{eyebrow}</p>
        <h1 className="mt-3 max-w-3xl font-display text-4xl font-bold tracking-tight text-white sm:text-5xl">{title}</h1>
        {description ? <p className="mt-5 max-w-2xl text-lg text-navy-100/85">{description}</p> : null}
        {children}
      </div>
    </section>
  )
}

export function CheckItem({ children, dark = false }: { children: ReactNode; dark?: boolean }) {
  return (
    <li className="flex items-start gap-3">
      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-500" />
      <span className={`text-sm leading-6 ${dark ? 'text-navy-100/90' : 'text-navy-600'}`}>{children}</span>
    </li>
  )
}

export function FeatureIcon({ icon: Icon, dark = false }: { icon: LucideIcon; dark?: boolean }) {
  return (
    <span
      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full border ${
        dark ? 'border-white/20 bg-white/5 text-brand-400' : 'border-navy-100 bg-navy-50 text-brand-600'
      }`}
    >
      <Icon className="h-5 w-5" />
    </span>
  )
}

export function CtaBand({
  title,
  description,
  primary = { label: 'Configure Your Product', href: '/configure' },
  secondary = { label: 'Contact Us', href: '/contact' },
}: {
  title: string
  description: string
  primary?: { label: string; href: string }
  secondary?: { label: string; href: string }
}) {
  return (
    <section className="bg-navy-950">
      <div className="mx-auto max-w-site px-4 py-16 sm:px-6 lg:py-20">
        <div className="flex flex-col items-start justify-between gap-8 rounded-2xl border border-brand-500/30 bg-gradient-to-br from-navy-900 to-navy-800 p-8 sm:p-12 lg:flex-row lg:items-center">
          <div>
            <h2 className="font-display text-2xl font-bold tracking-tight text-white sm:text-3xl">{title}</h2>
            <p className="mt-3 max-w-xl text-navy-100/80">{description}</p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Link href={primary.href} className={btn.primary}>
              {primary.label}
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href={secondary.href} className={btn.outlineLight}>
              {secondary.label}
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
