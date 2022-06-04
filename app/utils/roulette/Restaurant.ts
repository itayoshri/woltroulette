import { IRestaurant } from '../../interfaces/restaurant'
import { IRestaurantResponseWolt } from '../../interfaces/wolt'
import random from '../data/random'
import { WOLT } from '../data/wolt'
import { Restaurant } from '../restaurant/Restaurant'

export class RestaurantRoulette {
  readonly restaurants: IRestaurant[]

  constructor(data: IRestaurantResponseWolt) {
    this.restaurants = []
    for (let section of data.sections) {
      for (let restaurant of section.items) {
        if (restaurant.venue)
          this.restaurants.push(WOLT.toIRestaurant(restaurant))
      }
    }
  }

  public async Lottery() {
    let randomIndex = random(0, this.restaurants.length)
    const restaurant = new Restaurant(this.restaurants[randomIndex].name)
    const items = await restaurant.getItems()
    randomIndex = random(0, items.length)
    const randomItem = items[randomIndex]
    return randomItem
  }
}
