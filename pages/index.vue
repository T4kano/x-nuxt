<script lang="ts" setup>
import actions from '~/actions'
import type { CreateForm } from '~/actions/tweet/create'

definePageMeta({ middleware: ['auth'] })

const form = reactive<CreateForm>({
  content: ''
})

const store = useTweetStore()
const tweets = computed(() => store.tweets)

async function logout() {
  await actions.auth.logout()
  navigateTo('/login')
}

async function tweet() {
  await actions.tweet.create(form)
}
</script>

<template>
  <div class="container bg-red-900/20 m-auto">
    {{ tweets }}
    <form
      :class="[
        'space-y-4 m-auto w-1/3 bg-gray-800 rounded-xl p-6 ring-2 shadow-lg',
        'ring-gray-700 shadow-gray-700/20'
      ]"
      @submit.prevent="tweet"
    >
      <UTextarea v-model="form.content" placeholder="Tweet..." size="lg" />

      <UButton
        icon="i-solar-login-2-bold-duotone"
        class="shadow-2xl shadow-green-400 hover:-translate-y-1 transition"
        label="Login"
        type="submit"
      />
    </form>

    <UButton
      icon="i-solar-login-2-bold-duotone"
      class="shadow-2xl shadow-green-400 hover:-translate-y-1 transition"
      label="Logout"
      @click="logout"
    />
  </div>
</template>
