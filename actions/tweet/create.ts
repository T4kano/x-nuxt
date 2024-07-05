import type { Tweet } from "."

export interface CreateForm {
  content: string
}

export async function create(tweet: CreateForm) {
  // const response =  await usePost('tweet', { body: tweet })
  const response = {
    data: {
      value: {
        id: 1,
        user_id: 1,
        content: "test",
        created_at: "2021-01-01T00:00:00.000Z",
        updated_at: "2021-01-01T00:00:00.000Z",
      },
    },
  }
  useTweetStore().addTweet(response.data.value as Tweet)
}
