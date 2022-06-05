import axios from 'axios'
import type { NextPage } from 'next'
import loadConfig from 'next/dist/server/config'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useCallback, useMemo, useState } from 'react'
import Button from '../components/forms/Button'
import LocationInput from '../components/forms/Location'
import Item, { ItemProps } from '../components/Item'
import ItemLottery from '../components/ItemLottery'
import Message from '../components/Message'
import RestaurantLottery from '../components/RestaurantLottery'
import Spinner from '../components/Spinner'
import Tabs from '../components/Tabs'
import Top from '../components/Top'

/*const item = {
  name: 'בטטה קלויה',
  price: 1700,
  image:
    'https://wolt-menu-images-cdn.wolt.com/menu-images/604a145982182808dab638ac/05f526aa-9075-11eb-bc32-3e007e9d0807_____.jpeg',
  link: 'https://wolt.com/he/isr/tel-aviv/restaurant/medium-rare/itemid-604a284633a9f6f385c409fb',
}*/

const Home: NextPage = () => {
  const [cords, setCords] = useState([0, 0])
  const [tab, setTab] = useState(0)
  const [message, setMessage] = useState('')

  return (
    <div className="flex py-4 flex-col items-center h-screen gap-4 ">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
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
