<template>
  <section class="hero-luxury relative min-h-[100vh] min-h-[100dvh] overflow-hidden">
    <!-- Background -->
    <div class="absolute inset-0 hero-bg-wrap">
      <img
        src="/media/hero.jpg"
        alt=""
        class="hero-bg h-full w-full object-cover object-center"
        loading="eager"
      />
      <div class="absolute inset-0 bg-[var(--color-secondary)]/60 hero-overlay" />
      <div class="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-[var(--color-secondary)]/85" />
      <div class="hero-vignette absolute inset-0" />
    </div>

    <!-- Decorative line -->
    <div class="hero-line absolute left-8 top-1/2 z-10 hidden h-24 w-px -translate-y-1/2 bg-white/20 md:left-12 lg:left-16 xl:block" />

    <!-- Content -->
    <div class="relative z-10 flex min-h-[100vh] min-h-[100dvh] items-center">
      <div class="mx-auto w-full max-w-6xl px-5 sm:px-8 md:px-10 lg:px-16">
        <div class="max-w-2xl">
          <!-- Eyebrow -->
          <div class="hero-item hero-item-1 mb-8 flex items-center gap-4">
            <span class="h-px w-12 bg-white/40" />
            <p class="text-xs font-medium uppercase tracking-[0.4em] text-white/80">
              Yoga · Mindfulness · Retreat
            </p>
          </div>

          <!-- Logo -->
          <div class="hero-item hero-item-2 logo-hero mb-10 inline-block">
            <img
              src="/media/Nawal_yoga_logo.png"
              alt="Nawal Yoga"
              class="h-14 w-auto max-w-[200px] object-contain sm:h-16 md:h-[72px] md:max-w-[240px]"
            />
          </div>

          <!-- Headline -->
          <h1 class="hero-item hero-item-3 hero-headline mb-8 font-serif text-5xl font-light leading-[1.12] tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl">
            <span class="block">Change begins</span>
            <span class="block mt-1 text-white/95">here</span>
          </h1>

          <!-- Divider -->
          <div class="hero-item hero-item-4 mb-8 h-px w-20 bg-white/30" />

          <!-- Subhead -->
          <p class="hero-item hero-item-5 mb-12 max-w-md text-lg leading-relaxed text-white/85 md:text-xl">
            Exceptional yoga with a certified instructor. Vinyasa, Yin, Hatha & meditation—in a calm studio or in nature.
          </p>

          <!-- CTAs -->
          <div class="hero-item hero-item-6 flex flex-wrap items-center gap-6">
            <NuxtLink
              to="#about"
              class="group inline-flex min-h-[54px] items-center justify-center rounded-sm bg-white px-10 text-[15px] font-medium tracking-wide text-[var(--color-secondary)] transition-all duration-300 hover:bg-[var(--color-primary)] hover:shadow-2xl"
            >
              <span>Book your session</span>
              <span class="ml-2 transition-transform duration-300 group-hover:translate-x-1">→</span>
            </NuxtLink>
            <NuxtLink
              to="#about"
              class="inline-flex items-center gap-2 text-sm font-medium uppercase tracking-[0.2em] text-white/80 transition-colors hover:text-white"
            >
              <span class="h-px w-8 bg-white/50" />
              Discover more
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>

    <!-- Bottom: scroll + location hint -->
    <div class="hero-bottom absolute bottom-0 left-0 right-0 z-10 flex items-end justify-between px-5 pb-8 sm:px-8 md:px-10 lg:px-16">
      <a
        href="#about"
        class="flex flex-col items-center gap-3 text-white/50 transition hover:text-white/80"
      >
        <span class="text-[10px] font-medium uppercase tracking-[0.35em]">Scroll</span>
        <span class="block h-10 w-px bg-gradient-to-b from-white/40 to-transparent" />
      </a>
      <p class="text-[11px] font-medium uppercase tracking-[0.3em] text-white/40">
        Private · group · retreats
      </p>
    </div>
  </section>
</template>

<script setup lang="ts">
</script>

<style scoped>
.hero-luxury {
  isolation: isolate;
}

/* Background entrance + slow zoom */
.hero-bg-wrap {
  animation: heroBgReveal 1.4s cubic-bezier(0.22, 1, 0.36, 1) forwards;
}
.hero-overlay {
  animation: heroOverlayReveal 1.2s 0.25s cubic-bezier(0.22, 1, 0.36, 1) forwards;
  opacity: 0;
}
.hero-bg {
  transform: scale(1.06);
  animation: heroZoom 22s 1.2s ease-out forwards;
}

@keyframes heroBgReveal {
  from {
    opacity: 0;
    transform: scale(1.04);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes heroOverlayReveal {
  to {
    opacity: 1;
  }
}
@keyframes heroZoom {
  to {
    transform: scale(1.08);
  }
}

/* Content items: fade + slide up with stagger */
.hero-item {
  opacity: 0;
  transform: translateY(28px);
  animation: heroItemIn 0.9s cubic-bezier(0.22, 1, 0.36, 1) forwards;
}
.hero-item-1 { animation-delay: 0.35s; }
.hero-item-2 { animation-delay: 0.5s; }
.hero-item-3 { animation-delay: 0.65s; }
.hero-item-4 { animation-delay: 0.82s; }
.hero-item-5 { animation-delay: 0.98s; }
.hero-item-6 { animation-delay: 1.14s; }

@keyframes heroItemIn {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Decorative line */
.hero-line {
  opacity: 0;
  transform: translateY(-50%) scaleY(0);
  transform-origin: center top;
  animation: heroLineIn 0.8s 1s cubic-bezier(0.22, 1, 0.36, 1) forwards;
}
@keyframes heroLineIn {
  to {
    opacity: 1;
    transform: translateY(-50%) scaleY(1);
  }
}

/* Bottom bar */
.hero-bottom {
  opacity: 0;
  transform: translateY(12px);
  animation: heroItemIn 0.7s 1.25s cubic-bezier(0.22, 1, 0.36, 1) forwards;
}

.hero-vignette {
  background: radial-gradient(
    ellipse 80% 60% at 50% 50%,
    transparent 0%,
    transparent 50%,
    rgba(0, 0, 0, 0.15) 100%
  );
  pointer-events: none;
}

.logo-hero img {
  filter: brightness(0) invert(1) drop-shadow(0 2px 12px rgba(0, 0, 0, 0.35)) drop-shadow(0 6px 24px rgba(0, 0, 0, 0.2));
}

.hero-headline {
  text-shadow: 0 2px 40px rgba(0, 0, 0, 0.2);
}

@media (prefers-reduced-motion: reduce) {
  .hero-bg-wrap,
  .hero-overlay,
  .hero-line,
  .hero-item,
  .hero-bottom {
    animation: none;
    opacity: 1;
    transform: none;
  }
  .hero-bg {
    animation: none;
    transform: scale(1.05);
  }
}
</style>
