import { Section, Wrapper, WaveBorder } from '@/components/Page'
import HardwareAccordion from '@/components/HardwareAccordion'

import styles from '@/styles/Wave.module.css'

export default function Hardware() {
  return (
    <Section color='bg-main-500'>
      <WaveBorder
        waveClass={styles.hardwareWave}
        fill='fill-main-500'
      />
      <Wrapper>
        <h1 className='text-center font-bold text-6xl text-primary'>
          hardware
        </h1>
        <p className='my-4 text-center text-xl text-secondary'>
          These are the kits that will be available to everyone on the day of. <b>To be finalized on November 1.</b>
        </p>
        <HardwareAccordion />
      </Wrapper>
      <WaveBorder
        waveClass={styles.hardwareWave2}
        fill='fill-main-500'
      />
    </Section>
  )
}
