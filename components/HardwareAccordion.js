import HardwareBox from './HardwareBox'
import Image from 'next/image'
import { motion } from 'framer-motion'

import wifiBtMicrocontroller from '../public/assets/parts/wifi-bt-microcontroller.png'
import mmJumper from '../public/assets/parts/mm-jumper.png'
import mfJumper from '../public/assets/parts/mf-jumper.png'
import breadboard from '../public/assets/parts/breadboard.png'
import transducer from '../public/assets/parts/audio-piezo-transducer.png'
import battery from '../public/assets/parts/battery.png'
import batteryHolder from '../public/assets/parts/battery-holder.png'
import ledRed from '../public/assets/parts/led-red.png'
import ledGreen from '../public/assets/parts/led-green.png'
import pushbutton from '../public/assets/parts/button.png'
import slideSwitch from '../public/assets/parts/slide-switch.png'
import irReceiver from '../public/assets/parts/ir-receiver.png'
import irEmitter from '../public/assets/parts/ir-emitter.png'
import resistors from '../public/assets/parts/resistors.png'
import capacitor01 from '../public/assets/parts/capacitor-01.png'
import capacitor33 from '../public/assets/parts/capacitor-33.png'
import capacitor1 from '../public/assets/parts/capacitor-1.png'
import capacitor10 from '../public/assets/parts/capacitor-10.png'
import transistor from '../public/assets/parts/nmos-transistor.png'
import regulator from '../public/assets/parts/voltage-regulator.png'
import gatorClips from '../public/assets/parts/gator-clips.png'

import l293d from '../public/assets/parts/l293d.png'
import ultrasonicSensor from '../public/assets/parts/ultrasonic-sensor.png'
import motorWheel from '../public/assets/parts/motor-wheel-kit.png'
import mpu from '../public/assets/parts/mpu6050.png'
import breakoutCable from '../public/assets/parts/breakout-cable.png'

import oledDisplay from '../public/assets/parts/oled-display.png'
import sevenSeg from '../public/assets/parts/7seg.png'
import ledRGB from '../public/assets/parts/led-rgb.png'
import pdmMic from '../public/assets/parts/mic.png'

import mcuLaunchpad from '../public/assets/parts/mcu-launchpad.png'
import groveSensorKit from '../public/assets/parts/grove-sensor-kit.png'
import wifiBooster from '../public/assets/parts/wifi-booster.png'
import breadboardBooster from '../public/assets/parts/breadboard-booster.png'

import styles from '../styles/Accordion.module.css'

