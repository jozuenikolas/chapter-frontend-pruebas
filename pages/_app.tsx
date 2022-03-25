import type { AppProps } from 'next/app'
import { LightTheme } from '../shared/styles/theme'
import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from '../shared/styles/globals'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={LightTheme}>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
