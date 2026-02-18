<template>
  <section
    ref="sectionEl"
    class="relative bg-black text-white"
  >
    <div
      ref="pinnedEl"
      class="relative mx-auto flex min-h-0 min-w-0 max-w-6xl flex-col overflow-hidden px-0 sm:min-h-[100vh] md:min-h-[120vh] md:flex-row md:items-center md:px-6 lg:min-h-[140vh] lg:px-10"
    >
      <div class="relative w-full md:w-2/3">
        <NuxtImg
          ref="bgEl"
          src="/media/5.jpg"
          alt="Yoga practitioner holding a grounded pose on a cedar deck above a mountain valley"
          format="webp"
          width="1600"
          height="1000"
          sizes="(min-width: 1024px) 66vw, 100vw"
          loading="lazy"
          class="pointer-events-none h-[55vh] w-full object-cover sm:h-[65vh] md:h-[80vh] lg:h-[90vh]"
        />
        <div class="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/60 via-black/35 to-black/10" />
      </div>

      <div
        ref="copyEl"
        class="relative z-10 w-full min-w-0 px-4 py-10 sm:px-6 sm:py-12 md:w-1/3 md:px-8 md:py-0 lg:px-10"
      >
        <p class="mb-3 text-xs tracking-[0.3em] text-white/70 uppercase">
          الممارسة
        </p>
        <h2 class="mb-4 font-serif text-2xl leading-tight sm:mb-5 sm:text-3xl md:text-4xl">
          أوضاع تصل الجسد بالتنفس واللحظة.
        </h2>
        <p class="mb-4 text-sm leading-relaxed text-white/80 sm:mb-6 md:text-base">
          كل جلسة يوغا مصممة لتحريك الجسم بلطف—تمدد، قوة، تنفس. نركز على المحاذاة والاستماع 
          للجسم بدلاً من الإنجاز أو المنافسة.
        </p>
        <p class="text-xs text-white/60 md:text-sm">
          اليوغا ليست مرونة فائقة—هي وعي بالجسم، تنفس واعٍ، ولحظات من الهدوء التي تأخذها معك بعد الجلسة.
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const sectionEl = ref<HTMLElement | null>(null)
const pinnedEl = ref<HTMLElement | null>(null)
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

    const setupDesktopPinned = () => {
      if (!sectionEl.value || !pinnedEl.value || !bgEl.value || !copyEl.value) return

      const bg = bgEl.value as HTMLElement
      const text = copyEl.value as HTMLElement

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionEl.value,
          start: 'top top',
          end: '+=160%',
          scrub: true,
          pin: pinnedEl.value,
          anticipatePin: 1,
          onEnter: () => {
            bg.style.setProperty('will-change', 'transform, filter')
            text.style.setProperty('will-change', 'transform, opacity')
          },
          onLeave: () => {
            bg.style.removeProperty('will-change')
            text.style.removeProperty('will-change')
          },
          onLeaveBack: () => {
            bg.style.removeProperty('will-change')
            text.style.removeProperty('will-change')
          }
        }
      })

      tl.fromTo(
        bg,
        { scale: 1.05, y: 0 },
        { scale: 1.14, y: -60, ease: 'none' }
      ).fromTo(
        text,
        { opacity: 0, y: 60 },
        { opacity: 1, y: -20, ease: 'power2.out' },
        0.1
      )
    }

    const setupMobileScroll = () => {
      if (!sectionEl.value || !copyEl.value) return

      const text = copyEl.value as HTMLElement

      gsap.fromTo(
        text,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: text,
            start: 'top 80%',
            end: 'bottom 40%',
            scrub: true
          }
        }
      )

      if (bgEl.value) {
        const bg = bgEl.value as HTMLElement
        gsap.to(bg, {
          scale: 1.08,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionEl.value,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true
          }
        })
      }
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
            setupDesktopPinned()
          } else {
            setupMobileScroll()
          }
        }
      )
    } else {
      setupMobileScroll()
    }
  }, sectionEl)

  onBeforeUnmount(() => {
    ctx?.revert()
    matchMedia?.revert()
  })
})
</script>

