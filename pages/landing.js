import { motion } from 'framer-motion'
import CountdownOutput from '../components/Countdown'

import { GoChevronRight } from 'react-icons/go'

import styles from '../styles/Index.module.css'

export default function Landing() {
  return (
    <div className={styles.container}>
      <div className={styles.landing}>
        <div>
          <div className={styles.heading}>Dream Hacks</div>
          <div className={styles.countdownWrapper}>
            <CountdownOutput />
          </div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.995 }}
            className={styles.button}
          >
            Sponsor Us <GoChevronRight />
          </motion.div>
          <div className={styles.applyWrapper}>
            <input placeholder='Enter your email...' className={styles.input}/>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.995 }}
            >
              Apply <GoChevronRight />
            </motion.div>
          </div>
        </div>
        <div>
          {/* Insert image */}
        </div>
      </div>
    </div>
  )
}
