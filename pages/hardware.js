import HardwareAccordion from '../components/HardwareAccordion'

import styles from '../styles/Index.module.css'

export default function Hardware() {
  return (
    <>
      <div className={`${styles.container} ${styles.hardwareContainer}`}>
        <div className={styles.wrapper}>
          <div className={styles.title}>Hardware</div>
          <HardwareAccordion />
        </div>
      </div>
    </>
  )
}
