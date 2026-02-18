<template>
  <header class="mb-8 flex min-w-0 flex-col gap-2 text-left sm:mb-10 sm:gap-3 md:gap-4">
    <p v-if="eyebrow" class="text-[10px] tracking-[0.25em] text-[var(--text-soft)] uppercase sm:text-xs sm:tracking-[0.3em]">
      {{ eyebrow }}
    </p>
    <h2 class="max-w-2xl font-serif text-2xl tracking-tight text-[var(--text-main)] sm:text-3xl md:text-4xl">
      {{ title }}
    </h2>
    <p v-if="subtitle" class="max-w-2xl text-xs leading-relaxed text-[var(--text-soft)] sm:text-sm md:text-base">
      {{ subtitle }}
    </p>
  </header>
</template>

<script setup lang="ts">
interface Props {
  eyebrow?: string
  title: string
  subtitle?: string
}

defineProps<Props>()
</script>

