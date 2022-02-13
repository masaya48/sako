// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import {NextApiRequest, NextApiResponse} from 'next'
import Twitter from 'twitter-v2'

export type Data = {
  data: Tweet[]
  includes: {
    users: User[]
  }
}

type Tweet = {
  id: string
  text: string
  created_at: Date
  author_id: string
}

type User = {
  name: string
  username: string
  profile_image_url: string
}

const client = new Twitter({
  bearer_token: process.env.TWITTER_BEARER_TOKEN ?? '',
  consumer_key: process.env.TWITTER_API_KEY ?? '',
  consumer_secret: process.env.TWITTER_API_KEY_SECRET ?? '',
})

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data[]>
) {
  try {
    const tweets = await client.get<Data[]>('users/1241896478022307842/tweets?exclude=replies&tweet.fields=author_id,created_at&expansions=author_id&user.fields=name,username,profile_image_url')
    res.status(200).json(tweets)
  } catch (e) {
    throw new Error(String(e))
  }
}
