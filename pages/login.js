import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import Layout from '../components/Layout'
import Link from 'next/link'
import { motion } from 'framer-motion'

import styles from '../styles/Index.module.css'
import loginStyles from '../styles/Login.module.css'

export default function LogIn() {
  const [email, setEmail] = useState('')
  const [init, setInit] = useState(true)

  const handleChangeEmail = (e) => {
    setEmail(e.target.value)
  }

  useEffect(() => {
    if (init) {
      setEmail(sessionStorage.getItem('email', email))
    }
    setInit(false)
  }, [email])
  
  return (
    <>
      <Head>
        <title>Dream Hacks | Sign In</title>
        <meta name="description" content="Dream Hacks, a hardware hackathon hosted at University of California, Riverside." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <div className={styles.container}>
          <div className={styles.wrapper}>
            <div className={loginStyles.inputWrapper}>
              <div className={loginStyles.label}>
                Email Address
              </div>
              <input 
                value={email}
                onChange={handleChangeEmail}
                className={loginStyles.input}
              />
            </div>
            <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.995 }} 
                className={styles.button}
            >
              Sign Up
            </motion.div>
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
