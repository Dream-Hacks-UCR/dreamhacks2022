import { Section, Wrapper, WaveBorder } from '@/components/Page'
import Link from 'next/link'
import { PrimaryButton } from '@/components/Button'

import styles from '@/styles/Wave.module.css'

export default function Sponsors() {
  return (
    <Section color='bg-main-400'>
      <WaveBorder
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
      <WaveBorder
        waveClass={styles.sponsorsWave2}
        fill='fill-main-400'
      />
    </Section>
  )
}
