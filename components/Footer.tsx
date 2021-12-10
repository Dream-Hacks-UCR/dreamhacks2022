import Wave from '@/components/Wave'
import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  FiMail,
  FiLinkedin,
  FiFacebook,
  FiInstagram,
  FiTwitter
} from 'react-icons/fi'

import styles from '@/styles/Wave.module.css'

export default function Footer() {
  return (
    <div className='relative flex justify-center w-full py-12 bg-main-600'>
      <Wave
        waveClass={styles.footerWave}
        fill='fill-main-600'
      />
      <div className='flex flex-col-reverse sm:flex-row gap-3 sm:gap-0 justify-between items-center text-center w-full max-w-[68rem] mx-4 font-semibold text-lg'>
        <div>
          Built with 💙 by the Lotus Hacks Team.
        </div>
        <div className='flex gap-4 text-2xl'>
          <a target='_blank' rel='noopener noreferrer' href='mailto:lotushacksucr@gmail.com'>
            <motion.div
              whileHover={{ y:-3 }}
              className='hover:text-accent cursor-pointer'
            >
              <FiMail title='Email'/>
            </motion.div> 
          </a>
          <a target='_blank' rel='noopener noreferrer' href='https://www.linkedin.com/company/lotus-hacks'>
            <motion.div
              whileHover={{ y:-3 }}
              className='hover:text-accent cursor-pointer'
            >
              <FiLinkedin title='LinkedIn'/>
            </motion.div>
          </a>
          <a target='_blank' rel='noopener noreferrer' href='https://www.facebook.com/lotushacksucr'>
            <motion.div
              whileHover={{ y:-3 }}
              className='hover:text-accent cursor-pointer'
            >
              <FiFacebook title='Facebook'/>
            </motion.div>
          </a>
          <a target='_blank' rel='noopener noreferrer' href='https://www.instagram.com/lotushacksucr'>
            <motion.div
              whileHover={{ y:-3 }}
              className='hover:text-accent cursor-pointer'
            >
              <FiInstagram title='Instagram'/>
            </motion.div>
          </a>
          <a target='_blank' rel='noopener noreferrer' href='https://twitter.com/lotushacksucr'>
            <motion.div
              whileHover={{ y:-3 }}
              className='hover:text-accent cursor-pointer'
            >
              <FiTwitter title='Twitter'/>
            </motion.div>
          </a>
        </div>
      </div>
    </div>
  )
}
