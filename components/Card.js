import Link from 'next/link'

import styles from '../styles/Card.module.css'

export default function Card(props) {
  return (
    <Link passHref href={props.link}>
      <div className={styles.flipcard}>
        <div className={styles.flipcardInner}>
          <div className={styles.flipcardFront}></div>
          <div className={styles.flipcardBack}>
            <div>{props.name}</div>
            <div>{props.position}</div>
          </div>
        </div>
      </div>
    </Link>
  )
}