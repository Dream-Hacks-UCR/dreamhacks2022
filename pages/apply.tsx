import React, { useEffect } from 'react'
import Head from 'next/head'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import { toast } from 'react-hot-toast'
import { FadeLoader } from 'react-spinners'
import { Layout } from '@/components/Page'
import ApplicationForm from '@/components/ApplicationForm'

export default function Apply() {
  const { data: session, status } = useSession()
  const router = useRouter()

  useEffect(() => {
    if (status === 'unauthenticated') {
      // router.push('/')
      toast.error('Access denied. Please sign in!', {
        id: 'notSignedInCheckInError',
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
        <title>Lotus Hacks | Apply</title>
      </Head>
      <Layout>
        <section className='flex flex-col justify-center items-center w-full max-w-[68rem] min-h-screen my-24 px-4'>
          <div className='w-full'>
            <h1 className='text-center font-bold text-6xl text-primary'>
              Check In
            </h1>
            <p className='text-center my-4 text-xl text-secondary'>
              Check in to register yourself to participate in Dream Hacks.
            </p>
          </div>
          <ApplicationForm />
        </section>
      </Layout>
    </>
  )
}
