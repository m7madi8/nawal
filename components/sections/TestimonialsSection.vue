<template>
  <section
    ref="sectionEl"
    class="relative min-w-0 overflow-hidden py-14 sm:py-24 md:py-32"
  >
    <AppContainer>
      <SectionHeading
        eyebrow="آراء المتدربين"
        title="من تجربتهم مع اليوغا ونوال."
        subtitle="مشاركات من أشخاص مارسوا اليوغا مع نوال."
      />

      <div
        ref="sliderWrapper"
        class="relative mt-10 sm:mt-16"
        @mouseenter="onSliderHover(true)"
        @mouseleave="onSliderHover(false)"
      >
        <!-- Warm beige panel -->
        <div class="soft-card relative overflow-hidden px-4 py-10 sm:px-8 sm:py-12 md:px-14 md:py-16 lg:px-20 lg:py-20">
          <div
            ref="slidesContainer"
            class="relative min-h-[280px] sm:min-h-[320px] md:min-h-[380px]"
          >
            <div
              v-for="(testimonial, index) in testimonials"
              :key="testimonial.id"
              :data-slide-index="index"
              class="slide-panel absolute inset-0 flex flex-col items-center justify-center text-center"
              :class="{ 'pointer-events-none opacity-0': activeIndex !== index }"
            >
              <!-- Stars -->
              <div class="mb-6 flex gap-1">
                <span
                  v-for="n in 5"
                  :key="n"
                  class="star text-2xl text-[var(--accent-clay)] opacity-0"
                  aria-hidden="true"
                >
                  ★
                </span>
              </div>

              <!-- Quote with type-in -->
              <blockquote class="mb-6 max-w-2xl font-serif text-lg leading-relaxed text-[var(--text-main)] sm:mb-8 sm:text-xl md:text-2xl lg:text-3xl">
                <span class="inline">{{ typeWriter.displayText }}</span><span
                  v-if="!typeWriter.isComplete && !prefersReducedMotion"
                  class="typing-cursor"
                  aria-hidden="true"
                >|</span>
              </blockquote>

              <!-- Avatar + author -->
              <div class="flex flex-col items-center gap-4">
                <div
                  data-avatar
                  class="relative h-16 w-16 overflow-hidden rounded-full opacity-0 md:h-20 md:w-20"
                >
                  <NuxtImg
                    :src="testimonial.avatar"
                    :alt="`${testimonial.author}, ${testimonial.role}`"
                    format="webp"
                    width="80"
                    height="80"
                    sizes="(max-width: 767px) 64px, 80px"
                    loading="lazy"
                    class="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <cite class="not-italic font-medium text-[var(--text-main)]">
                    {{ testimonial.author }}
                  </cite>
                  <p class="text-sm text-[var(--text-soft)]">
                    {{ testimonial.role }}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <!-- Nav dots -->
          <div class="mt-10 flex justify-center gap-2">
            <button
              v-for="(_, index) in testimonials"
              :key="index"
              type="button"
              :aria-label="`Go to testimonial ${index + 1}`"
              :aria-current="activeIndex === index ? 'true' : undefined"
              class="dot-button flex h-11 w-11 shrink-0 items-center justify-center rounded-full transition-all duration-300 hover:scale-125 focus:outline-none focus:ring-2 focus:ring-[var(--accent-sage)] focus:ring-offset-2 sm:h-2 sm:w-2 sm:min-h-0 sm:min-w-0"
              :class="activeIndex === index ? 'bg-[var(--accent-clay)] sm:w-8' : 'bg-[var(--text-soft)]/40 hover:bg-[var(--text-soft)]/60'"
              @click="goToSlide(index)"
            />
          </div>

          <!-- Prev/Next (desktop) -->
          <button
            type="button"
            aria-label="Previous testimonial"
            class="nav-btn absolute left-2 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full p-2 text-[var(--text-soft)] transition-all duration-300 hover:scale-110 hover:bg-white/20 hover:text-[var(--text-main)] focus:outline-none focus:ring-2 focus:ring-[var(--accent-sage)] min-[440px]:left-4 md:left-6"
            @click="prevSlide"
          >
            <svg
              class="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            type="button"
            aria-label="Next testimonial"
            class="nav-btn absolute right-2 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full p-2 text-[var(--text-soft)] transition-all duration-300 hover:scale-110 hover:bg-white/20 hover:text-[var(--text-main)] focus:outline-none focus:ring-2 focus:ring-[var(--accent-sage)] min-[440px]:right-4 md:right-6"
            @click="nextSlide"
          >
            <svg
              class="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </AppContainer>
  </section>
</template>

<script setup lang="ts">
const sectionEl = ref<HTMLElement | null>(null)
const sliderWrapper = ref<HTMLElement | null>(null)
const slidesContainer = ref<HTMLElement | null>(null)

const { gsap } = useGsap()
const { prefersReducedMotion } = useReducedMotion()
const typeWriter = useTypeWriter()

