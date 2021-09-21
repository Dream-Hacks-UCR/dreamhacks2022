import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import Layout from '../components/Layout'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { getCsrfToken, useSession } from 'next-auth/client'
import { useRouter } from 'next/router'
import { toast } from 'react-hot-toast'
import { FadeLoader } from 'react-spinners'

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
        <title>Lotus Hacks | Sign In</title>
        <meta name="description" content="Lotus Hacks, a hardware hackathon hosted at University of California, Riverside." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <div className={styles.wrapper}>
          <h1 className={styles.title}>
            Sign In
          </h1>
          <p className={styles.body}>
            Sign in to Dream Hacks to access more. Requires no password.
          </p>
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
              alt='Sign in'
              type='submit'
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.995 }} 
              className={styles.primarybutton}
              onClick={() => verifyEmail()}
            >
              Sign In
            </motion.button>
          </form>
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

export async function getServerSideProps(context){
  const csrfToken = await getCsrfToken(context)
  return {
    props: { csrfToken }
  }
}