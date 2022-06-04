export interface IRestaurant {
  name: string
  items?: IItem[]
}

export interface IItem {
  name: string
  link: string
  price: number
}
