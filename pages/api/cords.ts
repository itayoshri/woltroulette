import { Cordinations, IFrontResponseWolt } from '../../interfaces/wolt'
import { fetchDataSource } from '../../utils/data/datasource'

import { NextApiRequest, NextApiResponse } from 'next'
import { ICordsReq } from '../../interfaces/cords'
import axios from 'axios'

const handler = async (_req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { address } = _req.query

    const { predictions } = await fetchDataSource('placeId', {
      address: address as string,
    })

    const placeId = predictions[0].place_id

    const { results } = await fetchDataSource('cords', { placeId })

    const cords = results[0].geometry.location

    res.status(200).json([cords.lat, cords.lng])
  } catch (err: any) {
    res.status(500).json({ statusCode: 500, message: err.message })
  }
}

export default handler
