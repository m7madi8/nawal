<template>
  <section
    ref="revealEl"
    class="workshops-section section-reveal relative overflow-hidden bg-[var(--bg-body)] py-16 sm:py-20 md:py-24"
    :class="{ 'is-visible': isRevealed }"
    id="workshops"
  >
    <AppContainer>
      <div class="mx-auto max-w-6xl px-6 sm:px-10 md:px-14 lg:px-20">
        <div class="mb-12 text-center sm:mb-16">
          <p class="mb-2 text-xs font-medium uppercase tracking-[0.35em] text-[var(--color-accent)]">
            Workshops
          </p>
          <h2 class="font-serif text-2xl font-light text-[var(--color-text)] sm:text-3xl md:text-4xl">
            Al-Tira · Jiva · Retreat
          </h2>
        </div>

        <div class="grid gap-6 sm:gap-8 lg:grid-cols-3 lg:gap-8">
          <article
            v-for="(workshop, index) in workshops"
            :key="workshop.id"
            class="workshop-card group"
          >
            <div class="workshop-card-inner flex flex-col overflow-hidden">
              <div class="workshop-card-image-wrap">
                <img
                  :src="workshop.image"
                  :alt="workshop.title"
                  class="workshop-card-image"
                  loading="lazy"
                  @error="(e) => (e.target as HTMLImageElement).src = '/media/5.jpg'"
                />
              </div>
              <div class="workshop-card-body flex flex-col flex-1">
                <div class="workshop-card-header">
                  <span class="workshop-card-tag">{{ workshop.tag }}</span>
                  <h3 class="workshop-card-title font-serif">{{ workshop.title }}</h3>
                </div>
                <p class="workshop-card-desc">{{ workshop.description }}</p>
                <div class="workshop-card-footer">
                  <span class="workshop-card-cta">
                    {{ workshop.cta }}
                    <span class="inline-block transition-transform duration-200 group-hover:translate-x-1">→</span>
                  </span>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </AppContainer>
  </section>
</template>

<script setup lang="ts">
const { el: revealEl, isVisible: isRevealed } = useScrollReveal({ threshold: 0.08 })
const workshops = [
  {
    id: 'al-tira',
    tag: 'Al-Tira',
    title: 'Al-Tira Yoga',
    description: 'Experience freedom in the air. Suspension-based practice for strength, flexibility and playfulness—suitable for all levels.',
    cta: 'Discover more',
    image: '/media/al-tira.jpg'
  },
  {
    id: 'jiva',
    tag: 'Jiva Yoga',
    title: 'Jiva Yoga',
    description: 'Connect body, breath and mind. A holistic approach blending movement, meditation and mindfulness in a supportive space.',
    cta: 'Learn more',
    image: '/media/jiva.jpg'
  },
  {
    id: 'retreat',
    tag: 'Retreat',
    title: 'Retreat',
    description: 'Step away from the everyday. Multi-day yoga retreats in nature—deep practice, rest and connection with like-minded souls.',
    cta: 'Explore retreats',
    image: '/media/retreat.jpg'
  }
]
</script>

<style scoped>
.workshop-card {
  position: relative;
}

.workshop-card-inner {
  height: 100%;
  border-radius: var(--radius-xl, 1.5rem);
  border: 1px solid var(--color-primary);
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.98) 0%,
    rgba(246, 244, 241, 0.98) 100%
  );
  transition: box-shadow 0.35s ease, transform 0.35s ease, border-color 0.35s ease;
}

.workshop-card-image-wrap {
  aspect-ratio: 4 / 3;
  overflow: hidden;
  border-radius: var(--radius-xl) var(--radius-xl) 0 0;
  background: var(--color-gray);
}

.workshop-card-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.4s ease;
}

.workshop-card:hover .workshop-card-image {
  transform: scale(1.03);
}

.workshop-card-body {
  padding: 1.75rem 1.75rem 2rem;
}

.workshop-card:hover .workshop-card-inner {
  box-shadow:
    0 4px 6px -1px rgba(90, 70, 50, 0.08),
    0 20px 40px -15px rgba(90, 70, 50, 0.15);
  border-color: var(--color-accent);
  transform: translateY(-4px);
}

.workshop-card-header {
  margin-bottom: 0.75rem;
}

.workshop-card-tag {
  display: inline-block;
  margin-bottom: 0.75rem;
  padding: 0.35rem 0.75rem;
  font-size: 0.7rem;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--color-accent);
  background: rgba(166, 124, 82, 0.12);
  border-radius: 9999px;
}

.workshop-card-title {
  font-size: 1.5rem;
  font-weight: 500;
  line-height: 1.3;
  color: var(--color-secondary);
}

.workshop-card-desc {
  font-size: 0.9375rem;
  line-height: 1.65;
  color: var(--text-soft);
  margin-bottom: 1.5rem;
  flex: 1;
}

.workshop-card-footer {
  margin-top: auto;
}

.workshop-card-cta {
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--color-accent);
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
}

.workshops-section.section-reveal .workshop-card {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.5s ease, transform 0.5s ease, box-shadow 0.35s ease, border-color 0.35s ease;
}
.workshops-section.section-reveal.is-visible .workshop-card:nth-child(1) { transition-delay: 0.1s; }
.workshops-section.section-reveal.is-visible .workshop-card:nth-child(2) { transition-delay: 0.2s; }
.workshops-section.section-reveal.is-visible .workshop-card:nth-child(3) { transition-delay: 0.3s; }
.workshops-section.section-reveal.is-visible .workshop-card {
  opacity: 1;
  transform: translateY(0);
}
</style>
