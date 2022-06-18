import { StaticImageData } from 'next/image'
import { Dispatch, SetStateAction } from 'react'

export interface IProviderContext {
  cords: [number, number]
  city: string
  tab: number
  platform: IPlatform
  message: string
  setCords: Dispatch<SetStateAction<[number, number]>>
  setCity: Dispatch<SetStateAction<string>>
  setTab: Dispatch<SetStateAction<number>>
  setPlatform: Dispatch<SetStateAction<IPlatform>>
  setMessage: Dispatch<SetStateAction<string>>
}

export type Platform = 'wolt' | '10bis'
export interface IPlatform {
  symbol: Platform
  image: { gray: StaticImageData; color: StaticImageData }
  link: string
}

import tenbis from '../public/platforms/tenbis.png'
import tenbisGray from '../public/platforms/tenbis_gray.png'

import wolt from '../public/platforms/wolt.png'
import woltGray from '../public/platforms/wolt_gray.png'

export const platforms = [
  {
    symbol: 'wolt' as Platform,
    image: { gray: tenbisGray, color: tenbis },
    link: '/',
  },
  {
    symbol: '10bis' as Platform,
    image: { gray: woltGray, color: wolt },
    link: '/tenbis',
  },
]
