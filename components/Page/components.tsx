interface LayoutProps {
  children: React.ReactNode | React.ReactNodeArray
}

interface SectionProps {
  children: React.ReactNode | React.ReactNodeArray
  color: string
}

interface WrapperProps {
  children: React.ReactNode | React.ReactNodeArray
}

interface WaveProps {
  waveClass: string
  fill: string
}

export const Layout = ({ children }: LayoutProps) => (
  <main className='flex flex-col justify-center items-center flex-grow'>
    {children}
  </main>
)

export const Section = ({ children, color}: SectionProps) => (
  <section 
    className={
      'relative flex flex-col justify-center items-center min-h-[50vh] px-4 pt-20 pb-40 bg-stars ' + color
    }
  >
    {children}
  </section>
)

export const Wrapper = ({ children }: WrapperProps) => (
  <div className='flex flex-col w-full max-w-[68rem] min-h-[inherit] mt-12'>
    {children}
  </div>
)

export const WaveBorder = ({ waveClass, fill }: WaveProps) => (
  <div className={waveClass}>
    <svg data-name='Layer 1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 120' preserveAspectRatio='none'>
      <path d='M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z' className={fill} />
    </svg>
  </div>
)