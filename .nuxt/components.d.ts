
import type { DefineComponent, SlotsType } from 'vue'
type IslandComponent<T> = DefineComponent<{}, {refresh: () => Promise<void>}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, SlotsType<{ fallback: { error: unknown } }>> & T

type HydrationStrategies = {
  hydrateOnVisible?: IntersectionObserverInit | true
  hydrateOnIdle?: number | true
  hydrateOnInteraction?: keyof HTMLElementEventMap | Array<keyof HTMLElementEventMap> | true
  hydrateOnMediaQuery?: string
  hydrateAfter?: number
  hydrateWhen?: boolean
  hydrateNever?: true
}
type LazyComponent<T> = DefineComponent<HydrationStrategies, {}, {}, {}, {}, {}, {}, { hydrated: () => void }> & T


export const AppCursorFX: typeof import("../components/AppCursorFX.vue")['default']
export const SiteHeader: typeof import("../components/SiteHeader.vue")['default']
export const SectionsAboutSection: typeof import("../components/sections/AboutSection.vue")['default']
export const SectionsBlogSection: typeof import("../components/sections/BlogSection.vue")['default']
export const SectionsCenterBlock: typeof import("../components/sections/CenterBlock.vue")['default']
export const SectionsExperienceCards: typeof import("../components/sections/ExperienceCards.vue")['default']
export const SectionsExpertiseSection: typeof import("../components/sections/ExpertiseSection.vue")['default']
export const SectionsFAQSection: typeof import("../components/sections/FAQSection.vue")['default']
export const SectionsFooterIsla: typeof import("../components/sections/FooterIsla.vue")['default']
export const SectionsFooterSection: typeof import("../components/sections/FooterSection.vue")['default']
export const SectionsHeroIsla: typeof import("../components/sections/HeroIsla.vue")['default']
export const SectionsHeroSection: typeof import("../components/sections/HeroSection.vue")['default']
export const SectionsHoursLocation: typeof import("../components/sections/HoursLocation.vue")['default']
export const SectionsLogoSection: typeof import("../components/sections/LogoSection.vue")['default']
export const SectionsMediaGallery: typeof import("../components/sections/MediaGallery.vue")['default']
export const SectionsMomentsGallerySection: typeof import("../components/sections/MomentsGallerySection.vue")['default']
export const SectionsPartnersSection: typeof import("../components/sections/PartnersSection.vue")['default']
export const SectionsQuoteBanner: typeof import("../components/sections/QuoteBanner.vue")['default']
export const SectionsScheduleCta: typeof import("../components/sections/ScheduleCta.vue")['default']
export const SectionsStoryStickySection: typeof import("../components/sections/StoryStickySection.vue")['default']
export const SectionsTestimonialsCards: typeof import("../components/sections/TestimonialsCards.vue")['default']
export const SectionsTestimonialsSection: typeof import("../components/sections/TestimonialsSection.vue")['default']
export const SectionsVideoSection: typeof import("../components/sections/VideoSection.vue")['default']
export const SectionsWorkshopsSection: typeof import("../components/sections/WorkshopsSection.vue")['default']
export const SectionsYogaShowcasePinned: typeof import("../components/sections/YogaShowcasePinned.vue")['default']
export const UiAppButton: typeof import("../components/ui/AppButton.vue")['default']
export const UiAppContainer: typeof import("../components/ui/AppContainer.vue")['default']
export const UiScrollIndicator: typeof import("../components/ui/ScrollIndicator.vue")['default']
export const UiSectionHeading: typeof import("../components/ui/SectionHeading.vue")['default']
export const NuxtWelcome: typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']
export const NuxtLayout: typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']
export const NuxtErrorBoundary: typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']
export const ClientOnly: typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']
export const DevOnly: typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']
export const ServerPlaceholder: typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']
export const NuxtLink: typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']
export const NuxtLoadingIndicator: typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']
export const NuxtTime: typeof import("../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']
export const NuxtRouteAnnouncer: typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']
export const NuxtImg: typeof import("../node_modules/@nuxt/image/dist/runtime/components/NuxtImg.vue")['default']
export const NuxtPicture: typeof import("../node_modules/@nuxt/image/dist/runtime/components/NuxtPicture.vue")['default']
export const NuxtPage: typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']
export const NoScript: typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']
export const Link: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']
export const Base: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']
export const Title: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']
export const Meta: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']
export const Style: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']
export const Head: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']
export const Html: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']
export const Body: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']
export const NuxtIsland: typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']
export const LazyAppCursorFX: LazyComponent<typeof import("../components/AppCursorFX.vue")['default']>
export const LazySiteHeader: LazyComponent<typeof import("../components/SiteHeader.vue")['default']>
export const LazySectionsAboutSection: LazyComponent<typeof import("../components/sections/AboutSection.vue")['default']>
export const LazySectionsBlogSection: LazyComponent<typeof import("../components/sections/BlogSection.vue")['default']>
export const LazySectionsCenterBlock: LazyComponent<typeof import("../components/sections/CenterBlock.vue")['default']>
export const LazySectionsExperienceCards: LazyComponent<typeof import("../components/sections/ExperienceCards.vue")['default']>
export const LazySectionsExpertiseSection: LazyComponent<typeof import("../components/sections/ExpertiseSection.vue")['default']>
export const LazySectionsFAQSection: LazyComponent<typeof import("../components/sections/FAQSection.vue")['default']>
export const LazySectionsFooterIsla: LazyComponent<typeof import("../components/sections/FooterIsla.vue")['default']>
export const LazySectionsFooterSection: LazyComponent<typeof import("../components/sections/FooterSection.vue")['default']>
export const LazySectionsHeroIsla: LazyComponent<typeof import("../components/sections/HeroIsla.vue")['default']>
export const LazySectionsHeroSection: LazyComponent<typeof import("../components/sections/HeroSection.vue")['default']>
export const LazySectionsHoursLocation: LazyComponent<typeof import("../components/sections/HoursLocation.vue")['default']>
export const LazySectionsLogoSection: LazyComponent<typeof import("../components/sections/LogoSection.vue")['default']>
export const LazySectionsMediaGallery: LazyComponent<typeof import("../components/sections/MediaGallery.vue")['default']>
export const LazySectionsMomentsGallerySection: LazyComponent<typeof import("../components/sections/MomentsGallerySection.vue")['default']>
export const LazySectionsPartnersSection: LazyComponent<typeof import("../components/sections/PartnersSection.vue")['default']>
export const LazySectionsQuoteBanner: LazyComponent<typeof import("../components/sections/QuoteBanner.vue")['default']>
export const LazySectionsScheduleCta: LazyComponent<typeof import("../components/sections/ScheduleCta.vue")['default']>
export const LazySectionsStoryStickySection: LazyComponent<typeof import("../components/sections/StoryStickySection.vue")['default']>
export const LazySectionsTestimonialsCards: LazyComponent<typeof import("../components/sections/TestimonialsCards.vue")['default']>
export const LazySectionsTestimonialsSection: LazyComponent<typeof import("../components/sections/TestimonialsSection.vue")['default']>
export const LazySectionsVideoSection: LazyComponent<typeof import("../components/sections/VideoSection.vue")['default']>
export const LazySectionsWorkshopsSection: LazyComponent<typeof import("../components/sections/WorkshopsSection.vue")['default']>
export const LazySectionsYogaShowcasePinned: LazyComponent<typeof import("../components/sections/YogaShowcasePinned.vue")['default']>
export const LazyUiAppButton: LazyComponent<typeof import("../components/ui/AppButton.vue")['default']>
export const LazyUiAppContainer: LazyComponent<typeof import("../components/ui/AppContainer.vue")['default']>
export const LazyUiScrollIndicator: LazyComponent<typeof import("../components/ui/ScrollIndicator.vue")['default']>
export const LazyUiSectionHeading: LazyComponent<typeof import("../components/ui/SectionHeading.vue")['default']>
export const LazyNuxtWelcome: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']>
export const LazyNuxtLayout: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']>
export const LazyNuxtErrorBoundary: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']>
export const LazyClientOnly: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']>
export const LazyDevOnly: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']>
export const LazyServerPlaceholder: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
export const LazyNuxtLink: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']>
export const LazyNuxtLoadingIndicator: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']>
export const LazyNuxtTime: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']>
export const LazyNuxtRouteAnnouncer: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']>
export const LazyNuxtImg: LazyComponent<typeof import("../node_modules/@nuxt/image/dist/runtime/components/NuxtImg.vue")['default']>
export const LazyNuxtPicture: LazyComponent<typeof import("../node_modules/@nuxt/image/dist/runtime/components/NuxtPicture.vue")['default']>
export const LazyNuxtPage: LazyComponent<typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']>
export const LazyNoScript: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']>
export const LazyLink: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']>
export const LazyBase: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']>
export const LazyTitle: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']>
export const LazyMeta: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']>
export const LazyStyle: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']>
export const LazyHead: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']>
export const LazyHtml: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']>
export const LazyBody: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']>
export const LazyNuxtIsland: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']>

export const componentNames: string[]
