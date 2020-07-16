import useSWR from 'swr'
import api from '../services/api'

export function useFetch<Data = any, Error = any> (url: string) {
  const { data, error, mutate } = useSWR<Data, Error>(url, async url => {
    const config = {
      headers: { Authorization: `token ${process.env.REACT_APP_TOKEN}` }
    }
    const response = await api.get(url, config)
    return response.data
  })

  return { data, error, mutate }
}
