import { IRestaurant } from '../../interfaces/restaurant'
import { IRestaurantResponseWolt } from '../../interfaces/wolt'
import random from '../data/random'
import { WOLT } from '../data/wolt'

export class RestaurantRoulette {
  readonly restaurants: IRestaurant[]

  constructor(data: IRestaurantResponseWolt) {
    this.restaurants = []
    for (let section of data.sections) {
      for (let restaurant of section.items) {
        this.restaurants.push(WOLT.toIRestaurant(restaurant))
      }
    }
  }

  public lottery() {
    const randomIndex = random(0, this.restaurants.length)
    return this.restaurants[random(0, this.restaurants.length)]
  }
}
