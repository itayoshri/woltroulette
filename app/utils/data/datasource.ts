import axios from 'axios'
import { Cordinations } from '../../interfaces/wolt'

export interface IFetchInfo {
  location?: Cordinations
  slug?: string
}

export type FetchFor = 'restaurants' | 'city' | 'menu'

export function buildFetchUrl(fetchFor: FetchFor, info: IFetchInfo) {
  switch (fetchFor) {
    case 'restaurants':
      return `https://${process.env.BASE_URL}/restaurants?lat=${info.location?.[0]}&lon=${info.location?.[1]}`

    case 'city': {
      return `https://${process.env.BASE_URL}/front?lat=${info.location?.[0]}&lon=${info.location?.[1]}`
    }

    case 'menu': {
      return `https://${process.env.MENU_URL}/${info.slug}/menu`
    }

    default:
      return `https://${process.env.BASE_URL}?lat=${info.location?.[0]}&lon=${info.location?.[1]}`
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
