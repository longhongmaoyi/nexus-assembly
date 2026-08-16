'use client'

import { useState } from 'react'
import { assemblyCopy } from '@/lib/assembly-content'
import type { Locale, LocalizedText } from '@/lib/i18n'

type Localized = Record<Locale, string>

export function AssemblyNewsletter({ locale }: { locale: Locale }) {
  const localized = (value: Localized) => value[locale]
  const copy = assemblyCopy.newsletter

  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const validate = (value: string) => {
    const trimmed = value.trim()
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return trimmed !== '' && emailRegex.test(trimmed)
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const inputValue = email

    if (!validate(inputValue)) {
      setError(localized(copy.errorMsg))
      return
    }

    setError(null)
    setIsSubmitting(true)

    // ─── STUB — Replace with real email service API call ───
    // Example with Resend:
    //   const res = await fetch('/api/newsletter', {
    //     method: 'POST',
    //     body: JSON.stringify({ email: inputValue, locale }),
    //   })
    //   if (!res.ok) throw new Error('Subscription failed')
    // ────────────────────────────────────────────────────────

    await new Promise((r) => setTimeout(r, 800))
    setIsSubmitting(false)
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 5000)
  }

  return (
    <section className="bg-assembly-panel px-6 py-12 sm:px-8 sm:py-14 lg:py-16">
      <div className="mx-auto max-w-[1440px]">
        <div className="mx-auto max-w-2xl text-center" data-reveal>
          <p className="mb-3 text-[0.7rem] font-bold uppercase tracking-[0.2em] text-assembly-red">
            {localized(copy.eyebrow)}
          </p>
          <h2 className="text-[clamp(2rem,4vw,2.75rem)] font-display font-bold text-assembly-navy leading-[0.94]">
            {localized(copy.title)}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-assembly-slate">
            {localized(copy.body)}
          </p>

          <form onSubmit={handleSubmit} className="mx-auto mt-8 flex max-w-md flex-col gap-3">
            <div className="relative">
              <label htmlFor="newsletter-email" className="sr-only">
                {localized(copy.inputAriaLabel)}
              </label>
              <input
                id="newsletter-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={localized(copy.inputPlaceholder)}
                aria-label={localized(copy.inputAriaLabel)}
                aria-invalid={!!error}
                aria-describedby={error ? 'newsletter-error' : undefined}
                className={`w-full rounded-md border px-4 py-3 text-sm text-assembly-navy placeholder-assembly-slate/50 focus:outline-none focus:ring-2 ${
                  error
                    ? 'border-red-500 focus:ring-red-200'
                    : 'border-assembly-border focus:ring-assembly-red/25'
                }`}
                disabled={isSubmitting}
                required
              />
              {error && (
                <p id="newsletter-error" className="mt-2 text-sm text-red-500" role="alert">
                  {error}
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex items-center justify-center gap-2 rounded-md bg-assembly-red px-6 py-3 text-xs font-bold uppercase tracking-[0.1em] text-white transition-colors hover:bg-assembly-red/90 disabled:cursor-not-allowed disabled:opacity-60 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-assembly-red/25"
            >
              {isSubmitting ? localized(copy.validating) : localized(copy.submitBtn)}
            </button>

            {submitted && (
              <p className="text-center text-sm text-green-600" role="status">
                {localized(copy.successMsg)}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
