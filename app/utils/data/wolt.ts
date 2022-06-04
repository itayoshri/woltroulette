import { IRestaurant } from '../../interfaces/restaurant'
import { IItemWolt } from '../../interfaces/wolt'

export class WOLT {
  static toIRestaurant(restaurant: IItemWolt): IRestaurant {
    return { name: restaurant.venue.slug }
  }

  static isResturant(restaurant: IItemWolt): boolean {
    if (restaurant.venue.slug) return true
    return false
  }
}
