import styles from '../styles/Card.module.css'

export default function Card(props) {
  return (
    <div class={styles.flipcard}>
      <div class={styles.flipcardInner}>
        <div class={styles.flipcardFront}></div>
        <div class={styles.flipcardBack}>
          <div>{props.name}</div>
          <div>{props.position}</div>
        </div>
      </div>
    </div>
  )
}