<template>
  <section
    ref="sectionEl"
    class="relative min-w-0 overflow-hidden py-14 sm:py-20 md:py-28"
  >
    <AppContainer>
      <SectionHeading
        eyebrow="أنماط اليوغا"
        title="فينياسا، يين، هاثا، وتأمل."
        subtitle="اختر النمط الذي يناسبك—من الحركة النشطة إلى الاسترخاء العميق."
      />

      <div
        ref="cardsEl"
        class="mt-8 grid min-w-0 gap-4 sm:mt-12 sm:gap-6 md:mt-16 md:grid-cols-3"
      >
        <article
          v-for="experience in experiences"
          :key="experience.title"
          class="experience-card soft-card flex min-w-0 flex-col justify-between p-5 sm:p-6 md:p-7"
        >
          <div class="mb-6 flex items-center gap-3 text-xs tracking-[0.25em] text-[var(--text-soft)] uppercase">
            <span class="inline-block h-6 w-6 rounded-full bg-[var(--accent-sage)]/10 text-center text-[var(--accent-sage)]">
              {{ experience.icon }}
            </span>
            <span>{{ experience.tag }}</span>
          </div>

          <div class="space-y-3">
            <h3 class="font-serif text-lg text-[var(--text-main)] sm:text-xl md:text-2xl">
              {{ experience.title }}
            </h3>
            <p class="text-sm leading-relaxed text-[var(--text-soft)] sm:text-base">
              {{ experience.body }}
            </p>
          </div>

          <p class="mt-6 text-xs font-medium text-[var(--accent-clay)]">
            {{ experience.note }}
          </p>
        </article>
      </div>
    </AppContainer>
  </section>
</template>

<script setup lang="ts">
const sectionEl = ref<HTMLElement | null>(null)
const cardsEl = ref<HTMLElement | null>(null)

const { gsap, ScrollTrigger, matchMedia } = useGsap()
const { prefersReducedMotion } = useReducedMotion()

const experiences = [
  {
    icon: '☀',
    tag: 'فينياسا',
    title: 'تدفق وحركة وطاقة.',
    body:
      'سلسلة أوضاع متصلة مع التنفس—تقوي الجسم، تزيد المرونة، وتنشط الدورة الدموية. مثالية لبناء الحرارة والتركيز.',
    note: 'مناسب للمبتدئين والمتقدمين — وتيرة متوسطة إلى نشطة.'
  },
  {
    icon: '🌙',
    tag: 'يين',
    title: 'استرخاء عميق وتمدد سلبي.',
    body:
      'أوضاع تُحفظ لوقت أطول مع دعم—تستهدف الأنسجة العميقة وتريح الجهاز العصبي. مثالي بعد يوم مشغول أو قبل النوم.',
    note: 'جميع المستويات — حركة لطيفة جداً.'
  },
  {
    icon: '🧘',
    tag: 'هاثا وتأمل',
    title: 'أساسيات، تنفس، وهدوء.',
    body:
      'هاثا يوغا للتوازن بين القوة والمرونة. جلسات تأمل وتنفس (براناياما) لتهدئة الذهن وتعزيز الوعي.',
    note: 'مثالي للمبتدئين وللمراجعة الأساسيات.'
  }
]

onMounted(() => {
  if (!gsap || !ScrollTrigger) return
  if (prefersReducedMotion.value) return

  let ctx: any

  ctx = gsap.context(() => {
    const cards = gsap.utils.toArray<HTMLElement>('.experience-card')
    if (!cards.length) return

    const mm = matchMedia

    const animateCards = () => {
      gsap.fromTo(
        cards,
        {
          opacity: 0,
          y: 40,
          filter: 'blur(6px)'
        },
        {
          opacity: 1,
          y: 0,
          filter: 'blur(0px)',
          stagger: 0.18,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: cardsEl.value || sectionEl.value,
            start: 'top 75%',
            end: 'bottom 40%',
            scrub: true
          }
        }
      )
    }

    if (mm) {
      mm.add(
        {
          isDesktop: '(min-width: 1024px)',
          isTablet: '(min-width: 768px) and (max-width: 1023px)',
          isMobile: '(max-width: 767px)'
        },
        () => {
          animateCards()
        }
      )
    } else {
      animateCards()
    }
  }, sectionEl)

  onBeforeUnmount(() => {
    ctx?.revert()
    matchMedia?.revert()
  })
})
</script>

