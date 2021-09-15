import Card from '../components/Card'
import styles from '../styles/Index.module.css'

export default function Team() {
  const team = [
    {
      link: 'https://www.linkedin.com/in/rebekah-s-woo/',
      name: 'Rebekah Woo',
      position: 'Co-Director'
    },
    {
      link: 'https://www.linkedin.com/in/ayushnabar/',
      name: 'Ayush Nabar',
      position: 'Co-Director'
    },
    {
      link: 'https://www.linkedin.com/in/elbert-nguyen/',
      name: 'Elbert Nguyen',
      position: 'Operations Lead'
    },
    {
      link: 'https://www.linkedin.com/in/kiran-ekanayake-923a1194/',
      name: 'Kiran Ekanayake',
      position: 'Operations Lead'
    },
    {
      link: 'https://www.linkedin.com/in/lauren-xie-0831/',
      name: 'Lauren Xie',
      position: 'Sponsorship Lead'
    },
    {
      link: 'https://www.linkedin.com/in/alexander-zamora/',
      name: 'Alexander Zamora',
      position: 'Sponsorship Lead'
    },
    {
      link: 'https://www.linkedin.com/in/johnnychen315/',
      name: 'Johnny Chen',
      position: 'Sponsorship Lead'
    },
    {
      link: 'https://www.linkedin.com/in/rachelphamm/',
      name: 'Rachel Pham',
      position: 'Marketing Lead'
    },
    {
      link: 'https://www.linkedin.com/in/min-soo-kang/',
      name: 'Daniel Kang',
      position: 'Marketing Lead'
    },
    {
      link: 'https://www.linkedin.com/in/jspescasio/',
      name: 'J.S. Pescasio',
      position: 'Web Dev Lead'
    }
  ]
  
  return (
    <section className={`${styles.container} ${styles.team}`}>
      <div className={styles.wrapper}>
        <h1>our team</h1>
        <p>
          The ones behind organizing this hackathon. Hover over each one to reveal the face behind the card!
        </p>
        <div className={styles.grid}>
          { team.map(({link, name, position}) =>
            <Card
              link={link}
              name={name}
              position={position}
            />
          )}
        </div>
      </div>
    </section>
  )
}
