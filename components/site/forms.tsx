'use client'

import { useState } from 'react'
import { SITE } from '@/lib/site'
import { CFG, FORM } from '@/lib/copy'
import { tr, type Locale } from '@/lib/i18n'

interface FieldErrors {
  name?: string
  email?: string
  message?: string
}

function buildMailto(to: string, subject: string, body: string): string {
  return `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
}

function Field({
  label,
  required,
  error,
  children,
}: {
  label: string
  required?: boolean
  error?: string
  children: React.ReactNode
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-medium text-navy-800">
        {label} {required && <span className="text-brand-600">*</span>}
      </span>
      {children}
      {error && <span className="mt-1 block text-xs font-medium text-red-600">{error}</span>}
    </label>
  )
}

const inputCls =
  'w-full rounded-lg border border-navy-200 bg-white px-3.5 py-2.5 text-sm text-navy-900 placeholder:text-navy-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/30'

export function ContactForm({ locale }: { locale: Locale }) {
  const [errors, setErrors] = useState<FieldErrors>({})
  const [sent, setSent] = useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    const name = String(data.get('name') || '').trim()
    const email = String(data.get('email') || '').trim()
    const message = String(data.get('message') || '').trim()

    const next: FieldErrors = {}
    if (!name) next.name = tr(locale, FORM.errRequired)
    if (!email) next.email = tr(locale, FORM.errRequired)
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) next.email = tr(locale, FORM.errEmail)
    if (!message) next.message = tr(locale, FORM.errRequired)
    setErrors(next)
    if (Object.keys(next).length > 0) return

    const lines = [
      `${tr(locale, CFG.fieldName)}: ${name}`,
      `${tr(locale, CFG.fieldEmail)}: ${email}`,
      `${tr(locale, CFG.fieldPhone)}: ${String(data.get('phone') || '')}`,
      `${tr(locale, CFG.fieldCity)}: ${String(data.get('city') || '')}`,
      '',
      '---',
      message,
    ]
    window.location.assign(
      buildMailto(SITE.email, tr(locale, FORM.contactSubject), lines.join('\n'))
    )
    setSent(true)
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label={tr(locale, CFG.fieldName)} required error={errors.name}>
          <input name="name" type="text" autoComplete="name" className={inputCls} />
        </Field>
        <Field label={tr(locale, CFG.fieldEmail)} required error={errors.email}>
          <input name="email" type="email" autoComplete="email" className={inputCls} />
        </Field>
        <Field label={`${tr(locale, CFG.fieldPhone)} (${tr(locale, CFG.fieldMessageOptional)})`}>
          <input name="phone" type="tel" autoComplete="tel" className={inputCls} />
        </Field>
        <Field label={`${tr(locale, CFG.fieldCity)} (${tr(locale, CFG.fieldMessageOptional)})`}>
          <input name="city" type="text" className={inputCls} />
        </Field>
      </div>
      <Field label={tr(locale, CFG.fieldMessage)} required error={errors.message}>
        <textarea
          name="message"
          rows={5}
          placeholder={CFG.messagePlaceholder[locale]}
          className={inputCls}
        />
      </Field>
      <div className="flex items-center justify-between gap-4">
        <p className="text-xs text-navy-400">{tr(locale, FORM.requiredHint)}</p>
        <button
          type="submit"
          className="rounded-full bg-navy-950 px-7 py-3 font-display font-bold text-white transition hover:bg-navy-800"
        >
          {sent ? tr(locale, FORM.sending) : tr(locale, FORM.send)}
        </button>
      </div>
      {sent && (
        <p role="status" className="rounded-lg border border-brand-300 bg-brand-50 px-4 py-3 text-sm text-navy-900">
          {tr(locale, FORM.success)}
        </p>
      )}
    </form>
  )
}

export function SupplierForm({ locale }: { locale: Locale }) {
  const [errors, setErrors] = useState<FieldErrors>({})
  const [sent, setSent] = useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    const name = String(data.get('name') || '').trim()
    const email = String(data.get('email') || '').trim()
    const message = String(data.get('message') || '').trim()

    const next: FieldErrors = {}
    if (!name) next.name = tr(locale, FORM.errRequired)
    if (!email) next.email = tr(locale, FORM.errRequired)
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) next.email = tr(locale, FORM.errEmail)
    if (!message) next.message = tr(locale, FORM.errRequired)
    setErrors(next)
    if (Object.keys(next).length > 0) return

    const lines = [
      `${tr(locale, CFG.fieldName)}: ${name}`,
      `${tr(locale, CFG.fieldCompany)}: ${String(data.get('company') || '')}`,
      `${tr(locale, CFG.fieldEmail)}: ${email}`,
      `${tr(locale, CFG.fieldPhone)}: ${String(data.get('phone') || '')}`,
      `${tr(locale, CFG.fieldWebsite)}: ${String(data.get('website') || '')}`,
      '',
      '---',
      message,
    ]
    window.location.assign(
      buildMailto(SITE.email, tr(locale, FORM.supplierSubject), lines.join('\n'))
    )
    setSent(true)
    form.reset()
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label={tr(locale, CFG.fieldName)} required error={errors.name}>
          <input name="name" type="text" autoComplete="name" className={inputCls} />
        </Field>
        <Field label={`${tr(locale, CFG.fieldCompany)}`}>
          <input name="company" type="text" autoComplete="organization" className={inputCls} />
        </Field>
        <Field label={tr(locale, CFG.fieldEmail)} required error={errors.email}>
          <input name="email" type="email" autoComplete="email" className={inputCls} />
        </Field>
        <Field label={`${tr(locale, CFG.fieldPhone)} (${tr(locale, CFG.fieldMessageOptional)})`}>
          <input name="phone" type="tel" autoComplete="tel" className={inputCls} />
        </Field>
      </div>
      <Field label={`${tr(locale, CFG.fieldWebsite)} (${tr(locale, CFG.fieldMessageOptional)})`}>
        <input name="website" type="url" placeholder="https://" className={inputCls} />
      </Field>
      <Field
        label={tr(locale, {
          en: 'Factory capabilities & certifications',
          zh: '工厂能力与认证',
          fr: 'Capacités et certifications de l’usine',
        })}
        required
        error={errors.message}
      >
        <textarea
          name="message"
          rows={5}
          placeholder={CFG.messagePlaceholder[locale]}
          className={inputCls}
        />
      </Field>
      <div className="flex items-center justify-between gap-4">
        <p className="text-xs text-navy-400">{tr(locale, FORM.requiredHint)}</p>
        <button
          type="submit"
          className="rounded-full bg-navy-950 px-7 py-3 font-display font-bold text-white transition hover:bg-navy-800"
        >
          {sent ? tr(locale, FORM.sending) : tr(locale, FORM.send)}
        </button>
      </div>
      {sent && (
        <p role="status" className="rounded-lg border border-brand-300 bg-brand-50 px-4 py-3 text-sm text-navy-900">
          {tr(locale, FORM.success)}
        </p>
      )}
    </form>
  )
}
