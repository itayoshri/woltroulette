import axios from 'axios'
import { Cordinations } from '../../interfaces/wolt'

export interface IFetchInfo {
  location?: Cordinations
}

export type FetchFor = 'restaurants'

export function buildFetchUrl(fetchFor: FetchFor, info: IFetchInfo) {
  switch (fetchFor) {
    case 'restaurants':
      return `https://${process.env.RESTAURANTS_URL}?lat=${info.location?.[0]}&lon=${info.location?.[1]}`

    default:
      return `https://${process.env.RESTAURANTS_URL}?lat=${info.location?.[0]}&lon=${info.location?.[1]}`
  }
}

export async function fetchDataSource<T extends {}>(
  fetchFor: FetchFor,
  info: IFetchInfo
) {
  const url = buildFetchUrl(fetchFor, info)
  const res = await axios.get<T>(url)
  return res.data
}
