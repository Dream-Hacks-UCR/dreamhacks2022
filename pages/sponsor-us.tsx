import React from 'react'
import Head from 'next/head'
import { useSession } from 'next-auth/react'
import { FadeLoader } from 'react-spinners'
import { Layout } from '@/components/Page'
import { PrimaryButton } from '@/components/Button'

export default function SponsorUs() {
  const { status } = useSession()
  
  if (status === 'loading') {
    return(
      <Layout>
        <div className='flex flex-col items-center text-center w-full max-w-[68rem] my-24 px-4'>
          <FadeLoader color='#95a6da' width={5} height={12} />
        </div>
      </Layout>
    )
  }

  return (
    <>
      <Head>
        <title>Lotus Hacks | Sponsor Us</title>
      </Head>
      <Layout>
        <section className='flex flex-col justify-center items-center text-center w-full min-h-screen py-24 px-4 bg-stars'>
          <h1 className='text-center font-bold text-6xl text-primary'>
            Sponsor Us
          </h1>
          <p className='my-4 mt-8 text-xl text-secondary'>
            Help us make this hackathon possible!
          </p>
          <div className='flex flex-col sm:flex-row gap-3 w-full sm:w-auto'>
            <PrimaryButton
              label='Sponsorship Packet'
              externalLink='/sponsorship-packet.pdf'
            />
            <PrimaryButton
              label='Our Paypal'
              externalLink='https://paypal.me/ieeeucr?locale.x=en_US'
            />
          </div>
        </section>
      </Layout>
    </>
  )
}