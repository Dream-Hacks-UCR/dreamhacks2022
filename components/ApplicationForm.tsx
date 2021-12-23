import React from 'react'
import { useForm, useFormState } from 'react-hook-form'
import axios from 'axios'
import { motion } from 'framer-motion'
import { toast } from 'react-hot-toast'
import router from 'next/router'
import { Input, TextArea, Select, Radio } from '@/components/Form'

export default function ApplicationForm() {
  const { register, handleSubmit, control } = useForm()
  const { errors, isSubmitSuccessful } = useFormState({ control })
  const genders = [
    'Male',
    'Female',
    'Nonbinary',
    'Other',
    'Prefer not to say',
  ]
  const ethnicities = [
    'American Indian or Alaska Native',
    'Asian',
    'Black or African American',
    'Hispanic or Latino',
    'Native Hawaiian or Other Pacific Islander',
    'White',
    'Other',
    'Prefer not to say',
  ]
  const grades = [
    '1st Year Undergraduate',
    '2nd Year Undergraduate',
    '3rd Year Undergraduate',
    '4th Year Undergraduate',
    '5th+ Year Undergraduate',
    'Graduate',
    'Other',
  ]
  const majors = [
    'Bioengineering',
    'Chemical Engineering',
    'Computer Engineering',
    'Computer Science',
    'C.S. w/ Business Applications',
    'Electric Engineering',
    'Environmental Engineering',
    'Materials Science & Engineering',
    'Mechanical Engineering',
    'Other',
  ]
  const hackerExperience = [
    'Yes',
    'No',
  ]

  const onSubmit = ({
    first_name,
    last_name,
    gender,
    ethnicity,
    school,
    grade,
    major,
    graduation_date,
    first_time,
    // resume,
    project_most_proud_of,
    project_to_create,
    components_feedback,
    takeaway
  }) => {
    const [year, month, day] = graduation_date.split('-')
    let criteria_met = true

    // determine if criteria to participate is met
    if (grade === 'Graduate')
      criteria_met = false
    if (parseInt(year) < 2022)
      criteria_met = false
    else if (parseInt(year) === 2022)
      if (parseInt(month) < 4)
        criteria_met = false
      else if (parseInt(month) === 4 && parseInt(day) <= 1)
        criteria_met = false
    
    axios.post('/api/apps/create', {
      first_name,
      last_name,
      gender,
      ethnicity,
      school,
      grade,
      major,
      graduation_date,
      // resume,
      first_time,
      project_most_proud_of,
      project_to_create,
      components_feedback,
      takeaway
    })
    .then(() => {
      toast.success('Successfully submitted your application!', {
        id: 'applicationFilledSuccess',
      })
      router.reload()
    })
  }

  const triggerErrorNotification = () => {
    if (Object.keys(errors).length > 0) {
      toast.error('Please fill out all required fields.', {
        id: 'checkinMissingFieldsError',
      })
    }
  }

  return (
    <form 
      className='flex flex-col gap-3 w-full sm:max-w-lg self-center'
      onSubmit={handleSubmit(onSubmit)}
    >
      <h3 className='font-bold text-2xl text-secondary'>
        Personal Information
      </h3>
      <Input
        type='text'
        label='First Name'
        variable='first_name'
        register={register}
        errors={errors}
        required
      />
      <Input
        type='text'
        label='Last Name'
        variable='last_name'
        register={register}
        errors={errors}
        required
      />
      <h3 className='mt-4 font-bold text-2xl text-secondary'>
        Demographic Survey
      </h3>
      <Select
        label='Gender'
        variable='gender'
        register={register}
        errors={errors}
        options={genders}
        required
      />
      <Select
        label='Ethnicity'
        variable='ethnicity'
        register={register}
        errors={errors}
        options={ethnicities}
        required
      />
      <Input
        type='text'
        label='School'
        variable='school'
        register={register}
        errors={errors}
        required
      />
      <Select
        label='Grade'
        variable='grade'
        register={register}
        errors={errors}
        options={grades}
        required
      />
      <Select
        label='Major'
        variable='major'
        register={register}
        errors={errors}
        options={majors}
        required
      />
      <Input
        type='date'
        label='Graduation Date'
        variable='graduation_date'
        register={register}
        errors={errors}
        required
      />
      <Radio
        label='Are you a first time hacker?'
        variable='first_time'
        options={hackerExperience}
        register={register}
        errors={errors}
        required
      />
      <h3 className='mt-4 font-bold text-2xl text-secondary'>
        Hacker App
      </h3>
      <Input
        type='file'
        label='Resume'
        variable='resume'
        register={register}
        errors={errors}
        required
      />
      <TextArea
        label="Describe a project you are the most proud of."
        variable='project_most_proud_of'
        register={register}
        errors={errors}
        required
      />
      <TextArea
        label="What project do you want to create at Lotus Hacks? Why?"
        variable='project_to_create'
        register={register}
        errors={errors}
        required={false}
      />
      <TextArea
        label="Are there any specific components you want to use at Lotus Hacks? Which ones do we provide, which ones do we not?"
        variable='components_feedback'
        register={register}
        errors={errors}
        required={false}
      />
      <TextArea
        label="What do you want to take away from competing in Lotus Hacks?"
        variable='takeaway'
        register={register}
        errors={errors}
        required={false}
      />
      <motion.button
        whileHover={{ scale: 1.03}} 
        whileTap={{ scale: 0.995 }}
        type='submit'
        className='flex justify-center items-center w-full px-6 py-2 rounded-tl-3xl rounded-br-3xl rounded-tr-md rounded-bl-md bg-accent hover:bg-accent-dark font-bold text-xl text-main-500 lowercase'
        onClick={() => triggerErrorNotification()}
      >
        Submit
      </motion.button>
    </form>
  )
}