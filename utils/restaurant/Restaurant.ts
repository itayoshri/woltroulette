import { IItem, IRestaurant } from '../../interfaces/restaurant'
import { IMenuItemWolt, IMenuResponseWolt } from '../../interfaces/wolt'
import { fetchDataSource } from '../data/datasource'

export class Restaurant implements IRestaurant {
  readonly slug: string
  readonly name: string
  public items: IMenuItemWolt[]

  constructor(slug: string, name: string) {
    this.slug = slug
    this.name = name
    this.items = []
  }

  public async getItems() {
    const { items } = await fetchDataSource<IMenuResponseWolt>('menu', {
      slug: this.slug,
    })
    this.items = items

    return this.items
  }
}
