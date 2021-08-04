import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import Layout from '../components/Layout'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { getCsrfToken, useSession } from 'next-auth/client'
import { useRouter } from 'next/router'
import { toast } from 'react-hot-toast'

import styles from '../styles/Form.module.css'

export default function SignIn({ csrfToken }) {
  const [session, loading] = useSession()
  const router = useRouter()

  const [email, setEmail] = useState('')
  const [init, setInit] = useState(true)

  const handleChangeEmail = (e) => {
    setEmail(e.target.value)
  }

  const verifyEmail = () => {
    const matchRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)

    if (email === '' || !matchRegex) {
      toast.error('Please enter a valid email.')
    }
  }

  useEffect(() => {
    if (session) {
      router.push('/')
      toast.error('Access denied. Already signed in!', {
        id: 'alreadySignedInError',
      })
    }
    if (init) {
      setEmail(sessionStorage.getItem('email', email))
    }
    setInit(false)
  }, [email, init, loading, session, router])
  
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
            Sign In
          </div>
          <div className={styles.body}>
            Sign in to Dream Hacks to access more. Requires no password.
          </div>
          <form 
            method='post' 
            action='/api/auth/signin/email' 
            className={styles.form}
          >
            <input name='csrfToken' type='hidden' defaultValue={csrfToken}/>
            <div className={styles.inputWrapper}>
              <div className={styles.label}>
                Email Address
              </div>
              <input 
                type='email' 
                id='email' 
                name='email'
                value={email}
                onChange={handleChangeEmail}
                className={styles.input}
              />
            </div>
            <motion.button
              type='submit'
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.995 }} 
              className={styles.button}
              onClick={() => verifyEmail()}
            >
              Sign In
            </motion.button>
          </form>
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
      </Layout>
    </>
  )
}

export async function getServerSideProps(context){
  const csrfToken = await getCsrfToken(context)
  return {
    props: { csrfToken }
  }
}