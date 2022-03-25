import Theme from '../shared/styles/theme'
import {GlobalStyles} from '../shared/styles/GlobalStyles'
import Head from 'next/head'
import {ThemeProvider} from 'styled-components'
import type {AppProps} from 'next/app'

function MyApp({Component, pageProps}: AppProps) {
  // Initialize an agent at application startup.
  return (
    <>
      <Head>
        <title>Banco Pichincha</title>
        <meta
          name="description"
          content="En confianza."
        />
      </Head>
      <ThemeProvider theme={Theme}>
        <GlobalStyles/>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default MyApp
