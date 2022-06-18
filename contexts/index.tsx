// the context responsible for handling storage

import { createContext, useEffect, useState } from 'react'
import { Wrapper } from '../components/types'
import { IProviderContext, platforms } from './types'
import { createUseContextHook } from './utils'

export const ProviderContext = createContext<IProviderContext>(
  {} as IProviderContext
)

export const useProvider = createUseContextHook(ProviderContext)

export default function DataProvider({ children }: Wrapper) {
  const [cords, setCords] = useState<[number, number]>([0, 0])
  const [city, setCity] = useState('')
  const [tab, setTab] = useState(0)
  const [platform, setPlatform] = useState(platforms[0])
  const [message, setMessage] = useState('')

  useEffect(() => {
    const timeout = setTimeout(() => setMessage(''), 2000)
    return () => clearTimeout(timeout)
  }, [message])

  return (
    <ProviderContext.Provider
      value={{
        cords,
        city,
        tab,
        platform,
        message,
        setCords,
        setCity,
        setTab,
        setPlatform,
        setMessage,
      }}
    >
      {children}
    </ProviderContext.Provider>
  )
}
