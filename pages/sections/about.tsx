import Image from 'next/image'
import { motion } from 'framer-motion'
import Container from '@/components/Container'
import Wrapper from '@/components/Wrapper'
import { PrimaryButton, SecondaryButton } from '@/components/Button'
import ThetaTau from '/public/assets/orgs/ThetaTau.png'
import IEEE from '/public/assets/orgs/IEEE.png'

export default function About() {
  const sections = [
    {
      title: 'WHAT IS LOTUS HACKS?',
      components: 
      <>
        <p className='my-4 text-xl text-secondary'>
          Lotus Hacks is <b>the first 36-hour hardware hackathon</b> hosted by Theta Tau and the Institute of Electrical and Electronics Engineers (IEEE) at University of California, Riverside. Hackers are teamed up to work together to create amazing projects using provided hardware kits and other resources within the timeframe.
        </p>
      </>
    },
    {
      title: 'OUR MISSION',
      components: 
      <>
        <p className='my-4 text-xl text-secondary'>
          Lotus Hacks aims to provide hands-on opportunities for students to apply skills from all facets of engineering to develop a tangible project. Students will have access to technology such as 3D printers, soldering irons, and hardware <b>at no cost</b>.
        </p>
        <p className='my-4 text-xl text-secondary'>
          Interested in helping us out? <b>Sponsor us or join our committees!</b>
        </p>
        <div className='flex flex-col sm:flex-row gap-3 w-full sm:w-auto mb-4'>
          <PrimaryButton
            label='Sponsor Us'
            internalLink='/sponsor-us'
          />
          <SecondaryButton
            label='Join Our Team'
            externalLink='https://bit.ly/lotushackscommitteeforms'
          />
        </div>
      </>
    },
    {
      title: 'OUR ORGANIZERS',
      components:
      <>
        <div className='flex gap-12 mt-8'>
          <a target='_blank' rel='noreferrer noopenner' href='https://www.thetatauucr.com/'>
            <motion.div 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.997 }}
              className='cursor-pointer'
            >
              <Image
                src={ThetaTau}
                width={280}
                height={220}
                objectFit='contain'
                placeholder='blur'
              />
            </motion.div>
          </a>
          <a target='_blank' rel='noreferrer noopenner' href='https://ieee.ee.ucr.edu/'>
            <motion.div 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.997 }}
              className='cursor-pointer'
            >
              <Image
                src={IEEE}
                width={360}
                height={200}
                objectFit='contain'
                placeholder='blur'
              />
            </motion.div>
          </a>
        </div>
      </>
    }
  ]

  return (
    <Container color='bg-main-600'>
      <Wrapper>
        <h1 className='text-center font-bold text-6xl text-primary'>
          about us
        </h1>
        { sections.map(({title, components}) => 
          <>
            <h2 className='mt-4 font-bold text-2xl text-primary'>
              {title}
            </h2>
            {components}
          </>
        )}
      </Wrapper>
    </Container>
  )
}
