import HardwareBox from "./HardwareBox";

import styles from '../styles/Accordion.module.css'

export default function HardwareAccordion() {
  return (
    <div className={styles.wrapper}>
      <HardwareBox 
        title='Base Parts'
      >
        <div>Lorem ipsum.</div>
        <div>Lorem ipsum.</div>
      </HardwareBox>
      <HardwareBox 
        title='Motion Add-on'
        subtitle='(Includes Base Parts)'
      >
        <div>Lorem ipsum.</div>
        <div>Lorem ipsum.</div>
      </HardwareBox>
      <HardwareBox 
        title='Audio & Visual Add-on'
        subtitle='(Includes Base Parts)'
      >
        <div>Lorem ipsum.</div>
        <div>Lorem ipsum.</div>
      </HardwareBox>
      <HardwareBox 
        title='TI Box'
        subtitle='(Does NOT Include Base Parts)'
      >
        <div>Lorem ipsum.</div>
        <div>Lorem ipsum.</div>
      </HardwareBox>
    </div>
  )
}