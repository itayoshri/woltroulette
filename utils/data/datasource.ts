import axios from 'axios'
import { Cordinations } from '../../interfaces/wolt'

export interface IFetchInfo {
  location?: Cordinations
  slug?: string
  placeId?: string
  address?: string
}

export type FetchFor = 'restaurants' | 'city' | 'menu' | 'cords' | 'placeId'

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

    case 'placeId': {
      return encodeURI(
        `https://restaurant-api.wolt.com/v1/google/places/autocomplete/json?input=${info.address}`
      )
    }

    case 'cords': {
      return encodeURI(
        `https://${process.env.CORS_URL}?place_id=${info.placeId}&language=he`
      )
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
  console.log(url)
  const res = await axios.get<T>(url)
  return res.data
}
