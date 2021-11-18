import Link from 'next/link'
import Image from 'next/image'
import { GoX } from 'react-icons/go'

export default function Modal( props ) {
  return (
    <>
      <div
        className={
          'z-[120] fixed top-1/2 left-1/2 w-[95%] md:w-[45rem] rounded-lg bg-main-700 transform -translate-x-1/2 -translate-y-1/2 transition-opacity duration-100 '
          + (props.show ? 'opacity-100 visible' : 'opacity-0 invisible')
        }
      >
        <div>
          <div className='flex justify-end items-center p-4 pb-0'>
            <GoX
              className='text-3xl text-main-200 hover:text-main-100 cursor-pointer'
              onClick={props.handler}
            />
          </div>
          <div className='flex flex-col md:flex-row gap-4 md:gap-6 items-center px-6 md:pt-4 pb-2 md:pb-6'>
            <div className='flex items-center self-center md:self-auto w-40 md:w-60 min-w-[10rem] md:min-w-[15rem] min-h-[10rem] md:min-h-[15rem] h-40 md:h-60'>
              <div>
                <Image
                  src={props.image}
                  objectFit='contain'
                  className='rounded-full'
                />
              </div>
            </div>
            <div className='flex flex-col gap-2.5 md:gap-4 w-full mb-4 text-base md:text-xl'>
              <h2 className='font-bold text-lg md:text-2xl text-primary'>
                {props.name}
              </h2>
              <p>
                <b>Quantity:</b> {props.quantity}
              </p>
              <p>
                <b>Category:</b> {props.category}
              </p>
              <p>
                {props.description}
              </p>
              {props.datasheet &&
                <p>
                  <Link 
                    alt='Link to datasheet'
                    passHref
                    href={props.datasheet}
                  >
                    <span className='text-accent hover:text-accent-dark cursor-pointer'>
                      <b>Click Here for the Datasheet</b>
                    </span>
                  </Link>
                </p>
              }
            </div>
          </div>
        </div>
      </div>
      <div
        className={
          'z-[110] fixed top-0 left-0 w-full h-full bg-overlay backdrop-filter backdrop-blur transition-opacity duration-100 '
          + (props.show ? 'opacity-100 visible' : 'opacity-0 invisible')
        }
        onClick={props.handler}
      />
    </>
  )
}