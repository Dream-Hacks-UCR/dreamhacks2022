import React, { useEffect } from 'react'
import Head from 'next/head'
import Layout from '../components/Layout'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useSession } from 'next-auth/client'
import { useRouter } from 'next/router'
import { toast } from 'react-hot-toast'
import { FadeLoader } from 'react-spinners'

import styles from '../styles/Index.module.css'
import formStyles from '../styles/Form.module.css'

export default function LogIn() {
  const [session, loading] = useSession()
  const router = useRouter()

  useEffect(() => {
    if (session) {
      router.push('/')
      toast.error('Access denied. Already signed in!', {
        id: 'alreadySignedInVerifyError',
      })
    }
  }, [loading, session, router])

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
        <title>Dream Hacks | Verify Sign In Request</title>
      </Head>
      <Layout>
        
      <div className={formStyles.wrapper}>
            <h1>Check Your Email Address</h1>
            <p>
              Didn't receive an email? Try signing in again and double checking when you type your email.
            </p>
            <Link passHref href='/'>
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