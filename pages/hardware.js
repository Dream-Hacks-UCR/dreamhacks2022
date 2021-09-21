import HardwareAccordion from '../components/HardwareAccordion'

import styles from '../styles/Index.module.css'

export default function Hardware() {
  return (
    <section className={`${styles.container} ${styles.hardware}`}>
      <div className={styles.hardwareWave}>
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className={styles.shapeFill} />
        </svg>
      </div>
      <div className={styles.wrapper}>
        <h1>hardware</h1>
        <p>
          These are the kits that will be available to everyone on the day of. <b>Tentative parts lists to be finalized on November 1.</b>
        </p>
        <HardwareAccordion />
      </div>
      <div className={styles.hardwareWave2}>
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className={styles.shapeFill} />
        </svg>
      </div>
    </section>
  )
}
