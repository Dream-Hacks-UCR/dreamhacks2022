import Link from 'next/link'

import FaqAccordion from '../components/FaqAccordion'

import styles from '../styles/Index.module.css'

export default function Faq() {
  return (
    <section className={`${styles.container} ${styles.faq}`}>
      <div className={styles.wrapper}>
        <h1>any questions?</h1>
        <p>
          Still can&apos;t find an answer to your question? 
          Feel free to ask at <Link passHref href='mailto:lotushacksucr@gmail.com'><span className={styles.link}>lotushacksucr@gmail.com</span></Link>.
        </p>
        <FaqAccordion />
      </div>
    </section>
  )
}
