<script lang="ts" setup>
import type { Tweet } from '~/actions/tweet'

defineProps({
  tweet: { type: Object as PropType<Tweet>, required: true }
})
</script>

<template>
  <div
    class="m-auto w-2/4 bg-gray-800 rounded-xl p-6 pb-4 ring-2 shadow-lg' ring-gray-700 shadow-gray-700/20"
  >
    <div class="flex gap-4">
      <div class="w-8">
        <img
          src="https://avatars.githubusercontent.com/u/54607722?v=4"
          class="rounded-full"
        >
      </div>
      <div class="w-full">
        <span class="text-sm text-gray-400">
          {{ tweet.user.name }} @ {{ tweet.user.name }} -
          {{ tweet.created_at }}
        </span>
        <p class="mb-4">{{ tweet.content }}</p>
        <div class="flex justify-between text-gray-500">
          <div>
            <UIcon name="i-solar-chat-square-outline" />
            <span class="text-xs ms-2">76</span>
          </div>
          <div>
            <UIcon name="i-solar-share-outline" />
            <span class="text-xs ms-2">4.1K</span>
          </div>
          <div>
            <UIcon name="i-solar-heart-outline" />
            <span class="text-xs ms-2">30K</span>
          </div>
          <div>
            <UIcon name="i-solar-chart-bold" />
            <span class="text-xs ms-2">3.8M</span>
          </div>
          <div class="space-x-2">
            <UIcon name="i-solar-bookmark-outline" />
            <UIcon name="i-solar-upload-minimalistic-outline" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
