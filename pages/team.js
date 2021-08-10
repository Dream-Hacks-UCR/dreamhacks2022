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
            link='https://www.linkedin.com/in/rebekah-s-woo/'
            name='Rebekah Woo'
            position='Co-Director'
          />
          <Card
            link='https://www.linkedin.com/in/ayushnabar/'
            name='Ayush Nabar'
            position='Co-Director'
          />
          <Card
            link='https://www.linkedin.com/in/elbert-nguyen/'
            name='Elbert Nguyen'
            position='Operations Lead'
          />
          <Card
            link='https://www.linkedin.com/in/kiran-ekanayake-923a1194/'
            name='Kiran Ekanayake'
            position='Operations Lead'
          />
          <Card
            link='https://www.linkedin.com/in/lauren-xie-0831/'
            name='Lauren Xie'
            position='Sponsorship Lead'
          />
          <Card
            link='https://www.linkedin.com/in/alexander-zamora/'
            name='Alexander Zamora'
            position='Sponsorship Lead'
          />
          <Card
            link='https://www.linkedin.com/in/johnnychen315/'
            name='Johnny Chen'
            position='Sponsorship Lead'
          />
          <Card
            link='https://www.linkedin.com/in/rachelphamm/'
            name='Rachel Pham'
            position='Marketing Lead'
          />
          <Card
            link='https://www.linkedin.com/in/min-soo-kang/'
            name='Daniel Kang'
            position='Marketing Lead'
          />
          <Card
            link='https://www.linkedin.com/in/jspescasio/'
            name='J.S. Pescasio'
            position='Web Dev Lead'
          />
        </div>
      </div>
    </div>
  )
}
