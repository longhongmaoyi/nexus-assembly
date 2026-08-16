'use client'

import { useEffect } from 'react'

/**
 * Reveals every [data-reveal] element as it enters the viewport.
 * - Adds `.is-visible` (opacity:1 / transform:none) on intersection
 * - Staggers siblings inside the same parent (70ms per index, capped)
 * - Supports directional variants: data-reveal="left|right|zoom"
 * - Falls back to showing everything if IntersectionObserver is missing
 */
export function RevealObserver() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>('[data-reveal]')
    if (els.length === 0) return

    if (typeof IntersectionObserver === 'undefined') {
      els.forEach((el) => el.classList.add('is-visible'))
      return
    }

    const reveal = (el: HTMLElement) => {
      // Stagger: index among data-reveal siblings in the same parent
      const siblings = el.parentElement
        ? Array.from(el.parentElement.querySelectorAll(':scope > [data-reveal]'))
        : [el]
      const index = siblings.indexOf(el)
      const delay = Math.min(index * 70, 420)
      el.style.transitionDelay = `${delay}ms`

      // Force a reflow so the hidden state is committed, then reveal —
      // this guarantees the transition animates even in throttled tabs.
      void el.offsetWidth
      el.classList.add('is-visible')
      window.setTimeout(() => {
        el.style.transitionDelay = ''
      }, delay + 900)
    }

    const revealInViewport = () => {
      Array.from(els).forEach((el) => {
        if (el.classList.contains('is-visible')) return
        const rect = el.getBoundingClientRect()
        if (rect.top < window.innerHeight && rect.bottom > 0) reveal(el)
      })
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue
          reveal(entry.target as HTMLElement)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -48px 0px' },
    )

    els.forEach((el) => observer.observe(el))

    // Background-tab safety: IntersectionObserver is deferred while the tab
    // is hidden, so flush in-viewport reveals when it becomes visible.
    const onVisibility = () => {
      if (document.visibilityState === 'visible') revealInViewport()
    }
    document.addEventListener('visibilitychange', onVisibility)
    if (document.visibilityState === 'visible') revealInViewport()

    return () => {
      observer.disconnect()
      document.removeEventListener('visibilitychange', onVisibility)
    }
  }, [])

  return null
}
