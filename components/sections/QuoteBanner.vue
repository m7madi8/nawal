<template>
  <section
    ref="sectionEl"
    class="relative overflow-hidden"
  >
    <div class="relative h-[50vh] min-h-[280px] w-full overflow-hidden sm:h-[60vh] sm:min-h-[320px] md:h-[70vh]">
      <NuxtImg
        ref="bgEl"
        src="/media/13.jpg"
        alt="Soft evening light over layered mountain ridges"
        format="webp"
        width="1920"
        height="1080"
        sizes="100vw"
        loading="lazy"
        class="pointer-events-none absolute inset-0 h-full w-full object-cover"
      />
      <div class="absolute inset-0 bg-gradient-to-b from-black/10 via-black/50 to-black/80" />

      <AppContainer>
        <div
          ref="copyEl"
          class="relative flex h-full items-center"
        >
          <blockquote class="max-w-3xl space-y-3 text-left text-white sm:space-y-4">
            <p class="font-serif text-lg leading-relaxed sm:text-2xl md:text-3xl lg:text-4xl">
              «اليوغا ليست أن تكون مرناً—بل أن تكون حاضراً. التنفس أولاً، ثم الحركة.»
            </p>
            <footer class="text-sm text-white/70 md:text-base">
              نوال أوم — مدربة يوغا
            </footer>
          </blockquote>
        </div>
      </AppContainer>
    </div>
  </section>
</template>

<script setup lang="ts">
const sectionEl = ref<HTMLElement | null>(null)
const bgEl = ref<HTMLElement | null>(null)
const copyEl = ref<HTMLElement | null>(null)

const { gsap, ScrollTrigger, matchMedia } = useGsap()
const { prefersReducedMotion } = useReducedMotion()

onMounted(() => {
  if (!gsap || !ScrollTrigger) return
  if (prefersReducedMotion.value) return

  let ctx: any

  ctx = gsap.context(() => {
    const mm = matchMedia

    const setupParallax = (start: string, end: string) => {
      if (!sectionEl.value || !bgEl.value || !copyEl.value) return

      const bg = bgEl.value as HTMLElement
      const copy = copyEl.value as HTMLElement

      gsap.fromTo(
        bg,
        { scale: 1.05, y: -20 },
        {
          scale: 1.12,
          y: 40,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionEl.value,
            start,
            end,
            scrub: true,
            onEnter: () => bg.style.setProperty('will-change', 'transform'),
            onLeave: () => bg.style.removeProperty('will-change'),
            onLeaveBack: () => bg.style.removeProperty('will-change')
          }
        }
      )

      gsap.fromTo(
        copy,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionEl.value,
            start: 'top 75%',
            end: 'top 55%',
            scrub: true
          }
        }
      )
    }

    if (mm) {
      mm.add(
        {
          isDesktop: '(min-width: 1024px)',
          isMobile: '(max-width: 1023px)'
        },
        (context) => {
          const { isDesktop } = context.conditions as any
          if (isDesktop) {
            setupParallax('top bottom', 'bottom top')
          } else {
            setupParallax('top 90%', 'bottom 10%')
          }
        }
      )
    } else {
      setupParallax('top bottom', 'bottom top')
    }
  }, sectionEl)

  onBeforeUnmount(() => {
    ctx?.revert()
    matchMedia?.revert()
  })
})
</script>

