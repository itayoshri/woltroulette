import {
  Cordinations,
  IFrontResponseWolt,
  IRestaurantResponseWolt,
} from '../../../interfaces/wolt'
import { fetchDataSource } from '../../../utils/data/datasource'

import { NextApiRequest, NextApiResponse } from 'next'
import { Roulette } from '../../../utils/roulette/Restaurant'
const handler = async (_req: NextApiRequest, res: NextApiResponse) => {
  try {
    let { location, city: state } = _req.query
    const cordinations = (location as string).split(',') as Cordinations
    const data = await fetchDataSource<IRestaurantResponseWolt>('restaurants', {
      location: cordinations,
    })

    if (!state) {
      state = (
        await fetchDataSource<IFrontResponseWolt>('city', {
          location: cordinations,
        })
      ).city
    }

    const roulette = new Roulette(data, state as string)
    const restaurant = roulette.restaurantLottery()
    const item = await roulette.ItemsLottery(restaurant)

    if (item) {
      res.status(200).json({
        name: item.name,
        price: item.price,
        image: item.image,
        link: item.link,
        restaurant: item.restaurant.name,
      })
    } else res.status(200).json('Try again')
  } catch (err: any) {
    res.status(500).json({ statusCode: 500, message: err.message })
  }
}

export default handler
