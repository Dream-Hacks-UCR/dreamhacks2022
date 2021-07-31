import Countdown from 'react-countdown'
import { motion } from 'framer-motion'

import styles from '../styles/Countdown.module.css'

export default function CountdownOutput() {
  const Completionist = () => (
    <div className={styles.completed}>
      Currently taking place!
    </div>
  )

  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    const numDays = days < 10 ? String('0' + days) : String(days)
    const numHours = hours < 10 ? String('0' + hours) : String(hours)
    const numMins = minutes < 10 ? String('0' + minutes) : String(minutes)
    const numSecs = seconds < 10 ? String('0' + seconds) : String(seconds)

    if (completed) { return <Completionist /> } 
    else {
      return (
        <div className={styles.countdown}>
          <div className={styles.heading}>MANIFEST YOUR IDEAS IN...</div>
          <div className={styles.wrapper}>
            { 
              days > 0 &&
                <div>
                  <div className={styles.numWrapper}>
                    { Array.from(numDays).map(n =>
                      <motion.div 
                        whileHover={{ y:-3 }}
                        className={styles.num}
                      >
                        {n}
                      </motion.div>
                    )}
                  </div>
                  <div className={styles.label}>Days</div>
                </div>
            }
            { 
              ( days > 0 || hours > 0 ) &&
                <div>
                  <div className={styles.numWrapper}>
                    { Array.from(numHours).map(n =>
                      <motion.div 
                        whileHover={{ y:-3 }}
                        className={styles.num}
                      >
                        {n}
                      </motion.div>
                    )}
                  </div>
                  <div className={styles.label}>Hours</div>
                </div>
            }
            { 
              ( days > 0 || hours > 0 || minutes > 0 ) &&
                <div>
                  <div className={styles.numWrapper}>
                    { Array.from(numMins).map(n =>
                      <motion.div 
                        whileHover={{ y:-3 }}
                        className={styles.num}
                      >
                        {n}
                      </motion.div>
                    )}
                  </div>
                  <div className={styles.label}>Minutes</div>
                </div>
            }
            { 
              ( days > 0 || hours > 0  || minutes > 0 || seconds > 0 ) &&
                <div>
                  <div className={styles.numWrapper}>
                    { Array.from(numSecs).map(n =>
                      <motion.div 
                        whileHover={{ y:-3 }}
                        className={styles.num}
                      >
                        {n}
                      </motion.div>
                    )}
                  </div>
                  <div className={styles.label}>Seconds</div>
                </div>
            }
          </div>
        </div>
      
      )
    }
  }

  return <Countdown date='2022-04-01T00:00:00' renderer={renderer} />
}