import tweet from './tweet'
import auth from './auth'

export interface BaseResponse<T> {
  message: string
  status: string
  data: T
}

export default { auth, tweet }
