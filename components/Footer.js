import Link from 'next/link'
import { motion } from 'framer-motion'

import { FiMail, FiLinkedin, FiFacebook, FiInstagram, FiTwitter } from 'react-icons/fi'

import styles from '../styles/Footer.module.css'

export default function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.wave}>
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className={styles.shapeFill} />
        </svg>
      </div>
      <div className={styles.wrapper}>
        <div>
          Built with 💙 by the Lotus Hacks Team.
        </div>
        <div className={styles.socials}>
          <Link
            alt='Lotus Hacks Email'
            passHref
            href='mailto:lotushacksucr@gmail.com'
          >
            <motion.div whileHover={{ y:-3 }}>
              <FiMail />
            </motion.div> 
          </Link>
          <Link
            alt='Lotus Hacks LinkedIn'
            passHref
            href='https://www.linkedin.com/company/lotus-hacks'
          >
            <motion.div whileHover={{ y:-3 }}>
              <FiLinkedin />
            </motion.div>
          </Link>
          <Link
            alt='Lotus Hacks Facebook'
            passHref
            href='https://www.facebook.com/lotushacksucr'
          >
            <motion.div whileHover={{ y:-3 }}>
              <FiFacebook />
            </motion.div>
          </Link>
          <Link
            alt='Lotus Hacks Instagram'
            passHref
            href='https://www.instagram.com/lotushacksucr'
          >
            <motion.div whileHover={{ y:-3 }}>
              <FiInstagram />
            </motion.div>
          </Link>
          <Link
            alt='Lotus Hacks Twitter'
            passHref
            href='https://twitter.com/lotushacksucr'
          >
            <motion.div whileHover={{ y:-3 }}>
              <FiTwitter />
            </motion.div>
          </Link>
        </div>
      </div>
    </div>
  )
}
