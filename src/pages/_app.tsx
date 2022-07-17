import { ChakraProvider } from '@chakra-ui/react'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { Header } from '../components/Header'
import { TimeContextProvider } from '../context/timeContext'
import GlobalStyle from '../styles/GlobalStyle'
import theme from '../styles/theme2'
import { theme as teste } from '../styles/theme'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={teste}>
      <ThemeProvider theme={theme}>
        <TimeContextProvider>
          <Header />
          <main>
            <Component {...pageProps} />
          </main>
          <GlobalStyle />
        </TimeContextProvider>
      </ThemeProvider>
    </ChakraProvider>
  )
}

export default MyApp
