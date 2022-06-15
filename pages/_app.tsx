import '../styles/globals.css'
import type { AppProps } from 'next/app'
import DocumentHead from '../components/UI/DocumentHead'
import DataProvider from '../contexts'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <DocumentHead pageTitle={pageProps.title}>
      <DataProvider>
        <Component {...pageProps} />
      </DataProvider>
    </DocumentHead>
  )
}

export default MyApp
