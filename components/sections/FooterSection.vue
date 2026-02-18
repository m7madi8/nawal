<template>
  <footer
    ref="sectionEl"
    class="border-t border-[var(--color-primary)] bg-[var(--color-gray)]/80 py-8 backdrop-blur-sm sm:py-10 md:py-12"
  >
    <AppContainer>
      <div
        ref="contentEl"
        class="flex min-w-0 flex-col gap-6 text-sm text-[var(--text-soft)] sm:gap-8 md:flex-row md:items-center md:justify-between md:text-xs"
      >
        <div class="space-y-3">
          <p class="text-xs tracking-[0.3em] uppercase">
            Nowal Aom Yoga
          </p>
          <p class="break-words">
            دروس يوغا — فينياسا، يين، هاثا، تأمل • جلسات فردية وجماعية • ورش عمل وريترتات.
          </p>
          <p class="text-xs text-[var(--text-soft)]/80">
            اليوغا للجميع. اربط جسدك، تنفسك، وذهنك في مكان آمن ومشجع.
          </p>
        </div>

        <div class="flex flex-col gap-4 text-xs md:items-end">
          <a
            href="mailto:hello@nowalaom.com"
            class="inline-block min-h-[44px] leading-[44px] underline-offset-4 hover:text-[var(--accent-clay)] hover:underline"
          >
            hello@nowalaom.com
          </a>
          <div class="flex flex-wrap gap-4">
            <a
              href="#"
              class="min-h-[44px] leading-[44px] hover:text-[var(--accent-clay)]"
            >
              إنستغرام
            </a>
            <a
              href="#"
              class="min-h-[44px] leading-[44px] hover:text-[var(--accent-clay)]"
            >
              احجز جلستك
            </a>
          </div>
          <p class="text-[0.7rem] text-[var(--text-soft)]/70">
            © {{ new Date().getFullYear() }} Nowal Aom Yoga. جميع الحقوق محفوظة.
          </p>
        </div>
      </div>
    </AppContainer>
  </footer>
</template>

<script setup lang="ts">
const sectionEl = ref<HTMLElement | null>(null)
const contentEl = ref<HTMLElement | null>(null)

const { gsap, ScrollTrigger, matchMedia } = useGsap()
const { prefersReducedMotion } = useReducedMotion()

onMounted(() => {
  if (!gsap || !ScrollTrigger) return
  if (prefersReducedMotion.value) return

  let ctx: any

  ctx = gsap.context(() => {
    if (!sectionEl.value || !contentEl.value) return

    const mm = matchMedia

    const animateFooter = (start: string) => {
      gsap.fromTo(
        contentEl.value,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionEl.value,
            start,
            end: 'bottom bottom',
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
            animateFooter('top 85%')
          } else {
            animateFooter('top 90%')
          }
        }
      )
    } else {
      animateFooter('top 90%')
    }
  }, sectionEl)

  onBeforeUnmount(() => {
    ctx?.revert()
    matchMedia?.revert()
  })
})
</script>

