import { IMenuItemWolt } from '../../interfaces/wolt'

const UNVALID_PRICE = 0

export const isValidItem = (item: IMenuItemWolt): boolean => {
  if (item.baseprice <= UNVALID_PRICE) return false
  return true
}
