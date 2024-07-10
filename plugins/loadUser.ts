import actions from '~/actions'

export default defineNuxtPlugin(async () => {
  try {
    await actions.auth.fetchUser()
    navigateTo('/')
  } catch (error) {
    navigateTo('/login')
  }
})
