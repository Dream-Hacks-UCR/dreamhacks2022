import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { Link as NavLink } from 'react-scroll'
import { useRouter } from 'next/router'
import { motion } from 'framer-motion'
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock'

import { HiMenuAlt4, HiOutlineX } from 'react-icons/hi'
import { GoChevronRight } from 'react-icons/go'

import styles from '../styles/Nav.module.css'

export default function Nav() {
  const router = useRouter()

  const [open, setOpen] = useState(false)
  const [targetElement, setTargetElement] = useState(null)

  const toggleOpen = () => {
    setOpen(!open)
  }

  const handleResize = () => {
    if (window.innerWidth > 768) setOpen(false)
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize)
    setTargetElement(document.querySelector('#nav'))
    console.log(targetElement)
    console.log(open)
    if (targetElement) {
      if (open) disableBodyScroll(targetElement)
      else enableBodyScroll(targetElement)
    }
  }, [targetElement, open])

  return (
    <div
      className={
        open 
        ? `${styles.container} ${styles.open}`
        : `${styles.container}`
      }
    >
      <div className={styles.wrapper}>
        <div className={styles.navHeader}>
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
                onClick={() => setOpen(false)}
              >
                DH
              </NavLink>
            : <Link passHref href='/' className={styles.link}>
                <div>DH</div>
              </Link>
          }
          <HiMenuAlt4 className={styles.closeMenu} onClick={() => toggleOpen()} />
          <HiOutlineX className={styles.openMenu} onClick={() => toggleOpen()} />
        </div>
        <div id='nav' className={styles.tabs}>
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
                  onClick={() => setOpen(false)}
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
                  onClick={() => setOpen(false)}
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
                  onClick={() => setOpen(false)}
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
                  onClick={() => setOpen(false)}
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
                  onClick={() => setOpen(false)}
                >
                  Team
                </NavLink>  
              </>
            : null
          }
          <motion.div 
            whileHover={{ scale: 1.05}} 
            whileTap={{ scale: 0.997 }}
            className={styles.button}
          >
            Apply <GoChevronRight />
          </motion.div>
        </div>
      </div>
    </div>
  )
}