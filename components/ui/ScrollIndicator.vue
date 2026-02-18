<template>
  <div class="flex flex-col items-center gap-3 text-xs text-white/70">
    <span class="tracking-[0.3em] uppercase">Scroll</span>
    <div class="flex flex-col items-center gap-2">
      <div class="h-10 w-px overflow-hidden rounded-full bg-white/15">
        <div class="indicator h-full w-full origin-top animate-[scrollLine_1.6s_ease-in-out_infinite] bg-white/70" />
      </div>
      <div class="h-3 w-[1px] bg-white/40" />
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
@keyframes scrollLine {
  0% {
    transform: translateY(-100%);
    opacity: 0;
  }
  15% {
    opacity: 1;
  }
  80% {
    transform: translateY(0);
    opacity: 1;
  }
  100% {
    transform: translateY(100%);
    opacity: 0;
  }
}

@media (prefers-reduced-motion: reduce) {
  .indicator {
    animation: none;
    transform: translateY(0);
  }
}
</style>

