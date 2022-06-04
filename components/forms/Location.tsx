import axios from 'axios'
import { useCallback, useEffect, useState } from 'react'
import useAutoComplete from '../../hooks/useAutoComplete'
import Button from './Button'

export interface LocationInputProps {
  onChange([_0, _1]: number[]): unknown
}

const BASE_URL = '/api/cords'
const YOUR_LOCATION = 'המיקום שלך'
const TYPE_LOCATION = 'הקלידו כאן את הכתובת שלכם'

export default function LocationInput({ onChange }: LocationInputProps) {
  const [input, setInput] = useState('')
  const [opened, setOpened] = useState(false)

  const addresToCors = useCallback(() => {
    axios
      .get(encodeURI(`${BASE_URL}?address=${input}`))
      .then((res) => onChange(res.data))
  }, [input, onChange])

  return (
    <>
      <div
        className="w-fit h-11 bg-primary-500 flex justify-center items-center text-white px-6 rounded-full"
        onClick={() => setOpened(true)}
      >
        מיקום
      </div>
      {opened && (
        <>
          <div className="flex flex-col py-4 px-4 gap-5 bg-white w-full h-96 absolute bottom-0 z-50 animate-[locationIn_0.4s_ease-out]">
            <div className="flex flex-col gap-1">
              <h1 className="text-2xl font-bold">{YOUR_LOCATION}</h1>
              <p>{TYPE_LOCATION}</p>
            </div>
            <div className="flex justify-center items-center p-0 m-0 w-full bg-white border-2 border-gray-300 h-12 px-3 rounded-xl">
              <input
                className="w-full bg-transparent font-semibold appearance-none focus:outline-none"
                onChange={(e) => setInput(e.target.value)}
              />
            </div>
            <Button
              onClick={() => {
                addresToCors()
                setOpened(false)
              }}
              className="self-end px-9"
            >
              אישור
            </Button>
          </div>
          <div className="fixed top-0 w-screen h-screen bg-black/50"></div>
        </>
      )}
    </>
  )
}
