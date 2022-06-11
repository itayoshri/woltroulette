import type { NextPage } from 'next'
import Head from 'next/head'
import { useState } from 'react'
import LocationInput from '../components/forms/Location'
import ItemLottery from '../components/ItemLottery'
import Message from '../components/Message'
import RestaurantLottery from '../components/RestaurantLottery'
import Tabs from '../components/Tabs'
import Top from '../components/Top'

const TITLE = 'Wolt Roulette'
const DESCRIPTION = 'בוחר פריטים ומסעדות אקראיים מ-Wolt'

const Home: NextPage = () => {
  const [cords, setCords] = useState([0, 0])
  const [tab, setTab] = useState(0)
  const [message, setMessage] = useState('')

  return (
    <div className="flex py-4 flex-col items-center h-full max-h-screen absolute w-full">
      <Head>
        <title>{TITLE}</title>
        <meta name="description" content={DESCRIPTION} />
        <link rel="icon" href="/icon.png" />
      </Head>
      {message && <Message message={message} />}
      <Top>
        <LocationInput onChange={([_1, _2]) => setCords([_1, _2])} />
      </Top>
      <Tabs onChange={(number) => setTab(number)} />

      {tab == 0 ? (
        <ItemLottery location={[cords[0], cords[1]]} setMessage={setMessage} />
      ) : (
        <RestaurantLottery
          location={[cords[0], cords[1]]}
          setMessage={setMessage}
        />
      )}
    </div>
  )
}

export default Home
