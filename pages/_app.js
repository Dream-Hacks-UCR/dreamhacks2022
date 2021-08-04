import { Provider } from 'next-auth/client'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import { Toaster } from 'react-hot-toast'

import styles from '../styles/Index.module.css'
import '../styles/globals.css'

export default function MyApp({ Component, pageProps }) {
  return (
    <Provider session={pageProps.session}>
      <Toaster />
      <Nav />
      <div className={styles.flexBody}>
        <Component {...pageProps} />
        <Footer />
      </div>
    </Provider>
  )
}
