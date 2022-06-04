import { Cordinations, IRestaurantResponseWolt } from '../../interfaces/wolt'
import { fetchDataSource } from '../../utils/data/datasource'

import { NextApiRequest, NextApiResponse } from 'next'
import { WOLT } from '../../utils/data/wolt'
import { RestaurantRoulette } from '../../utils/roulette/Restaurant'

const handler = async (_req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { location } = _req.query
    const cordinations = (location as string).split(',') as Cordinations
    const data = await fetchDataSource<IRestaurantResponseWolt>('restaurants', {
      location: cordinations,
    })

    const roulette = new RestaurantRoulette(data)
    const item = await roulette.Lottery()

    res.status(200).json(item)
  } catch (err: any) {
    res.status(500).json({ statusCode: 500, message: err.message })
  }
}

export default handler
