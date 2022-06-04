import { IMenuItemWolt } from './wolt'

export interface IRestaurant {
  name: string
  items?: IMenuItemWolt[]
}

export interface IItem {
  name: string
  link: string
  price: number
}
