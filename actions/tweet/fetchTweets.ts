import type { BaseResponse } from ".."
import type { Tweet } from "."

export async function fetchTweets() {
  const response = await useGet('api/tweets')
  const data = response.data.value as BaseResponse<Tweet[]>

  useTweetStore().loadTweets(data.data)
}