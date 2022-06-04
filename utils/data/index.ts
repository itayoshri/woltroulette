import { IItem } from '../../interfaces/restaurant'
import { IMenuItemWolt } from '../../interfaces/wolt'

const UNVALID_PRICE = 0

export const isValidItem = (item: IMenuItemWolt): boolean => {
  if (item.baseprice <= UNVALID_PRICE) return false
  return true
}

const BASE_URL = 'wolt.com/he/isr'

export const buildItemUrl = (item: IItem, slug: string, state: string) => {
  return `https://${BASE_URL}/${state}/restaurant/${slug}/itemid-${item.id}`
}
