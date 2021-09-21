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
              <Image
                src={props.image}
                width={250}
                height={250}
                layout='fixed'
                className={styles.image}
              />
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
                  <Link passHref href={props.datasheet}>
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