import axios from 'axios'
import { useRouter } from 'next/router'
import { useState, useCallback } from 'react'
import Button from './forms/Button'
import Item, { ItemProps } from './Item'
import Spinner from './Spinner'

const BASE_URL = '/api/item'

export interface ItemLotteryProps {
  location: [number, number]
  setMessage(message: string): unknown
}

export default function ItemLottery({
  location,
  setMessage,
}: ItemLotteryProps) {
  const [item, setItem] = useState({ name: '' })
  const [loading, setLoading] = useState(false)
  const itemLottery = useCallback(() => {
    if (location[0] == 0 && location[1] == 0) {
      setMessage('בחרו מיקום ונסו שוב')
      setTimeout(() => setMessage(''), 2000)
    } else {
      setMessage('')
      setLoading(true)
      axios
        .get(`${BASE_URL}?location=${location[0]},${location[1]}`)
        .then((res) => {
          setItem(res.data)
          setLoading(false)
        })
    }
  }, [location, setMessage])

  return (
    <div className="flex flex-col items-center justify-center gap-4 px-4">
      {!loading && item.name ? (
        <Item {...(item as ItemProps)} />
      ) : loading ? (
        <Spinner className="w-10 h-10 fill-primary-500" />
      ) : null}
      <Button onClick={() => itemLottery()}>הגרלה</Button>
    </div>
  )
}
