import React, { useState } from 'react'
import { GoPlus } from 'react-icons/go'

interface Props {
  question: string
  answer: string
}

export default function QuestionAnswer({ question, answer }: Props) {
  const [open, setOpen] = useState(false)

  const toggleOpen = () => {
    setOpen(!open)
  }

  return (
    <div className='w-full'>
      <div
        className='flex gap-4 items-center px-6 py-4 rounded-md hover:bg-main-500 font-semibold text-xl hover:text-accent cursor-pointer'
        onClick={() => toggleOpen()}
      >
        <GoPlus 
          className={
            'transform transition-transform duration-200 ease-in-out '
            + (open && 'rotate-45')
          }
        />
        <span>{question}</span>
      </div>
      <div
        className={
          'px-6 pt-4 text-xl transition-all duration-200 ease-out overflow-hidden '
          + (open ? 'max-h-[15rem] pb-4 opacity-100' : 'max-h-0 opacity-0')
        }
      >
        {answer}
      </div>
    </div>
  )
}