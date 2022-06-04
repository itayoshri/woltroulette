import { IRestaurant } from '../../interfaces/restaurant'
import { IMenuItemWolt, IRestaurantResponseWolt } from '../../interfaces/wolt'
import random from '../data/random'
import { isValidItem } from '../data/valid'
import { WOLT } from '../data/wolt'
import { Restaurant } from '../restaurant/Restaurant'

export class Roulette {
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
    const randomItem = await this.ItemsLottery(items)
    return randomItem
  }

  private async ItemsLottery(items: IMenuItemWolt[]) {
    let isValid = false
    let tries = 0

    while (!isValid) {
      // item lottery
      const randomIndex = random(0, items.length)
      const randomItem = items[randomIndex]

      isValid = isValidItem(randomItem)
      if (isValid) return randomItem

      // break the loop if too many tries
      tries++
      if (tries > items.length) return false
    }
  }
}
