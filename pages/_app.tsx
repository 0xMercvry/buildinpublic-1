import '../styles/globals.css'

import { Web3ContextProvider } from '../contexts/Web3'

import type { NextPage } from 'next'
import type { AppProps } from 'next/app'
import Layout from '../components/Layout'

type AppPropsWithLayout = AppProps & {
  Component: NextPage
}

export default function Application ({ Component, pageProps }: AppPropsWithLayout) {
  return (
    <Web3ContextProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Web3ContextProvider>
  )
}
