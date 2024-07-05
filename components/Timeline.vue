<script lang="ts" setup>
import actions from '~/actions'

onMounted(async () => await actions.tweet.fetchTweets())
const tweets = computed(() => useTweetStore().tweets)
</script>

<template>
  <div class="space-y-6">
    <Tweet v-for="tweet in tweets" :key="tweet.id" :tweet />
  </div>
</template>
