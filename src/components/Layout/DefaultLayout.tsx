// NextJS
import Head from 'next/head'
// Config
import { APP_NAME } from '@/config/constants/app'
import type { ReactNode } from 'react'
// MUI
import Container from '@mui/material/Container'
// Component
import TopBar from '@/components/TopBar'

interface DefaultLayoutProps {
  children: ReactNode
}

const DefaultLayout: React.FC<DefaultLayoutProps> = ({ children }) => {
  return (
    <div>
      <Head>
        <title>{APP_NAME}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <TopBar hideMenuButton />
        <Container maxWidth="xl" sx={{ py: 5 }}>
          {children}
        </Container>
      </main>
    </div>
  )
}

export default DefaultLayout
