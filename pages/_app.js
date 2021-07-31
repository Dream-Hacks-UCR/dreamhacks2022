import Nav from '../components/Nav'
import Footer from '../components/Footer'

import '../styles/globals.css'

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Nav />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}
