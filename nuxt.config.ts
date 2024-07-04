// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  devtools: { enabled: true },
  modules: ['@nuxt/ui', '@nuxt/eslint', '@pinia/nuxt'],

  alias: {
    css: '/<rootDir>/assets/css'
  },

  ui: {
    icons: ['solar'],
  },

  app: {
    head: {
      bodyAttrs: {
        class: 'bg-gray-900 text-white antialiased'
      }
    }
  }
})
