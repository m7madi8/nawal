<template>
  <section class="bg-[var(--color-gray)] py-16 md:py-24">
    <AppContainer>
      <h2 class="mb-10 text-center text-sm font-semibold uppercase tracking-[0.3em] text-[var(--color-text)] md:mb-14">
        أسئلة شائعة
      </h2>
      <div class="mx-auto max-w-2xl space-y-3">
        <div
          v-for="(faq, index) in faqs"
          :key="index"
          class="rounded-xl bg-white/80 shadow-sm transition"
        >
          <button
            type="button"
            class="flex w-full items-center gap-4 px-5 py-4 text-right transition hover:bg-white/90"
            @click="toggle(index)"
          >
            <span class="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--color-primary)] text-lg text-[var(--color-secondary)]">
              {{ openIndex === index ? '−' : '+' }}
            </span>
            <span class="flex-1 font-medium text-[var(--color-text)]">{{ faq.question }}</span>
          </button>
          <Transition name="slide">
            <div v-show="openIndex === index" class="border-t border-[var(--color-primary)]/30 px-5 pb-4 pt-2">
              <p class="text-sm leading-relaxed text-[var(--color-secondary)]">
                {{ faq.answer }}
              </p>
            </div>
          </Transition>
        </div>
      </div>
    </AppContainer>
  </section>
</template>

<script setup lang="ts">
const openIndex = ref<number | null>(null)

const faqs = [
  {
    question: 'ما هي مواعيد الدروس؟',
    answer: 'الدروس متاحة من السبت إلى الخميس، من 9:00 إلى 21:00. الجلسات بالحجز المسبق—فردية أو جماعية.'
  },
  {
    question: 'هل تقدمون دروساً للأطفال؟',
    answer: 'نعم، يمكن ترتيب جلسات مناسبة للأطفال واليافعين حسب العمر والهدف. تواصل معنا للتفاصيل.'
  },
  {
    question: 'أنا مبتدئ، هل اليوغا مناسبة لي؟',
    answer: 'نعم. لدينا دروس هاثا وتأمل للمبتدئين، وجميع الجلسات تُعدّل حسب مستوى المشارك.'
  }
]

function toggle(index: number) {
  openIndex.value = openIndex.value === index ? null : index
}
</script>

<style scoped>
.slide-enter-active,
.slide-leave-active {
  transition: all 0.3s ease;
}
.slide-enter-from,
.slide-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}
</style>
