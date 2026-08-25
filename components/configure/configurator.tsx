'use client'

import { useEffect, useState } from 'react'
import {
  PRODUCTS,
  getProduct,
  getTier,
  getUpgradesFor,
  type PackageTierId,
} from '@/lib/products'
import { CFG, FORM } from '@/lib/copy'
import { SITE } from '@/lib/site'
import { tr, type Locale } from '@/lib/i18n'

const STORAGE_KEY = 'nexus-configuration-v1'
const STEPS_COUNT = 6

interface ContactInfo {
  name: string
  email: string
  phone: string
  city: string
  province: string
  message: string
}

interface ConfigState {
  productId: string | null
  tierId: PackageTierId | null
  upgradeIds: string[]
  contact: ContactInfo
}

const EMPTY_STATE: ConfigState = {
  productId: null,
  tierId: null,
  upgradeIds: [],
  contact: { name: '', email: '', phone: '', city: '', province: '', message: '' },
}

function makeReferenceId(): string {
  const year = new Date().getFullYear()
  const rand = Math.floor(1000 + Math.random() * 9000)
  return `NEX-${year}-${rand}`
}

function loadState(): ConfigState | null {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY)
    if (!raw) return null
    const parsed = JSON.parse(raw) as Partial<ConfigState>
    if (!parsed || typeof parsed !== 'object') return null
    return {
      productId: typeof parsed.productId === 'string' ? parsed.productId : null,
      tierId: parsed.tierId ?? null,
      upgradeIds: Array.isArray(parsed.upgradeIds)
        ? parsed.upgradeIds.filter((u) => typeof u === 'string')
        : [],
      contact: {
        ...EMPTY_STATE.contact,
        ...(parsed.contact && typeof parsed.contact === 'object' ? parsed.contact : {}),
      },
    }
  } catch {
    return null
  }
}

export function Configurator({ locale }: { locale: Locale }) {
  const [step, setStep] = useState(0)
  const [visited, setVisited] = useState(0)
  const [state, setState] = useState<ConfigState>(EMPTY_STATE)
  const [hydrated, setHydrated] = useState(false)
  const [referenceId, setReferenceId] = useState<string | null>(null)

  // Hydrate once on mount; support /configure?product=<slug> deep links.
  useEffect(() => {
    const saved = loadState()
    let next = saved ?? EMPTY_STATE
    const params = new URLSearchParams(window.location.search)
    const slug = params.get('product')
    if (slug) {
      const product = getProduct(slug)
      if (product && product.slug !== next.productId) {
        next = { ...EMPTY_STATE, productId: product.slug }
        setStep(1)
        setVisited(1)
      }
    }
    setState(next)
    setHydrated(true)
  }, [])

  // Auto-save on every change
  useEffect(() => {
    if (!hydrated) return
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
    } catch {
      /* storage unavailable — ignore */
    }
  }, [state, hydrated])

  function goTo(next: number) {
    const clamped = Math.max(0, Math.min(STEPS_COUNT - 1, next))
    setStep(clamped)
    setVisited((v) => Math.max(v, clamped))
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const product = state.productId ? getProduct(state.productId) : undefined
  const tier = state.tierId ? getTier(state.tierId) : null

  function selectProduct(slug: string) {
    setState((s) => ({ ...s, productId: slug, tierId: null, upgradeIds: [] }))
  }
  function toggleUpgrade(id: string) {
    setState((s) => ({
      ...s,
      upgradeIds: s.upgradeIds.includes(id)
        ? s.upgradeIds.filter((x) => x !== id)
        : [...s.upgradeIds, id],
    }))
  }
  function updateContact(patch: Partial<ContactInfo>) {
    setState((s) => ({ ...s, contact: { ...s.contact, ...patch } }))
  }

  function finish() {
    setReferenceId(makeReferenceId())
    goTo(5)
  }

  function handleRestart() {
    setState(EMPTY_STATE)
    setReferenceId(null)
    goTo(0)
  }

  const contactValid =
    state.contact.name.trim() !== '' &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(state.contact.email.trim())

  const canContinue =
    (step === 0 && Boolean(state.productId)) ||
    (step === 1 && Boolean(state.tierId)) ||
    step === 2 ||
    (step === 3 && contactValid) ||
    step === 4 ||
    step === 5

  return (
    <div className="mx-auto max-w-site px-4 pb-24 pt-10 sm:px-6 lg:px-8">
      <StepRail locale={locale} step={step} maxVisited={visited} onGo={goTo} />

      <div className="mt-12">
        {step === 0 && <ProductStep locale={locale} state={state} onSelect={selectProduct} />}
        {step === 1 && product && (
          <PackageStep
            locale={locale}
            productSlug={product.slug}
            selectedTier={state.tierId}
            onSelect={(id) => setState((s) => ({ ...s, tierId: id }))}
          />
        )}
        {step === 2 && product && (
          <UpgradeStep locale={locale} productSlug={product.slug} selected={state.upgradeIds} onToggle={toggleUpgrade} />
        )}
        {step === 3 && <DetailsStep locale={locale} contact={state.contact} onChange={updateContact} />}
        {step === 4 && product && tier && (
          <ReviewStep
            locale={locale}
            state={state}
            productSlug={product.slug}
            referenceId={referenceId}
          />
        )}
        {step === 5 && product && tier && (
          <DoneStep
            locale={locale}
            state={state}
            productSlug={product.slug}
            referenceId={referenceId ?? ''}
            onRestart={handleRestart}
          />
        )}
      </div>

      {step < 5 && (
        <div className="mt-10 flex items-center justify-between border-t border-navy-100 pt-6">
          <button
            type="button"
            onClick={() => goTo(step - 1)}
            disabled={step === 0}
            className="rounded-full border border-navy-200 px-6 py-3 font-display text-sm font-semibold text-navy-800 transition enabled:hover:border-navy-400 disabled:opacity-40"
          >
            {tr(locale, CFG.back)}
          </button>
          <button
            type="button"
            onClick={() => (step === 4 ? finish() : goTo(step + 1))}
            disabled={!canContinue}
            className="rounded-full bg-brand-500 px-8 py-3 font-display font-bold text-navy-950 shadow-md transition hover:-translate-y-0.5 hover:bg-brand-400 disabled:cursor-not-allowed disabled:opacity-40"
          >
            {step === 4 ? tr(locale, CFG.emailSummary) : tr(locale, CFG.continue)}
          </button>
        </div>
      )}
    </div>
  )
}

