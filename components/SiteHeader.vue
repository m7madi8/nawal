<template>
  <header class="site-header fixed top-0 left-0 right-0 z-[60] border-b border-[var(--color-primary)]/20 bg-white/95 backdrop-blur-md safe-header">
    <div class="mx-auto flex min-h-14 w-full max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:min-h-16 sm:px-6 sm:py-0 sm:gap-4 md:h-20 md:px-10 md:gap-8">
      <NuxtLink to="/" class="flex min-w-0 shrink items-center transition-opacity hover:opacity-90 active:opacity-80">
        <img
          src="/media/Nawal_yoga_logo.png"
          alt="Nawal Aom Yoga"
          class="logo-header h-10 w-auto max-w-[140px] shrink-0 object-contain object-left sm:h-12 sm:max-w-[160px] md:h-14 md:max-w-[180px] lg:h-16 lg:max-w-[200px]"
        />
      </NuxtLink>

      <nav class="hidden items-center gap-6 md:flex md:gap-8">
        <NuxtLink
          to="#about"
          class="nav-link text-sm font-medium text-[var(--color-secondary)] transition-colors hover:text-[var(--color-accent)]"
        >
          About
        </NuxtLink>
      </nav>

      <!-- Mobile menu button - min 44px touch target -->
      <button
        type="button"
        class="menu-trigger relative flex h-11 min-h-[44px] min-w-[44px] shrink-0 items-center justify-center rounded-full border border-[var(--color-primary)]/30 bg-transparent text-[var(--color-secondary)] transition-all duration-300 hover:border-[var(--color-accent)]/50 hover:bg-[var(--color-primary)]/10 hover:text-[var(--color-accent)] active:scale-95 md:hidden"
        :aria-expanded="open"
        aria-label="Open menu"
        @click="open = !open"
      >
        <span class="menu-icon" :class="{ 'menu-icon--open': open }">
          <span class="menu-icon__line menu-icon__line--1" />
          <span class="menu-icon__line menu-icon__line--2" />
          <span class="menu-icon__line menu-icon__line--3" />
        </span>
      </button>
    </div>

    <!-- Overlay - full viewport including safe areas -->
    <Transition name="menu-overlay">
      <div
        v-show="open"
        class="menu-backdrop fixed inset-0 z-40 bg-[var(--color-secondary)]/25 backdrop-blur-sm md:hidden"
        style="padding: env(safe-area-inset-top) env(safe-area-inset-right) env(safe-area-inset-bottom) env(safe-area-inset-left)"
        aria-hidden="true"
        @click="open = false"
      />
    </Transition>

    <!-- Side menu drawer - full height, responsive width, safe areas -->
    <Transition name="menu-drawer">
      <aside
        v-show="open"
        class="menu-drawer fixed top-0 bottom-0 right-0 z-[50] flex min-h-[100dvh] min-h-[100svh] w-[85vw] max-w-[320px] flex-col border-l border-[var(--color-primary)]/25 shadow-[-6px_0_32px_rgba(0,0,0,0.12)] md:hidden"
        style="padding-right: env(safe-area-inset-right); padding-top: env(safe-area-inset-top); padding-bottom: env(safe-area-inset-bottom)"
        aria-label="Side menu"
      >
        <!-- Full-height background -->
        <div class="menu-drawer-bg absolute inset-0" />
        <div class="relative flex flex-1 flex-col p-4 pt-20 sm:p-6 sm:pt-24">
          <nav class="flex flex-col gap-1" aria-label="Navigation">
            <NuxtLink
              to="/"
              class="menu-item flex min-h-[48px] items-center gap-4 rounded-2xl px-4 py-3.5 transition-colors sm:px-5 sm:py-4"
              @click="open = false"
            >
              <span class="menu-item-accent" />
              <span class="menu-item-text">Home</span>
            </NuxtLink>
            <NuxtLink
              to="#about"
              class="menu-item flex min-h-[48px] items-center gap-4 rounded-2xl px-4 py-3.5 transition-colors sm:px-5 sm:py-4"
              @click="open = false"
            >
              <span class="menu-item-accent" />
              <span class="menu-item-text">About</span>
            </NuxtLink>
          </nav>
        </div>
        <div class="menu-drawer-footer relative border-t border-[var(--color-primary)]/20 p-4 sm:p-6" style="padding-bottom: calc(1.5rem + env(safe-area-inset-bottom, 0px))">
          <NuxtLink to="/" class="flex items-center gap-3" @click="open = false">
            <img
              src="/media/Nawal_yoga_logo.png"
              alt="Nawal Aom"
              class="h-10 w-auto opacity-95"
            />
            <span class="menu-drawer-brand">Nawal Aom · Yoga</span>
          </NuxtLink>
        </div>
      </aside>
    </Transition>
  </header>
