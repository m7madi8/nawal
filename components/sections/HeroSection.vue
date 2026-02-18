<template>
  <section
    ref="sectionEl"
    class="hero-section relative flex min-h-screen items-center justify-center overflow-hidden"
  >
    <!-- Background Image with Overlay -->
    <div class="absolute inset-0">
      <NuxtImg
        ref="bgEl"
        src="/media/11.jpg"
        alt="Mountain yoga retreat at dawn above the clouds"
        format="webp"
        width="1920"
        height="1080"
        sizes="100vw"
        fetchpriority="high"
        preload
        class="hero-bg absolute inset-0 h-full w-full object-cover object-center"
      />
      
      <!-- Elegant Gradient Overlay -->
      <div class="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
      <div class="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/30" />
      
      <!-- Subtle Grain Texture -->
      <div class="absolute inset-0 bg-[url('/grain.svg')] opacity-[0.02] mix-blend-overlay" />
    </div>

    <!-- Content Container -->
    <AppContainer>
      <div
        ref="contentEl"
        class="relative z-10 mx-auto flex max-w-4xl flex-col items-center text-center"
      >
        <!-- Eyebrow Text -->
        <p class="hero-eyebrow mb-6 text-xs font-medium tracking-[0.4em] text-white/80 uppercase md:text-sm">
          Nowal Aom Yoga
        </p>

        <!-- Main Heading -->
        <h1 class="hero-heading mb-4 font-serif text-4xl leading-[1.12] tracking-tight text-white sm:mb-6 sm:text-5xl md:text-7xl md:leading-[1.05] lg:text-8xl">
          <span class="block">Connect Body,</span>
          <span class="block bg-gradient-to-r from-white via-white/95 to-white/90 bg-clip-text text-transparent">
            Mind & Breath
          </span>
        </h1>

        <!-- Subtitle -->
        <p class="hero-subtitle mb-8 sm:mb-10 max-w-2xl px-1 text-sm leading-relaxed text-white/85 sm:text-base md:text-lg md:leading-relaxed lg:text-xl">
          دروس يوغا للجميع—فينياسا، يين، هاثا وتأمل. استعد توازنك وتنفس بعمق مع مدربة معتمدة.
        </p>

        <!-- CTA Section -->
        <div class="hero-cta flex w-full max-w-sm flex-col items-center gap-4 px-2 sm:max-w-none sm:flex-row sm:justify-center sm:gap-6">
          <AppButton class="group relative w-full min-h-[48px] justify-center overflow-hidden sm:w-auto">
            <span class="relative z-10">احجز جلستك</span>
            <span class="absolute inset-0 -translate-x-full bg-white/10 transition-transform duration-500 group-hover:translate-x-0" />
          </AppButton>
          
          <div class="flex flex-wrap items-center justify-center gap-2 text-center text-xs text-white/70 sm:flex-nowrap sm:gap-3 sm:text-sm">
            <span class="font-light">جلسات فردية وجماعية</span>
            <span class="hidden text-white/50 sm:inline">•</span>
            <span class="font-light">ورش عمل وريترتات</span>
          </div>
        </div>

        <!-- Decorative Elements -->
        <div class="hero-decoration absolute bottom-8 left-1/2 -translate-x-1/2 sm:bottom-12 md:-bottom-20">
          <div class="flex items-center gap-2 text-white/30">
            <div class="h-px w-12 bg-current" />
            <div class="h-1.5 w-1.5 rounded-full bg-current" />
            <div class="h-px w-24 bg-current" />
          </div>
        </div>
      </div>
    </AppContainer>

    <!-- Scroll Indicator -->
    <div class="pointer-events-none absolute inset-x-0 bottom-6 flex justify-center sm:bottom-12">
      <ScrollIndicator />
    </div>

    <!-- Floating Particles Effect (Optional) -->
    <div class="absolute inset-0 overflow-hidden opacity-30">
      <div class="particle absolute h-1 w-1 rounded-full bg-white/20" />
      <div class="particle absolute h-1 w-1 rounded-full bg-white/15" />
      <div class="particle absolute h-1 w-1 rounded-full bg-white/10" />
    </div>
  </section>
