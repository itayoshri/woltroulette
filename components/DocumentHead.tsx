import { GetStaticProps } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { DESCRIPTION, TITLE } from '../pages'
import { Wrapper } from './types'

const previewImagePath = '/og_image.png'

export interface IDocumentHeadProps extends Wrapper {
  pageTitle?: string
  previewImage?: string
  description?: string
}

export default function DocumentHead({
  pageTitle,
  previewImage = previewImagePath,
  description = DESCRIPTION,
  children,
}: IDocumentHeadProps) {
  const router = useRouter()
  const currentURL = router.pathname
  const siteName = TITLE

  return (
    <>
      {pageTitle && (
        <Head>
          <title>{pageTitle}</title>
          <meta property="og:url" content={currentURL} key="ogurl" />
          <meta property="og:image" content={previewImage} key="ogimage" />
          <meta property="og:site_name" content={siteName} key="ogsitename" />
          <meta property="og:title" content={pageTitle} key="ogtitle" />
          <meta property="og:description" content={description} key="ogdesc" />
          <link rel="shortcut icon" href="/favicon.png" />
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>
      )}
      {children}
    </>
  )
}

export function buildTitleGetStaticProps(title: string): GetStaticProps {
  return () => ({
    props: {
      title,
    },
  })
}
