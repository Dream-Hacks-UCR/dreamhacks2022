import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Card(props) {
  return (
    <Link alt='Team Lead's LinkedIn passHref href={props.link}>
      <motion.div
        whileHover={{ y: -10 }}
        className='w-32 sm:w-44 md:w-52 h-46 sm:h-64 md:h-72 m-1.5 rounded-md bg-main-100 text-sm md:text-base cursor-pointer'
      >
        {/* insert lead image */}
      </motion.div>
    </Link>
  )
}