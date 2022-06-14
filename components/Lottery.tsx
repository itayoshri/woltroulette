import axios from 'axios'
import { useState, useCallback, useMemo } from 'react'
import LoadingItem from './Animations/Item'
import LoadingRestaurant from './Animations/Restaurant'
import Button from './forms/Button'
import Item, { ItemProps } from './Item'
import { ADD_LOCATION } from './Message'
import Restaurant, { RestaurantProps } from './Restaurant'

type Lottery = 'restaurant' | 'item'

export interface LotteryProps {
  lotteryType: Lottery
  location: [number, number]
  setMessage(message: string): unknown
  city: string
}

export const NO_RESTAURANTS = 'לא נמצאו מסעדות באזוריכם'

export default function Lottery({
  lotteryType,
  location,
  setMessage,
  city,
}: LotteryProps) {
  const [results, setResults] = useState({ name: '' })
  const [loading, setLoading] = useState(false)
  const BASE_URL = useMemo(() => {
    switch (lotteryType) {
      case 'item':
        return '/api/wolt/item'

      case 'restaurant':
        return '/api/wolt/restaurant'
    }
  }, [lotteryType])

  const fetchLottery = useCallback(() => {
    if (location[0] == 0 && location[1] == 0) {
      setMessage(ADD_LOCATION)
    } else {
      setMessage('')
      setLoading(true)
      axios
        .get(`${BASE_URL}?location=${location[0]},${location[1]}&city=${city}`)
        .then((res) => {
          setResults(res.data)
          setLoading(false)
        })
        .catch(() => {
          setMessage(NO_RESTAURANTS)
          setLoading(false)
        })
    }
  }, [BASE_URL, city, location, setMessage])

  return (
    <div className="flex py-8 md:py-6 flex-col md:max-w-lg items-center justify-center gap-4 px-4">
      {!loading && results.name ? (
        lotteryType === 'item' ? (
          <Item {...(results as ItemProps)} />
        ) : (
          <Restaurant {...(results as RestaurantProps)} />
        )
      ) : loading ? (
        lotteryType === 'item' ? (
          <LoadingItem />
        ) : (
          <LoadingRestaurant />
        )
      ) : null}
      <Button onClick={() => fetchLottery()}>הגרלה</Button>
    </div>
  )
}
