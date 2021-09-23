import React from 'react'
import Head from 'next/head'
import Layout from '../components/Layout'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useSession } from 'next-auth/client'
import { FadeLoader } from 'react-spinners'

import styles from '../styles/SponsorUs.module.css'

export default function SponsorUs() {
  const [loading] = useSession()
  
  if (loading) {
    return(
      <Layout>
        <div className={styles.wrapper}>
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
        <div className={styles.wrapper}>
          <h1 className={styles.title}>
            Sponsor Us
          </h1>
          <p className={styles.body}>
            Help us make this hackathon possible!
          </p>
          <Link 
            alt='Sponsorship packet'
            passHref 
            href='https://drive.google.com/file/d/1fMfMw9-7t174oKvctrpfl009UVBd9ykW/view?usp=sharing'
          >
            <motion.button
              whileHover={{ scale: 1.03}} 
              whileTap={{ scale: 0.995 }}
              className={styles.primarybutton}
            >
              Sponsorship Packet
            </motion.button>
          </Link>
          <Link 
            alt='Our paypal'
            passHref 
            href='https://paypal.me/ieeeucr?locale.x=en_US'
          >
            <motion.button
              whileHover={{ scale: 1.03}} 
              whileTap={{ scale: 0.995 }}
              className={styles.primarybutton}
            >
              Our Payal
            </motion.button>
          </Link>
          <Link 
            alt='Match challenge'
            passHref 
            href='/sponsor-us'
          >
            <motion.button
              whileHover={{ scale: 1.03}} 
              whileTap={{ scale: 0.995 }}
              className={styles.primarybutton}
            >
              Dean&#39;s Match Challenge
            </motion.button>
          </Link>
          <Link
            alt='Homepage'
            passHref
            href='/'
          >
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.995 }}
              className={styles.secondarybutton}
            >
              Go Back to Homepage
            </motion.button>
          </Link>
        </div>
      </Layout>
    </>
  )
}