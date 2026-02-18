<template>
  <section
    ref="sectionEl"
    class="relative min-w-0 overflow-hidden py-14 sm:py-24 md:py-32"
  >
    <AppContainer>
      <SectionHeading
        eyebrow="معرض الصور"
        title="لحظات من الممارسة والهدوء."
        subtitle="جلسات يوغا، ريتريتات، وورش عمل—لقطات من رحلة المتدربين."
      />

      <div
        ref="gridEl"
        class="mt-10 grid min-w-0 grid-cols-2 gap-2 sm:mt-16 sm:gap-4 md:grid-cols-4 md:gap-6"
      >
        <div
          v-for="(image, index) in galleryImages"
          :key="image.src"
          :class="[
            'gallery-item group relative overflow-hidden rounded-sm bg-[var(--bg-card)]',
            image.span === 'large' ? 'col-span-2 row-span-2' : '',
            image.span === 'wide' ? 'col-span-2' : ''
          ]"
        >
          <NuxtImg
            :src="image.src"
            :alt="image.alt"
            format="webp"
            loading="lazy"
            class="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            :width="image.span === 'large' ? 800 : 400"
            :height="image.span === 'large' ? 800 : 400"
          />
          <div class="absolute inset-0 bg-black/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        </div>
      </div>
    </AppContainer>
  </section>
</template>

<script setup lang="ts">
const sectionEl = ref<HTMLElement | null>(null)
const gridEl = ref<HTMLElement | null>(null)

const { gsap, ScrollTrigger } = useGsap()
const { prefersReducedMotion } = useReducedMotion()

const galleryImages = [
  { src: '/media/1.jpg', alt: 'جلسة يوغا جماعية', span: 'large' },
  { src: '/media/4.jpg', alt: 'ممارسة في الطبيعة', span: 'small' },
  { src: '/media/6.jpg', alt: 'استوديو اليوغا', span: 'small' },
  { src: '/media/7.jpg', alt: 'فينياسا في الصباح', span: 'wide' },
  { src: '/media/9.jpg', alt: 'جلسة يين وتأمل', span: 'small' },
  { src: '/media/10.jpg', alt: 'أوضاع يوغا', span: 'small' },
  { src: '/media/11.jpg', alt: 'ريتريت يوغا', span: 'large' },
  { src: '/media/13.jpg', alt: 'ممارسة في الهواء الطلق', span: 'wide' },
  { src: '/media/5.jpg', alt: 'مدربة ومتدربون', span: 'small' }
]

onMounted(() => {
  if (!gsap || !ScrollTrigger) return
  if (prefersReducedMotion.value) return

  let ctx: any

  ctx = gsap.context(() => {
    const items = gsap.utils.toArray<HTMLElement>('.gallery-item')
    
    gsap.fromTo(
      items,
      {
        opacity: 0,
        y: 30,
        filter: 'blur(4px)'
      },
      {
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
        duration: 1,
        stagger: 0.1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: gridEl.value,
          start: 'top 85%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse'
        }
      }
    )
  }, sectionEl)

  onBeforeUnmount(() => {
    ctx?.revert()
  })
})
</script>

<style scoped>
.gallery-item {
  aspect-ratio: 1/1;
}
.col-span-2.row-span-2 {
  aspect-ratio: 1/1;
}
.col-span-2:not(.row-span-2) {
  aspect-ratio: 2/1;
}

@media (max-width: 767px) {
  .col-span-2 {
    aspect-ratio: auto;
  }
  .gallery-item {
    aspect-ratio: 1/1;
  }
}
</style>
