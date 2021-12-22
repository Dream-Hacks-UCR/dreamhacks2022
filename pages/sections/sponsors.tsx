import Container from '@/components/Container'
import Wrapper from '@/components/Wrapper'
import Wave from '@/components/Wave'
import Link from 'next/link'
import { PrimaryButton } from '@/components/Button'

import styles from '@/styles/Wave.module.css'

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
          passHref
          href='/sponsor-us'
        >
          <PrimaryButton
            label='Sponsor Us'
            action={() => {}}
          />
        </Link>
      </Wrapper>
      <Wave
        waveClass={styles.sponsorsWave2}
        fill='fill-main-400'
      />
    </Container>
  )
}
