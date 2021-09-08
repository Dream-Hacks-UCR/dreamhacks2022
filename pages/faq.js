import Link from 'next/link'

import FaqAccordion from '../components/FaqAccordion'

import styles from '../styles/Index.module.css'

export default function Faq() {
  return (
    <>
      <div className={`${styles.container} ${styles.faqContainer}`}>
        <div className={styles.wrapper}>
          <div className={styles.title}>any questions?</div>
          <div className={styles.body}>
            Still can&apos;t find an answer to your question? 
            Feel free to ask at <Link passHref href='mailto:lotushacksucr@gmail.com'><span className={styles.link}>lotushacksucr@gmail.com</span></Link>.
          </div>
          <FaqAccordion />
        </div>
      </div>
    </>
  )
}
