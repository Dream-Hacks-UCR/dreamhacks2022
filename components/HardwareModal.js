import Link from 'next/link'
import Image from 'next/image'
import { GoX } from 'react-icons/go'

import styles from '../styles/Modal.module.css'

export default function Modal( props ) {
  return (
    <>
      <div className={props.show ? `${styles.modal} ${styles.show}` : `${styles.modal}`}>
        <div>
          <div className={styles.header}>
            <GoX className={styles.closeButton} onClick={props.handler}/>
          </div>
          <div className={styles.body}>
            <div className={styles.imageWrapper}>
              <div>
                <Image
                  src={props.image}
                  objectFit='contain'
                  className={styles.image}
                />
              </div>
            </div>
            <div className={styles.text}>
              <h2 className={styles.heading}>{props.name}</h2>
              <p className={styles.caption}>
                <b>Quantity:</b> {props.quantity}
              </p>
              <p className={styles.caption}>
                <b>Category:</b> {props.category}
              </p>
              <p className={styles.caption}>
                {props.description}
              </p>
              {props.datasheet &&
                <p className={styles.datasheet}>
                  <Link 
                    alt='Link to datasheet'
                    passHref
                    href={props.datasheet}
                  >
                    <span className={styles.link}>
                      <b>Click Here for the Datasheet</b>
                    </span>
                  </Link>
                </p>
              }
            </div>
          </div>
        </div>
      </div>
      <div className={styles.overlay} onClick={props.handler} />
    </>
  )
}