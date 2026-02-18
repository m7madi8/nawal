<template>
  <section class="bg-[var(--color-background)] py-16 md:py-24">
    <AppContainer>
      <div class="grid gap-10 md:grid-cols-2 md:gap-12">
        <div>
          <h2 class="mb-6 text-sm font-semibold uppercase tracking-[0.3em] text-[var(--color-text)]">
            المواعيد والموقع
          </h2>
          <p class="mb-2 text-[var(--color-text)]">
            <strong>المواعيد:</strong> السبت – الخميس، 9:00 – 21:00
          </p>
          <p class="mb-6 text-[var(--color-secondary)]">
            الجلسات بالحجز المسبق. جلسات فردية وجماعية وورش عمل.
          </p>
          <p class="mb-2 text-[var(--color-text)]">
            <strong>الموقع:</strong> يُحدد عند الحجز
          </p>
          <p class="mb-8 text-[var(--color-secondary)]">
            دروس في الاستوديو أو في الطبيعة حسب البرنامج.
          </p>
          <p class="mb-2 text-sm text-[var(--color-secondary)]">
            تفضل الحجز أونلاين؟
          </p>
          <NuxtLink
            to="#booking"
            class="inline-block rounded-full bg-[var(--color-accent)] px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
          >
            احجز موعداً
          </NuxtLink>
        </div>
        <div class="min-h-[280px] overflow-hidden rounded-2xl bg-[var(--color-gray)] md:min-h-[320px]">
          <div class="flex h-full items-center justify-center p-8 text-center text-[var(--color-secondary)]">
            <div>
              <p class="mb-2 text-sm font-medium text-[var(--color-text)]">الموقع على الخريطة</p>
              <p class="text-sm">يُضاف عند توفر العنوان</p>
            </div>
          </div>
        </div>
      </div>
    </AppContainer>
  </section>
</template>

<script setup lang="ts">
</script>
