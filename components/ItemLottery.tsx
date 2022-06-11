import axios from 'axios'
import { useRouter } from 'next/router'
import { useState, useCallback } from 'react'
import LoadingItem from './Animations/Item'
import Button from './forms/Button'
import Item, { ItemProps } from './Item'
import { ADD_LOCATION } from './Message'
import Spinner from './Spinner'

const BASE_URL = '/api/wolt/item'
export const NO_RESTAURANTS = 'לא נמצאו מסעדות באזוריכם'

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
      setMessage(ADD_LOCATION)
    } else {
      setMessage('')
      setLoading(true)
      axios
        .get(`${BASE_URL}?location=${location[0]},${location[1]}`)
        .then((res) => {
          setItem(res.data)
          setLoading(false)
        })
        .catch(() => {
          setMessage(NO_RESTAURANTS)
          setLoading(false)
        })
    }
  }, [location, setMessage])

  return (
    <div className="flex py-8 flex-col items-center justify-center gap-4 px-4">
      {!loading && item.name ? (
        <Item {...(item as ItemProps)} />
      ) : loading ? (
        <LoadingItem />
      ) : null}
      <Button onClick={() => itemLottery()}>הגרלה</Button>
    </div>
  )
}
