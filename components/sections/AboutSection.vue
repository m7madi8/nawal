<template>
  <section
    ref="sectionEl"
    class="about-section relative overflow-hidden bg-[var(--bg-body)] py-14 sm:py-20 md:py-28"
  >
    <AppContainer>
      <div class="mx-auto max-w-6xl px-6 sm:px-10 md:px-14 lg:px-20">
        <!-- Header -->
        <div class="mb-10 text-center sm:mb-16">
          <SectionHeading
            eyebrow="About Nawal"
            title="Yoga Instructor"
            subtitle="A journey of awareness, breath and movement"
          />
        </div>

        <!-- Main Content Grid -->
        <div class="grid min-w-0 gap-8 sm:gap-12 lg:grid-cols-2 lg:gap-16 lg:items-center">
          <!-- Trainer Image -->
          <div
            ref="imageEl"
            class="trainer-image-wrapper relative order-2 lg:order-1"
          >
            <div class="relative">
              <div class="image-container relative aspect-[3/4] overflow-hidden rounded-2xl bg-[var(--color-gray)]">
                <img
                  src="/media/10.jpg"
                  alt="Nawal Aom - Yoga instructor"
                  class="trainer-image h-full w-full object-cover"
                  loading="eager"
                  @error="handleImageError"
                />
                
                <!-- Subtle overlay -->
                <div class="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
              </div>

              <!-- Decorative frame (hidden on small screens to avoid overflow) -->
              <div class="absolute -bottom-4 -right-4 hidden h-full w-full rounded-2xl border-2 border-[var(--accent-sage)]/20 -z-10 sm:block md:-bottom-6 md:-right-6" />
            </div>
          </div>

          <!-- Content -->
          <div
            ref="contentEl"
            class="about-content order-1 space-y-8 lg:order-2"
          >
            <!-- Introduction -->
            <div class="space-y-4">
              <h3 class="text-xl font-serif text-[var(--text-main)] sm:text-2xl md:text-3xl">
                Nawal Aom
              </h3>
              <p class="text-sm font-medium text-[var(--accent-sage)] uppercase tracking-wider">
                Certified yoga instructor • Vinyasa, Yin, Hatha, meditation
              </p>
            </div>

            <!-- Description -->
            <div class="space-y-4 text-sm leading-relaxed text-[var(--text-soft)] sm:text-base md:text-lg">
              <p class="about-text">
                Certified yoga instructor with over ten years of practice. Vinyasa, Yin, Hatha & meditation—for beginners and advanced. 
                Reconnect with your body, breath, and inner calm in the studio or in nature.
              </p>
            </div>

            <!-- Key Points -->
            <div class="space-y-3 border-t border-[var(--border-soft)] pt-6">
              <div
                v-for="(point, index) in keyPoints"
                :key="index"
                class="key-point flex items-start gap-4"
              >
                <div class="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--accent-sage)]/10 mt-0.5">
                  <div class="h-2 w-2 rounded-full bg-[var(--accent-sage)]" />
                </div>
                <p class="text-sm text-[var(--text-soft)] md:text-base">{{ point }}</p>
              </div>
            </div>

            <!-- Stats (animated count-up) -->
            <div ref="statsEl" class="grid grid-cols-3 gap-4 border-t border-[var(--border-soft)] pt-6 sm:gap-6 sm:pt-8">
              <div class="stat-item text-center">
                <p class="text-2xl font-serif text-[var(--text-main)] sm:text-3xl md:text-4xl">{{ displayTrainees }}+</p>
                <p class="mt-1 text-[10px] text-[var(--text-soft)] uppercase tracking-wider sm:text-xs">Trainees</p>
              </div>
              <div class="stat-item text-center">
                <p class="text-2xl font-serif text-[var(--text-main)] sm:text-3xl md:text-4xl">{{ displayYears }}+</p>
                <p class="mt-1 text-[10px] text-[var(--text-soft)] uppercase tracking-wider sm:text-xs">Years</p>
              </div>
              <div class="stat-item text-center">
                <p class="text-2xl font-serif text-[var(--text-main)] sm:text-3xl md:text-4xl">{{ displayStyles }}</p>
                <p class="mt-1 text-[10px] text-[var(--text-soft)] uppercase tracking-wider sm:text-xs">Yoga styles</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AppContainer>
  </section>
</template>

<script setup lang="ts">
const sectionEl = ref<HTMLElement | null>(null)
const imageEl = ref<HTMLElement | null>(null)
const contentEl = ref<HTMLElement | null>(null)

