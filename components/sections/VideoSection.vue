<template>
  <section
    ref="revealEl"
    class="video-section section-reveal relative overflow-hidden bg-[var(--color-gray)] py-10 sm:py-12 md:py-16"
    :class="{ 'is-visible': isRevealed }"
    id="video"
  >
    <AppContainer>
      <div class="mx-auto max-w-6xl">
        <!-- Title -->
        <div class="mb-6 text-center sm:mb-8 lg:mb-6 lg:text-left">
          <p class="mb-2 text-xs font-medium uppercase tracking-[0.35em] text-[var(--color-accent)]">
            Practice & presence
          </p>
          <h2 class="font-serif text-2xl font-light text-[var(--color-text)] sm:text-3xl md:text-4xl">
            A moment of calm
          </h2>
        </div>

        <!-- Video (always) + Story (large screens only) -->
        <div class="grid min-w-0 gap-8 lg:grid-cols-2 lg:items-center lg:gap-10">
          <!-- Video side -->
          <div class="video-side lg:order-1">
            <div class="video-frame group relative">
              <div class="absolute -inset-px rounded-2xl bg-gradient-to-b from-[var(--color-primary)]/40 via-[var(--color-primary)]/20 to-[var(--color-primary)]/40 opacity-80 transition-opacity duration-300 group-hover:opacity-100" />
              <div class="relative mx-auto max-w-[280px] overflow-hidden rounded-2xl bg-[var(--color-secondary)] shadow-xl ring-1 ring-black/5 sm:max-w-[320px] md:max-w-[360px] lg:max-w-none">
                <div class="aspect-[9/16] w-full relative">
                  <video
                    ref="videoEl"
                    class="h-full w-full object-cover"
                    src="/media/nawal_aom.mp4"
                    playsinline
                    muted
                    loop
                    preload="metadata"
                  >
                    Your browser does not support the video tag.
                  </video>
                </div>
                <div class="absolute inset-x-0 bottom-0 h-16 pointer-events-none rounded-b-2xl bg-gradient-to-t from-black/15 to-transparent" />
              </div>
            </div>
            <p class="mt-4 text-center text-sm text-[var(--color-secondary)] lg:text-left">
              Nawal Aom · Yoga & mindfulness
            </p>
          </div>

          <!-- Trainer story (large screens only) -->
          <div class="story-side hidden lg:block lg:order-2 lg:pl-2">
            <p class="mb-2 text-xs font-medium uppercase tracking-[0.3em] text-[var(--color-accent)]">
              Her story
            </p>
            <h3 class="mb-3 font-serif text-xl font-medium text-[var(--color-text)]">
              Nawal Aom
            </h3>
            <p class="mb-4 text-sm leading-relaxed text-[var(--color-secondary)]">
              Certified yoga instructor with over ten years of practice and teaching. What started as a personal search for calm and flexibility became a path to share yoga with others—Vinyasa, Yin, Hatha, and guided meditation.
            </p>
            <p class="text-sm leading-relaxed text-[var(--color-secondary)] sm:text-base">
              Whether in the studio or in nature, every session is designed to help you reconnect with your body, breath, and inner stillness. Yoga for everyone—gentle movement, mindful breath, and moments of silence.
            </p>
          </div>
        </div>
      </div>
    </AppContainer>
  </section>
</template>

<script setup lang="ts">
const { el: revealEl, isVisible: isRevealed } = useScrollReveal({ threshold: 0.1 })
const videoEl = ref<HTMLVideoElement | null>(null)

onMounted(() => {
  if (import.meta.client && videoEl.value) {
    const video = videoEl.value
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            video.play().catch(() => {})
          } else {
            video.pause()
          }
        })
      },
      { threshold: 0.25, rootMargin: '0px' }
    )
    observer.observe(video)
    onUnmounted(() => observer.disconnect())
  }
})
</script>

<style scoped>
.video-frame {
  border-radius: var(--radius-xl, 1.5rem);
}
.video-frame video {
  display: block;
  border-radius: inherit;
}
</style>
