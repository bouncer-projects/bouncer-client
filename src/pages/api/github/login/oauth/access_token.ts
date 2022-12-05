// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'
import { responseToObject } from '@/pages/api/utils'

type Data = {
  accessToken: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    const clientId = '023027124c47782c2a35'
    const clientSecret = '5bbd1f4157f896b3077e4ad9b494cacae0644f20'

    const response = await axios.post('https://github.com/login/oauth/access_token', {
      client_id: clientId,
      client_secret: clientSecret,
      code: req.query.code,
      accept: 'json'
    })

    const data = await responseToObject(response.data)

    res.status(200).json({
      accessToken: data.access_token
    })
  } catch(e) {
    res.status(500).json({
      accessToken: ''
    })
  }
}
