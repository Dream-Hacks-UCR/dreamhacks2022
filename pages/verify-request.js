import Head from 'next/head'
import Layout from '../components/Layout'
import Link from 'next/link'
import { motion } from 'framer-motion'

import styles from '../styles/Index.module.css'

export default function LogIn() {
  return (
    <>
      <Head>
        <title>Dream Hacks | Verify Sign In Request</title>
        <meta name="description" content="Dream Hacks, a hardware hackathon hosted at University of California, Riverside." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <div className={styles.container}>
          <div className={styles.wrapper}>
            <div className={styles.title}>Check Your Email Address</div>
            <div className={styles.body}>Didn't receive an email? Try signing in again and double checking your email input.</div>
            
            <Link passHref href='/'>
              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.995 }}
                className={styles.secondarybutton}
              >
                Go Back to Homepage
              </motion.div>
            </Link>
          </div>
        </div>
      </Layout>
    </>
  )
}