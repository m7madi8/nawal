export const useGsap = () => {
  const nuxtApp = useNuxtApp()

  const gsap = nuxtApp.$gsap as any | undefined
  const ScrollTrigger = nuxtApp.$ScrollTrigger as any | undefined

  const mm = gsap?.matchMedia ? gsap.matchMedia() : null

  return {
    gsap,
    ScrollTrigger,
    matchMedia: mm
  }
}

