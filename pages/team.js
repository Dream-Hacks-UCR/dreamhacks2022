import styles from '../styles/Index.module.css'

export default function Team() {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.title}>Team</div>
        <div className={styles.body}>
          The ones behind organizing this hackathon. Hover over each one to reveal the face behind the card!
        </div>
      </div>
    </div>
  )
}
