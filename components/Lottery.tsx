import axios from 'axios'
import { useState, useCallback, useMemo } from 'react'
import { useProvider } from '../contexts'
import LoadingItem from './Animations/Item'
import LoadingRestaurant from './Animations/Restaurant'
import Button from './forms/Button'
import Item, { ItemProps } from './Item'
import { ADD_LOCATION } from './UI/Message'
import Restaurant, { RestaurantProps } from './Restaurant'
import { Platform } from '../contexts/types'
import { Generate } from './icons'

type Lottery = 'restaurant' | 'item'

export interface LotteryProps {
  lotteryType: Lottery
  platform: Platform
}

export const NO_RESTAURANTS = 'לא נמצאו מסעדות באזוריכם'

export default function Lottery({ lotteryType, platform }: LotteryProps) {
  const { cords, setMessage, city } = useProvider()
  const [results, setResults] = useState({ name: '' })
  const [loading, setLoading] = useState(false)
  const fetchLottery = useCallback(() => {
    if (cords[0] == 0 && cords[1] == 0) {
      setMessage(ADD_LOCATION)
    } else {
      setMessage('')
      setLoading(true)
      axios
        .get(
          `/api/${platform}/${lotteryType}?location=${cords[0]},${cords[1]}&city=${city}`
        )
        .then((res) => {
          setResults(res.data)
          setLoading(false)
        })
        .catch(() => {
          setMessage(NO_RESTAURANTS)
          setLoading(false)
        })
    }
  }, [city, cords, lotteryType, platform, setMessage])

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
      <button
        onClick={() => fetchLottery()}
        className="flex flex-row bg-sky-500 gap-2 px-5 py-3 shadow-sky-500 shadow-lg text-white rounded-xl"
      >
        <a>הגרלה</a>
        <Generate width={24} />
      </button>
    </div>
  )
}
