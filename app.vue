<template>
  <div id="app-root" class="min-h-screen min-w-0 overflow-x-hidden bg-[var(--bg-body)] text-[var(--text-main)]">
    <AppCursorFX />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
const appConfig = useAppConfig()

useHead({
  bodyAttrs: {
    class: 'antialiased'
  }
})

onMounted(() => {
  if (import.meta.client) {
    document.documentElement.style.scrollBehavior = 'auto'
  }
})
</script>

