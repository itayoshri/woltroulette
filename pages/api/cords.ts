import { Cordinations, IFrontResponseWolt } from '../../interfaces/wolt'
import { fetchDataSource } from '../../utils/data/datasource'

import { NextApiRequest, NextApiResponse } from 'next'
import { ICordsReq } from '../../interfaces/cords'

const handler = async (_req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { address } = _req.query

    res.status(200).json({})
  } catch (err: any) {
    res.status(500).json({ statusCode: 500, message: err.message })
  }
}

export default handler
