import {
  Cordinations,
  IFrontResponseWolt,
  IRestaurantResponseWolt,
} from '../../interfaces/wolt'
import { fetchDataSource } from '../../utils/data/datasource'

import { NextApiRequest, NextApiResponse } from 'next'
import { WOLT } from '../../utils/data/wolt'
import { Roulette } from '../../utils/roulette/Restaurant'

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

    const roulette = new Roulette(data)
    const item = await roulette.Lottery(state)

    if (item)
      res.status(200).json({
        name: item.name,
        price: item.price,
        image: item.image,
        link: item.link,
      })
    else res.status(200).json('Try again')
  } catch (err: any) {
    res.status(500).json({ statusCode: 500, message: err.message })
  }
}

export default handler
