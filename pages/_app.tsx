import '../styles/globals.css'
import type { AppProps } from 'next/app'
import DocumentHead from '../components/DocumentHead'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <DocumentHead pageTitle={pageProps.title}>
      <Component {...pageProps} />{' '}
    </DocumentHead>
  )
}

export default MyApp
