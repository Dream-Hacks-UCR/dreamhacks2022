import Countdown from 'react-countdown'
import { motion } from 'framer-motion'

export default function CountdownOutput( props ) {
  const Completionist = () => (
    <div className='mb-8 font-semibold text-2xl xs:text-3xl'>
      {props.completed}
    </div>
  )

  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    const numDays = days < 10 ? String('0' + days) : String(days)
    const numHours = hours < 10 ? String('0' + hours) : String(hours)
    const numMins = minutes < 10 ? String('0' + minutes) : String(minutes)
    const numSecs = seconds < 10 ? String('0' + seconds) : String(seconds)

    if (completed) { return <Completionist /> } 
    else {
      return (
        <div className='mt-8 font-medium text-2xl xs:text-4xl sm:text-5xl md:text-6xl'>
          <h2 className='mb-4 text-center font-bold text-xl xs:text-2xl sm:text-3xl text-secondary'>
            {props.heading}
          </h2>
          <div className='flex gap-2.5 sm:gap-4'>
            { 
              days > 0 &&
                <div>
                  <div className='flex gap-1'>
                    { Array.from(numDays).map(n =>
                      <motion.div 
                        whileHover={{ y: -3 }}
                        className='text-center w-7 xs:w-10 sm:w-14 md:w-16 py-2.5 xs:py-3 sm:py-4 md:py-5 rounded-lg rounded-tl-2xl rounded-br-2xl bg-main-500 cursor-default'
                      >
                        {n}
                      </motion.div>
                    )}
                  </div>
                  <div className='font-semibold text-sm xs:text-base md:text-lg lg:text-2xl text-secondary'>
                    days
                  </div>
                </div>
            }
            { 
              ( days > 0 || hours > 0 ) &&
                <div>
                  <div className='flex gap-1'>
                    { Array.from(numHours).map(n =>
                      <motion.div 
                        whileHover={{ y: -3 }}
                        className='text-center w-7 xs:w-10 sm:w-14 md:w-16 py-2.5 xs:py-3 sm:py-4 md:py-5 rounded-lg rounded-tl-2xl rounded-br-2xl bg-main-500 cursor-default'
                      >
                        {n}
                      </motion.div>
                    )}
                  </div>
                  <div className='font-semibold text-sm xs:text-base md:text-lg lg:text-2xl text-secondary'>
                    hrs
                  </div>
                </div>
            }
            { 
              ( days > 0 || hours > 0 || minutes > 0 ) &&
                <div>
                  <div className='flex gap-1'>
                    { Array.from(numMins).map(n =>
                      <motion.div 
                        whileHover={{ y: -3 }}
                        className='text-center w-7 xs:w-10 sm:w-14 md:w-16 py-2.5 xs:py-3 sm:py-4 md:py-5 rounded-lg rounded-tl-2xl rounded-br-2xl bg-main-500 cursor-default'
                      >
                        {n}
                      </motion.div>
                    )}
                  </div>
                  <div className='font-semibold text-sm xs:text-base md:text-lg lg:text-2xl text-secondary'>
                    mins
                  </div>
                </div>
            }
            { 
              ( days > 0 || hours > 0  || minutes > 0 || seconds > 0 ) &&
                <div>
                  <div className='flex gap-1'>
                    { Array.from(numSecs).map(n =>
                      <motion.div 
                        whileHover={{ y: -3 }}
                        className='text-center w-7 xs:w-10 sm:w-14 md:w-16 py-2.5 xs:py-3 sm:py-4 md:py-5 rounded-lg rounded-tl-2xl rounded-br-2xl bg-main-500 cursor-default'
                      >
                        {n}
                      </motion.div>
                    )}
                  </div>
                  <div className='font-semibold text-sm xs:text-base md:text-lg lg:text-2xl text-secondary'>
                    secs
                  </div>
                </div>
            }
          </div>
        </div>
      )
    }
  }

  return <Countdown date={props.date} renderer={renderer} />
}