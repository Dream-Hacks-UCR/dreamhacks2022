import Container from '@/components/Container'
import Wrapper from '@/components/Wrapper'
import Wave from '@/components/Wave'
import Card from '@/components/Card'

import styles from '../styles/Wave.module.css'

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
    <Container color='bg-main-500'>
      <Wave
        waveClass={styles.teamWave}
        fill='fill-main-500'
      />
      <Wrapper>
        <h1 className='text-center font-bold text-6xl text-primary'>
          our team
        </h1>
        <p className='my-4 text-center text-xl text-secondary'>
          The ones behind organizing this hackathon!
        </p>
        <div className='flex flex-wrap justify-center gap-y-4'>
          {team.map(({link, name, position}) =>
            <div className='flex flex-col items-center text-sm md:text-base'>
              <Card
                link={link}
                name={name}
                position={position}
              />
              <div className='font-bold'>{name}</div>
              <div>{position}</div>
            </div>
          )}
        </div>
      </Wrapper>
    </Container>
  )
}
