import Lenis from 'lenis'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

export default defineNuxtPlugin(() => {
  if (import.meta.server) {
    return {
      provide: {
        lenis: null as Lenis | null
      }
    }
  }

  if (!gsap.core.globals().ScrollTrigger) {
    gsap.registerPlugin(ScrollTrigger)
  }

  let lenis: Lenis | null = null

  const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0

  const setupLenis = () => {
    if (lenis) return

    lenis = new Lenis({
      // Slightly higher lerp on touch for smoothness, modest on wheel for 60fps
      lerp: isTouch ? 0.18 : 0.12,
      smoothWheel: !isTouch,
      smoothTouch: isTouch
    })

    gsap.ticker.add((time) => {
      lenis?.raf(time * 1000)
    })
    gsap.ticker.lagSmoothing(0)

    lenis.on('scroll', () => {
      ScrollTrigger.update()
    })
  }

  const motionMq = window.matchMedia('(prefers-reduced-motion: reduce)')

  if (!motionMq.matches) {
    setupLenis()
  }

  motionMq.addEventListener('change', (event) => {
    if (event.matches) {
      // User requested reduced motion – stop Lenis smoothing
      lenis?.stop()
    } else {
      // User turned reduced motion off – lazily create or resume Lenis
      if (!lenis) {
        setupLenis()
      } else {
        lenis.start()
      }
    }
  })

  const refreshScrollTriggers = () => {
    // Ensure pinned sections and scrubbed timelines recalc on layout changes
    ScrollTrigger.refresh()
  }

  window.addEventListener('load', refreshScrollTriggers)
  window.addEventListener('resize', refreshScrollTriggers)
  window.addEventListener('orientationchange', refreshScrollTriggers)

  if (!motionMq.matches) {
    // Initial refresh once the first frame has painted
    requestAnimationFrame(() => {
      ScrollTrigger.refresh()
    })
  }

  return {
    provide: {
      lenis
    }
  }
})

