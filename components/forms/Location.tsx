import axios from 'axios'
import { useCallback, useState } from 'react'
import useAutoComplete from '../../hooks/useAutoComplete'

export interface LocationInputProps {
  onChange([_0, _1]: string[]): unknown
}

const BASE_URL = '/api/cords'

export default function LocationInput() {
  const [input, setInput] = useState('')
  const addresToCors = useCallback(() => {
    axios.get(`${BASE_URL}?address=${input}`)
  }, [input])

  return (
    <div className="flex justify-center items-center p-0 m-0 w-full bg-gray-200 h-12 px-3 rounded-xl">
      <input
        className="w-full bg-transparent font-semibold appearance-none focus:outline-none"
        onChange={(e) => setInput(e.target.value)}
      />
    </div>
  )
}
