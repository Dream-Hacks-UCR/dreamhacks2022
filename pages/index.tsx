import Head from 'next/head'
import { Element } from 'react-scroll'
import { Layout } from '@/components/Page'
import Landing from '@/sections/landing'
import About from '@/sections/about'
import Hardware from '@/sections/hardware'
import Faq from '@/sections/faq'
import Sponsors from '@/sections/sponsors'
import Team from '@/sections/team'

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