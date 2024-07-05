import type { BaseResponse } from '..'
import type { Tweet } from '.'

export interface CreateForm {
  content: string
}

export async function create(tweet: CreateForm) {
  const response =  await usePost('api/tweet', { body: tweet })
  const data = response.data.value as BaseResponse<Tweet>
  
  useTweetStore().addTweet(data.data)
}
