<template>
  <section id="testimonials" class="scroll-mt-20 bg-[var(--color-background)] py-16 md:py-24">
    <AppContainer>
      <div class="relative">
        <div class="flex gap-6 overflow-x-auto pb-4 no-scrollbar md:gap-8">
          <article
            v-for="t in testimonials"
            :key="t.id"
            class="min-w-[280px] max-w-[340px] flex-shrink-0 rounded-2xl bg-[var(--color-gray)] p-6 shadow-soft transition hover:shadow-lg"
          >
            <div class="mb-4 flex items-center gap-3">
              <img
                :src="t.avatar"
                :alt="t.author"
                class="h-14 w-14 rounded-full object-cover"
              />
              <div>
                <cite class="font-semibold not-italic text-[var(--color-text)]">{{ t.author }}</cite>
                <p class="text-xs text-[var(--color-secondary)]">{{ t.role }}</p>
              </div>
            </div>
            <p class="mb-4 line-clamp-4 text-sm leading-relaxed text-[var(--color-secondary)]">
              «{{ t.quote }}»
            </p>
            <button
              type="button"
              class="text-sm font-medium text-[var(--color-accent)] hover:underline"
            >
              عرض التعليق
            </button>
          </article>
        </div>
      </div>
      <p class="mt-8 text-center">
        <NuxtLink to="#testimonials" class="text-sm font-medium text-[var(--color-accent)] hover:underline">
          جميع آراء المتدربين
        </NuxtLink>
      </p>
    </AppContainer>
  </section>
</template>

<script setup lang="ts">
const testimonials = [
  {
    id: 1,
    quote: 'جلسات نوال غيرت علاقتي بجسدي وتنفسي. اكتشفت أن اليوغا للجميع.',
    author: 'سارة',
    role: 'متدربة يوغا',
    avatar: '/media/1.jpg'
  },
  {
    id: 2,
    quote: 'أفضل قرار هو التسجيل في دروس الين. نوم أفضل وتوتر أقل.',
    author: 'أحمد',
    role: 'موظف',
    avatar: '/media/4.jpg'
  },
  {
    id: 3,
    quote: 'ريتريت اليوغا مع نوال كان تجربة استثنائية. عادلتني من الداخل.',
    author: 'لمى',
    role: 'مصممة',
    avatar: '/media/10.jpg'
  }
]
</script>
