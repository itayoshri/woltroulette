import { Cordinations, IFrontResponseWolt } from '../../../interfaces/wolt'
import { fetchDataSource } from '../../../utils/data/datasource'

import { NextApiRequest, NextApiResponse } from 'next'
import { ICordsReq } from '../../../interfaces/cords'
import axios from 'axios'

const handler = async (_req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { address: search } = _req.query

    const { predictions } = await fetchDataSource('placeId', {
      address: search as string,
    })

    res.status(200).json(
      predictions.map((prediction) => {
        return { place: prediction.description, placeId: prediction.place_id }
      })
    )
  } catch (err: any) {
    res.status(500).json({ statusCode: 500, message: err.message })
  }
}

export default handler
