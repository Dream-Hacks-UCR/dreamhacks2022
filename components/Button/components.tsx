import Link from 'next/link'
import { motion } from 'framer-motion'

interface LinkProps {
  children: React.ReactNode | React.ReactNodeArray
  link: string
}

interface ButtonProps {
  label: string
  action: () => void
  min?: boolean
  internalLink?: string
  externalLink?: string
}

const InternalLinkWrapper = ({children, link}: LinkProps) => (
  <Link passHref href={link}>
    {children}
  </Link>
)

const ExternalLinkWrapper = ({children, link}: LinkProps) => (
  <a target='_blank' rel='noopener noreferrer' href={link}>
    {children}
  </a>
)

export const PrimaryButton = ({ label, action, min, internalLink, externalLink }: ButtonProps) => (
  <>
    {
      internalLink && !externalLink &&
      <InternalLinkWrapper link={internalLink}>
        <motion.button
          whileHover={{ scale: 1.03}} 
          whileTap={{ scale: 0.995 }}
          className={
            'flex justify-center items-center w-full sm:w-60 px-6 py-2 rounded-tl-3xl rounded-br-3xl rounded-tr-md rounded-bl-md bg-accent hover:bg-accent-dark font-bold text-xl text-main-500 lowercase '
            + (min && 'max-w-min whitespace-nowrap')
          }
          onClick={action}
        >
          {label}
        </motion.button>
      </InternalLinkWrapper>
    }
    {
      !internalLink && externalLink &&
      <ExternalLinkWrapper link={externalLink}>
        <motion.button
          whileHover={{ scale: 1.03}} 
          whileTap={{ scale: 0.995 }}
          className={
            'flex justify-center items-center w-full sm:w-60 px-6 py-2 rounded-tl-3xl rounded-br-3xl rounded-tr-md rounded-bl-md bg-accent hover:bg-accent-dark font-bold text-xl text-main-500 lowercase '
            + (min && 'max-w-min whitespace-nowrap')
          }
          onClick={action}
        >
          {label}
        </motion.button>
      </ExternalLinkWrapper>
    }
    {
      !internalLink && !externalLink &&
      <motion.button
        whileHover={{ scale: 1.03}} 
        whileTap={{ scale: 0.995 }}
        className={
          'flex justify-center items-center w-full sm:w-60 px-6 py-2 rounded-tl-3xl rounded-br-3xl rounded-tr-md rounded-bl-md bg-accent hover:bg-accent-dark font-bold text-xl text-main-500 lowercase '
          + (min && 'max-w-min whitespace-nowrap')
        }
        onClick={action}
      >
        {label}
      </motion.button>
    }
  </>
)

export const SecondaryButton = ({ label, action, min, internalLink, externalLink }: ButtonProps) => (
  <>
  {
    internalLink && !externalLink &&
    <InternalLinkWrapper link={internalLink}>
      <motion.button
        whileHover={{ scale: 1.03}} 
        whileTap={{ scale: 0.995 }}
        className={
          'flex justify-center items-center w-full sm:w-60 px-6 py-2 rounded-tl-3xl rounded-br-3xl rounded-tr-md rounded-bl-md bg-main-500 hover:bg-main-400 font-bold text-xl text-accent lowercase '
          + (min && 'max-w-min whitespace-nowrap')
        }
        onClick={action}
      >
        {label}
      </motion.button>
    </InternalLinkWrapper>
  }
  {
    !internalLink && externalLink &&
    <ExternalLinkWrapper link={externalLink}>
      <motion.button
        whileHover={{ scale: 1.03}} 
        whileTap={{ scale: 0.995 }}
        className={
          'flex justify-center items-center w-full sm:w-60 px-6 py-2 rounded-tl-3xl rounded-br-3xl rounded-tr-md rounded-bl-md bg-main-500 hover:bg-main-400 font-bold text-xl text-accent lowercase '
          + (min && 'max-w-min whitespace-nowrap')
        }
        onClick={action}
      >
        {label}
      </motion.button>
    </ExternalLinkWrapper>
  }
  {
    !internalLink && !externalLink &&
    <motion.button
      whileHover={{ scale: 1.03}} 
      whileTap={{ scale: 0.995 }}
      className={
        'flex justify-center items-center w-full sm:w-60 px-6 py-2 rounded-tl-3xl rounded-br-3xl rounded-tr-md rounded-bl-md bg-main-500 hover:bg-main-400 font-bold text-xl text-accent lowercase '
        + (min && 'max-w-min whitespace-nowrap')
      }
      onClick={action}
    >
      {label}
    </motion.button>
  }
</>
)

PrimaryButton.defaultProps = {
  action: () => {},
}

SecondaryButton.defaultProps = {
  action: () => {},
}