function StepRail({
  locale,
  step,
  maxVisited,
  onGo,
}: {
  locale: Locale
  step: number
  maxVisited: number
  onGo: (n: number) => void
}) {
  return (
    <ol className="grid grid-cols-2 gap-2 sm:flex sm:flex-wrap sm:gap-x-6">
      {CFG.steps.map((s, i) => {
        const label = tr(locale, s)
        const isCurrent = i === step
        const canVisit = i <= maxVisited && i <= maxVisited && i <= Math.max(step, maxVisited)
        return (
          <li key={label}>
            <button
              type="button"
              disabled={!canVisit || isCurrent}
              onClick={() => onGo(i)}
              aria-current={isCurrent ? 'step' : undefined}
              className={`flex w-full items-center gap-2 rounded-full px-4 py-2 text-left text-sm font-semibold transition sm:w-auto ${
                isCurrent
                  ? 'bg-navy-950 text-white'
                  : canVisit
                    ? 'text-navy-700 hover:bg-navy-100'
                    : 'text-navy-300'
              }`}
            >
              <span
                className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-bold ${
                  isCurrent
                    ? 'bg-brand-500 text-navy-950'
                    : canVisit
                      ? 'border border-navy-300 text-navy-600'
                      : 'border border-navy-200 text-navy-300'
                }`}
              >
                {i + 1}
              </span>
              {label}
            </button>
          </li>
        )
      })}
    </ol>
  )
}

function ProductStep({
  locale,
  state,
  onSelect,
}: {
  locale: Locale
  state: ConfigState
  onSelect: (slug: string) => void
}) {
  return (
    <section>
      <h2 className="font-display text-2xl font-bold text-navy-950">{tr(locale, CFG.productTitle)}</h2>
      <p className="mt-1 text-navy-500">{tr(locale, CFG.productDesc)}</p>
      <div className="mt-8 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {PRODUCTS.map((p) => {
          const selected = state.productId === p.slug
          return (
            <button
              key={p.slug}
              type="button"
              onClick={() => onSelect(p.slug)}
              aria-pressed={selected}
              className={`rounded-2xl border-2 p-6 text-left transition hover:-translate-y-0.5 hover:shadow-card-lg ${
                selected ? 'border-brand-500 bg-brand-50 shadow-card' : 'border-navy-100 bg-white'
              }`}
            >
              <span className="flex items-center justify-between">
                <span className="font-display text-lg font-bold text-navy-950">
                  {tr(locale, p.name)}
                </span>
                <span
                  className={`ml-2 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 ${
                    selected ? 'border-brand-500 bg-brand-500' : 'border-navy-200'
                  }`}
                >
                  {selected && (
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#071423" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                  )}
                </span>
              </span>
              <span className="mt-2 block text-sm leading-relaxed text-navy-500">
                {tr(locale, p.cardSub)}
              </span>
            </button>
          )
        })}
      </div>
    </section>
  )
}

function PackageStep({
  locale,
  productSlug,
  selectedTier,
  onSelect,
}: {
  locale: Locale
  productSlug: string
  selectedTier: PackageTierId | null
  onSelect: (id: PackageTierId) => void
}) {
  const product = getProduct(productSlug)
  if (!product) return null
  return (
    <section>
      <h2 className="font-display text-2xl font-bold text-navy-950">{tr(locale, CFG.packageTitle)}</h2>
      <p className="mt-1 text-navy-500">
        {tr(locale, CFG.packageDesc)} · {tr(locale, product.name)}
      </p>
      <div className="mt-8 grid gap-5 lg:grid-cols-3">
        {product.packages.map((pkg) => {
          const meta = getTier(pkg.id)
          const selected = selectedTier === pkg.id
          return (
            <button
              key={pkg.id}
              type="button"
              onClick={() => onSelect(pkg.id)}
              aria-pressed={selected}
              className={`flex flex-col rounded-2xl border-2 p-6 text-left transition hover:-translate-y-0.5 hover:shadow-card-lg ${
                selected ? 'border-brand-500 bg-brand-50 shadow-card' : 'border-navy-100 bg-white'
              }`}
            >
              <span className="font-display text-xl font-bold text-navy-950">{tr(locale, meta.name)}</span>
              <span className="mt-1 text-sm text-navy-500">{tr(locale, meta.tagline)}</span>
              <span className="mt-4 font-display text-xs font-bold uppercase tracking-widest text-navy-400">
                {tr(locale, CFG.includedFeatures)}
              </span>
              <ul className="mt-2 space-y-1.5">
                {pkg.features.map((f, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-navy-800">
                    <svg className="mt-0.5 shrink-0" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#4E8429" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                    {tr(locale, f)}
                  </li>
                ))}
              </ul>
            </button>
          )
        })}
      </div>
    </section>
  )
}

function UpgradeStep({
  locale,
  productSlug,
  selected,
  onToggle,
}: {
  locale: Locale
  productSlug: string
  selected: string[]
  onToggle: (id: string) => void
}) {
  const product = getProduct(productSlug)
  if (!product) return null
  const upgrades = getUpgradesFor(product)
  return (
    <section>
      <h2 className="font-display text-2xl font-bold text-navy-950">{tr(locale, CFG.upgradesTitle)}</h2>
      <p className="mt-1 text-navy-500">{tr(locale, CFG.upgradesDesc)}</p>
      {selected.length === 0 && (
        <p className="mt-4 rounded-lg bg-navy-50 px-4 py-2.5 text-sm text-navy-600">
          {tr(locale, CFG.noneSelected)}
        </p>
      )}
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {upgrades.map((u) => {
          const isOn = selected.includes(u.id)
          return (
            <div
              key={u.id}
              className={`rounded-2xl border-2 p-5 transition ${
                isOn ? 'border-brand-500 bg-brand-50' : 'border-navy-100 bg-white'
              }`}
            >
              <button type="button" onClick={() => onToggle(u.id)} aria-pressed={isOn} className="flex w-full items-start justify-between gap-3 text-left">
                <span>
                  <span className="block font-display text-base font-bold text-navy-950">{tr(locale, u.name)}</span>
                  <span className="mt-1 block text-sm leading-relaxed text-navy-500">{tr(locale, u.description)}</span>
                </span>
                <span
                  aria-hidden="true"
                  className={`mt-0.5 flex h-5 w-10 shrink-0 items-center rounded-full px-0.5 transition ${
                    isOn ? 'bg-brand-500' : 'bg-navy-200'
                  }`}
                >
                  <span className={`h-[18px] w-[18px] transform rounded-full bg-white shadow transition ${isOn ? 'translate-x-[20px]' : ''}`} />
                </span>
              </button>
              {isOn && (
                <p className="mt-3 border-t border-brand-200 pt-3 text-xs leading-relaxed text-navy-600">
                  <span className="font-semibold text-navy-800">{tr(locale, CFG.examplesLabel)} </span>
                  {u.examples.map((e) => tr(locale, e)).join(' · ')}
                </p>
              )}
            </div>
          )
        })}
      </div>
    </section>
  )
}

function DetailsStep({
  locale,
  contact,
  onChange,
}: {
  locale: Locale
  contact: ContactInfo
  onChange: (patch: Partial<ContactInfo>) => void
}) {
  const inputCls =
    'w-full rounded-lg border border-navy-200 bg-white px-3.5 py-2.5 text-sm text-navy-900 placeholder:text-navy-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/30'
  return (
    <section>
      <h2 className="font-display text-2xl font-bold text-navy-950">{tr(locale, CFG.detailsTitle)}</h2>
      <p className="mt-1 text-navy-500">{tr(locale, CFG.detailsDesc)}</p>
      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="mb-1.5 block text-sm font-medium text-navy-800">{tr(locale, CFG.fieldName)} *</span>
          <input value={contact.name} onChange={(e) => onChange({ name: e.target.value })} type="text" autoComplete="name" required className={inputCls} />
        </label>
        <label className="block">
          <span className="mb-1.5 block text-sm font-medium text-navy-800">{tr(locale, CFG.fieldEmail)} *</span>
          <input value={contact.email} onChange={(e) => onChange({ email: e.target.value })} type="email" autoComplete="email" required className={inputCls} />
        </label>
        <label className="block">
          <span className="mb-1.5 block text-sm font-medium text-navy-800">{tr(locale, CFG.fieldPhone)}</span>
          <input value={contact.phone} onChange={(e) => onChange({ phone: e.target.value })} type="tel" autoComplete="tel" className={inputCls} />
        </label>
        <label className="block">
          <span className="mb-1.5 block text-sm font-medium text-navy-800">{tr(locale, CFG.fieldCity)}</span>
          <input value={contact.city} onChange={(e) => onChange({ city: e.target.value })} type="text" className={inputCls} />
        </label>
        <label className="block sm:col-span-2">
          <span className="mb-1.5 block text-sm font-medium text-navy-800">{tr(locale, CFG.fieldProvince)}</span>
          <input value={contact.province} onChange={(e) => onChange({ province: e.target.value })} type="text" placeholder={locale === 'fr' ? 'Ontario, Québec…' : locale === 'zh' ? '安大略省、魁北克省…' : 'Ontario, Quebec…'} className={inputCls} />
        </label>
        <label className="block sm:col-span-2">
          <span className="mb-1.5 block text-sm font-medium text-navy-800">{tr(locale, CFG.fieldMessageOptional)}</span>
          <textarea value={contact.message} onChange={(e) => onChange({ message: e.target.value })} rows={4} placeholder={CFG.messagePlaceholder[locale]} className={inputCls} />
        </label>
      </div>
    </section>
  )
}

function summaryLines(
  locale: Locale,
  state: ConfigState,
  productSlug: string,
  referenceId: string | null
): string[] {
  const product = getProduct(productSlug)
  if (!product) return []
  const tier = state.tierId ? getTier(state.tierId) : null
  const upgrades = getUpgradesFor(product).filter((u) => state.upgradeIds.includes(u.id))
  const lines = [
    `${tr(locale, CFG.referenceId)}: ${referenceId ?? '—'}`,
    `${tr(locale, CFG.productName)}: ${tr(locale, product.name)}`,
    `${tr(locale, CFG.packageName)}: ${tier ? tr(locale, tier.name) : '—'}`,
    `${tr(locale, CFG.upgradesName)}: ${
      upgrades.length > 0 ? upgrades.map((u) => tr(locale, u.name)).join(', ') : tr(locale, CFG.noUpgrades)
    }`,
    '',
    `--- ${tr(locale, CFG.detailsTitle)} ---`,
    `${tr(locale, CFG.fieldName)}: ${state.contact.name || '—'}`,
    `${tr(locale, CFG.fieldEmail)}: ${state.contact.email || '—'}`,
    `${tr(locale, CFG.fieldPhone)}: ${state.contact.phone || '—'}`,
    `${tr(locale, CFG.fieldCity)}: ${state.contact.city || '—'}`,
    `${tr(locale, CFG.fieldProvince)}: ${state.contact.province || '—'}`,
    `${tr(locale, CFG.fieldMessageOptional)}: ${state.contact.message || '—'}`,
    '',
    `${SITE.name} · ${SITE.url}`,
  ]
  return lines
}

function SummaryDoc({
  locale,
  state,
  productSlug,
  referenceId,
}: {
  locale: Locale
  state: ConfigState
  productSlug: string
  referenceId: string | null
}) {
  const product = getProduct(productSlug)
  if (!product) return null
  const tier = state.tierId ? getTier(state.tierId) : null
  const upgrades = getUpgradesFor(product).filter((u) => state.upgradeIds.includes(u.id))
  return (
    <div className="print-area rounded-2xl border border-navy-100 bg-white p-6 shadow-card sm:p-10">
      <div className="flex flex-wrap items-start justify-between gap-4 border-b-2 border-navy-950 pb-4">
        <div>
          <p className="font-display text-lg font-black tracking-tight text-navy-950">NEXUS ASSEMBLY CENTRE</p>
          <p className="text-xs text-navy-500">{SITE.addressLine} · {SITE.phone} · {SITE.email}</p>
        </div>
        <div className="text-right">
          <p className="font-display text-xs font-bold uppercase tracking-widest text-navy-400">{tr(locale, CFG.referenceId)}</p>
          <p className="font-display font-bold text-brand-600">{referenceId ?? '—'}</p>
        </div>
      </div>

      <dl className="mt-6 space-y-4">
        <div>
          <dt className="font-display text-xs font-bold uppercase tracking-widest text-navy-400">{tr(locale, CFG.productName)}</dt>
          <dd className="mt-0.5 font-display text-xl font-bold text-navy-950">{tr(locale, product.name)}</dd>
        </div>
        {tier && (
          <div>
            <dt className="font-display text-xs font-bold uppercase tracking-widest text-navy-400">{tr(locale, CFG.packageName)}</dt>
            <dd className="mt-0.5 text-sm font-semibold text-navy-900">{tr(locale, tier.name)} — {tr(locale, tier.tagline)}</dd>
            {(() => {
              const pkg = product.packages.find((p) => p.id === tier.id)
              return pkg ? (
                <ul className="mt-2 grid gap-x-6 gap-y-1 text-xs text-navy-700 sm:grid-cols-2">
                  {pkg.features.map((f, i) => <li key={i}>· {tr(locale, f)}</li>)}
                </ul>
              ) : null
            })()}
          </div>
        )}
        <div>
          <dt className="font-display text-xs font-bold uppercase tracking-widest text-navy-400">{tr(locale, CFG.upgradesName)}</dt>
          <dd className="mt-1 text-sm font-semibold text-navy-900">
            {upgrades.length === 0 ? (
              <span className="text-navy-500">{tr(locale, CFG.noUpgrades)}</span>
            ) : (
              <ul className="mt-1 space-y-1">
                {upgrades.map((u) => (
                  <li key={u.id}>
                    · {tr(locale, u.name)}
                    <span className="ml-1 font-normal text-navy-500">
                      ({u.examples.map((e) => tr(locale, e)).join(', ')})
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </dd>
        </div>
        <div className="grid gap-x-8 gap-y-3 border-t border-navy-100 pt-4 text-sm sm:grid-cols-2">
          {([
            [CFG.fieldName, state.contact.name],
            [CFG.fieldEmail, state.contact.email],
            [CFG.fieldPhone, state.contact.phone],
            [CFG.fieldCity, state.contact.city],
            [CFG.fieldProvince, state.contact.province],
          ] as const).map(([field, value]) => (
            <p key={field.en}>
              <span className="text-navy-500">{tr(locale, field)}: </span>
              <span className="font-semibold text-navy-900">{value || '—'}</span>
            </p>
          ))}
          {state.contact.message && (
            <p className="sm:col-span-2">
              <span className="text-navy-500">{tr(locale, CFG.fieldMessageOptional)}: </span>
              <span className="text-navy-800">{state.contact.message}</span>
            </p>
          )}
        </div>
      </dl>
    </div>
  )
}

function ReviewStep({
  locale,
  state,
  productSlug,
  referenceId,
}: {
  locale: Locale
  state: ConfigState
  productSlug: string
  referenceId: string | null
}) {
  const mailto = `mailto:${SITE.email}?subject=${encodeURIComponent(
    `${tr(locale, FORM.quoteSubject)}${referenceId ? ` (${referenceId})` : ''}`
  )}&body=${encodeURIComponent(summaryLines(locale, state, productSlug, referenceId).join('\n'))}`

  return (
    <section>
      <h2 className="font-display text-2xl font-bold text-navy-950">{tr(locale, CFG.reviewTitle)}</h2>
      <p className="mt-1 text-navy-500">{tr(locale, CFG.reviewDesc)}</p>
      <div className="mt-8">
        <SummaryDoc locale={locale} state={state} productSlug={productSlug} referenceId={referenceId} />
      </div>
      <div className="mt-6 flex flex-wrap gap-3">
        <button
          type="button"
          onClick={() => window.print()}
          className="inline-flex items-center gap-2 rounded-full border border-navy-200 px-6 py-3 font-display text-sm font-semibold text-navy-800 transition hover:border-navy-400"
        >
          {tr(locale, CFG.printSummary)}
        </button>
        <a
          href={mailto}
          className="inline-flex items-center gap-2 rounded-full bg-brand-500 px-6 py-3 font-display text-sm font-bold text-navy-950 shadow-md transition hover:-translate-y-0.5 hover:bg-brand-400"
        >
          {tr(locale, CFG.emailSummary)}
        </a>
      </div>
    </section>
  )
}

function DoneStep({
  locale,
  state,
  productSlug,
  referenceId,
  onRestart,
}: {
  locale: Locale
  state: ConfigState
  productSlug: string
  referenceId: string
  onRestart: () => void
}) {
  const mailto = `mailto:${SITE.email}?subject=${encodeURIComponent(
    `${tr(locale, FORM.quoteSubject)} (${referenceId})`
  )}&body=${encodeURIComponent(summaryLines(locale, state, productSlug, referenceId).join('\n'))}`

  return (
    <section className="mx-auto max-w-2xl text-center">
      <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-brand-500">
        <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#071423" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
      </span>
      <h2 className="mt-6 font-display text-3xl font-bold text-navy-950">{tr(locale, CFG.doneTitle)}</h2>
      <p className="mt-3 leading-relaxed text-navy-600">{tr(locale, CFG.doneBody)}</p>
      <p className="mt-4 text-sm text-navy-600">
        {tr(locale, CFG.doneRefNote)}{' '}
        <span className="font-display font-bold text-brand-600">{referenceId}</span>
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <a
          href={mailto}
          className="rounded-full bg-brand-500 px-7 py-3 font-display font-bold text-navy-950 shadow-md transition hover:-translate-y-0.5 hover:bg-brand-400"
        >
          {tr(locale, CFG.emailSummary)}
        </a>
        <button
          type="button"
          onClick={() => window.print()}
          className="rounded-full border border-navy-200 px-7 py-3 font-display font-semibold text-navy-800 transition hover:border-navy-400"
        >
          {tr(locale, CFG.printSummary)}
        </button>
      </div>
      <button type="button" onClick={onRestart} className="mt-8 text-sm font-medium text-navy-500 underline-offset-4 hover:text-navy-900 hover:underline">
        {tr(locale, CFG.restart)}
      </button>
    </section>
  )
}