</template>

<script setup lang="ts">
const open = ref(false)

watch(open, (isOpen) => {
  if (import.meta.client) {
    document.body.style.overflow = isOpen ? 'hidden' : ''
  }
})
</script>

<style scoped>
.safe-header {
  padding-top: env(safe-area-inset-top, 0);
  padding-left: env(safe-area-inset-left, 0);
  padding-right: env(safe-area-inset-right, 0);
}

.logo-header {
  filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.06));
}

.nav-link {
  position: relative;
}
.nav-link::after {
  content: '';
  position: absolute;
  bottom: -4px;
  right: 0;
  width: 0;
  height: 1px;
  background: var(--color-accent);
  transition: width 0.3s ease;
}
.nav-link:hover::after {
  width: 100%;
  left: 0;
  right: auto;
}

/* Hamburger icon - 3 lines that morph to X */
.menu-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5px;
  width: 20px;
  height: 20px;
}
.menu-icon__line {
  display: block;
  height: 2px;
  width: 20px;
  background: currentColor;
  border-radius: 2px;
  transition: transform 0.35s cubic-bezier(0.68, -0.55, 0.27, 1.55),
    opacity 0.25s ease;
  transform-origin: center;
}
.menu-icon__line--1 {
  transform: translateY(0) rotate(0);
}
.menu-icon__line--2 {
  opacity: 1;
}
.menu-icon__line--3 {
  transform: translateY(0) rotate(0);
}

.menu-icon--open .menu-icon__line--1 {
  transform: translateY(7px) rotate(45deg);
}
.menu-icon--open .menu-icon__line--2 {
  opacity: 0;
  transform: scaleX(0);
}
.menu-icon--open .menu-icon__line--3 {
  transform: translateY(-7px) rotate(-45deg);
}

/* Drawer full-height background - واضحة */
.menu-drawer-bg {
  background: linear-gradient(
    180deg,
    #fdfcfa 0%,
    #faf8f5 50%,
    #f8f6f2 100%
  );
  background-color: #fbfaf7;
}

/* Menu item - خطوط كبيرة وجذابة */
.menu-item {
  color: var(--color-secondary);
}
.menu-item-text {
  font-size: 1.125rem;
  font-weight: 600;
  letter-spacing: 0.02em;
  line-height: 1.4;
}
.menu-item-accent {
  width: 3px;
  height: 1.25rem;
  border-radius: 2px;
  background: var(--color-primary);
  opacity: 0;
  transition: opacity 0.25s ease, height 0.25s ease;
}
.menu-item:hover {
  color: var(--color-accent);
  background: rgba(214, 191, 169, 0.15);
}
.menu-item:hover .menu-item-accent {
  opacity: 1;
}
.menu-item:active {
  background: rgba(214, 191, 169, 0.25);
}

/* تذييل القائمة - خط أنيق */
.menu-drawer-brand {
  font-size: 0.8125rem;
  font-weight: 500;
  letter-spacing: 0.12em;
  color: var(--color-secondary);
  opacity: 0.9;
}

/* Overlay */
.menu-overlay-enter-active,
.menu-overlay-leave-active {
  transition: opacity 0.3s ease;
}
.menu-overlay-enter-from,
.menu-overlay-leave-to {
  opacity: 0;
}

/* Side drawer - slide from right */
.menu-drawer-enter-active,
.menu-drawer-leave-active {
  transition: transform 0.35s cubic-bezier(0.32, 0.72, 0, 1), box-shadow 0.35s ease;
}
.menu-drawer-enter-from,
.menu-drawer-leave-to {
  transform: translateX(100%);
}
</style>
