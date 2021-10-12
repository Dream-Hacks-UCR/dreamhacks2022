import Container from '../components/Container'
import Wrapper from '../components/Wrapper'
import Wave from '../components/Wave'
import Link from 'next/link'
import { motion } from 'framer-motion'

import styles from '../styles/Wave.module.css'

export default function Sponsors() {
  return (
    <Container color='bg-main-400'>
      <Wave
        waveClass={styles.sponsorsWave}
        fill='fill-main-400'
      />
      <Wrapper>
        <h1 className='text-center font-bold text-6xl text-primary'>
          sponsors
        </h1>
        <p className='my-4 text-xl text-secondary'>
          Thanks to all of our sponsors who made this hackathon possible!
        </p>
        <Link
          alt='Sponsor us page'
          passHref
          href='/sponsor-us'
        >
          <motion.button 
            whileHover={{ scale: 1.03}} 
            whileTap={{ scale: 0.995 }}
            className='flex justify-center items-center w-full sm:w-60 px-6 py-2 rounded-tl-3xl rounded-br-3xl rounded-tr-md rounded-bl-md bg-accent hover:bg-accent-dark font-bold text-xl text-main-500 lowercase'
          >
            Sponsor Us
          </motion.button>
        </Link>
      </Wrapper>
      <Wave
        waveClass={styles.sponsorsWave2}
        fill='fill-main-400'
      />
    </Container>
  )
}
