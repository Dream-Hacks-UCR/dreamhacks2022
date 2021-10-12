import React, { useState } from 'react'
import { GoPlus } from 'react-icons/go'

export default function HardwareBox(props) {
  const [open, setOpen] = useState(false)

  const toggleOpen = () => {
    setOpen(!open)
  }

  return (
    <div className='w-full'>
      <div 
        className={
          'group flex gap-4 items-center px-6 py-4 rounded-md hover:bg-main-600 font-semibold text-xl hover:text-accent cursor-pointer '
          + (open && 'bg-main-600 text-accent')
        }
        onClick={() => toggleOpen()}
      >
        <GoPlus 
          className={
            'transform transition-transform duration-200 ease-in-out '
            + (open && 'rotate-45')
          }
        />
        <span>
          {props.title} <span className='text-secondary group-hover:text-accent-darker'>{props.subtitle}</span>
        </span>
      </div>
      <div
        className={
          'flex flex-wrap gap-x-4 gap-y-6 sm:gap-y-8 justify-center px-6 pt-4 text-lg transition-all duration-200 ease-out overflow-hidden '
          + (open ? 'pb-4 opacity-100 ' : 'max-h-0 opacity-0 ')
          + (open && (props.xl ?  'max-h-280 xl:max-h-760' : 'max-h-200'))
        }
      >
        {props.children}
      </div>
    </div>
  )
}