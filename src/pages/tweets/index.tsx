import {NextPage} from 'next'
import useSwr from 'swr'
import {Data} from '../api/tweets'

const fetcher = (url: string) => fetch(url).then(res => res.json())

const Index: NextPage = () => {
  const {data} = useSwr<Data>('/api/tweets/', fetcher)
  return (
    <div>{JSON.stringify(data?.data)}</div>
  )
}

export default Index
