// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxt/ui', '@nuxt/eslint'],
  alias: {
    css: '/<rootDir>/assets/css'
  },
  ui: {
    icons: ['solar']
  },
  app: {
    head: {
      bodyAttrs: {
        class: 'bg-gray-900 text-white antialiased'
      }
    }
  }
})
