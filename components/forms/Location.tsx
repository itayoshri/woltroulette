import axios from 'axios'
import {
  Dispatch,
  SetStateAction,
  useCallback,
  useMemo,
  useRef,
  useState,
} from 'react'
import { useProvider } from '../../contexts'
import { IPrediction } from '../../pages/api/location/prediction'
import { Location } from '../icons'
import Button from './Button'
import Results from './Results'

const CORDS_URL = '/api/location/cords'
const PREDICTIONS_URL = '/api/location/prediction'
const STATE_URL = '/api/location/state'
const YOUR_LOCATION = 'המיקום שלך'
const TYPE_LOCATION = 'הקלידו כאן את הכתובת שלכם'
const CHOOSE_LOACTION = 'בחרו מיקום'
const ADDRES_CITY_HOUSE = 'עיר, רחוב ומספר בית'

export default function LocationInput() {
  const { setCords, setCity } = useProvider()
  const [input, setInput] = useState('')
  const [opened, setOpened] = useState(false)
  const [selected, setSelected] = useState('')

  const addresToCors = useCallback(
    (placeId: string) => {
      axios.get(encodeURI(`${CORDS_URL}?placeId=${placeId}`)).then((res) => {
        const location = res.data.cords
        setCords(res.data.cords)
        axios
          .get(encodeURI(`${STATE_URL}?location=${location[0]},${location[1]}`))
          .then((res) => {
            setCity(res.data)
          })
      })
    },
    [setCords, setCity]
  )

  const [predictions, setPredictions] = useState([] as IPrediction[])
  const [showPredictions, setShowPredictions] = useState(false)

  const inputElem = useRef<HTMLInputElement>()

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
      <button
        className="flex gap-2 items-center"
        onClick={() => setOpened(true)}
      >
        <Location
          width={30}
          className="text-primary-500 hidden md:inline-block"
        />
        <div
          className={`w-fit h-11 ${
            selected
              ? 'bg-primary-500 text-white'
              : 'bg-white border-2 border-primary-500 text-primary-500'
          } flex justify-center items-center md:border-0 md:text-primary-500 md:bg-transparent px-6 md:px-0 rounded-full`}
        >
          {selected ? selected : CHOOSE_LOACTION}
        </div>
      </button>
      {opened && (
        <>
          <div className="flex flex-col md:max-w-[34rem] md:h-fit rounded-t-2xl md:rounded-2xl py-9 md:pb-4 px-4 gap-5 bg-white w-full h-96 absolute bottom-0 md:top-0 md:m-auto md:right-0 md:left-0 z-50 animate-[locationIn_0.3s_ease]">
            <div className="flex flex-col gap-1">
              <h1 className="text-2xl md:text-3xl font-bold">
                {YOUR_LOCATION}
              </h1>
              <p>{TYPE_LOCATION}</p>
            </div>
            <div className=" relative">
              <div className="flex justify-center items-center p-0 m-0 w-full hover:border-2 hover:border-primary-500 transition-color duration-100 bg-white border-2 border-gray-300 h-12 px-3 rounded-xl">
                <input
                  className="w-full bg-transparent appearance-none focus:outline-none "
                  onChange={(e) => setInput(e.target.value)}
                  placeholder={ADDRES_CITY_HOUSE}
                  ref={inputElem}
                  type="text"
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
            className="fixed right-0 top-0 w-screen h-screen bg-black/50 z-40"
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
