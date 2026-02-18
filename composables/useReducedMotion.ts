export const useReducedMotion = () => {
  const prefersReduced = ref(false)

  if (import.meta.client) {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    prefersReduced.value = mq.matches
    mq.addEventListener('change', (event) => {
      prefersReduced.value = event.matches
    })
  }

  return {
    prefersReducedMotion: prefersReduced
  }
}

