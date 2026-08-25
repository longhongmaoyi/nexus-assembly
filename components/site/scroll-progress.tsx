'use client'

import { useEffect, useState } from 'react'

/** Thin lime reading-progress bar pinned to the top of the sticky header. */
export function ScrollProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    let raf = 0

    function update() {
      raf = 0
      const doc = document.documentElement
      const max = doc.scrollHeight - doc.clientHeight
      setProgress(max > 0 ? Math.min(1, window.scrollY / max) : 0)
    }

    function onScroll() {
      if (!raf) raf = requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <div aria-hidden className="absolute inset-x-0 top-0 h-0.5 bg-white/5">
      <div
        className="h-full bg-gradient-to-r from-brand-600 via-brand-500 to-brand-300"
        style={{ width: `${progress * 100}%` }}
      />
    </div>
  )
}
