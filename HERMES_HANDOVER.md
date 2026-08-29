# Nexus Assembly · Hermes Handover

> Project repository: `longhongmaoyi/nexus-assembly`
> Production domain (Vercel): `https://nexus-assembly.vercel.app`
> Planned custom domain: `www.nexusassembly.ca` (NOT registered yet — DNS will return NXDOMAIN).
> Other live projects — do NOT confuse with these:
> — `longhongmaoyi/yiwu-trade-link` → `yiwutradelink.com`
> — `longhongmaoyi/nexus-group-web` → `nexuslife.ca`

---

## 1. Project Identity & Architecture

### Tech Stack
| Layer | Technology | Version |
|---|---|---|
| Framework | **Next.js** | 15.x (App Router) |
| Runtime | **TypeScript** | 5.x |
| UI / Styling | **React** + **Tailwind CSS** + `postcss` | React 19 compat |
| Package manager | **npm** (9+) | `package-lock.json` |
| Linting | **ESLint 9** flat config | `@eslint/eslintrc` 3.x bridge |
| Images | `next/image` **`unoptimized: true`** | pre-optimized WebP/PNG/JPEG |

> No DB, no backend API. SSG with server-rendered routes. Content authored inline in `lib/`.

### Core Directory Map
```
app/[locale]/      page.tsx (Home entry), layout.tsx, not-found.tsx, ...
components/home/    home-page.tsx (all sections + smart-scroll)
components/configure/ configurator.tsx (state: useState/useEffect)
components/ui/      shared presentational primitives
lib/content.ts     HOME.* config + copy constants (HOME.configure* orphaned)
lib/copy.ts        localized EN/FR/ZH marketing strings
lib/i18n.ts        locale routing + tr() helper (EN/FR/ZH)
lib/site.ts        SITE.url='https://nexusassembly.ca' + contact email
lib/products.ts    product/tier/upgrade definitions
public/images/      static assets (e.g. configurator-trailer.jpg)
next.config.mjs     redirects, security headers, images config
eslint.config.mjs   next/core-web-vitals + next/typescript (flat)
tailwind.config.js
tsconfig.json
```

### State Management & External Integrations
- **No external DB.** Data is static — `lib/products.ts` / `lib/content.ts`.
- **Client state**: React `useState` / `useEffect`. `useMemo` removed from `configurator.tsx` (was unused).
- **i18n**: `[locale]` segment routing; locales EN/FR/ZH.
- **Images**: `next/image` `unoptimized: true` — new assets must be pre-sized, committed to `public/`, and matched by `<Image>` `width`/`height`.
- **Redirects/Headers**: in `next.config.mjs` (legacy route redirects + security headers).

---

## 2. Current Implementation Status
### Completed Features (working)
- ✅ Trilingual static homepage (EN/FR/ZH), content keyed in `[locale]` paths.
- ✅ Home page review fixes (latest session, commit `dfc13c6`):
  - Section spacing `py-12 sm:py-16`; hero `py-16 sm:py-20 lg:py-28`; heading gaps `mt-8 sm:mt-10`.
  - Products grid clean 2×2 (`sm:grid-cols-2`); Configurator promo tile removed.
  - HD `configurator-trailer.jpg` 632×408 (~32 KB progressive JPEG); `<Image>` dims updated.
  - Removed `from-navy-50` gradient overlay on How-We-Work photos.
- ✅ ESLint flat config working — `npx eslint .` → **0 problems**.
- ✅ Full lint/tsc/build pipeline green.

### In Progress
- ⏳ `www.nexusassembly.ca` domain purchase pending (code pre-references it; must be purchased + DNS pointed to Vercel — see §5).

### Known Bugs / Regressions / Edge Cases
- 🔸 **Dead domain in code**: `lib/site.ts` hardcodes `SITE.url = 'https://nexusassembly.ca'` and contact email `info@nexusassembly.ca`. That domain is **not registered** → breaks `<link rel=canonical>` URLs, OG metadata, email display until registered.
- 🔸 **Unused content**: `HOME.configure*` keys in `lib/content.ts` orphaned (promo tile removed; copy intentionally left intact — harmless).
- 🔸 **Image dimensions**: since `next/image` optimization is disabled, new hero/product images must match committed `<Image>` `width`/`height` to prevent layout shift.

