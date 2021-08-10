import Link from 'next/link'
import { motion } from 'framer-motion'

import { FiMail, FiLinkedin, FiFacebook, FiInstagram, FiTwitter } from 'react-icons/fi'

import styles from '../styles/Footer.module.css'

export default function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div>
          Built with ❤️ and ✨ by the Lotus Hacks Team.
        </div>
        <div className={styles.socials}>
          <Link passHref href='mailto:lotushacksucr@gmail.com'>
            <motion.div whileHover={{ y:-3 }}>
              <FiMail />
            </motion.div> 
          </Link>
          <Link passHref href='https://www.linkedin.com/company/lotus-hacks'>
            <motion.div whileHover={{ y:-3 }}>
              <FiLinkedin />
            </motion.div>
          </Link>
          <Link passHref href='https://www.facebook.com/lotushacksucr'>
            <motion.div whileHover={{ y:-3 }}>
              <FiFacebook />
            </motion.div>
          </Link>
          <Link passHref href='https://www.instagram.com/lotushacksucr'>
            <motion.div whileHover={{ y:-3 }}>
              <FiInstagram />
            </motion.div>
          </Link>
          <Link passHref href='https://twitter.com/lotushacksucr'>
            <motion.div whileHover={{ y:-3 }}>
              <FiTwitter />
            </motion.div>
          </Link>
        </div>
      </div>
    </div>
  )
}
