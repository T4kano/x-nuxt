<script lang="ts" setup>
import actions from '~/actions'

definePageMeta({ middleware: ['auth'] })

async function logout() {
  await actions.auth.logout()
  navigateTo('/login')
}
</script>

<template>
  <div class="space-y-6">
    <TweetCreate />

    <Timeline />

    <UButton
      icon="i-solar-login-2-bold-duotone"
      class="shadow-2xl shadow-green-400 hover:-translate-y-1 transition"
      label="Logout"
      @click="logout"
    />
  </div>
</template>
