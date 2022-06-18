import type { GetStaticProps, NextPage } from 'next'
import { useEffect, useState } from 'react'
import { buildTitleGetStaticProps } from '../components/UI/DocumentHead'
import LocationInput from '../components/forms/Location'
import Layout from '../components/UI/Layout'
import Lottery from '../components/Lottery'
import Message from '../components/UI/Message'
import Tabs from '../components/Tabs'
import Top from '../components/UI/Top'
import { useProvider } from '../contexts'

export const TITLE = 'Wolt Roulette'
export const DESCRIPTION = 'בוחר פריטים ומסעדות אקראיים מ-Wolt'

const Home: NextPage = () => {
  const { tab, message, setTab } = useProvider()

  return (
    <Layout>
      {message && <Message />}
      <Top />
      <Tabs onChange={(number) => setTab(number)} />
      {tab == 0 ? (
        <Lottery lotteryType="item" key={0} platform={'wolt'} />
      ) : (
        <Lottery lotteryType="restaurant" key={1} platform={'wolt'} />
      )}
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = buildTitleGetStaticProps(TITLE)

export default Home
