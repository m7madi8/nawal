<template>
  <section
    ref="revealEl"
    class="moments-gallery section-reveal relative overflow-x-hidden bg-[var(--color-secondary)] py-16 sm:py-20 md:py-24"
    :class="{ 'is-visible': isRevealed }"
    id="moments"
  >
    <AppContainer>
      <div class="mx-auto max-w-4xl">
        <div class="mb-12 text-center sm:mb-16">
          <p class="mb-2 text-xs font-medium uppercase tracking-[0.35em] text-[var(--color-primary)]">
            Images & moments
          </p>
          <h2 class="font-serif text-2xl font-light text-white sm:text-3xl md:text-4xl">
            Glimpses of practice & calm
          </h2>
        </div>
      </div>

      <!-- Stack: touch + mouse drag + buttons on large screens -->
      <div class="stack-area lg:px-16">
        <div
          ref="stackWrapRef"
          class="stack-wrap"
          :class="{ 'is-dragging': isDragging }"
          @touchstart="onTouchStart"
          @touchmove="onTouchMove"
          @touchend="onTouchEnd"
          @mousedown="onMouseDown"
        >
          <div
            v-for="(item, index) in images"
            :key="item.src"
            class="stack-card"
            :style="cardStyle(index)"
          >
            <div class="stack-card-inner">
              <img
                :src="item.src"
                :alt="item.alt"
                class="stack-card-img"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        <!-- Desktop nav buttons (large screens only) -->
        <button
          type="button"
          class="stack-btn stack-btn--prev"
          aria-label="Previous image"
          @click="prev"
        >
          <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          type="button"
          class="stack-btn stack-btn--next"
          aria-label="Next image"
          @click="next"
        >
          <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      <!-- Swipe / drag hint -->
      <p class="mt-6 flex items-center justify-center gap-2 text-center text-sm text-white/70">
        <span class="swipe-icon" aria-hidden="true">
          <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
          </svg>
        </span>
        Swipe or drag to browse
      </p>
    </AppContainer>
  </section>
</template>

<script setup lang="ts">
const { el: revealEl, isVisible: isRevealed } = useScrollReveal({ threshold: 0.1 })
const images = [
  { src: '/media/1.jpg', alt: 'Yoga session' },
  { src: '/media/4.jpg', alt: 'Practice in nature' },
  { src: '/media/7.jpg', alt: 'Vinyasa flow' },
  { src: '/media/9.jpg', alt: 'Yin and meditation' },
  { src: '/media/11.jpg', alt: 'Yoga retreat' }
]

const currentIndex = ref(0)

const total = images.length

function stackPosition(index: number) {
  const order = (index - currentIndex.value + total) % total
  return (total - 1) - order
}

const transforms = [
  { x: -8, y: 8, r: -4 },
  { x: -4, y: 4, r: -2 },
  { x: 0, y: 0, r: 0 },
  { x: 4, y: -4, r: 2 },
  { x: 8, y: -8, r: 4 }
]

function cardStyle(index: number) {
  const pos = stackPosition(index)
  const t = transforms[pos]
  return {
    zIndex: pos + 1,
    '--tx': `${t.x}px`,
    '--ty': `${t.y}px`,
    '--rotate': `${t.r}deg`
  }
}

function next() {
  currentIndex.value = (currentIndex.value + 1) % total
}

function prev() {
  currentIndex.value = (currentIndex.value - 1 + total) % total
}

// Touch swipe
const touchStartX = ref(0)
const touchEndX = ref(0)

function onTouchStart(e: TouchEvent) {
  touchStartX.value = e.touches[0].clientX
}

function onTouchMove(e: TouchEvent) {
  touchEndX.value = e.touches[0].clientX
}

function onTouchEnd() {
  const diff = touchStartX.value - touchEndX.value
  const minSwipe = 50
  if (diff > minSwipe) next()
  else if (diff < -minSwipe) prev()
}

// Mouse drag (desktop / trackpad)
const stackWrapRef = ref<HTMLElement | null>(null)
const isDragging = ref(false)
const mouseStartX = ref(0)
const mouseEndX = ref(0)

function onMouseDown(e: MouseEvent) {
  if (e.button !== 0) return
  isDragging.value = true
  mouseStartX.value = e.clientX
  mouseEndX.value = e.clientX
  const onMouseMove = (e: MouseEvent) => {
    mouseEndX.value = e.clientX
  }
  const onMouseUp = () => {
    isDragging.value = false
    const diff = mouseStartX.value - mouseEndX.value
    const minDrag = 40
    if (diff > minDrag) next()
    else if (diff < -minDrag) prev()
    document.removeEventListener('mousemove', onMouseMove)
    document.removeEventListener('mouseup', onMouseUp)
  }
  document.addEventListener('mousemove', onMouseMove)
  document.addEventListener('mouseup', onMouseUp)
}
</script>

<style scoped>
.stack-area {
  position: relative;
  width: 100%;
  max-width: 380px;
  margin: 0 auto;
}
@media (min-width: 640px) {
  .stack-area {
    max-width: 420px;
  }
}

.stack-wrap {
  position: relative;
  width: 100%;
  aspect-ratio: 3 / 4;
  min-height: 320px;
  touch-action: pan-y;
  cursor: grab;
}
.stack-wrap.is-dragging {
  cursor: grabbing;
  user-select: none;
}
@media (min-width: 640px) {
  .stack-wrap {
    min-height: 400px;
  }
}

.stack-card {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
}
@media (min-width: 640px) {
  .stack-card {
    padding: 1.5rem;
  }
}

.stack-card-inner {
  width: 100%;
  height: 100%;
  border-radius: var(--radius-xl, 1.5rem);
  overflow: hidden;
  box-shadow: 0 10px 40px -15px rgba(0, 0, 0, 0.4);
  transform: translate(var(--tx, 0), var(--ty, 0)) rotate(var(--rotate, 0deg));
  transition: transform 0.4s cubic-bezier(0.32, 0.72, 0, 1);
}

.stack-card-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.swipe-icon {
  display: inline-flex;
  animation: swipe-hint 2s ease-in-out infinite;
}

@keyframes swipe-hint {
  0%, 100% { transform: translateX(0); opacity: 0.8; }
  50% { transform: translateX(6px); opacity: 1; }
}

/* Desktop nav buttons - visible on large screens only */
.stack-btn {
  display: none;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 48px;
  height: 48px;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: 1px solid rgba(255, 255, 255, 0.35);
  background: rgba(255, 255, 255, 0.08);
  color: white;
  cursor: pointer;
  transition: background 0.25s ease, border-color 0.25s ease, transform 0.2s ease;
}
.stack-btn:hover {
  background: rgba(255, 255, 255, 0.18);
  border-color: rgba(255, 255, 255, 0.5);
}
.stack-btn:active {
  transform: translateY(-50%) scale(0.96);
}
@media (min-width: 1024px) {
  .stack-btn {
    display: flex;
  }
}
.stack-btn--prev {
  left: -56px;
}
.stack-btn--next {
  right: -56px;
}
@media (min-width: 1280px) {
  .stack-btn--prev {
    left: -64px;
  }
  .stack-btn--next {
    right: -64px;
  }
}
</style>
