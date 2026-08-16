'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'

/**
 * Hero background with a subtle parallax drift: the image translates
 * downward slightly slower than the page scroll, capped and rAF-throttled.
 */
export function HeroParallaxImage() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let raf = 0
    const update = () => {
      if (!ref.current) return
      const y = Math.min(window.scrollY * 0.12, 96)
      ref.current.style.transform = `translate3d(0, ${y}px, 0)`
    }
    const onScroll = () => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(update)
    }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <div ref={ref} className="absolute inset-0 will-change-transform">
      <Image
        src="/images/hero-facility.jpg"
        alt=""
        fill
        quality={95}
        sizes="100vw"
        priority
        className="scale-105 object-cover object-center blur-[2px]"
      />
    </div>
  )
}
