import React, { useState } from 'react'
import { GoChevronRight } from 'react-icons/go'

import styles from '../styles/HardwareBox.module.css'

export default function HardwareBox(props) {
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
      <div className={styles.title} onClick={() => toggleOpen()}>
        <span>
          {props.title} <span className={styles.subtitle}>{props.subtitle}</span>
        </span>
        <GoChevronRight className={styles.arrow}/>
      </div>
      <div className={styles.content}>
        {props.children}
      </div>
    </div>
  )
}