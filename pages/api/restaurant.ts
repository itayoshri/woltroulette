import {
  Cordinations,
  IFrontResponseWolt,
  IRestaurantResponseWolt,
} from '../../interfaces/wolt'
import { fetchDataSource } from '../../utils/data/datasource'

import { NextApiRequest, NextApiResponse } from 'next'
import { Roulette } from '../../utils/roulette/Restaurant'
import { Item } from '../../utils/restaurant/Item'
import { buildRestaurantUrl } from '../../utils/data'

const handler = async (_req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { location } = _req.query
    const cordinations = (location as string).split(',') as Cordinations
    const data = await fetchDataSource<IRestaurantResponseWolt>('restaurants', {
      location: cordinations,
    })

    const { city: state } = await fetchDataSource<IFrontResponseWolt>('city', {
      location: cordinations,
    })

    const roulette = new Roulette(data, state)
    const restaurant = roulette.restaurantLottery()

    res.status(200).json({
      name: restaurant.name,
      slug: restaurant.slug,
      image: restaurant.image,
      link: buildRestaurantUrl(restaurant.slug, state),
    })
  } catch (err: any) {
    res.status(500).json({ statusCode: 500, message: err.message })
  }
}

export default handler
