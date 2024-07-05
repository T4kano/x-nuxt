import { fetchTweets } from './fetchTweets'
import { create } from './create'

export interface Tweet {
  id: number
  user_id: number
  content: string
  created_at: string
  updated_at: string
  user: {
    id: number
    name: string
    email: string
    email_verified_at: string
    created_at: string
    updated_at: string
  }
}

export default { create, fetchTweets }
