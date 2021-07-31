import Link from 'next/link'
import { Link as NavLink } from 'react-scroll'
import { useRouter } from 'next/router'
import { motion } from 'framer-motion'

import { GoChevronRight } from 'react-icons/go'

import styles from '../styles/Nav.module.css'

export default function Nav() {
  const router = useRouter()

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        {
          router.pathname === '/'
          ? <NavLink
              activeClass="active"
              to="Home"
              spy={true}
              smooth={true}
              offset={-90}
              duration={500}
              className={styles.link}
            >
              Dream Hacks
            </NavLink>
          : <Link passHref href='/' className={styles.link}>
              <div>Dream Hacks</div>
            </Link>
        }
        <div>
          {
            router.pathname === '/'
            ? <>
                <NavLink
                  activeClass="active"
                  to="About"
                  spy={true}
                  smooth={true}
                  offset={-90}
                  duration={500}
                  className={styles.link}
                >
                  About
                </NavLink>
                <NavLink
                  activeClass="active"
                  to="Hardware"
                  spy={true}
                  smooth={true}
                  offset={-90}
                  duration={500}
                  className={styles.link}
                >
                  Hardware
                </NavLink>
                <NavLink
                  activeClass="active"
                  to="Faq"
                  spy={true}
                  smooth={true}
                  offset={-90}
                  duration={500}
                  className={styles.link}
                >
                  FAQ 
                </NavLink>
                <NavLink
                  activeClass="active"
                  to="Sponsors"
                  spy={true}
                  smooth={true}
                  offset={-90}
                  duration={500}
                  className={styles.link}
                >
                  Sponsors
                </NavLink>
                <NavLink
                  activeClass="active"
                  to="Team"
                  spy={true}
                  smooth={true}
                  offset={-90}
                  duration={500}
                  className={styles.link}
                >
                  Team
                </NavLink>  
              </>
            : null
          }
          <motion.div 
            whileHover={{ scale: 1.05}} 
            whileTap={{ scale: 0.995 }}
            className={styles.button}
          >
            Apply <GoChevronRight />
          </motion.div>
        </div>
      </div>
    </div>
  )
}