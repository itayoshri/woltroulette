type Currency = 'ILS' | string
export type Cordinations = [string, string]
type Line = 'restaurant' | string
type Rating = 1 | 2 | 3 | 4 | 5

export interface IDateWolt {
  $date: number
}

export interface ISectionWolt {
  items: IItemWolt[]
  link: ILinkWolt
  name: string
  template: string
}

export interface ISortableItem {
  id: string
  value: number
}

export interface ISortableWolt {
  sortables: ISortableItem[]
}

export interface ILinkWolt {
  target: string
  target_sort: string
  target_title: string
  title: string
  type: string
  venue_mainimage_blurhash: string
}

export interface IImageWolt {
  blurhash: string
  url: string
  variants: string[]
}

export interface IValueWolt {
  id: string
  name: string
}

export interface IFiltersWolt {
  id: string
  name?: string
  type?: string
  values: IValueWolt[]
}

export interface IFilteringWolt {
  filtering: IFiltersWolt[]
}

export interface IRating {
  rating: Rating
  score: number
}

export interface IVenueWolt {
  address: string
  badges: [] //TODO: find what is it
  categories: []
  city: string
  currency: Currency
  delivers: boolean
  delivery_price: string
  delivery_price_highlight: boolean
  estimate: number
  estimate_range: string
  framchise: string
  id: string
  location: Cordinations
  name: string
  online: boolean
  price_range: number
  product_line: Line
  rating: IRating
  short_description: string
  show_wolt_plus: boolean
  slug: string
  tags: string[]
}

/**
 * Represents restaurant
 */
export interface IItemWolt {
  filtering: IFilteringWolt
  image: IImageWolt
  link: ILinkWolt
  sorting: ISortableWolt
  tamplate: string
  title: string
  track_id: string
  venue: IVenueWolt
}

export interface IRestaurantResponseWolt {
  created: IDateWolt
  expires_in_second: number
  filtering: IFilteringWolt
  name: string
  page_title: string
  sections: ISectionWolt[]
  show_large_title: boolean
  show_map: boolean
  sorting: unknown
  track_id: string
}

export interface IMenuItemWolt {
  name: string
  baseprice: number // in Agorot
  id: string
}

export interface IFrontResponseWolt {
  city: string
}

export interface IMenuResponseWolt {
  items: IMenuItemWolt[]
}
