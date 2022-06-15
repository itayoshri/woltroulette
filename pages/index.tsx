import type { GetStaticProps, NextPage } from 'next'
import { useEffect, useState } from 'react'
import { buildTitleGetStaticProps } from '../components/DocumentHead'
import LocationInput from '../components/forms/Location'
import Layout from '../components/Layout'
import Lottery from '../components/Lottery'
import Message from '../components/Message'
import Tabs from '../components/Tabs'
import Top from '../components/Top'
import { useProvider } from '../contexts'

export const TITLE = 'Wolt Roulette'
export const DESCRIPTION = 'בוחר פריטים ומסעדות אקראיים מ-Wolt'
export type Platform = 'Wolt' | '10bis'

const Home: NextPage = () => {
  const { tab, platform, message, setTab } = useProvider()

  return (
    <Layout>
      {message && <Message />}
      <Top>
        <LocationInput />
      </Top>
      <Tabs onChange={(number) => setTab(number)} />
      {tab == 0 ? (
        <Lottery lotteryType="item" key={0} />
      ) : (
        <Lottery lotteryType="restaurant" key={1} />
      )}
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = buildTitleGetStaticProps(TITLE)

export default Home
