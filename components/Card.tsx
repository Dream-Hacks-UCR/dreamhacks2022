import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Card({ link }) {
  return (
    <Link passHref href={link}>
      <motion.div
        whileHover={{ y: -10 }}
        className='w-32 sm:w-44 md:w-52 h-[11.5rem] sm:h-64 md:h-72 m-1 rounded-md bg-main-100 cursor-pointer'
      >
        {/* insert lead image */}
      </motion.div>
    </Link>
  )
}