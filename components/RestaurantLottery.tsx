import axios from 'axios'
import { useRouter } from 'next/router'
import { useState, useCallback } from 'react'
import Button from './forms/Button'
import Item, { ItemProps } from './Item'
import Restaurant, { RestaurantProps } from './Restaurant'
import Spinner from './Spinner'

const BASE_URL = '/api/restaurant'

export interface RestaurantLotteryProps {
  location: [number, number]
  setMessage(message: string): unknown
}

export default function RestaurantLottery({
  location,
  setMessage,
}: RestaurantLotteryProps) {
  const [restaurant, setRestaurant] = useState({ name: '' })
  const [loading, setLoading] = useState(false)
  const itemLottery = useCallback(() => {
    if (location[0] == 0 && location[1] == 0) {
      setMessage('בחרו מיקום ונסו שוב')
      setTimeout(() => setMessage(''), 2000)
    } else {
      setLoading(true)
      axios
        .get(`${BASE_URL}?location=${location[0]},${location[1]}`)
        .then((res) => {
          setRestaurant(res.data)
          setLoading(false)
        })
    }
  }, [location, setMessage])

  return (
    <div className="flex flex-col items-center justify-center gap-4 px-4">
      {!loading && restaurant.name ? (
        <Restaurant {...(restaurant as RestaurantProps)} />
      ) : loading ? (
        <Spinner className="w-10 h-10 fill-primary-500" />
      ) : null}
      <Button onClick={() => itemLottery()}>הגרלה</Button>
    </div>
  )
}