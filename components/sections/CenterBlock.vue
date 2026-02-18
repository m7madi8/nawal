<template>
  <section id="about" class="scroll-mt-20 bg-[var(--color-background)] py-16 md:py-24">
    <AppContainer>
      <div class="grid gap-12 md:grid-cols-2 md:items-center md:gap-16">
        <div>
          <h2 class="mb-6 text-sm font-semibold uppercase tracking-[0.3em] text-[var(--color-text)]">
            Nowal Aom Yoga
          </h2>
          <div class="relative aspect-[4/3] max-w-lg overflow-hidden rounded-2xl">
            <img
              src="/media/6.jpg"
              alt="Yoga practice"
              class="h-full w-full object-cover"
            />
            <div class="absolute bottom-4 right-4 h-32 w-32 overflow-hidden rounded-full border-4 border-white shadow-xl">
              <img
                src="/media/10.jpg"
                alt="Nowal"
                class="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
        <div>
          <h3 class="mb-4 font-serif text-3xl font-semibold text-[var(--color-text)] md:text-4xl">
            أفضل تجربة يوغا من أجلك
          </h3>
          <p class="mb-6 leading-relaxed text-[var(--color-secondary)]">
            نوال أوم مدربة يوغا معتمدة بأكثر من عشر سنوات. نقدم دروس فينياسا، يين، هاثا وتأمل—للمبتدئين والمتقدمين. جلسات في الاستوديو أو في الطبيعة، وريترتات مصممة لاستعادة التوازن والهدوء.
          </p>
          <div class="flex flex-wrap gap-4">
            <NuxtLink
              to="#about"
              class="text-sm font-medium text-[var(--color-accent)] hover:underline"
            >
              اقرأ المزيد
            </NuxtLink>
            <NuxtLink
              to="#expertise"
              class="text-sm font-medium text-[var(--color-accent)] hover:underline"
            >
              جميع الخدمات
            </NuxtLink>
          </div>
        </div>
      </div>
    </AppContainer>
  </section>
</template>

<script setup lang="ts">
</script>
