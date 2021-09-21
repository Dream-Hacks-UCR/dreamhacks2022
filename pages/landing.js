import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import CountdownOutput from '../components/Countdown'
import { toast } from 'react-hot-toast'
import { signIn, useSession } from 'next-auth/client'
import Image from 'next/image'

import Logo from '../public/assets/logo.png'

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
    <section className={`${styles.container} ${styles.landing}`}>
      {session && session.user && session.user.email &&
        <div className={styles.emailWrapper}>
          Logged in as {session.user.email}
        </div>
      }
      <div className={styles.headingWrapper}>
        <div className={styles.heading}>LOTUS</div>
        <div className={styles.lotus}>
          <Image
            src={Logo}
            objectFit='contain'
          />
        </div>
        <div className={styles.heading}>HACKS</div>
      </div>
      <div className={styles.subheading}>UCR'S 1<sup>st</sup> HARDWARE HACKATHON</div>
      <div className={styles.countdownWrapper}>
        <CountdownOutput
          completed='currently taking place!'
          heading='happening april 1-3, 2022'
          date='2022-04-01T00:00:00'
        />
      </div>
      {/* { session 
        ?
          <Link passHref href='/checkin'>
            <motion.button 
              whileHover={{ scale: 1.03}} 
              whileTap={{ scale: 0.995 }}
              className={styles.secondarybutton}
            >
              Check In
            </motion.button>
          </Link>
        :
          <div className={styles.applyWrapper}>
            <input 
              placeholder='Enter your email...' 
              value={email}
              onChange={handleChangeEmail}
              className={styles.input}
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 1.03 }}
              onClick={() => openSignin()}
            >
              Apply
            </motion.button>
          </div>
      } */}
      <div className={styles.buttonWrapper}>
        <Link passHref href='https://drive.google.com/file/d/1fMfMw9-7t174oKvctrpfl009UVBd9ykW/view?usp=sharing'>
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.995 }}
            className={styles.primarybutton}
          >
            Sponsor Us
          </motion.button>
        </Link>
        <Link passHref href='https://bit.ly/lotushackscommitteeforms'>
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.995 }}
            className={styles.secondarybutton}
          >
            Join Our Team
          </motion.button>
        </Link>
      </div>
      <div className={styles.landingWave}>
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className={styles.shapeFill} />
        </svg>
      </div>
    </section>
  )
}
