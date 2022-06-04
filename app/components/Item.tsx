import Image from 'next/image'
import Link from 'next/link'
import { IItem } from '../interfaces/restaurant'

export interface ItemProps extends Partial<IItem> {
  link: string
}

const NIS = '₪'

export default function Item({ name, price, image, link }: ItemProps) {
  return (
    <Link href={link}>
      <a>
        <Image src={image as string} alt={name} height="100" layout="fill" />
        <h1>{name}</h1>
        <h3>
          {price}
          {NIS}
        </h3>
      </a>
    </Link>
  )
}
