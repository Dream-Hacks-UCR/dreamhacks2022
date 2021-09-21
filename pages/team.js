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
      <div className={styles.teamWave}>
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className={styles.shapeFill} />
        </svg>
      </div>
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
