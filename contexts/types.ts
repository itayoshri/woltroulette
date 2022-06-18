import { Dispatch, SetStateAction } from 'react'

export interface IProviderContext {
  cords: [number, number]
  city: string
  tab: number
  platform: Platform
  message: string
  setCords: Dispatch<SetStateAction<[number, number]>>
  setCity: Dispatch<SetStateAction<string>>
  setTab: Dispatch<SetStateAction<number>>
  setPlatform: Dispatch<SetStateAction<Platform>>
  setMessage: Dispatch<SetStateAction<string>>
}

export type Platform = 'wolt' | '10bis'