---

## 3. Context & Recent Decisions
### Architectural Decisions
| Decision | Rationale |
|---|---|
| **Static HTML over dynamic fetch** | Stable marketing content; SSG = fast, cheap, Edge-cached. |
| **`unoptimized: true` images** | Hobby-tier Vercel image optimization exhausts → HTTP 402; pre-optimized assets avoid cost. |
| **Images 2× + Lanczos + unsharp** | Pixel-perfect Retina without on-the-fly optimization (Pillow script in `/tmp/gen_config_img.py`). |
| **Inline locale copy + `tr()`** | No heavy i18n libs; full FR/ZH control, lean bundle. |
| **ESLint 9 flat config via `FlatCompat`** | `eslint-config-next` 15 still needs eslintrc config (`next/core-web-vitals`); bridge is the recommended migration path. |

### Recent Changes — commit `6e013be` on `main`
- Added `eslint.config.mjs` (flat config: `next/core-web-vitals` + `next/typescript`). Project had ESLint 9 installed but **no config file** → `next lint` / VS Code ESLint extension couldn't run.
- Removed unused vars/dead imports found by newly-working lint:
  - `app/[locale]/page.tsx` — removed unused `HOME` import.
  - `lib/content.ts` — removed unused `LocalizedText` import.
  - `components/configure/configurator.tsx` — removed unused `useMemo`/imports + orphaned `selectedUpgrades` block.
- Ignored `next-env.d.ts` in lint (suppresses spurious triple-slash-reference error from Next-generated file).
- ✅ Verified: `eslint .` → 0 problems; `tsc --noEmit` → 0 errors; `next build` passes incl. build-time linting.

---

## 4. Environment & Commands
### Environment Variables
**No secret env vars required** for production — static site. Copy to `.env.local` only if adding analytics:

```env
# Optional
NEXT_PUBLIC_ANALYTICS_ID=                          # e.g. plausible tag
NEXT_PUBLIC_SITE_URL=https://nexus-assembly.vercel.app
```

### Commands (run from project root)
| Task | Command |
|---|---|
| Dev server | `npm run dev` |
| Build | `npm run build` |
| Type-check | `npx tsc --noEmit` |
| Lint | `npx eslint .` |
| Format | `npx prettier --write .` |

**Green gate** (all must pass before merge):
```bash
npm run build && npx eslint . && npx tsc --noEmit
```
---

## 5. Immediate Next Steps
### 🔴 Critical (before registering domain)
1. **Register `www.nexusassembly.ca`** at a registrar when ready — until then `lib/site.ts` canonical URL + `info@nexusassembly.ca` email point to a non-existent domain.
2. **Vercel dashboard** → Project Settings → Domains → add `nexusassembly.ca` (apex) + `www.nexusassembly.ca`.
3. **DNS at registrar**: `www` → CNAME → `cname.vercel-dns.com`; `@` → A → `76.76.21.21` (or ALIAS/ANAME if supported).

### 📋 Medium Priority
4. **Audit `HOME.configure*`** keys in `lib/content.ts` — keep (latent content) or delete for cleanliness.
5. **Review email display** in `lib/copy.ts` (EN/FR/ZH) if domain/email changes (`info@nexusassembly.ca`).
6. **Verify every new image asset** has a dimension-matched `<Image>` width/height (optimization disabled → layout-shift risk).

### 🆕 Backlog (new work)
7. Wire up lightweight analytics via `NEXT_PUBLIC_ANALYTICS_ID` env var.
8. Add CI workflow (`.github/workflows`) — `next build` + `eslint` + `tsc` green gate.
9. Generate XML sitemap (Next 15 supports via `metadata` + `robots.ts`, or `next-sitemap`).