</template>

<script setup lang="ts">
const sectionEl = ref<HTMLElement | null>(null)
const bgEl = ref<HTMLElement | null>(null)
const contentEl = ref<HTMLElement | null>(null)

const { gsap, ScrollTrigger } = useGsap()
const { prefersReducedMotion } = useReducedMotion()

onMounted(() => {
  if (!gsap || !ScrollTrigger) return
  if (prefersReducedMotion.value) return

  let ctx: any

  ctx = gsap.context(() => {
    // Enhanced entrance animations
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

    // Eyebrow fade in
    tl.from('.hero-eyebrow', {
      opacity: 0,
      y: 20,
      duration: 0.8
    })
      // Heading with stagger
      .from(
        '.hero-heading span',
        {
          opacity: 0,
          y: 50,
          duration: 1.2,
          stagger: 0.15,
          ease: 'power4.out'
        },
        '-=0.4'
      )
      // Subtitle fade in
      .from(
        '.hero-subtitle',
        {
          opacity: 0,
          y: 30,
          duration: 1,
          ease: 'power2.out'
        },
        '-=0.6'
      )
      // CTA buttons fade in
      .from(
        '.hero-cta > *',
        {
          opacity: 0,
          y: 20,
          duration: 0.9,
          stagger: 0.1,
          ease: 'power2.out'
        },
        '-=0.5'
      )
      // Decoration fade in
      .from(
        '.hero-decoration',
        {
          opacity: 0,
          scale: 0.8,
          duration: 0.8,
          ease: 'back.out(1.2)'
        },
        '-=0.3'
      )

    // Parallax effect for background
    if (sectionEl.value && bgEl.value) {
      const bg = bgEl.value as HTMLElement
      
      gsap.to(bg, {
        scale: 1.1,
        y: -30,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionEl.value,
          start: 'top top',
          end: 'bottom top',
          scrub: 1.5,
          onEnter: () => bg.style.setProperty('will-change', 'transform'),
          onLeaveBack: () => bg.style.removeProperty('will-change'),
          onLeave: () => bg.style.removeProperty('will-change'),
          onEnterBack: () => bg.style.setProperty('will-change', 'transform')
        }
      })

      // Subtle content parallax
      if (contentEl.value) {
        gsap.to(contentEl.value, {
          y: -50,
          opacity: 0,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionEl.value,
            start: 'top top',
            end: 'bottom top',
            scrub: 1
          }
        })
      }
    }

    // Floating particles animation
    const particles = document.querySelectorAll('.particle')
    particles.forEach((particle, index) => {
      gsap.to(particle, {
        x: () => gsap.utils.random(-100, 100),
        y: () => gsap.utils.random(-100, 100),
        opacity: () => gsap.utils.random(0.1, 0.3),
        duration: () => gsap.utils.random(3, 6),
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: index * 0.5
      })
    })
  }, sectionEl)

  onBeforeUnmount(() => {
    ctx?.revert()
  })
})
</script>

<style scoped>
.hero-section {
  background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%);
}

.hero-bg {
  filter: brightness(0.85) contrast(1.05);
  transition: filter 0.3s ease;
}

.hero-heading span {
  display: inline-block;
  text-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
}

.hero-subtitle {
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
}

/* Smooth transitions */
.hero-cta > * {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Mobile-first: prevent overflow */
.hero-section {
  min-height: 100dvh;
  min-height: 100vh;
}

@media (max-width: 640px) {
  .hero-heading {
    font-size: 2.25rem;
    line-height: 1.15;
  }
}

/* Enhanced focus states */
.hero-cta button:focus-visible {
  outline: 2px solid rgba(255, 255, 255, 0.5);
  outline-offset: 4px;
}
</style>
