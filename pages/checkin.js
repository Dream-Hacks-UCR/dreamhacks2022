import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import Layout from '../components/Layout'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useSession } from 'next-auth/client'
import { useRouter } from 'next/router'
import { toast } from 'react-hot-toast'

import { IoMdRadioButtonOff, IoMdRadioButtonOn } from 'react-icons/io'

import styles from '../styles/Form.module.css'

export default function CheckIn() {
  const [session, loading] = useSession()
  const router = useRouter()

  const [firstTime, setFirstTime] = useState('')

  useEffect(() => {
    if (!session) {
      router.push('/')
      toast.error('Access denied. Please sign in!', {
        id: 'notSignedInCheckInError',
      })
    }
  }, [loading, session, router])
  
  return (
    <>
      <Head>
        <title>Dream Hacks | Sign In</title>
        <meta name="description" content="Dream Hacks, a hardware hackathon hosted at University of California, Riverside." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <div className={styles.wrapper}>
          <div className={styles.title}>
            Check In
          </div>
          <div className={styles.body}>
            Check in to register yourself to participate in Dream Hacks.
          </div>
          <div className={styles.section}>
            <div className={styles.subtitle}>
              Personal Information
            </div>
            <div className={styles.inputWrapper}>
              <div className={styles.label}>
                First Name
              </div>
              <input
                className={styles.input}
              />
            </div>
            <div className={styles.inputWrapper}>
              <div className={styles.label}>
                Last Name
              </div>
              <input
                className={styles.input}
              />
            </div>
          </div>
          <div className={styles.section}>
            <div className={styles.subtitle}>
              Demographic Information
            </div>
            <div className={styles.inputWrapper}>
              <div className={styles.label}>
                Race
              </div>
              <input
                className={styles.input}
              />
            </div>
            <div className={styles.inputWrapper}>
              <div className={styles.label}>
                Gender
              </div>
              <input
                className={styles.input}
              />
            </div>
            <div className={styles.inputWrapper}>
              <div className={styles.label}>
                School
              </div>
              <input
                className={styles.input}
              />
            </div>
            <div className={styles.inputWrapper}>
              <div className={styles.label}>
                Major
              </div>
              <input
                className={styles.input}
              />
            </div>
            <div className={styles.inputWrapper}>
              <div className={styles.label}>
                Grade
              </div>
              <input
                className={styles.input}
              />
            </div>
            <div className={styles.inputWrapper}>
              <div className={styles.label}>
                First Time Hacker?
              </div>
              <div className={styles.radioWrapper}>
                <div className={styles.radio} onClick={() => setFirstTime(true)}>
                  {
                    firstTime === true
                    ? <IoMdRadioButtonOn />
                    : <IoMdRadioButtonOff />
                  }
                  Yes
                </div>
                <div className={styles.radio} onClick={() => setFirstTime(false)}>
                  {
                    firstTime !== true
                    ? <IoMdRadioButtonOn />
                    : <IoMdRadioButtonOff />
                  }
                  No
                </div>
              </div>
            </div>
          </div>
          <motion.div
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.995 }}
            className={styles.button}
          >
            Submit
          </motion.div>
        </div>
      </Layout>
    </>
  )
}
