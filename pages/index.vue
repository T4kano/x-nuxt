<script lang="ts" setup>
import { useAuthStore } from '#imports';
definePageMeta({ middleware: ['auth']})

async function logout() {
  const store = useAuthStore()
  await store.logout()
  navigateTo('/login')
}
</script>

<template>
  <div class="bg-gray-900">
    <h1>Index</h1>
    <UButton
          icon="i-solar-login-2-bold-duotone"
          class="shadow-2xl shadow-green-400 hover:-translate-y-1 transition"
          label="Logout"
          @click="logout"
        />
  </div>
</template>
