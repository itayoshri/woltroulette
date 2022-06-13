import axios from 'axios'
import { useCallback, useMemo, useRef, useState } from 'react'
import { IPrediction } from '../../pages/api/location/prediction'
import Button from './Button'
import Results from './Results'

export interface LocationInputProps {
  onChange([_0, _1]: number[]): unknown
}

const CORDS_URL = '/api/location/cords'
const PREDICTIONS_URL = '/api/location/prediction'
const YOUR_LOCATION = 'המיקום שלך'
const TYPE_LOCATION = 'הקלידו כאן את הכתובת שלכם'
const CHOOSE_LOACTION = 'בחרו מיקום'
const ADDRES_CITY_HOUSE = 'עיר, רחוב ומספר בית'

export default function LocationInput({ onChange }: LocationInputProps) {
  const [input, setInput] = useState('')
  const [opened, setOpened] = useState(false)
  const [selected, setSelected] = useState('')

  const addresToCors = useCallback(
    (placeId: string) => {
      axios.get(encodeURI(`${CORDS_URL}?placeId=${placeId}`)).then((res) => {
        onChange(res.data.cords)
      })
    },
    [onChange]
  )

  const [predictions, setPredictions] = useState([] as IPrediction[])
  const [showPredictions, setShowPredictions] = useState(false)

  const inputElem = useRef<typeof JSX.IntrinsicElements.input>()

  const setLocation = ({ place, placeId }: IPrediction) => {
    setSelected(place)
    setShowPredictions(false)
    addresToCors(placeId)
    inputElem.current.value = place
  }

  useMemo(() => {
    if (input !== '')
      axios.get(encodeURI(`${PREDICTIONS_URL}?search=${input}`)).then((res) => {
        setPredictions(res.data)
        setShowPredictions(true)
      })
  }, [input])

  return (
    <>
      <div
        className={`w-fit h-11 ${
          selected
            ? 'bg-primary-500 text-white'
            : 'bg-white border-2 border-primary-500 text-primary-500'
        } flex justify-center items-center px-6 rounded-full`}
        onClick={() => setOpened(true)}
      >
        {selected ? selected : CHOOSE_LOACTION}
      </div>
      {opened && (
        <>
          <div className="flex flex-col rounded-t-2xl py-9 px-4 gap-5 bg-white w-full h-96 absolute bottom-0 z-50 animate-[locationIn_0.3s_ease]">
            <div className="flex flex-col gap-1">
              <h1 className="text-2xl font-bold">{YOUR_LOCATION}</h1>
              <p>{TYPE_LOCATION}</p>
            </div>
            <div className=" relative">
              <div className="flex justify-center items-center p-0 m-0 w-full hover:border-2 hover:border-primary-500 transition-color duration-100 bg-white border-2 border-gray-300 h-12 px-3 rounded-xl">
                <input
                  className="w-full bg-transparent appearance-none focus:outline-none "
                  onChange={(e) => setInput(e.target.value)}
                  placeholder={ADDRES_CITY_HOUSE}
                  ref={inputElem}
                />
              </div>
              {predictions.length && showPredictions ? (
                <Results
                  results={predictions}
                  onClick={(index) => setLocation(predictions[index])}
                />
              ) : null}
            </div>
            <Button
              onClick={() => {
                setInput('')
                setOpened(false)
              }}
              className="!w-full px-9"
            >
              אישור
            </Button>
          </div>
          <div
            className="fixed top-0 w-screen h-screen bg-black/50 z-40"
            onClick={() => {
              setInput('')
              setOpened(false)
            }}
          />
        </>
      )}
    </>
  )
}
