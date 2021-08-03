import Link from 'next/link'

import FaqAccordion from '../components/FaqAccordion'

import styles from '../styles/Index.module.css'

export default function Faq() {
  return (
    <>
      <div className={`${styles.container} ${styles.faqContainer}`}>
        <div className={styles.wrapper}>
          <div className={styles.title}>F.A.Q.</div>
          <div className={styles.body}>
            Still can&apos;t find an answer to your question? 
            Feel free to ask at <Link passHref href='mailto:dreamhacksucr@gmail.com'><span className={styles.link}>dreamhacksucr@gmail.com</span></Link>.
          </div>
          <FaqAccordion />
        </div>
      </div>
    </>
  )
}
