// Nuxt 3 configuration for cinematic yoga retreat site
export default defineNuxtConfig({
  ssr: true,
  typescript: {
    strict: true,
    typeCheck: false
  },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/image'
  ],
  app: {
    head: {
      htmlAttrs: {
        lang: 'en',
        dir: 'ltr'
      },
      title: 'Nawal Aom Yoga – Yoga Classes | Vinyasa, Yin, Hatha, Meditation',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1, viewport-fit=cover' },
        { name: 'description', content: 'Yoga with a certified instructor. Vinyasa, Yin, Hatha & meditation—private and group sessions, workshops and retreats. Yoga for everyone.' }
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500;600;700&family=Inter:wght@300;400;500&display=swap'
        }
      ]
    },
    pageTransition: {
      name: 'page',
      mode: 'out-in'
    },
    layoutTransition: {
      name: 'layout',
      mode: 'out-in'
    }
  },
  css: [
    '~/assets/css/main.css'
  ],
  tailwindcss: {
    cssPath: '~/assets/css/main.css',
    viewer: false
  },
  image: {
    format: ['webp', 'avif'],
    screens: {
      xs: 360,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      '2xl': 1536
    }
  },
  runtimeConfig: {
    public: {
      siteName: 'Nowal Aom Yoga'
    }
  }
})

