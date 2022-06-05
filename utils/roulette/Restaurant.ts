import { IRestaurant } from '../../interfaces/restaurant'
import { IMenuItemWolt, IRestaurantResponseWolt } from '../../interfaces/wolt'
import { isValidItem } from '../data'
import random from '../data/random'
import { WOLT } from '../data/wolt'
import { Item } from '../restaurant/Item'
import { Restaurant } from '../restaurant/Restaurant'

export class Roulette {
  readonly restaurants: IRestaurant[]
  readonly state: string

  constructor(data: IRestaurantResponseWolt, state: string) {
    this.restaurants = []
    this.state = state

    for (let section of data.sections) {
      for (let restaurant of section.items) {
        if (restaurant.venue && restaurant.venue.online)
          this.restaurants.push(WOLT.toIRestaurant(restaurant))
      }
    }
  }

  public restaurantLottery(): Restaurant {
    let randomIndex = random(0, this.restaurants.length)
    const restaurant = new Restaurant(
      this.restaurants[randomIndex].slug,
      this.restaurants[randomIndex].name,
      this.restaurants[randomIndex].image
    )

    return restaurant
  }

  public async ItemsLottery(restaurant: Restaurant) {
    const items = await restaurant.getItems()

    let isValid = false
    let tries = 0

    while (!isValid) {
      // item lottery
      const randomIndex = random(0, items.length)
      const randomItem = items[randomIndex]

      isValid = isValidItem(randomItem)
      if (isValid) return new Item(randomItem, restaurant, this.state)

      // break the loop if too many tries
      tries++
      if (tries > items.length) return false
    }
  }
}
