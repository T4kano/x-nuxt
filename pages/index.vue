<script lang="ts" setup>
import actions from '~/actions'

definePageMeta({ middleware: ['auth'] })

const store = useTweetStore()
const tweets = computed(() => store.tweets)

async function logout() {
  await actions.auth.logout()
  navigateTo('/login')
}
</script>

<template>
  <div class="container bg-red-900/20 m-auto">
    {{ tweets }}
    <TweetCreate />

    <UButton
      icon="i-solar-login-2-bold-duotone"
      class="shadow-2xl shadow-green-400 hover:-translate-y-1 transition"
      label="Logout"
      @click="logout"
    />
  </div>
</template>
