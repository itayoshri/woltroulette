import { fetchDataSource } from '../../../utils/data/datasource'
import { NextApiRequest, NextApiResponse } from 'next'

const handler = async (_req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { placeId } = _req.query
    const { results } = await fetchDataSource('cords', {
      placeId: placeId as string,
    })

    const cords = results[0].geometry.location

    res.status(200).json({ cords: [cords.lat, cords.lng] })
  } catch (err: any) {
    res.status(500).json({ statusCode: 500, message: err.message })
  }
}

export default handler
