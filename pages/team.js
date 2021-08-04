import Card from '../components/Card'
import styles from '../styles/Index.module.css'

export default function Team() {
  return (
    <div className={`${styles.container} ${styles.teamContainer}`}>
      <div className={styles.wrapper}>
        <div className={styles.title}>Team</div>
        <div className={styles.body}>
          The ones behind organizing this hackathon. Hover over each one to reveal the face behind the card!
        </div>
        <div className={styles.grid}>
          <Card 
            name='Rebekah Woo'
            position='Co-Director'
          />
          <Card 
            name='Ayush Nabar'
            position='Co-Director'
          />
          <Card 
            name='Elbert Nguyen'
            position='Operations Lead'
          />
          <Card 
            name='Kiran Ekanayake'
            position='Operations Lead'
          />
          <Card 
            name='Lauren Xie'
            position='Sponsorship Lead'
          />
          <Card 
            name='Alexander Zamora'
            position='Sponsorship Lead'
          />
          <Card 
            name='Rachel Pham'
            position='Marketing Lead'
          />
          <Card 
            name='Daniel Kang'
            position='Marketing Lead'
          />
          <Card 
            name='J.S. Pescasio'
            position='Web Dev Lead'
          />
        </div>
      </div>
    </div>
  )
}
