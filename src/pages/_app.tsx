import type { AppProps } from 'next/app'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'

import { createClient, configureChains, defaultChains, WagmiConfig } from 'wagmi'
import { publicProvider } from 'wagmi/providers/public'
import { SessionProvider } from 'next-auth/react'

const { provider, webSocketProvider } = configureChains(defaultChains, [publicProvider()])

const client = createClient({
  provider,
  webSocketProvider,
  autoConnect: true,
})

export default function App({ Component, pageProps }: AppProps) {
  const theme = createTheme({
    palette: {
      mode: 'dark',
    },
  })

  return (
    <>
      <WagmiConfig client={client}>
        <SessionProvider session={pageProps.session} refetchInterval={0}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Component {...pageProps} />
          </ThemeProvider>
        </SessionProvider>
      </WagmiConfig>
    </>
  )
}
