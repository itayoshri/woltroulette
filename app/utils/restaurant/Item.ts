import { IItem } from '../../interfaces/restaurant'
import { buildItemUrl } from '../data'
import { Restaurant } from './Restaurant'

export class Item implements IItem {
  readonly name: string
  readonly price: number
  readonly id: string
  readonly link: string

  constructor(item: IItem, restaurant: Restaurant, state: string) {
    this.name = item.name
    this.price = item.price
    this.id = item.id
    this.link = buildItemUrl(item, restaurant.name, state)
  }

  public getItem() {
    return { name: this.name, price: this.price, link: this.link }
  }
}
