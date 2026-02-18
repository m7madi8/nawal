<template>
  <section class="bg-[var(--color-gray)] py-12 md:py-16" id="logo">
    <AppContainer>
      <div class="flex flex-col items-center justify-center">
        <NuxtLink to="/" class="inline-block transition-opacity hover:opacity-90">
          <img
            src="/media/Nawal_yoga_logo.png"
            alt="Nawal Aom Yoga"
            class="logo-section h-24 w-auto max-w-[220px] object-contain sm:h-28 md:h-32 md:max-w-[260px]"
          />
        </NuxtLink>
      </div>
    </AppContainer>
  </section>
</template>

<script setup lang="ts">
</script>

<style scoped>
.logo-section {
  filter: drop-shadow(0 2px 8px rgba(0, 0, 0, 0.08));
}
</style>
