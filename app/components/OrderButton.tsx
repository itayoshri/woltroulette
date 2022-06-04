import Link from 'next/link'
import { IItem } from '../interfaces/restaurant'
import { ItemProps } from './Item'

export interface OrderButtonProps {
  link: string
  price: string
}

const ADD_TO_ORDER = 'הוסיפו להזמנה'

export default function OrderButton({ link, price }: OrderButtonProps) {
  return (
    <Link href={link}>
      <a className="self-end">
        <div className="flex w-fit items-center justify-center h-11 px-3 gap-6 text-white rounded-lg bg-primary-500">
          <p className="font-bold">{ADD_TO_ORDER}</p>
          <p className="font-semibold">{price}</p>
        </div>
      </a>
    </Link>
  )
}
