import Wave from '../components/Wave'
import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  FiMail,
  FiLinkedin,
  FiFacebook,
  FiInstagram,
  FiTwitter
} from 'react-icons/fi'

import styles from '../styles/Wave.module.css'

export default function Footer() {
  return (
    <div className='relative flex justify-center w-full py-12 bg-main-600'>
      <Wave
        waveClass={styles.footerWave}
        fill={styles.shapeFill}
      />
      <div className='flex justify-between items-center w-full max-w-272 mx-4 font-semibold text-lg'>
        <div>
          Built with 💙 by the Lotus Hacks Team.
        </div>
        <div className='flex gap-4 text-2xl'>
          <Link
            alt='Lotus Hacks Email'
            passHref
            href='mailto:lotushacksucr@gmail.com'
          >
            <motion.div
              whileHover={{ y:-3 }}
              className='hover:text-accent cursor-pointer'
            >
              <FiMail />
            </motion.div> 
          </Link>
          <Link
            alt='Lotus Hacks LinkedIn'
            passHref
            href='https://www.linkedin.com/company/lotus-hacks'
          >
            <motion.div
              whileHover={{ y:-3 }}
              className='hover:text-accent cursor-pointer'
            >
              <FiLinkedin />
            </motion.div>
          </Link>
          <Link
            alt='Lotus Hacks Facebook'
            passHref
            href='https://www.facebook.com/lotushacksucr'
          >
            <motion.div
              whileHover={{ y:-3 }}
              className='hover:text-accent cursor-pointer'
            >
              <FiFacebook />
            </motion.div>
          </Link>
          <Link
            alt='Lotus Hacks Instagram'
            passHref
            href='https://www.instagram.com/lotushacksucr'
          >
            <motion.div
              whileHover={{ y:-3 }}
              className='hover:text-accent cursor-pointer'
            >
              <FiInstagram />
            </motion.div>
          </Link>
          <Link
            alt='Lotus Hacks Twitter'
            passHref
            href='https://twitter.com/lotushacksucr'
          >
            <motion.div
              whileHover={{ y:-3 }}
              className='hover:text-accent cursor-pointer'
            >
              <FiTwitter />
            </motion.div>
          </Link>
        </div>
      </div>
    </div>
  )
}
