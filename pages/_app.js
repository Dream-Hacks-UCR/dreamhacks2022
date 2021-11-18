import { Provider } from 'next-auth/client'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import { Toaster } from 'react-hot-toast'

import 'tailwindcss/tailwind.css'

export default function MyApp({ Component, pageProps }) {
  return (
    <Provider session={pageProps.session}>
      <Toaster />
      <Nav />
      <div className='flex flex-col min-h-screen'>
        <Component {...pageProps} />
        <Footer />
      </div>
    </Provider>
  )
}
