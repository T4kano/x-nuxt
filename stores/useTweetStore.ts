import type { Tweet } from "~/actions/tweet"

export const useTweetStore = defineStore('tweet', () => {
  const tweets = ref<Tweet[]>([])

  const addTweet = (newTweet: Tweet) => {
    tweets.value.push(newTweet)
  }

  return { tweets, addTweet }
})
