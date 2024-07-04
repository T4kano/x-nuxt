<script lang="ts" setup>
definePageMeta({ layout: 'guest', middleware: ['guest'] })

async function handleLogin() {
  await useFetch('http://localhost:8000/sanctum/csrf-cookie', {
    credentials: 'include'
  })

  const cookie = useCookie('XSRF-TOKEN')

  await useFetch('http://localhost:8000/login', {
    headers: { 'X-XSRF-TOKEN': cookie.value as string },
    credentials: 'include',
    method: 'POST',
    watch: false,
    body: form
  })
}

const form = reactive({
  email: 'test@example.com',
  password: 'password'
})
</script>

<template>
  <div class="container bg-red-900/20 m-auto">
    <form
      class="space-y-4 m-auto w-1/3 bg-gray-800 rounded-xl p-6 ring-2 ring-gray-700 shadow-lg shadow-gray-700/20"
      @submit.prevent="handleLogin"
    >
      <UInput v-model="form.email" placeholder="Login" size="lg" type="email" />
      <UInput
        v-model="form.password"
        :ui="{ icon: { trailing: { pointer: '' } } }"
        placeholder="Senha"
        type="password"
        size="lg"
      >
        <template #trailing>
          <UButton icon="i-solar-eye-outline" :padded="false" variant="link" />
        </template>
      </UInput>

      <div class="flex justify-between">
        <NuxtLink to="register">
          <UButton label="Registro" variant="link" />
        </NuxtLink>
        <UButton
          icon="i-solar-login-2-bold-duotone"
          label="Login"
          type="submit"
        />
      </div>
    </form>
  </div>
</template>
