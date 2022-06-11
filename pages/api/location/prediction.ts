import { fetchDataSource } from '../../../utils/data/datasource'
import { NextApiRequest, NextApiResponse } from 'next'

export interface IPrediction {
  place: string
  placeId: string
}

const handler = async (_req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { search } = _req.query

    if (search === '') {
      res.status(200).json([])
    } else {
      const { predictions } = await fetchDataSource('placeId', {
        address: search as string,
      })

      res.status(200).json(
        predictions.map((prediction) => {
          return { place: prediction.description, placeId: prediction.place_id }
        }) as IPrediction[]
      )
    }
  } catch (err: any) {
    res.status(500).json({ statusCode: 500, message: err.message })
  }
}

export default handler
