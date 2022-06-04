import axios from 'axios'
import { useRouter } from 'next/router'
import { useState, useCallback } from 'react'
import Button from './forms/Button'
import Item, { ItemProps } from './Item'
import Spinner from './Spinner'

const BASE_URL = '/api/item'

export interface ItemLotteryProps {
  location: [number, number]
}

export default function ItemLottery({ location }: ItemLotteryProps) {
  const [item, setItem] = useState({ name: '' })
  const [loading, setLoading] = useState(false)
  const itemLottery = useCallback(() => {
    setLoading(true)
    axios
      .get(`${BASE_URL}?location=${location[0]},${location[1]}`)
      .then((res) => {
        setItem(res.data)
        setLoading(false)
      })
  }, [location])

  return (
    <div className="flex flex-col items-center h-screen justify-center gap-4 px-4">
      {!loading && item.name ? (
        <Item {...(item as ItemProps)} />
      ) : (
        <Spinner className="w-10 h-10 fill-primary-500" />
      )}
      <Button onClick={() => itemLottery()}>הגרלה</Button>
    </div>
  )
}
