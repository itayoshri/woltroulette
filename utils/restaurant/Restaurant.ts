import { IItem, IRestaurant } from '../../interfaces/restaurant'
import { IMenuItemWolt, IMenuResponseWolt } from '../../interfaces/wolt'
import { fetchDataSource } from '../data/datasource'

export class Restaurant implements IRestaurant {
  readonly name: string
  public items: IMenuItemWolt[]

  constructor(name: string) {
    this.name = name
    this.items = []
  }

  public async getItems() {
    const { items } = await fetchDataSource<IMenuResponseWolt>('menu', {
      slug: this.name,
    })
    this.items = items

    return this.items
  }
}
