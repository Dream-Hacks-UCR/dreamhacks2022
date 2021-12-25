import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { Link as NavLink } from 'react-scroll'
import { useRouter } from 'next/router'
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock'
import { signIn, signOut, useSession } from 'next-auth/react'
import Image from 'next/image'
import SignInModal from '@/components/SignIn'
import { PrimaryButton, SecondaryButton } from '@/components/Button'
import { HiMenuAlt4, HiOutlineX } from 'react-icons/hi'
import Logo from '/public/assets/logo.png'

export default function Nav() {
  const { data: session, status } = useSession()
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
    // console.log(targetElement)
    // console.log(open)
    if (targetElement) {
      if (open) disableBodyScroll(targetElement)
      else enableBodyScroll(targetElement)
    }
  }, [targetElement, open])

  return (
    <>
      <div
        className={
          'z-[100] fixed top-0 flex justify-center text-center w-full py-6 backdrop-filter backdrop-blur-lg '
          + (open ? 'max-h-screen bg-main-700' : 'max-h-[4.5rem] bg-nav')
        }
      >
        <div className='flex flex-col md:flex-row items-center w-full md:w-[68rem] mx-4 font-bold text-lg lowercase'>
          <div className='grid grid-cols-3 md:grid-cols-1 flex w-full md:w-auto'>
            <div
              className='flex md:hidden text-3xl cursor-pointer'
              onClick={() => toggleOpen()}
            >
              { open
                ? <HiOutlineX />
                : <HiMenuAlt4 />
              }
            </div>
            {
              router.pathname === '/'
              ? <NavLink
                  activeClass=''
                  to='Home'
                  spy={true}
                  smooth={true}
                  offset={-90}
                  duration={500}
                  className='cursor-pointer'
                  onClick={() => setOpen(false)}
                >
                  <Image
                    src={Logo}
                    width={35}
                    height={30}
                    objectFit='contain'
                  />
                </NavLink>
              : <Link passHref href='/'>
                  <span
                    className='cursor-pointer'
                    onClick={() => setOpen(false)}
                  >
                    <Image
                      src={Logo}
                      width={35}
                      height={30}
                      objectFit='contain'
                    />
                  </span>
                </Link>
            }
            <span className='block md:hidden justify-self-end'>
              {
                session 
                ?
                  <>
                    <PrimaryButton
                      label='Sign In'
                      min={Boolean(true)}
                      internalLink='/apply'
                    />
                    <SecondaryButton
                      label='Sign Out'
                      action={() => signOut()}
                      min={Boolean(true)}
                    />
                  </>
                :
                  <SignInModal />
              }
            </span>
          </div>
          <div
            id='nav'
            className={
              'flex flex-col md:flex-row md:w-full h-screen md:h-auto items-center justify-around md:justify-between ml-0 md:ml-6 py-32 pb-56 md:py-0 '
              + (open ? 'visible' : 'invisible md:visible')
            }
          >
            <div className='flex flex-col md:flex-row md:gap-6 justify-around h-screen md:h-auto'>
              {
                router.pathname === '/'
                ? <>
                    <NavLink
                      activeClass='text-accent'
                      to='Home'
                      spy={true}
                      smooth={true}
                      offset={-90}
                      duration={500}
                      className='block md:hidden hover:text-accent cursor-pointer'
                      onClick={() => setOpen(false)}
                    >
                      Home
                    </NavLink>
                    <NavLink
                      activeClass='text-accent'
                      to='About'
                      spy={true}
                      smooth={true}
                      offset={-90}
                      duration={500}
                      className='hover:text-accent cursor-pointer'
                      onClick={() => setOpen(false)}
                    >
                      About
                    </NavLink>
                    <NavLink
                      activeClass='text-accent'
                      to='Hardware'
                      spy={true}
                      smooth={true}
                      offset={-90}
                      duration={500}
                      className='hover:text-accent cursor-pointer'
                      onClick={() => setOpen(false)}
                    >
                      Hardware
                    </NavLink>
                    <NavLink
                      activeClass='text-accent'
                      to='Faq'
                      spy={true}
                      smooth={true}
                      offset={-90}
                      duration={500}
                      className='hover:text-accent cursor-pointer'
                      onClick={() => setOpen(false)}
                    >
                      FAQ 
                    </NavLink>
                    {/* <NavLink
                      activeClass='text-accent'
                      to='Sponsors'
                      spy={true}
                      smooth={true}
                      offset={-90}
                      duration={500}
                      className='hover:text-accent cursor-pointer'
                      onClick={() => setOpen(false)}
                    >
                      Sponsors
                    </NavLink> */}
                    <NavLink
                      activeClass='text-accent'
                      to='Team'
                      spy={true}
                      smooth={true}
                      offset={-90}
                      duration={500}
                      className='hover:text-accent cursor-pointer'
                      onClick={() => setOpen(false)}
                    >
                      Team
                    </NavLink>  
                  </>
                : <Link passHref href='/'>
                    <span
                      className='hover:text-accent cursor-pointer'
                      onClick={() => setOpen(false)}
                    >
                      Home
                    </span>
                  </Link>
              }
            </div>
            <span className='hidden md:block'>
              {
                session 
                ?
                  <>
                    <PrimaryButton
                      label='Sign In'
                      min={Boolean(true)}
                      internalLink='/apply'
                    />
                    <SecondaryButton
                      label='Sign Out'
                      action={() => signOut()}
                      min={Boolean(true)}
                    />
                  </>
                :
                  <SignInModal />
              }
            </span>
          </div>
        </div>
      </div>
    </>
  )
}