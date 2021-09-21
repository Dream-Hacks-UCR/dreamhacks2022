import Link from 'next/link'
import { motion } from 'framer-motion'

import styles from '../styles/Card.module.css'

export default function Card(props) {
  return (
    <Link
      alt='Team Lead's LinkedIn
      passHref
      href={props.link}
    >
      <motion.div whileHover={{ y: -10 }} className={styles.flipcard}>
        <div className={styles.flipcardInner}>
          <div className={styles.flipcardFront}></div>
          {/* <div className={styles.flipcardBack}>
            <div>{props.name}</div>
            <div>{props.position}</div>
          </div> */}
        </div>
      </motion.div>
    </Link>
  )
}