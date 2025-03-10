import type { Tweet } from '~/actions/tweet'

export const useTweetStore = defineStore('tweet', () => {
  const tweets = ref<Tweet[]>([])

  const addTweet = (tweet: Tweet) => tweets.value.unshift(tweet)

  const loadTweets = (newTweets: Tweet[]) => (tweets.value = newTweets)

  return { tweets, addTweet, loadTweets }
})
