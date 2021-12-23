import React, { useEffect } from 'react'
import Head from 'next/head'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import { toast } from 'react-hot-toast'
import { FadeLoader } from 'react-spinners'
import { Layout } from '@/components/Page'
import { SecondaryButton } from '@/components/Button'

export default function VerifyRequest() {
  const { data: session, status } = useSession()
  const router = useRouter()

  useEffect(() => {
    if (status === 'authenticated') {
      router.push('/')
      toast.error('Access denied. Already signed in!', {
        id: 'alreadySignedInVerifyError',
      })
    }
  }, [status, session, router])

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
        <title>Lotus Hacks | Verify Sign In Request</title>
      </Head>
      <Layout>
        <div className='flex flex-col justify-center items-center w-full max-w-[68rem] mt-24 px-4'>
          <h1 className='text-center font-bold text-6xl text-primary'>
            Check Your Email Address
          </h1>
          <p className='my-4 text-xl text-secondary'>
            Didn't receive an email? Try signing in again and double checking when you type your email.
          </p>
          <SecondaryButton
            label='Go Back to Homepage'
            internalLink='/'
          />
        </div>
      </Layout>
    </>
  )
}