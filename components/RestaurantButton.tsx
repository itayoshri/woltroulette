import Link from 'next/link'
import { IItem } from '../interfaces/restaurant'
import { ItemProps } from './Item'

export interface RestaurantButtonProps {
  name: string
  link: string
}

const GO_TO_RESTAURANT = 'עברו למסעדה'

export default function RestaurantButton({
  name,
  link,
}: RestaurantButtonProps) {
  return (
    <Link href={link}>
      <a className="self-end">
        <div className="flex w-fit items-center justify-center h-11 px-3 gap-6 text-white rounded-lg bg-primary-500">
          <p className="font-bold">{GO_TO_RESTAURANT}</p>
        </div>
      </a>
    </Link>
  )
}
