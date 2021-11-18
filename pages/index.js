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

export default function Home() {
  return (
    <>
      <Head>
        <title>Lotus Hacks</title>
      </Head>

      <Layout>
        <Element name='Home' className='w-full'>
          <Landing />
        </Element>
        <Element name='About' className='w-full'>
          <About />
        </Element>
        <Element name='Hardware' className='w-full'>
          <Hardware />
        </Element>
        <Element name='Faq' className='w-full'>
          <Faq />
        </Element>
        {/* <Element name='Sponsors' className='w-full'>
          <Sponsors />
        </Element> */}
        <Element name='Team' className='w-full'>
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
