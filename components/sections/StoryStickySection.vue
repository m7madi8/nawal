<template>
  <section
    ref="sectionEl"
    class="relative min-w-0 overflow-hidden bg-[var(--bg-body)] py-14 sm:py-20 md:py-32"
  >
    <AppContainer>
      <div class="grid min-w-0 gap-8 sm:gap-12 md:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] md:items-start">
        <div
          ref="mediaEl"
          class="relative h-[260px] overflow-visible sm:h-[320px] md:h-[420px] lg:h-[520px]"
        >
          <div
            ref="imageStackEl"
            class="md:sticky md:top-24 h-[220px] sm:h-[280px] md:h-[360px] lg:h-[420px]"
          >
            <div
              v-for="(layer, index) in layers"
              :key="layer.alt"
              class="absolute inset-0"
              :class="[
                index === 0 && 'z-10',
                index === 1 && 'z-20',
                index === 2 && 'z-30'
              ]"
            >
              <div
                class="soft-card h-full w-full overflow-hidden"
              >
                <NuxtImg
                  :src="layer.src"
                  :alt="layer.alt"
                  format="webp"
                  width="800"
                  height="600"
                  sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 480px"
                  loading="lazy"
                  class="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        <div ref="copyEl" class="flex flex-col gap-10">
          <SectionHeading
            eyebrow="قصتنا"
            title="من الشغف إلى اليوغا."
            subtitle="نوال بدأت رحلة اليوغا بحثاً عن الهدوء والاتزان—اليوم تشارك هذا الشغف مع مئات المتدربين."
          />

          <div class="space-y-6 text-sm leading-relaxed text-[var(--text-soft)] sm:space-y-8 md:text-base">
            <article
              v-for="(chapter, index) in chapters"
              :key="chapter.title"
              class="story-block opacity-0"
            >
              <p class="mb-2 text-xs font-medium tracking-[0.25em] text-[var(--color-accent)] uppercase">
                {{ index + 1 | twoDigits }}
              </p>
              <h3 class="mb-2 font-serif text-lg text-[var(--text-main)] sm:mb-3 sm:text-xl md:text-2xl">
                {{ chapter.title }}
              </h3>
              <p>
                {{ chapter.body }}
              </p>
            </article>
          </div>
        </div>
      </div>
    </AppContainer>
  </section>
</template>

<script setup lang="ts">
const sectionEl = ref<HTMLElement | null>(null)
const mediaEl = ref<HTMLElement | null>(null)
const imageStackEl = ref<HTMLElement | null>(null)
const copyEl = ref<HTMLElement | null>(null)

const { gsap, ScrollTrigger } = useGsap()
const { prefersReducedMotion } = useReducedMotion()

const layers = [
  {
    src: '/media/6.jpg',
    alt: 'جلسة يوغا في الاستوديو'
  },
  {
    src: '/media/7.jpg',
    alt: 'ممارسة فينياسا في الطبيعة'
  },
  {
    src: '/media/9.jpg',
    alt: 'جلسة يين وتأمل'
  }
]

const chapters = [
  {
    title: 'بداية الرحلة',
    body:
      'بدأت نوال ممارسة اليوغا كبحث عن الهدوء والمرونة الجسدية. مع الوقت تحولت الممارسة إلى أسلوب حياة—وتدريب معتمد لمساعدة الآخرين.'
  },
  {
    title: 'أنماط متعددة',
    body:
      'فينياسا للتدفق والطاقة، يين للاسترخاء العميق، هاثا للأساسيات والتوازن، وتأمل موجّه للتنفس والوعي. كل نمط يخدم هدفاً مختلفاً.'
  },
  {
    title: 'اليوغا للجميع',
    body:
      'سواء كنت مبتدئاً أو متقدماً، في الاستوديو أو في ريتريت بالطبيعة—نوال تصمم الجلسات لتناسب جسمك وتوقيتك ورغبتك في الهدوء.'
  }
]

const twoDigits = (value: number) => value.toString().padStart(2, '0')

onMounted(() => {
  if (!gsap || !ScrollTrigger) return
  if (prefersReducedMotion.value) return

  let ctx: any

  ctx = gsap.context(() => {
    // Align sticky/pinned behavior with the two-column (md+) layout
    const isDesktop = window.matchMedia('(min-width: 768px)').matches

    const storyBlocks = gsap.utils.toArray<HTMLElement>('.story-block')
    gsap.to(storyBlocks, {
      opacity: 1,
      y: 0,
      ease: 'power2.out',
      stagger: 0.4,
      scrollTrigger: {
        trigger: copyEl.value,
        start: 'top 70%',
        end: 'bottom 20%',
        scrub: true
      }
    })

    if (isDesktop && imageStackEl.value && sectionEl.value) {
      const layerEls = imageStackEl.value.querySelectorAll<HTMLElement>('.soft-card')

      layerEls.forEach((card, index) => {
        const depth = (index + 1) * 12

        gsap.fromTo(
          card,
          {
            y: depth,
            opacity: 0,
            willChange: 'transform'
          },
          {
            y: 0,
            opacity: 1,
            ease: 'power2.out',
            willChange: 'auto',
            scrollTrigger: {
              trigger: sectionEl.value,
              start: `${20 + index * 10}% center`,
              end: `${60 + index * 10}% center`,
              scrub: true
            }
          }
        )
      })

      ScrollTrigger.create({
        trigger: sectionEl.value,
        start: 'top top',
        end: 'bottom bottom',
        pin: imageStackEl.value,
        pinSpacing: false
      })
    }
  }, sectionEl)

  onBeforeUnmount(() => {
    ctx?.revert()
  })
})
</script>

