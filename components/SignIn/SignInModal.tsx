import React, { useState, useEffect } from 'react'
import { signIn, getCsrfToken } from 'next-auth/react'
import { useForm, useFormState } from 'react-hook-form'
import axios from 'axios'
import { toast } from 'react-hot-toast'
import { motion } from 'framer-motion'
import { PrimaryButton } from '@/components/Button'
import { Input } from '../Form'

export default function SignInnModal({ csrfToken = '' }) {
  const { register, handleSubmit, control } = useForm()
  const { errors, isSubmitSuccessful } = useFormState({ control })
  const [signInModalOpen, setSignInModalOpen] = useState(false)

  const triggerErrorNotification = () => {
    if (Object.keys(errors).length > 0) {
      toast.error('Please fill out all required fields.', {
        id: 'signinMissingFieldsError',
      })
    }
  }

  const onSubmit = ({ email, csrfToken }) => {
    axios.post('/api/auth/signin/email', {
      csrfToken: csrfToken,
      email: email
    })
    .then(() => {
      signIn('email', { csrfToken: csrfToken, email: email })
    })
  }

  const handleResize = () => {
    if (window.innerWidth > 768) setSignInModalOpen(false)
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize)
  }, [signInModalOpen])
  
  return (
    <>
      <div className='relative normal-case font-semibold'>
        <PrimaryButton
          label='Sign In'
          action={() => setSignInModalOpen(!signInModalOpen)}
          min={Boolean(true)}
        />
        <div
          className={
            'absolute top-14 right-0 w-[21rem] p-6 rounded-xl bg-main-700 border-2 border-main-200 drop-shadow-[0_5px_10px_#1c2e5240] transform transition-all duration-150 '
            + ( signInModalOpen ? 'z-[120] visible opacity-100' : 'z-0 invisible opacity-0' )
          }
        >
          <div className='flex flex-col gap-3 items-center text-left w-full text-base'>
            <p className='w-full max-w-sm normal-case text-secondary'>
              Sign in to apply. No password needed.
            </p>
            <form
              className='flex flex-col gap-4 w-full max-w-sm'
              onSubmit={handleSubmit(onSubmit)}
            >
              <input
                type='hidden'
                {...register('csrfToken')}
                defaultValue={csrfToken}
              />
              <Input
                type='email'
                label='Email Address'
                variable='email'
                register={register}
                errors={errors}
                required
              />
              <motion.button
                whileHover={{ scale: 1.03}} 
                whileTap={{ scale: 0.995 }}
                type='submit'
                className='flex justify-center items-center w-full px-6 py-2 rounded-tl-3xl rounded-br-3xl rounded-tr-md rounded-bl-md bg-accent hover:bg-accent-dark font-bold text-xl text-main-500 lowercase'
                onClick={() => triggerErrorNotification()}
              >
                Sign In
              </motion.button>
            </form>
          </div>
        </div>
      </div>
      <div
        className={
          'fixed top-0 left-0 w-full h-screen transition-all duration-150 '
          + ( signInModalOpen ? 'z-[110] visible opacity-100' : 'z-0 invisible opacity-0' )
        }
        onClick={() => setSignInModalOpen(false)}
      />
    </>
  )
}

export async function getServerSideProps(context) {
  const csrfToken = await getCsrfToken(context)
  return {
    props: { csrfToken }
  }
}