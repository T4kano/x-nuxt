import type { UseFetchOptions } from "#app";

export default async function<T>(path: string, options: UseFetchOptions<T> = {}) {
  let headers: any = {}
  const token = useCookie('XSRF-TOKEN')

  if (token) {
    headers = { 'X-XSRF-TOKEN': token.value }
  }

  return useFetch(`http://localhost:8000/${path}`, {
    headers: { ...headers, ...options?.headers },
    credentials: 'include',
    watch: false,
    ...options
  })
}