export default function HardwareAccordion() {
  const base = [
    {
      name: 'WiFi + Bluetooth Microcontroller - ESP32',
      quantity: 1,
      image: wifiBtMicrocontroller
    },
    {
      name: 'M-M Jumper Wires',
      quantity: 10,
      image: mmJumper
    },
    {
      name: 'M-F Jumper Wires',
      quantity: 10,
      image: mfJumper
    },
    {
      name: 'Breadboard',
      quantity: 1,
      image: breadboard
    },
    {
      name: 'Audio Piezo Transducer',
      quantity: 2,
      image: transducer
    },
    {
      name: '9V Battery',
      quantity: 2,
      image: battery
    },
    {
      name: 'Battery Holder',
      quantity: 1,
      image: batteryHolder
    },
    {
      name: 'Red LED',
      quantity: 1,
      image: ledRed
    },
    {
      name: 'Green LED',
      quantity: 1,
      image: ledGreen
    },
    {
      name: 'Pushbutton',
      quantity: 2,
      image: pushbutton
    },
    {
      name: 'Slide Switch',
      quantity: 1,
      image: slideSwitch
    },
    {
      name: 'IR Receiver',
      quantity: 2,
      image: irReceiver
    },
    {
      name: 'IR Emitter',
      quantity: 2,
      image: irEmitter
    },
    {
      name: 'Assorted Resistors',
      quantity: 30,
      image: resistors
    },
    {
      name: '0.1µF Capacitor',
      quantity: 2,
      image: capacitor01
    },
    {
      name: '0.33µF Capacitor',
      quantity: 2,
      image: capacitor33
    },
    {
      name: '1µF Capacitor',
      quantity: 2,
      image: capacitor1
    },
    {
      name: '10µF Capacitor',
      quantity: 2,
      image: capacitor10
    },
    {
      name: 'NMOS Transistor',
      quantity: 4,
      image: transistor
    },
    {
      name: '5V Voltage Regulator',
      quantity: 1,
      image: regulator
    },
    {
      name: 'Alligator Clips',
      quantity: 4,
      image: gatorClips
    },
  ]

  const motionAddon = [
    {
      name: 'L293D',
      quantity: 1,
      image: l293d
    },
    {
      name: 'Ultrasonic Sensor 40KHz',
      quantity: 1,
      image: ultrasonicSensor
    },
    {
      name: 'DC Motor and Wheel Kit',
      quantity: 1,
      image: motorWheel
    },
    {
      name: 'MPU-6050',
      quantity: 1,
      image: mpu
    },
    {
      name: 'Qwiic I2C Breakout Cable',
      quantity: 1,
      image: breakoutCable
    },
  ]

  const audioVisualAddon = [
    {
      name: 'OLED Display',
      quantity: 1,
      image: oledDisplay
    },
    {
      name: '7 Segment Display',
      quantity: 2,
      image: sevenSeg
    },
    {
      name: 'RGB LED',
      quantity: 5,
      image: ledRGB
    },
    {
      name: 'PDM Microphone Breakout With JST',
      quantity: 1,
      image: pdmMic
    },
    {
      name: 'Qwiic I2C Breakout Cable',
      quantity: 1,
      image: breakoutCable
    },
  ]

  const tiBox = [
    {
      name: 'MSP432 MCU Launchpad',
      quantity: 1,
      image: mcuLaunchpad
    },
    {
      name: 'Grover Sensor Kit for Launchpad',
      quantity: 1,
      image: groveSensorKit
    },
    {
      name: 'CC3100 WiFi Boosterpack',
      quantity: 1,
      image: wifiBooster
    },
    {
      name: 'Breadboard Boosterpack',
      quantity: 1,
      image: breadboardBooster
    },
  ]

  return (
    <div className={styles.wrapper}>
      <HardwareBox 
        title='Base Parts'
        xl={true}
      >
        {base.map(({ name, quantity, image }, idx) => 
          <div key={idx} className={styles.hardwareWrapper}>
            <motion.div className={styles.hardware}>
              <Image
                src={image}
                objectFit='contain'
                className={styles.image}
              />
            </motion.div>
            <div className={styles.name}>
              <b>{name}</b> {quantity > 1 && ('(x' + quantity + ')')}
            </div>
          </div>
        )}
      </HardwareBox>
      <HardwareBox 
        title='Motion Add-on'
        subtitle='(Includes Base Parts)'
        xl={false}
      >
        {motionAddon.map(({ name, quantity, image }, idx) => 
          <div key={idx} className={styles.hardwareWrapper}>
            <motion.div className={styles.hardware}>
              <Image
                src={image}
                objectFit='contain'
                className={styles.image}
              />
            </motion.div>
            <div className={styles.name}>
              <b>{name}</b> {quantity > 1 && ('(x' + quantity + ')')}
            </div>
          </div>
        )}
      </HardwareBox>
      <HardwareBox 
        title='Audio & Visual Add-on'
        subtitle='(Includes Base Parts)'
        xl={false}
      >
        {audioVisualAddon.map(({ name, quantity, image }, idx) => 
          <div key={idx} className={styles.hardwareWrapper}>
            <motion.div className={styles.hardware}>
              <Image
                src={image}
                objectFit='contain'
                className={styles.image}
              />
            </motion.div>
            <div className={styles.name}>
              <b>{name}</b> {quantity > 1 && ('(x' + quantity + ')')}
            </div>
          </div>
        )}
      </HardwareBox>
      <HardwareBox 
        title='TI Box'
        subtitle='(Does NOT Include Base Parts)'
        xl={false}
      >
        {tiBox.map(({ name, quantity, image }, idx) => 
          <div key={idx} className={styles.hardwareWrapper}>
            <motion.div className={styles.hardware}>
              <Image
                src={image}
                objectFit='contain'
                className={styles.image}
              />
            </motion.div>
            <div className={styles.name}>
              <b>{name}</b> {quantity > 1 && ('(x' + quantity + ')')}
            </div>
          </div>
        )}
      </HardwareBox>
    </div>
  )
}