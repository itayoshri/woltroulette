import axios from 'axios'
import { useRouter } from 'next/router'
import { useState, useCallback } from 'react'
import Button from './forms/Button'
import Item, { ItemProps } from './Item'
import Spinner from './Spinner'

const BASE_URL = '/api/item'

export interface ItemLotteryProps {
  location: [string, string]
}

export default function ItemLottery({ location }: ItemLotteryProps) {
  const [item, setItem] = useState({ name: '' })
  const [loading, setLoading] = useState(false)
  const itemLottery = useCallback(() => {
    setLoading(true)
    axios
      .get(`${BASE_URL}?location=32.05784169999998,34.825958000000014`)
      .then((res) => {
        setItem(res.data)
        setLoading(false)
      })
  }, [])

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
