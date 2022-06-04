import { IItem, IRestaurant } from '../../interfaces/restaurant'
import { IMenuItemWolt, IMenuResponseWolt } from '../../interfaces/wolt'
import { fetchDataSource } from '../data/datasource'

export class Restaurant implements IRestaurant {
  readonly slug: string
  readonly name: string
  readonly image: string
  public items: IMenuItemWolt[]

  constructor(slug: string, name: string, image: string) {
    this.slug = slug
    this.name = name
    this.image = image
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