const { gsap, ScrollTrigger } = useGsap()
const { prefersReducedMotion } = useReducedMotion()

const handleImageError = (event: Event) => {
  const img = event.target as HTMLImageElement
  console.error('Image failed to load:', img.src)
  // Fallback to a different image if needed
  img.src = '/media/1.jpg'
}

const keyPoints = [
  'Certified (RYT 200+) — private & group sessions',
  'Workshops and retreats in nature'
]

const statsEl = ref<HTMLElement | null>(null)
const displayTrainees = ref(0)
const displayYears = ref(0)
const displayStyles = ref(0)

onMounted(() => {
  if (!gsap || !ScrollTrigger) return
  if (prefersReducedMotion.value) return

  let ctx: any

  ctx = gsap.context(() => {
    // Image animation
    if (imageEl.value) {
      const imageContainer = imageEl.value.querySelector('.image-container')
      const trainerImage = imageEl.value.querySelector('.trainer-image')

      gsap.fromTo(
        imageContainer,
        {
          opacity: 0,
          scale: 0.96,
          y: 40
        },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: imageEl.value,
            start: 'top 85%',
            end: 'top 60%',
            toggleActions: 'play none none reverse'
          }
        }
      )

      // Subtle hover effect
      if (trainerImage && imageContainer) {
        imageContainer.addEventListener('mouseenter', () => {
          gsap.to(trainerImage, {
            scale: 1.03,
            duration: 0.5,
            ease: 'power2.out'
          })
        })

        imageContainer.addEventListener('mouseleave', () => {
          gsap.to(trainerImage, {
            scale: 1,
            duration: 0.5,
            ease: 'power2.out'
          })
        })
      }
    }

    // Content animations
    if (contentEl.value) {
      const heading = contentEl.value.querySelector('h3')
      const texts = contentEl.value.querySelectorAll('.about-text')
      const keyPoints = contentEl.value.querySelectorAll('.key-point')
      const stats = contentEl.value.querySelectorAll('.stat-item')

      // Heading
      if (heading) {
        gsap.fromTo(
          heading,
          {
            opacity: 0,
            y: 20
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: contentEl.value,
              start: 'top 85%',
              end: 'top 70%',
              toggleActions: 'play none none reverse'
            }
          }
        )
      }

      // Text paragraphs
      gsap.fromTo(
        texts,
        {
          opacity: 0,
          y: 15
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: contentEl.value,
            start: 'top 80%',
            end: 'top 60%',
            toggleActions: 'play none none reverse'
          }
        }
      )

      // Key points
      gsap.fromTo(
        keyPoints,
        {
          opacity: 0,
          x: -15
        },
        {
          opacity: 1,
          x: 0,
          duration: 0.6,
          stagger: 0.08,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: contentEl.value,
            start: 'top 75%',
            end: 'top 55%',
            toggleActions: 'play none none reverse'
          }
        }
      )

      // Stats: entrance + count-up
      gsap.fromTo(
        stats,
        { opacity: 0, scale: 0.9, y: 12 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.08,
          ease: 'back.out(1.2)',
          scrollTrigger: {
            trigger: statsEl.value,
            start: 'top 88%',
            toggleActions: 'play none none reverse'
          }
        }
      )
      const count = { t: 0, y: 0, s: 0 }
      gsap.to(count, {
        t: 500,
        y: 10,
        s: 4,
        duration: 1.8,
        ease: 'power2.out',
        snap: { t: 1, y: 1, s: 1 },
        onUpdate: () => {
          displayTrainees.value = Math.round(count.t)
          displayYears.value = Math.round(count.y)
          displayStyles.value = Math.round(count.s)
        },
        scrollTrigger: {
          trigger: statsEl.value,
          start: 'top 85%',
          toggleActions: 'play none none reverse'
        }
      })
    }
  }, sectionEl)

  onBeforeUnmount(() => {
    ctx?.revert()
  })
})
</script>

<style scoped>
.about-section {
  position: relative;
}

.image-container {
  transition: transform 0.3s ease;
}

.trainer-image {
  transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}

.stat-item {
  transition: transform 0.2s ease;
}

.stat-item:hover {
  transform: translateY(-2px);
}

.key-point {
  transition: transform 0.2s ease;
}

.key-point:hover {
  transform: translateX(4px);
}

/* Clean, minimal styling */
.about-content {
  color: var(--text-main);
}

/* Responsive adjustments */
@media (max-width: 1023px) {
  .trainer-image-wrapper {
    max-width: 400px;
    margin: 0 auto;
  }
}
</style>
