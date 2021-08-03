import styles from '../styles/Index.module.css'

export default function About() {
  return (
    <>
      <div className={`${styles.container} ${styles.aboutContainer}`}>
        <div className={styles.about}>
          <div className={styles.assetWrapper}>
            {/* Insert image */}
          </div>
          <div className={styles.aboutContent}>
            <div className={styles.title}>About</div>
            <div className={styles.body}>
              Dream Hacks is UC Riverside's first 24-hour hardware hackathon, founded by Theta Tau and Institute of Electrical and Electronics Engineers (IEEE).
            </div>
            <div className={styles.title}>Organizers</div>
            <div className={styles.organizers}>
              <div></div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
