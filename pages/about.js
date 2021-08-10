import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

import ThetaTau from '../public/assets/ThetaTau_logo.png'
import IEEE from '../public/assets/IEEE_logo.png'

import styles from '../styles/Index.module.css'

export default function About() {
  return (
    <>
      <div className={`${styles.container} ${styles.aboutContainer}`}>
        <div className={styles.about}>
          <div className={styles.assetWrapper}>
            {/* Insert image */}
          </div>
          <div className={styles.aboutContent}>
            <div className={styles.title}>About</div>
            <div className={styles.body}>
            Lotus Hacks is UC Riverside's first 24-hour hardware hackathon, founded by Theta Tau and Institute of Electrical and Electronics Engineers (IEEE), taking place in Spring 2022.
            </div>
            <div className={styles.title}>Organizers</div>
            <div className={styles.organizers}>
              <Link passHref href='https://www.thetatauucr.com/'>
                <motion.div 
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.997 }}
                >
                  <Image
                    src={ThetaTau}
                    width={150}
                    height={240}
                    objectFit='contain'
                    placeholder='blur'
                  />
                </motion.div>
              </Link>
              <Link passHref href='https://ieee.ee.ucr.edu/'>
                <motion.div 
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.997 }}
                >
                  <Image
                    src={IEEE}
                    width={360}
                    height={200}
                    objectFit='contain'
                    placeholder='blur'
                  />
                </motion.div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
