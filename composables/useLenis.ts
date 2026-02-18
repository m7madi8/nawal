import type Lenis from 'lenis'

export const useLenis = () => {
  const nuxtApp = useNuxtApp()
  const lenis = nuxtApp.$lenis as Lenis | null
  return { lenis }
}

