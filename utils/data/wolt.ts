import { IRestaurant } from '../../interfaces/restaurant'
import { IItemWolt } from '../../interfaces/wolt'

export class WOLT {
  static toIRestaurant(restaurant: IItemWolt): IRestaurant {
    return {
      slug: restaurant.venue.slug,
      name: restaurant.venue.name,
      image: restaurant.image.url,
    }
  }

  static isResturant(restaurant: IItemWolt): boolean {
    return !!restaurant.venue.slug
  }
}
