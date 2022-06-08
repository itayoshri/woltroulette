import { Cordinations, IFrontResponseWolt } from '../../../interfaces/wolt'
import { fetchDataSource } from '../../../utils/data/datasource'

import { NextApiRequest, NextApiResponse } from 'next'

const handler = async (_req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { location } = _req.query
    const cordinations = (location as string).split(',') as Cordinations
    const { city } = await fetchDataSource<IFrontResponseWolt>('city', {
      location: cordinations,
    })

    res.status(200).json(city)
  } catch (err: any) {
    res.status(500).json({ statusCode: 500, message: err.message })
  }
}

export default handler
