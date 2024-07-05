<script lang="ts" setup>
import type { CreateForm } from '~/actions/tweet/create'
import actions from '~/actions'

const editing = ref<boolean>(false)

const form = reactive<CreateForm>({
  content: ''
})

async function handleTweet() {
  await actions.tweet.create(form)
  form.content = ''
}
</script>

<template>
  <form
    class="space-y-4 m-auto w-1/3 bg-gray-800 rounded-xl p-6 ring-2 shadow-lg' ring-gray-700 shadow-gray-700/20"
    @submit.prevent="handleTweet"
  >
    <div
      class="flex gap-2 border-b-2 border-green-400/50 transition focus-within:border-green-400 mb-5"
    >
      <div class="w-10 mt-2">
        <img
          src="https://avatars.githubusercontent.com/u/54607722?v=4"
          class="rounded-full"
        >
      </div>
      <UTextarea
        v-model="form.content"
        placeholder="Tweet..."
        size="lg"
        variant="none"
        class="w-full"
        required
        @keydown.shift.enter.prevent="handleTweet"
        @keydown="editing = true"
      />
    </div>
    <div class="flex justify-between items-center">
      <div class="icons">
        <UIcon name="i-solar-gallery-outline" />
        <UIcon name="i-solar-high-definition-outline" />
        <UIcon name="i-solar-plaaylist-minimalistic-outline" />
        <UIcon name="i-solar-smile-circle-outline" />
        <UIcon name="i-solar-calendar-add-outline" />
        <UIcon name="i-solar-map-point-outline" class="opacity-50" />
      </div>
      <UButton
        icon="i-solar-add-circle-bold-duotone"
        class="shadow-2xl shadow-green-400 hover:-translate-y-1 transition"
        label="Tweet"
        type="submit"
      />
    </div>
  </form>
</template>

<style scoped>
.icons {
  @apply text-green-400 text-xl flex gap-6;
}

.icons span {
  @apply cursor-pointer hover:text-green-200 hover:-translate-y-[2px] transition;
}
</style>
