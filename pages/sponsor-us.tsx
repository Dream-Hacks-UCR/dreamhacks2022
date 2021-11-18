import React from 'react'
import Head from 'next/head'
import Layout from '../components/Layout'
import Link from 'next/link'
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
            <b>Help us make this hackathon possible!</b> Triple your contribution by participating in the BCOE match challenge!
          </p>
          <div className='flex flex-col sm:flex-row gap-3 w-full sm:w-auto'>
            <Link 
              passHref 
              href='https://drive.google.com/file/d/1fMfMw9-7t174oKvctrpfl009UVBd9ykW/view?usp=sharing'
            >
              <motion.button
                whileHover={{ scale: 1.03}} 
                whileTap={{ scale: 0.995 }}
                className='flex justify-center items-center w-full sm:w-60 px-6 py-2 rounded-tl-3xl rounded-br-3xl rounded-tr-md rounded-bl-md bg-accent hover:bg-accent-dark font-bold text-xl text-main-500 lowercase'
              >
                sponsorship packet
              </motion.button>
            </Link>
            <Link
              passHref 
              href='https://paypal.me/ieeeucr?locale.x=en_US'
            >
              <motion.button
                whileHover={{ scale: 1.03}} 
                whileTap={{ scale: 0.995 }}
                className='flex justify-center items-center w-full sm:w-60 px-6 py-2 rounded-tl-3xl rounded-br-3xl rounded-tr-md rounded-bl-md bg-accent hover:bg-accent-dark font-bold text-xl text-main-500 lowercase'
              >
                our payal
              </motion.button>
            </Link>
          </div>
        </div>
      </Layout>
    </>
  )
}