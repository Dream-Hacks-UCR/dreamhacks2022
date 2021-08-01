import Link from 'next/link'

import Accordion from '../components/Accordion'

import styles from '../styles/Index.module.css'

export default function Faq() {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.title}>F.A.Q.</div>
        <div className={styles.body}>
          Still can&apos;t find an answer to your question? 
          Feel free to ask at <Link passHref href='mailto:dreamhacksucr@gmail.com' className={styles.link}> dreamhacksucr@gmail.com</Link>.
        </div>
        <Accordion />
      </div>
    </div>
  )
}
