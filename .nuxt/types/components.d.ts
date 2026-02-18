
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

interface _GlobalComponents {
  AppCursorFX: typeof import("../../components/AppCursorFX.vue")['default']
  SiteHeader: typeof import("../../components/SiteHeader.vue")['default']
  SectionsAboutSection: typeof import("../../components/sections/AboutSection.vue")['default']
  SectionsBlogSection: typeof import("../../components/sections/BlogSection.vue")['default']
  SectionsCenterBlock: typeof import("../../components/sections/CenterBlock.vue")['default']
  SectionsExperienceCards: typeof import("../../components/sections/ExperienceCards.vue")['default']
  SectionsExpertiseSection: typeof import("../../components/sections/ExpertiseSection.vue")['default']
  SectionsFAQSection: typeof import("../../components/sections/FAQSection.vue")['default']
  SectionsFooterIsla: typeof import("../../components/sections/FooterIsla.vue")['default']
  SectionsFooterSection: typeof import("../../components/sections/FooterSection.vue")['default']
  SectionsHeroIsla: typeof import("../../components/sections/HeroIsla.vue")['default']
  SectionsHeroSection: typeof import("../../components/sections/HeroSection.vue")['default']
  SectionsHoursLocation: typeof import("../../components/sections/HoursLocation.vue")['default']
  SectionsLogoSection: typeof import("../../components/sections/LogoSection.vue")['default']
  SectionsMediaGallery: typeof import("../../components/sections/MediaGallery.vue")['default']
  SectionsMomentsGallerySection: typeof import("../../components/sections/MomentsGallerySection.vue")['default']
  SectionsPartnersSection: typeof import("../../components/sections/PartnersSection.vue")['default']
  SectionsQuoteBanner: typeof import("../../components/sections/QuoteBanner.vue")['default']
  SectionsScheduleCta: typeof import("../../components/sections/ScheduleCta.vue")['default']
  SectionsStoryStickySection: typeof import("../../components/sections/StoryStickySection.vue")['default']
  SectionsTestimonialsCards: typeof import("../../components/sections/TestimonialsCards.vue")['default']
  SectionsTestimonialsSection: typeof import("../../components/sections/TestimonialsSection.vue")['default']
  SectionsVideoSection: typeof import("../../components/sections/VideoSection.vue")['default']
  SectionsWorkshopsSection: typeof import("../../components/sections/WorkshopsSection.vue")['default']
  SectionsYogaShowcasePinned: typeof import("../../components/sections/YogaShowcasePinned.vue")['default']
  UiAppButton: typeof import("../../components/ui/AppButton.vue")['default']
  UiAppContainer: typeof import("../../components/ui/AppContainer.vue")['default']
  UiScrollIndicator: typeof import("../../components/ui/ScrollIndicator.vue")['default']
  UiSectionHeading: typeof import("../../components/ui/SectionHeading.vue")['default']
  NuxtWelcome: typeof import("../../node_modules/nuxt/dist/app/components/welcome.vue")['default']
  NuxtLayout: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-layout")['default']
  NuxtErrorBoundary: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']
  ClientOnly: typeof import("../../node_modules/nuxt/dist/app/components/client-only")['default']
  DevOnly: typeof import("../../node_modules/nuxt/dist/app/components/dev-only")['default']
  ServerPlaceholder: typeof import("../../node_modules/nuxt/dist/app/components/server-placeholder")['default']
  NuxtLink: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-link")['default']
  NuxtLoadingIndicator: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']
  NuxtTime: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']
  NuxtRouteAnnouncer: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']
  NuxtImg: typeof import("../../node_modules/@nuxt/image/dist/runtime/components/NuxtImg.vue")['default']
  NuxtPicture: typeof import("../../node_modules/@nuxt/image/dist/runtime/components/NuxtPicture.vue")['default']
  NuxtPage: typeof import("../../node_modules/nuxt/dist/pages/runtime/page")['default']
  NoScript: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['NoScript']
  Link: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Link']
  Base: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Base']
  Title: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Title']
  Meta: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Meta']
  Style: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Style']
  Head: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Head']
  Html: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Html']
  Body: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Body']
  NuxtIsland: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-island")['default']
  LazyAppCursorFX: LazyComponent<typeof import("../../components/AppCursorFX.vue")['default']>
  LazySiteHeader: LazyComponent<typeof import("../../components/SiteHeader.vue")['default']>
  LazySectionsAboutSection: LazyComponent<typeof import("../../components/sections/AboutSection.vue")['default']>
  LazySectionsBlogSection: LazyComponent<typeof import("../../components/sections/BlogSection.vue")['default']>
  LazySectionsCenterBlock: LazyComponent<typeof import("../../components/sections/CenterBlock.vue")['default']>
  LazySectionsExperienceCards: LazyComponent<typeof import("../../components/sections/ExperienceCards.vue")['default']>
  LazySectionsExpertiseSection: LazyComponent<typeof import("../../components/sections/ExpertiseSection.vue")['default']>
  LazySectionsFAQSection: LazyComponent<typeof import("../../components/sections/FAQSection.vue")['default']>
  LazySectionsFooterIsla: LazyComponent<typeof import("../../components/sections/FooterIsla.vue")['default']>
  LazySectionsFooterSection: LazyComponent<typeof import("../../components/sections/FooterSection.vue")['default']>
  LazySectionsHeroIsla: LazyComponent<typeof import("../../components/sections/HeroIsla.vue")['default']>
  LazySectionsHeroSection: LazyComponent<typeof import("../../components/sections/HeroSection.vue")['default']>
  LazySectionsHoursLocation: LazyComponent<typeof import("../../components/sections/HoursLocation.vue")['default']>
  LazySectionsLogoSection: LazyComponent<typeof import("../../components/sections/LogoSection.vue")['default']>
  LazySectionsMediaGallery: LazyComponent<typeof import("../../components/sections/MediaGallery.vue")['default']>
  LazySectionsMomentsGallerySection: LazyComponent<typeof import("../../components/sections/MomentsGallerySection.vue")['default']>
  LazySectionsPartnersSection: LazyComponent<typeof import("../../components/sections/PartnersSection.vue")['default']>
  LazySectionsQuoteBanner: LazyComponent<typeof import("../../components/sections/QuoteBanner.vue")['default']>
  LazySectionsScheduleCta: LazyComponent<typeof import("../../components/sections/ScheduleCta.vue")['default']>
  LazySectionsStoryStickySection: LazyComponent<typeof import("../../components/sections/StoryStickySection.vue")['default']>
  LazySectionsTestimonialsCards: LazyComponent<typeof import("../../components/sections/TestimonialsCards.vue")['default']>
  LazySectionsTestimonialsSection: LazyComponent<typeof import("../../components/sections/TestimonialsSection.vue")['default']>
  LazySectionsVideoSection: LazyComponent<typeof import("../../components/sections/VideoSection.vue")['default']>
  LazySectionsWorkshopsSection: LazyComponent<typeof import("../../components/sections/WorkshopsSection.vue")['default']>
  LazySectionsYogaShowcasePinned: LazyComponent<typeof import("../../components/sections/YogaShowcasePinned.vue")['default']>
  LazyUiAppButton: LazyComponent<typeof import("../../components/ui/AppButton.vue")['default']>
  LazyUiAppContainer: LazyComponent<typeof import("../../components/ui/AppContainer.vue")['default']>
  LazyUiScrollIndicator: LazyComponent<typeof import("../../components/ui/ScrollIndicator.vue")['default']>
  LazyUiSectionHeading: LazyComponent<typeof import("../../components/ui/SectionHeading.vue")['default']>
  LazyNuxtWelcome: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/welcome.vue")['default']>
  LazyNuxtLayout: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-layout")['default']>
  LazyNuxtErrorBoundary: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']>
  LazyClientOnly: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/client-only")['default']>
  LazyDevOnly: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/dev-only")['default']>
  LazyServerPlaceholder: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
  LazyNuxtLink: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-link")['default']>
  LazyNuxtLoadingIndicator: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']>
  LazyNuxtTime: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']>
  LazyNuxtRouteAnnouncer: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']>
  LazyNuxtImg: LazyComponent<typeof import("../../node_modules/@nuxt/image/dist/runtime/components/NuxtImg.vue")['default']>
  LazyNuxtPicture: LazyComponent<typeof import("../../node_modules/@nuxt/image/dist/runtime/components/NuxtPicture.vue")['default']>
  LazyNuxtPage: LazyComponent<typeof import("../../node_modules/nuxt/dist/pages/runtime/page")['default']>
  LazyNoScript: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['NoScript']>
  LazyLink: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Link']>
  LazyBase: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Base']>
  LazyTitle: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Title']>
  LazyMeta: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Meta']>
  LazyStyle: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Style']>
  LazyHead: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Head']>
  LazyHtml: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Html']>
  LazyBody: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Body']>
  LazyNuxtIsland: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-island")['default']>
}

declare module 'vue' {
  export interface GlobalComponents extends _GlobalComponents { }
}

export {}
