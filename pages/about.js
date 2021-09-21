import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

import ThetaTau from '../public/assets/orgs/ThetaTau.png'
import IEEE from '../public/assets/orgs/IEEE.png'

import styles from '../styles/Index.module.css'

export default function About() {
  const sections = [
    {
      title: 'WHAT IS LOTUS HACKS?',
      components: 
      <>
        <p>
          Lotus Hacks is <b>the first 36-hour hardware hackathon</b> hosted by Theta Tau and the Institute of Electrical and Electronics Engineers (IEEE) at University of California, Riverside. Hackers are teamed up to work together to create amazing projects using provided hardware kits and other resources within the timeframe.
        </p>
      </>
    },
    {
      title: 'OUR MISSION',
      components: 
      <>
        <p>
          Lotus Hacks aims to provide hands-on opportunities to underrepresented students within our historically low-income area. By introducing a hardware hackathon, students will have access to technology such as 3D printers, soldering irons, and hardware <b>at no cost</b>.
        </p>
        <p>
          Interested in helping us out? <b>Sponsor us or join our committees!</b>
        </p>
        <div className={styles.buttonWrapper}>
          <Link passHref href='/'>
            <motion.button 
              whileHover={{ scale: 1.03}} 
              whileTap={{ scale: 0.995 }}
              className={styles.primarybutton}
            >
              Sponsor Us
            </motion.button>
          </Link>
          <Link passHref href='https://bit.ly/lotushackscommitteeforms'>
            <motion.button 
              whileHover={{ scale: 1.03}} 
              whileTap={{ scale: 0.995 }}
              className={styles.secondarybutton}
            >
              Join Our Team
            </motion.button>
          </Link>
        </div>
      </>
    },
    {
      title: 'OUR ORGANIZERS',
      components:
      <>
        <div className={styles.organizers}>
          <Link passHref href='https://www.thetatauucr.com/'>
            <motion.div 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.997 }}
            >
              <Image
                src={ThetaTau}
                width={280}
                height={220}
                objectFit='contain'
                placeholder='blur'
              />
            </motion.div>
          </Link>
          <Link passHref href='https://ieee.ee.ucr.edu/'>
            <motion.div 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.997 }}
            >
              <Image
                src={IEEE}
                width={360}
                height={200}
                objectFit='contain'
                placeholder='blur'
              />
            </motion.div>
          </Link>
        </div>
      </>
    }
  ]

  return (
    <section className={`${styles.container} ${styles.about}`}>
      <div className={styles.wrapper}>
        <h1>about us</h1>
        { sections.map(({title, components}) => 
          <>
            <h2>{title}</h2>
            {components}
          </>
        )}
      </div>
    </section>
  )
}
