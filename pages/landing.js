import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import CountdownOutput from '../components/Countdown'
import { toast } from 'react-hot-toast'
import { signIn, useSession } from 'next-auth/client'

import { GoChevronRight } from 'react-icons/go'

import styles from '../styles/Index.module.css'

export default function Landing() {
  const [session] = useSession()
  const [email, setEmail] = useState('')

  const handleChangeEmail = (e) => {
    setEmail(e.target.value)
  }

  const openSignin = () => {
    const matchRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)

    if (email === '' || !matchRegex) {
      toast.error('Please enter a valid email.')
    }
    else {
      sessionStorage.setItem('email', email)
      signIn()
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
            {session && session.user && session.user.email &&
              <div className={styles.emailWrapper}>
                Logged in as {session.user.email}
              </div>
            }
            <div className={styles.heading}>Lotus Hacks</div>
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
            {/* { session 
              ?
                <Link passHref href='/checkin'>
                  <motion.div 
                    whileHover={{ scale: 1.03}} 
                    whileTap={{ scale: 0.995 }}
                    className={styles.secondarybutton}
                  >
                    Check In <GoChevronRight />
                  </motion.div>
                </Link>
              :
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
                    onClick={() => openSignin()}
                  >
                    Apply <GoChevronRight />
                  </motion.div>
                </div>
            } */}
          </div>
          <div className={styles.carouselWrapper}>
            {/* Insert image */}
          </div>
        </div>
      </div>
    </>
  )
}
