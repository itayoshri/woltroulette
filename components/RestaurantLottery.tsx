import axios from 'axios'
import { useRouter } from 'next/router'
import { useState, useCallback } from 'react'
import LoadingRestaurant from './Animations/Restaurant'
import Button from './forms/Button'
import Item, { ItemProps } from './Item'
import { NO_RESTAURANTS } from './ItemLottery'
import { ADD_LOCATION } from './Message'
import Restaurant, { RestaurantProps } from './Restaurant'
import Spinner from './Spinner'

const BASE_URL = '/api/wolt/restaurant'

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
      setMessage(ADD_LOCATION)
    } else {
      setLoading(true)
      axios
        .get(`${BASE_URL}?location=${location[0]},${location[1]}`)
        .then((res) => {
          setRestaurant(res.data)
          setLoading(false)
        })
        .catch(() => {
          setMessage(NO_RESTAURANTS)
          setLoading(false)
        })
    }
  }, [location, setMessage])

  return (
    <div className="flex py-8 md:py-6 flex-col md:max-w-lg items-center justify-center gap-4 px-4">
      {!loading && restaurant.name ? (
        <Restaurant {...(restaurant as RestaurantProps)} />
      ) : loading ? (
        <LoadingRestaurant />
      ) : null}
      <Button onClick={() => itemLottery()}>הגרלה</Button>
    </div>
  )
}
