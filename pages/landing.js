import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

import { FaLinkedin, FaFacebook, FaTwitterSquare, FaInstagram } from 'react-icons/fa'

import styles from '../styles/Index.module.css'

export default function Landing() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.title}>
          Dream Hacks
        </div>
        <div className={styles.subtitle}>
          Hardware Hackathon @ UCR
        </div>
      </div>
      <div className={styles.caption}>
        Coming Soon - 2022
      </div>
      <div className={styles.section}>
        <div className={styles.subheader}>
          Check us out on other platforms!
        </div>
        <div className={styles.grid}>
          <Link passHref href="https://www.linkedin.com/company/dream-hacks">
            <motion.div whileHover={{ y: -2 }} className={styles.button}>
              <FaLinkedin />
              LinkedIn
            </motion.div>
          </Link>
          <Link passHref href="https://www.facebook.com/dreamhacksucr">
            <motion.div whileHover={{ y: -2 }} className={styles.button}>
              <FaFacebook />
              Facebook
            </motion.div>
          </Link>
          <Link passHref href="https://twitter.com/dreamhacksucr">
            <motion.div whileHover={{ y: -2 }} className={styles.button}>
              <FaTwitterSquare />
              Twitter
            </motion.div>
          </Link>
          <Link passHref href="https://www.instagram.com/dreamhacksucr">
            <motion.div whileHover={{ y: -2 }} className={styles.button}>
              <FaInstagram />
              Instagram
            </motion.div>
          </Link>
        </div>
      </div>
    </div>
  )
}