const testimonials = [
  {
    id: 1,
    quote: 'جلسات نوال غيرت علاقتي بجسدي وتنفسي. كنت أظن اليوغا للمرنين فقط—اكتشفت أنها للجميع، وأن الحركة البطيئة أحياناً هي الأقوى.',
    author: 'سارة',
    role: 'متدربة يوغا',
    avatar: '/media/1.jpg'
  },
  {
    id: 2,
    quote: 'أفضل قرار اتخذته هو التسجيل في دروس الين. بعد أسبوعين فقط لاحظت نوم أفضل وتوتر أقل. نوال تشرح بوضوح وتحترم وتيرة كل شخص.',
    author: 'أحمد',
    role: 'موظف',
    avatar: '/media/4.jpg'
  },
  {
    id: 3,
    quote: 'ذهبت إلى ريتريت اليوغا مع نوال وكانت تجربة استثنائية. طبيعة، صمت، وممارسة يومية—عادلتني من الداخل.',
    author: 'لمى',
    role: 'مصممة',
    avatar: '/media/10.jpg'
  }
]

const activeIndex = ref(0)
const isHovering = ref(false)
const autoplayInterval = 5000 // ms
let autoplayTimer: ReturnType<typeof setInterval> | null = null

function onSliderHover(hover: boolean) {
  isHovering.value = hover
  if (hover) {
    stopAutoplay()
  } else {
    startAutoplay()
  }
}

function startAutoplay() {
  stopAutoplay()
  if (prefersReducedMotion.value) return
  autoplayTimer = setInterval(() => {
    if (!isHovering.value) {
      nextSlide()
    }
  }, autoplayInterval)
}

function stopAutoplay() {
  if (autoplayTimer) {
    clearInterval(autoplayTimer)
    autoplayTimer = null
  }
}

function goToSlide(index: number) {
  const next = ((index % testimonials.length) + testimonials.length) % testimonials.length
  animateToSlide(next)
}

function nextSlide() {
  const next = (activeIndex.value + 1) % testimonials.length
  animateToSlide(next)
}

function prevSlide() {
  const next = (activeIndex.value - 1 + testimonials.length) % testimonials.length
  animateToSlide(next)
}

function animateToSlide(nextIndex: number) {
  if (nextIndex === activeIndex.value) return

  const currentSlide = slidesContainer.value?.querySelector<HTMLElement>(
    `[data-slide-index="${activeIndex.value}"]`
  )
  const nextSlideEl = slidesContainer.value?.querySelector<HTMLElement>(
    `[data-slide-index="${nextIndex}"]`
  )

  if (prefersReducedMotion.value || !gsap) {
    activeIndex.value = nextIndex
    nextTick(() => showContent(nextIndex))
    return
  }

  const tl = gsap.timeline()
  if (currentSlide) {
    tl.to(currentSlide, { opacity: 0, duration: 0.3, ease: 'power2.in' })
  }
  tl.call(() => {
    if (nextSlideEl) gsap.set(nextSlideEl, { opacity: 0 })
    activeIndex.value = nextIndex
    nextTick(() => {
      showContent(nextIndex)
      if (nextSlideEl) {
        gsap.to(nextSlideEl, { opacity: 1, duration: 0.4, ease: 'power2.out' })
      }
    })
  })
}

function showContent(index: number) {
  const testimonial = testimonials[index]
  if (!testimonial) return

  nextTick(() => {
    const slide = slidesContainer.value?.querySelector<HTMLElement>(
      `[data-slide-index="${index}"]`
    )
    if (!slide) return

    const stars = slide.querySelectorAll<HTMLElement>('.star')
    const avatar = slide.querySelector<HTMLElement>('[data-avatar]')

    if (prefersReducedMotion.value) {
      typeWriter.reset()
      typeWriter.displayText.value = testimonial.quote
      typeWriter.isComplete.value = true
      stars.forEach((s) => { s.style.opacity = '1' })
      if (avatar) avatar.style.opacity = '1'
      return
    }

    if (!gsap) return

    // Stars fade in
    gsap.to(stars, {
      opacity: 1,
      duration: 0.5,
      stagger: 0.08,
      ease: 'power2.out'
    })

    // Avatar scale + fade
    if (avatar) {
      gsap.fromTo(
        avatar,
        { scale: 0.8, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.6, ease: 'power2.out', delay: 0.2 }
      )
    }

    // Type-in effect
    typeWriter.run(gsap, {
      text: testimonial.quote,
      charDelay: 0.03,
      reducedMotion: prefersReducedMotion.value
    })
  })
}

onMounted(() => {
  if (import.meta.client) {
    showContent(0)
    startAutoplay()
  }
})

onBeforeUnmount(() => {
  stopAutoplay()
  typeWriter.kill()
})
</script>

<style scoped>
.typing-cursor {
  animation: blink 0.8s step-end infinite;
}

@keyframes blink {
  50% {
    opacity: 0;
  }
}

@media (prefers-reduced-motion: reduce) {
  .typing-cursor {
    animation: none;
  }
  .nav-btn:hover,
  .dot-button:hover {
    transform: none;
  }
}
</style>
