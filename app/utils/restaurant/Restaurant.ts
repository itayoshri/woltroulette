import { IItem, IRestaurant } from '../../interfaces/restaurant'

export class Restaurant implements IRestaurant {
  readonly name: string
  readonly items: IItem[]

  constructor(name: string) {
    this.name = name
    this.items = []
  }
}
