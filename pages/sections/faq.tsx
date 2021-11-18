import Container from '@/components/Container'
import Wrapper from '@/components/Wrapper'
import Link from 'next/link'
import FaqAccordion from '@/components/FaqAccordion'

export default function Faq() {
  return (
    <Container color='bg-main-400'>
      <Wrapper>
        <h1 className='text-center font-bold text-6xl text-primary'>
          any questions?
        </h1>
        <p className='my-4 text-center text-xl text-secondary'>
          Still can&apos;t find an answer to your question? 
          Feel free to ask at <Link passHref href='mailto:lotushacksucr@gmail.com'><span className='font-semibold text-accent hover:text-accent-dark cursor-pointer'>lotushacksucr@gmail.com</span></Link>.
        </p>
        <FaqAccordion />
      </Wrapper>
    </Container>
  )
}
