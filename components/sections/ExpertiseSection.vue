<template>
  <section id="expertise" class="scroll-mt-20 bg-[var(--color-background)] py-16 md:py-24">
    <AppContainer>
      <h2 class="mb-12 text-center text-sm font-semibold uppercase tracking-[0.3em] text-[var(--color-text)] md:mb-16">
        مجالاتنا
      </h2>
      <div class="relative">
        <div class="flex gap-6 overflow-x-auto pb-4 no-scrollbar md:gap-8">
          <article
            v-for="(item, index) in expertise"
            :key="index"
            class="min-w-[280px] max-w-[320px] flex-shrink-0 overflow-hidden rounded-2xl bg-[var(--color-gray)] shadow-soft transition hover:shadow-lg sm:min-w-[300px]"
          >
            <div class="aspect-[4/3] overflow-hidden">
              <img
                :src="item.image"
                :alt="item.title"
                class="h-full w-full object-cover transition duration-300 hover:scale-105"
              />
            </div>
            <div class="p-6">
              <h3 class="mb-2 font-serif text-xl font-semibold text-[var(--color-text)]">
                {{ item.title }}
              </h3>
              <p class="mb-4 text-sm leading-relaxed text-[var(--color-secondary)]">
                {{ item.description }}
              </p>
              <NuxtLink
                :to="item.link"
                class="inline-flex items-center gap-1 text-sm font-medium text-[var(--color-accent)] hover:underline"
              >
                اقرأ المزيد
                <span class="rtl:rotate-180">←</span>
              </NuxtLink>
            </div>
          </article>
        </div>
      </div>
    </AppContainer>
  </section>
</template>

<script setup lang="ts">
const expertise = [
  {
    title: 'فينياسا',
    description: 'تدفق وحركة مع التنفس. تقوية الجسم وزيادة المرونة والطاقة.',
    image: '/media/5.jpg',
    link: '#booking'
  },
  {
    title: 'يين',
    description: 'استرخاء عميق وتمدد سلبي. مثالي للهدوء بعد يوم مشغول.',
    image: '/media/9.jpg',
    link: '#booking'
  },
  {
    title: 'هاثا وتأمل',
    description: 'أساسيات اليوغا وتنفس واعٍ. للمبتدئين وللمراجعة.',
    image: '/media/7.jpg',
    link: '#booking'
  }
]
</script>
