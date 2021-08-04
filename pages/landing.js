import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import CountdownOutput from '../components/Countdown'
import router from 'next/router'
import { toast } from 'react-hot-toast'

import { GoChevronRight } from 'react-icons/go'

import styles from '../styles/Index.module.css'

export default function Landing() {
  const [email, setEmail] = useState('')

  const handleChangeEmail = (e) => {
    setEmail(e.target.value)
  }

  const openLogin = () => {
    const matchRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)

    if (email === '' || !matchRegex) {
      toast.error('Please enter a valid email.')
    }
    else {
      sessionStorage.setItem('email', email)
      router.push('/login')
    }
  }

  useEffect(() => {
    sessionStorage.setItem('email', email)
  }, [email])

  return (
    <>
      <div className={`${styles.container} ${styles.landingContainer}`}>
        <div className={styles.landing}>
          <div>
            <div className={styles.heading}>Dream Hacks</div>
            <div className={styles.countdownWrapper}>
              <CountdownOutput />
            </div>
            <Link passHref href='/'>
              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.995 }}
                className={styles.button}
              >
                Sponsor Us <GoChevronRight />
              </motion.div>
            </Link>
            <Link passHref href='/'>
              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.995 }}
                className={styles.button}
              >
                Join Our Team <GoChevronRight />
              </motion.div>
            </Link>
            <div className={styles.applyWrapper}>
              <input 
                placeholder='Enter your email...' 
                value={email}
                onChange={handleChangeEmail}
                className={styles.input}
              />
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 1.03 }}
                onClick={() => openLogin()}
              >
                Apply <GoChevronRight />
              </motion.div>
            </div>
          </div>
          <div className={styles.carouselWrapper}>
            {/* Insert image */}
          </div>
        </div>
      </div>
    </>
  )
}
