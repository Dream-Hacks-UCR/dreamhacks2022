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
            <b>Help us make this hackathon possible!</b> Triple your contribution by participating in the BCOE match challenge!
          </p>
          <div className={styles.buttonWrapper}>
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
                sponsorship packet
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
                our payal
              </motion.button>
            </Link>
          </div>
          <h2 className={styles.title}>
            what is the BCOE match challenge?
          </h2>
          <p className={styles.body}>
            The BCOE match challenge <b>takes place October 4 through October 31</b> and <b>provides direct and immediate support</b> for 19 engineering professional student organizations.
          </p>
          <p className={styles.body}>
            Not only will student organizations earn <b>triple-matched gifts</b>, the student organization with the most supporters will earn <b>a weekly prize</b>. Matches are made <b>up to $1,000</b> per donor per organization from BCOE, and up to $500,000 per donors from UCR.
          </p>
          <p className={styles.body}>
            <b>To give to a student professional organization in the BCOE Match Challenge, click the button below!</b>
          </p>
          <Link 
            alt='Match challenge'
            passHref 
            href='https://myadv.ucr.edu/bcoeieee/200830'
          >
            <motion.button
              whileHover={{ scale: 1.03}} 
              whileTap={{ scale: 0.995 }}
              className={styles.primarybutton}
            >
              BCOE match challenge
            </motion.button>
          </Link>
        </div>
      </Layout>
    </>
  )
}