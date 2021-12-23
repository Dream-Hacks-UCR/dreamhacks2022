import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { getCsrfToken, useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import { toast } from 'react-hot-toast'
import { FadeLoader } from 'react-spinners'
import { Layout } from '@/components/Page'

export default function SignIn({ csrfToken }) {
  const { data: session, status } = useSession()
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
    if (status === 'authenticated') {
      router.push('/')
      toast.error('Access denied. Already signed in!', {
        id: 'alreadySignedInError',
      })
    }
    if (init) {
      setEmail(sessionStorage.getItem('email'))
    }
    setInit(false)
  }, [email, init, status, session, router])
  
  if (status === 'loading') {
    return(
      <Layout>
        <div className='flex flex-col items-center text-center w-full max-w-[68rem] my-24 px-4'>
          <FadeLoader color='#95a6da' width={5} height={12} />
        </div>
      </Layout>
    )
  }

  return (
    <>
      <Head>
        <title>Lotus Hacks | Sign In</title>
      </Head>
      <Layout>
        <div className='flex flex-col justify-center items-center w-full max-w-[68rem] my-24 px-4'>
          <h1 className='text-center font-bold text-6xl text-primary'>
            Sign In
          </h1>
          <p className='w-full sm:w-96 my-4 text-xl text-secondary'>
            Sign in to Lotus Hacks to access more. Requires no password.
          </p>
          <form 
            method='post' 
            action='/api/auth/signin/email' 
            className='flex flex-col items-center w-full'
          >
            <input name='csrfToken' type='hidden' defaultValue={csrfToken}/>
            <div className='w-full sm:w-96 mb-3'>
              <div className='w-full text-left mb-1.5 font-semibold text-accent'>
                Email Address
              </div>
              <input 
                type='email' 
                id='email' 
                name='email'
                value={email}
                onChange={handleChangeEmail}
                className='w-full px-4 py-3 text-xl border-2 border-accent rounded-md bg-main-700 text-primary'
              />
            </div>
            <motion.button
              aria-label='Sign in'
              type='submit'
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.995 }} 
              className='flex justify-center items-center w-full sm:w-96 px-6 py-2 rounded-tl-3xl rounded-br-3xl rounded-tr-md rounded-bl-md bg-accent hover:bg-accent-dark font-bold text-xl text-main-500'
              onClick={() => verifyEmail()}
            >
              Sign In
            </motion.button>
          </form>
          <Link
            passHref
            href='/'
          >
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.995 }}
              className='flex justify-center items-center w-full sm:w-96 mt-6 px-6 py-2 rounded-tl-3xl rounded-br-3xl rounded-tr-md rounded-bl-md bg-main-500 hover:bg-main-400 font-bold text-xl text-accent'
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