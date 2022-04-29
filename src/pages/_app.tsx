import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { Header } from '../components/Header'
import { Sidebar } from '../components/Sidebar'
import { TimeContextProvider } from '../context/timeContext'
import GlobalStyle from '../styles/GlobalStyle'
import theme from '../styles/theme'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <TimeContextProvider>
        <Header />
        <main>
          <Sidebar />
          <Component {...pageProps} />
        </main>
        <GlobalStyle />
      </TimeContextProvider>
    </ThemeProvider>
  )
}

export default MyApp
