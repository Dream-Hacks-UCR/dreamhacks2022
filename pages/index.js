import Head from 'next/head'
import { connectToDatabase } from '../lib/mongodb'
import { Element } from 'react-scroll'

import Layout from '../components/Layout'
import Landing from '../pages/landing'
import About from '../pages/about'
import Hardware from '../pages/hardware'
import Faq from '../pages/faq'
import Sponsors from '../pages/sponsors'
import Team from '../pages/team'

import styles from '../styles/Index.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Dream Hacks</title>
        <meta name="description" content="Dream Hacks, a hardware hackathon hosted at University of California, Riverside." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <Element name="Home" className={styles.element}>
          <Landing />
        </Element>
        <Element name="About" className={styles.element}>
          <About />
        </Element>
        <Element name="Hardware" className={styles.element}>
          <Hardware />
        </Element>
        <Element name="Faq" className={styles.element}>
          <Faq />
        </Element>
        <Element name="Sponsors" className={styles.element}>
          <Sponsors />
        </Element>
        <Element name="Team" className={styles.element}>
          <Team />
        </Element>
      </Layout>
    </>
  )
}

export async function getServerSideProps(context) {
  const { client } = await connectToDatabase()

  return {
    props: {},
  }
}
