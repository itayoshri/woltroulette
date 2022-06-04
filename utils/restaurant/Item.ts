import { IItem } from '../../interfaces/restaurant'
import { IMenuItemWolt } from '../../interfaces/wolt'
import { buildItemUrl } from '../data'
import { Restaurant } from './Restaurant'

export class Item implements IItem {
  readonly name: string
  readonly price: number
  readonly id: string
  readonly image: string
  readonly link: string
  readonly restaurant: Restaurant

  constructor(item: IMenuItemWolt, restaurant: Restaurant, state: string) {
    this.name = item.name
    this.price = item.baseprice
    this.id = item.id
    this.image = item.image
    this.link = buildItemUrl(item, restaurant.slug, state)
    this.restaurant = restaurant
  }
}
