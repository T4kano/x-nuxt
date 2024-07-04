import { useAuthStore } from '~/stores/useAuthStore.js'

export default defineNuxtPlugin(async (nuxtApp) => {
  const authStore = useAuthStore()

  if (!authStore.isLoggedIn) {
    try {
      await authStore.fetchUser()
      navigateTo('/')
    } catch (error) {
      navigateTo('/login')
    }
  }
})
