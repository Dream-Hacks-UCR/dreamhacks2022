import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import { motion } from 'framer-motion'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import { toast } from 'react-hot-toast'
import { FadeLoader } from 'react-spinners'
import { IoMdRadioButtonOff, IoMdRadioButtonOn } from 'react-icons/io'
import { Layout } from '@/components/Page'

export default function Apply() {
  const { data: session, status } = useSession()
  const router = useRouter()

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [school, setSchool] = useState('')
  const [major, setMajor] = useState('')
  const [grade, setGrade] = useState('')
  const [firstTime, setFirstTime] = useState(false)

  const [submitPressed, setSubmitPressed] = useState(false)

  const handleChangeFirstName = (e) => {
    setFirstName(e.target.value)
  }
  const handleChangeLastName = (e) => {
    setLastName(e.target.value)
  }
  const handleChangeSchool = (e) => {
    setSchool(e.target.value)
  }
  const handleChangeMajor = (e) => {
    setMajor(e.target.value)
  }
  const handleChangeGrade = (e) => {
    setGrade(e.target.value)
  }

  const checkSubmission = () => {
    setSubmitPressed(true)
  }

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/')
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
        <div className='flex flex-col justify-center items-center w-full max-w-[68rem] min-h-screen my-24 px-4'>
          <h1 className='text-center font-bold text-6xl text-primary'>
            Check In
          </h1>
          <p className='w-full sm:w-96 my-4 text-xl text-secondary'>
            Check in to register yourself to participate in Dream Hacks.
          </p>
          <div className='w-full sm:w-96 mb-3'>
            <h3 className='mb-2 font-bold text-2xl text-secondary'>
              Personal Information
            </h3>
            <div className='w-full sm:w-96 mb-3'>
              <div className='w-full text-left mb-1.5 font-semibold text-accent'>
                First Name
              </div>
              <input
                value={firstName}
                onChange={handleChangeFirstName}
                className='w-full px-4 py-3 text-xl border-2 border-accent rounded-md bg-main-700 text-primary'
              />
            </div>
            <div className='w-full sm:w-96 mb-3'>
              <div className='w-full text-left mb-1.5 font-semibold text-accent'>
                Last Name
              </div>
              <input
                value={lastName}
                onChange={handleChangeLastName}
                className='w-full px-4 py-3 text-xl border-2 border-accent rounded-md bg-main-700 text-primary'
              />
            </div>
          </div>
          <div className='w-full sm:w-96 mb-3'>
            <h3 className='mb-2 font-bold text-2xl text-secondary'>
              Demographic Information
            </h3>
            <div className='w-full sm:w-96 mb-3'>
              <div className='w-full text-left mb-1.5 font-semibold text-accent'>
                Race
              </div>
              <input
                className='w-full px-4 py-3 text-xl border-2 border-accent rounded-md bg-main-700 text-primary'
              />
            </div>
            <div className='w-full sm:w-96 mb-3'>
              <div className='w-full text-left mb-1.5 font-semibold text-accent'>
                Gender
              </div>
              <input
                className='w-full px-4 py-3 text-xl border-2 border-accent rounded-md bg-main-700 text-primary'
              />
            </div>
            <div className='w-full sm:w-96 mb-3'>
              <div className='w-full text-left mb-1.5 font-semibold text-accent'>
                School
              </div>
              <input
                value={school}
                onChange={handleChangeSchool}
                className='w-full px-4 py-3 text-xl border-2 border-accent rounded-md bg-main-700 text-primary'
              />
            </div>
            <div className='w-full sm:w-96 mb-3'>
              <div className='w-full text-left mb-1.5 font-semibold text-accent'>
                Major
              </div>
              <input
                value={major}
                onChange={handleChangeMajor}
                className='w-full px-4 py-3 text-xl border-2 border-accent rounded-md bg-main-700 text-primary'
              />
            </div>
            <div className='w-full sm:w-96 mb-3'>
              <div className='w-full text-left mb-1.5 font-semibold text-accent'>
                Grade
              </div>
              <input
                value={grade}
                onChange={handleChangeGrade}
                className='w-full px-4 py-3 text-xl border-2 border-accent rounded-md bg-main-700 text-primary'
              />
            </div>
            <div className='w-full sm:w-96 mb-3'>
              <div className='w-full text-left mb-1.5 font-semibold text-accent'>
                First Time Hacker?
              </div>
              <div className='flex flex-col gap-2 justify-center items-start ml-3'>
                <div
                  className='flex justify-center items-center gap-2 cursor-pointer'
                  onClick={() => setFirstTime(true)}
                >
                  {
                    firstTime === true
                    ? <IoMdRadioButtonOn />
                    : <IoMdRadioButtonOff />
                  }
                  Yes
                </div>
                <div
                  className='flex justify-center items-center gap-2 cursor-pointer'
                  onClick={() => setFirstTime(false)}
                >
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
            className='flex justify-center items-center w-full sm:w-96 px-6 py-2 rounded-tl-3xl rounded-br-3xl rounded-tr-md rounded-bl-md bg-accent hover:bg-accent-dark font-bold text-xl text-main-500'
            onClick={() => checkSubmission()}
          >
            Submit
          </motion.div>
        </div>
      </Layout>
    </>
  )
}
