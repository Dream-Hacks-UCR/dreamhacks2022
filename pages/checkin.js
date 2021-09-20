import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import Layout from '../components/Layout'
import { motion } from 'framer-motion'
import { useSession } from 'next-auth/client'
import { useRouter } from 'next/router'
import { toast } from 'react-hot-toast'
import { FadeLoader } from 'react-spinners'

import { IoMdRadioButtonOff, IoMdRadioButtonOn } from 'react-icons/io'

import styles from '../styles/Form.module.css'

export default function CheckIn() {
  const [session, loading] = useSession()
  const router = useRouter()

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [school, setSchool] = useState('')
  const [major, setMajor] = useState('')
  const [grade, setGrade] = useState('')
  const [firstTime, setFirstTime] = useState('')

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
    if (!loading && !session) {
      router.push('/')
      toast.error('Access denied. Please sign in!', {
        id: 'notSignedInCheckInError',
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
        <title>Lotus Hacks | Check In</title>
        <meta name="description" content="Lotus Hacks, a hardware hackathon hosted at University of California, Riverside." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <div className={styles.wrapper}>
          <div className={styles.title}>
            Check In
          </div>
          <div className={styles.body}>
            Check in to register yourself to participate in Dream Hacks.
          </div>
          <div className={styles.section}>
            <div className={styles.subtitle}>
              Personal Information
            </div>
            <div className={styles.inputWrapper}>
              <div className={styles.label}>
                First Name
              </div>
              <input
                value={firstName}
                onChange={handleChangeFirstName}
                className={`${styles.input}`}
              />
            </div>
            <div className={styles.inputWrapper}>
              <div className={styles.label}>
                Last Name
              </div>
              <input
                value={lastName}
                onChange={handleChangeLastName}
                className={`${styles.input}`}
              />
            </div>
          </div>
          <div className={styles.section}>
            <div className={styles.subtitle}>
              Demographic Information
            </div>
            <div className={styles.inputWrapper}>
              <div className={styles.label}>
                Race
              </div>
              <input
                className={styles.input}
              />
            </div>
            <div className={styles.inputWrapper}>
              <div className={styles.label}>
                Gender
              </div>
              <input
                className={styles.input}
              />
            </div>
            <div className={styles.inputWrapper}>
              <div className={styles.label}>
                School
              </div>
              <input
                value={school}
                onChange={handleChangeSchool}
                className={`${styles.input}`}
              />
            </div>
            <div className={styles.inputWrapper}>
              <div className={styles.label}>
                Major
              </div>
              <input
                value={major}
                onChange={handleChangeMajor}
                className={`${styles.input}`}
              />
            </div>
            <div className={styles.inputWrapper}>
              <div className={styles.label}>
                Grade
              </div>
              <input
                value={grade}
                onChange={handleChangeGrade}
                className={`${styles.input}`}
              />
            </div>
            <div className={styles.inputWrapper}>
              <div className={styles.label}>
                First Time Hacker?
              </div>
              <div className={styles.radioWrapper}>
                <div className={styles.radio} onClick={() => setFirstTime(true)}>
                  {
                    firstTime === true
                    ? <IoMdRadioButtonOn />
                    : <IoMdRadioButtonOff />
                  }
                  Yes
                </div>
                <div className={styles.radio} onClick={() => setFirstTime(false)}>
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
            className={styles.primarybutton}
            onClick={() => checkSubmission()}
          >
            Submit
          </motion.div>
        </div>
      </Layout>
    </>
  )
}
