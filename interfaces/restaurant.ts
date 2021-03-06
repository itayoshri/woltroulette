import { IMenuItemWolt } from './wolt'

export interface IRestaurant {
  slug: string
  name: string
  image: string
  items?: IMenuItemWolt[]
}

export interface IItem {
  name: string
  price: number
  id: string
  image: string
}
