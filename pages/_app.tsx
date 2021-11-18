import { SessionProvider } from 'next-auth/react'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import { Toaster } from 'react-hot-toast'

import 'tailwindcss/tailwind.css'

export default function MyApp({ Component, pageProps }) {
  return (
    <SessionProvider session={pageProps.session} refetchInterval={5 * 60}>
      <Toaster />
      <Nav />
      <div className='flex flex-col min-h-screen'>
        <Component {...pageProps} />
        <Footer />
      </div>
    </SessionProvider>
  )
}
