/**
 * Type-in effect composable without paid GSAP plugins.
 * Uses GSAP timeline cadence for timing control.
 */

export interface TypeWriterOptions {
  /** Text to type out character by character */
  text: string
  /** Interval in seconds between characters */
  charDelay?: number
  /** Optional callback when typing completes */
  onComplete?: () => void
  /** If true, uses reduced timing (less animation) */
  reducedMotion?: boolean
}

/**
 * Animates text character-by-character using GSAP timeline.
 * Returns a ref that holds the currently visible portion of text.
 */
export function useTypeWriter() {
  const displayText = ref('')
  const isComplete = ref(false)
  let activeTl: { kill: () => void } | null = null

  const run = (gsap: any, opts: TypeWriterOptions) => {
    activeTl?.kill()
    const { text, charDelay = 0.04, onComplete, reducedMotion = false } = opts
    const delay = reducedMotion ? 0.01 : charDelay

    displayText.value = ''
    isComplete.value = false

    if (!text) {
      displayText.value = text
      isComplete.value = true
      onComplete?.()
      return
    }

    const tl = gsap.timeline({
      onComplete: () => {
        activeTl = null
        isComplete.value = true
        onComplete?.()
      },
      onKill: () => {
        activeTl = null
      }
    })
    activeTl = tl

    const chars = text.split('')
    chars.forEach((char, i) => {
      tl.call(
        () => {
          displayText.value += char
        },
        null,
        i * delay
      )
    })
  }

  const kill = () => {
    activeTl?.kill()
    activeTl = null
  }

  const reset = () => {
    kill()
    displayText.value = ''
    isComplete.value = false
  }

  return {
    displayText,
    isComplete,
    run,
    kill,
    reset
  }
}
