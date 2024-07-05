<script lang="ts" setup>
import type { LoginForm } from '~/actions/auth/login';
import actions from '~/actions';
// import { useAuthStore } from '~/stores/useAuthStore'
definePageMeta({ layout: 'guest', middleware: ['guest'] })

// const authStore = useAuthStore()

async function handleLogin() {
  await actions.auth.login(form)
  navigateTo('/')
}

const form = reactive<LoginForm>({
  email: 'test@example.com',
  password: 'password'
})
</script>

<template>
  <div class="container bg-red-900/20 m-auto">
    <form
      :class="[
        'space-y-4 m-auto w-1/3 bg-gray-800 rounded-xl p-6 ring-2 shadow-lg',
        'ring-gray-700 shadow-gray-700/20'
      ]"
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
          class="shadow-2xl shadow-green-400 hover:-translate-y-1 transition"
          label="Login"
          type="submit"
        />
      </div>
    </form>
  </div>
</template>
