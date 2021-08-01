import React, { useState } from 'react'
import { GoChevronRight } from 'react-icons/go'

import styles from '../styles/QuestionAnswer.module.css'

export default function QuestionAnswer(props) {
  const [open, setOpen] = useState(false)

  const toggleOpen = () => {
    setOpen(!open)
  }

  return (
    <div 
      className={
        open 
        ? `${styles.wrapper} ${styles.open}`
        : `${styles.wrapper}`
      }
    >
      <div className={styles.question} onClick={() => toggleOpen()}>
        {props.question} <GoChevronRight className={styles.arrow}/>
      </div>
      <div className={styles.answer}>
        {props.answer}
      </div>
    </div>
  )
}