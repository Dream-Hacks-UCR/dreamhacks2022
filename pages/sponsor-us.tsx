import React from 'react'
import Head from 'next/head'
import Layout from '../components/Layout'
import { motion } from 'framer-motion'
import { useSession } from 'next-auth/react'
import { FadeLoader } from 'react-spinners'

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
        <div className='flex flex-col items-center text-center w-full max-w-[68rem] my-24 px-4'>
          <h1 className='text-center font-bold text-6xl text-primary'>
            Sponsor Us
          </h1>
          <p className='my-4 mt-8 text-xl text-secondary'>
            Help us make this hackathon possible!
          </p>
          <div className='flex flex-col sm:flex-row gap-3 w-full sm:w-auto'>
            <a target='_blank' rel='noopener noreferrer' href='/sponsorship-packet.pdf'>
              <motion.button
                whileHover={{ scale: 1.03}} 
                whileTap={{ scale: 0.995 }}
                className='flex justify-center items-center w-full sm:w-60 px-6 py-2 rounded-tl-3xl rounded-br-3xl rounded-tr-md rounded-bl-md bg-accent hover:bg-accent-dark font-bold text-xl text-main-500 lowercase'
              >
                sponsorship packet
              </motion.button>
            </a>
            <a target='_blank' rel='noopener noreferrer' href='https://paypal.me/ieeeucr?locale.x=en_US'>
              <motion.button
                whileHover={{ scale: 1.03}} 
                whileTap={{ scale: 0.995 }}
                className='flex justify-center items-center w-full sm:w-60 px-6 py-2 rounded-tl-3xl rounded-br-3xl rounded-tr-md rounded-bl-md bg-accent hover:bg-accent-dark font-bold text-xl text-main-500 lowercase'
              >
                our payal
              </motion.button>
            </a>
          </div>
        </div>
      </Layout>
    </>
  )
}