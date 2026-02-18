<template>
  <button
    ref="btnEl"
    class="ripple-button inline-flex min-h-[48px] min-w-[44px] items-center justify-center gap-2 rounded-full bg-[var(--accent-clay)] px-6 py-3 text-sm font-medium tracking-wide text-white shadow-soft transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-background)] sm:px-7"
    type="button"
    @mouseenter="handleEnter"
    @mouseleave="handleLeave"
    @mousemove="handleMove"
  >
    <span>
      <slot />
    </span>
  </button>
</template>

<script setup lang="ts">
const btnEl = ref<HTMLButtonElement | null>(null)

const handleMove = (event: MouseEvent) => {
  if (!btnEl.value) return
  const rect = btnEl.value.getBoundingClientRect()
  const x = event.clientX - rect.left
  const y = event.clientY - rect.top
  btnEl.value.style.setProperty('--ripple-x', `${(x / rect.width) * 100}%`)
  btnEl.value.style.setProperty('--ripple-y', `${(y / rect.height) * 100}%`)
}

const handleEnter = () => {
  if (!btnEl.value) return
  btnEl.value.dataset.rippling = 'true'
}

const handleLeave = () => {
  if (!btnEl.value) return
  btnEl.value.dataset.rippling = 'false'
}
</script>

