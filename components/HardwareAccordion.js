import React, { useState } from 'react'
import HardwareBox from '@/components/HardwareBox'
import HardwareModal from '@/components/HardwareModal'
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

import filler from '../public/assets/filler.png'

export default function HardwareAccordion() {
  const [modalOpen, setModalOpen] = useState(false)
  const [selectedName, setSelectedName] = useState(null);
  const [selectedQuantity, setSelectedQuantity] = useState(null);
  const [selectedImage, setSelectedImage] = useState(filler);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedDescription, setSelectedDescription] = useState(null);
  const [selectedDatasheet, setSelectedDatasheet] = useState(null);

  const toggleModal = (name, quantity, image, category, description, datasheet) => {
    if (!modalOpen) {
      setSelectedName(name)
      setSelectedQuantity(quantity)
      setSelectedImage(image)
      setSelectedCategory(category)
      setSelectedDescription(description)
      setSelectedDatasheet(datasheet)
    }
    else {
      setSelectedName(null)
      setSelectedQuantity(null)
      setSelectedImage(filler)
      setSelectedCategory(null)
      setSelectedDescription(null)
      setSelectedDatasheet(null)
    }
    setModalOpen(!modalOpen)
  }

  const base = [
    {
      name: 'WiFi + Bluetooth Microcontroller - ESP32',
      quantity: 1,
      image: wifiBtMicrocontroller,
      category: 'Microcontroller',
      description: '2 PACK 2.4GHz Dual Mode WiFi + Bluetooth Development Board. Ultra-Low power consumption, works perfectly with the Arduino IDE.',
      datasheet: 'https://github.com/espressif/arduino-esp32',
    },
    {
      name: 'M-M Jumper Wires',
      quantity: 10,
      image: mmJumper,
      category: 'Connector',
      description: 'Jumper Wire Male to Male 7.00" (177.80mm) 30 AWG 30 per Pkg.',
      datasheet: null,
    },
    {
      name: 'M-F Jumper Wires',
      quantity: 10,
      image: mfJumper,
      category: 'Connector',
      description: 'Jumper Wire Male to Female 5.91" (150.00mm) 10 per Pkg.',
      datasheet: null,
    },
    {
      name: 'Breadboard',
      quantity: 1,
      image: breadboard,
      category: 'Connector',
      description: 'Solderless Breadboard Terminal Strip (no frame) 3.29" x 2.15" (83.6mm x 54.6mm).',
      datasheet: 'https://www.pololu.com/product-info-merged/4000',
    },
    {
      name: 'Audio Piezo Transducer',
      quantity: 2,
      image: transducer,
      category: 'Interface IC',
      description: 'Buzzers Transducer, Externally Driven Piezo 1.5V 4kHz 70dB @ 1.5V, 10cm Through Hole PC Pins.',
      datasheet: 'https://www.murata.com/~/media/webrenewal/support/library/catalog/products/sound/p37e.ashx?la=en-us',
    },
    {
      name: '9V Battery',
      quantity: 2,
      image: battery,
      category: 'Battery',
      description: 'Brand: Duracell. Voltage: 9V. Item Dimensions (LxWxH): 6.5 x 4.5 x 4.5 inches. Item Weight: 7.63 Pounds.',
      datasheet: null,
    },
    {
      name: 'Battery Holder',
      quantity: 1,
      image: batteryHolder,
      category: 'Connector',
      description: 'Battery Connector, Snap 9V 1 Cell Wire Leads - 6" (152.4mm).',
      datasheet: 'https://www.keyelco.com/userAssets/file/M65p30.pdf',
    },
    {
      name: 'Red LED',
      quantity: 1,
      image: ledRed,
      category: 'Display',
      description: 'Red 624nm LED Indication - Discrete 2.1V Radial.',
      datasheet: 'https://www.cree.com/led-components/media/documents/C503B-RAS-RAN-AAS-AAN-RBS-RBN-ABS-ABN-RCS-RCN-ACS-ACN-1079.pdf',
    },
    {
      name: 'Green LED',
      quantity: 1,
      image: ledGreen,
      category: 'Display',
      description: 'Green 569nm LED Indication - Discrete 2.1V Radial.',
      datasheet: 'https://media.digikey.com/pdf/Data%20Sheets/Lite-On%20PDFs/LTL-4233.pdf',
    },
    {
      name: 'Pushbutton',
      quantity: 2,
      image: pushbutton,
      category: 'Electromechanical',
      description: 'Tactile Switch SPST-NO Top Actuated Through Hole.',
      datasheet: 'https://www.te.com/commerce/DocumentDelivery/DDEController?Action=srchrtrv&DocNm=1825910&DocType=Customer+Drawing&DocLang=English',
    },
    {
      name: 'Slide Switch',
      quantity: 1,
      image: slideSwitch,
      category: 'Electromechanical',
      description: 'Slide Switch SPDT Through Hole.',
      datasheet: 'https://sten-eswitch-13110800-production.s3.amazonaws.com/system/asset/product_line/data_sheet/119/EG.pdf',
    },
    {
      name: 'IR Receiver',
      quantity: 2,
      image: irReceiver,
      category: 'Discrete Semiconductor',
      description: 'Infrared phototransistor.',
      datasheet: 'https://dammedia.osram.info/media/resource/hires/osram-dam-2496080/SFH%20313%20FA.pdf',
    },
    {
      name: 'IR Emitter',
      quantity: 2,
      image: irEmitter,
      category: 'Miscellaneous',
      description: 'Infrared (IR) Emitter 880nm 1.3V 100mA 7.8mW/sr @ 20mA 15° Radial.',
      datasheet: 'http://www.inolux-corp.com/datasheet/IR/Emitter/5mm%20Lamp/INL-5AMIR15_V1.0.pdf',
    },
    {
      name: 'Assorted Resistors',
      quantity: 30,
      image: resistors,
      category: 'Miscellaneous',
      description: '5 each of 10Ω, 100Ω, 470Ω, 1kΩ, 4.7kΩ, and 10kΩ ±5% 0.25W, 1/4W Through Hole Resistor Axial Flame Retardant Coating, Safety Carbon Film.',
      datasheet: 'https://www.seielect.com/catalog/sei-cf_cfm.pdf',
    },
    {
      name: '0.1µF Capacitor',
      quantity: 2,
      image: capacitor01,
      category: 'Miscellaneous',
      description: '±20% 50V Ceramic Capacitor Z5U Radial.',
      datasheet: 'https://api.kemet.com/component-edge/download/specsheet/C315C104M5U5TA7303.pdf',
    },
    {
      name: '0.33µF Capacitor',
      quantity: 2,
      image: capacitor33,
      category: 'Miscellaneous',
      description: 'Ceramic Capacitor 0.33uF 50V Z5U AXIAL.',
      datasheet: 'https://content.kemet.com/datasheets/KEM_C1042_AXIMAX_Z5U.pdf',
    },
    {
      name: '1µF Capacitor',
      quantity: 2,
      image: capacitor1,
      category: 'Miscellaneous',
      description: '±10% 50V Ceramic Capacitor X5R Radial.',
      datasheet: 'https://product.tdk.com/info/en/documents/chara_sheet/FG28X5R1H105KRT06.pdf',
    },
    {
      name: '10µF Capacitor',
      quantity: 2,
      image: capacitor10,
      category: 'Miscellaneous',
      description: '±10% 16V Ceramic Capacitor X7R Radial.',
      datasheet: 'https://product.tdk.com/info/en/documents/catalog/leadmlcc_conventional_fk_en.pdf',
    },
    {
      name: 'NMOS Transistor',
      quantity: 4,
      image: transistor,
      category: 'Discrete Semiconductor',
      description: 'Bipolar (BJT) Transistor NPN 40V 600mA 300MHz 625mW Through Hole TO-92-3.',
      datasheet: 'https://www.onsemi.com/pub/Collateral/NDS7002A-D.PDF',
    },
    {
      name: '5V Voltage Regulator',
      quantity: 1,
      image: regulator,
      category: 'Power',
      description: 'Linear Voltage Regulator IC Output 1A TO-220AB.',
      datasheet: 'https://www.onsemi.com/pub/Collateral/MC7800-D.PDF',
    },
    {
      name: 'Alligator Clips',
      quantity: 4,
      image: gatorClips,
      category: 'Connector',
      description: '19.7" (500.00mm) Alligator Clip, Insulated To Alligator Clip, Insulated Test Lead - 10 Leads, Multiple Colors.',
      datasheet: 'https://media.digikey.com/pdf/Data%20Sheets/Kitronik%20PDFs/Connectors_Cables.pdf',
    },
  ]

  const motionAddon = [
    {
      name: 'L293D',
      quantity: 1,
      image: l293d,
      category: 'Interface IC',
      description: 'Bipolar Motor Driver Bipolar Parallel 16-PDIP.',
      datasheet: 'https://www.ti.com/lit/ds/slrs008d/slrs008d.pdf',
    },
    {
      name: 'Ultrasonic Sensor 40KHz',
      quantity: 1,
      image: ultrasonicSensor,
      category: 'Sensor',
      description: 'Ultrasonic Sensor 40kHz.',
      datasheet: 'https://media.digikey.com/pdf/Data%20Sheets/Adafruit%20PDFs/3942_Web.pdf',
    },
    {
      name: 'DC Motor and Wheel Kit',
      quantity: 1,
      image: motorWheel,
      category: 'Electromechanical',
      description: 'Voltage: DC 3-6V. Axis: Double axis. Rotating speed: 200RPM. Reduction ratio: 1:48. With soldered cable. Cable length: about 20cm.',
      datasheet: null,
    },
    {
      name: 'MPU-6050',
      quantity: 1,
      image: mpu,
      category: 'Sensor',
      description: 'MPU-6050 - Accelerometer, Magnetometer Sensor Evaluation Board.',
      datasheet: 'https://cdn-learn.adafruit.com/downloads/pdf/mpu6050-6-dof-accelerometer-and-gyro.pdf',
    },
    {
      name: 'Qwiic I2C Breakout Cable',
      quantity: 1,
      image: breakoutCable,
      category: 'Connector',
      description: '4, 1 (4) Position Cable Assembly Rectangular Socket to Plug (4) 5.91.',
      datasheet: 'https://media.digikey.com/pdf/Data%20Sheets/Adafruit%20PDFs/4209_Web.pdf',
    },
  ]

  const audioVisualAddon = [
    {
      name: 'OLED Display',
      quantity: 1,
      image: oledDisplay,
      category: 'Display',
      description: 'DIYmall 0.96" OLED Module 0.96 inch I2C IIC Serial 128X64 OLED Display Module SSD1306 Driver for Arduino 51 MSP420 STIM32 SCR Raspberry PI (1pc X White).',
      datasheet: 'https://drive.google.com/file/d/1qkexPET5MUICAarGOtlnQk4F-JEKkrHZ/view',
    },
    {
      name: '7 Segment Display',
      quantity: 2,
      image: sevenSeg,
      category: 'Display',
      description: 'Display Modules - LED Character and Numeric Orange-Red 7-Segment 1 Character Common Anode 2V 20mA 0.748" H x 0.496" W x 0.325" D (19.00mm x 12.60mm x 8.25mm) 10-DIP (0.600", 15.24mm).',
      datasheet: 'https://www.aopled.com/AOP_PDFs/CA561E_GW.pdf',
    },
    {
      name: 'RGB LED',
      quantity: 5,
      image: ledRGB,
      category: 'Display',
      description: 'Red, Green, Blue (RGB) 624nm Red, 525nm Green, 470nm Blue LED Indication - Discrete 2V Red, 3.4V Green, 3.4V Blue Radial - 4 Leads.',
      datasheet: 'http://www.inolux-corp.com/datasheet/Inolux%20Lamp/TH%20Lamp/HV-5RGBXX%205mm%20Full-Color%20Series.pdf',
    },
    {
      name: 'PDM Microphone Breakout With JST',
      quantity: 1,
      image: pdmMic,
      category: 'Sensor',
      description: 'MP34DT01-M MEMS Omnidirectional Microphones Audio Evaluation Board.',
      datasheet: 'https://media.digikey.com/pdf/Data%20Sheets/Adafruit%20PDFs/4346_Web.pdf',
    },
    {
      name: 'Qwiic I2C Breakout Cable',
      quantity: 1,
      image: breakoutCable,
      category: 'Connector',
      description: '4, 1 (4) Position Cable Assembly Rectangular Socket to Plug (4) 5.91.',
      datasheet: 'https://media.digikey.com/pdf/Data%20Sheets/Adafruit%20PDFs/4209_Web.pdf',
    },
  ]

  const tiBox = [
    {
      name: 'MSP432 MCU Launchpad',
      quantity: 1,
      image: mcuLaunchpad,
      category: 'Dev Kit',
      description: 'MSP432P401R LaunchPad™ - ARM® Cortex®-M4F MCU 32-Bit Embedded Evaluation Board. Compatible with TI\'s MSP432 MCU.',
      datasheet: 'https://www.ti.com/lit/ds/symlink/msp432p401r.pdf?HQS=TI-null-null-digikeymode-df-pf-null-wwe&ts=1601662546751',
    },
    {
      name: 'Grover Sensor Kit for Launchpad',
      quantity: 1,
      image: groveSensorKit,
      category: 'Dev Kit',
      description: 'Inventor Kit for TI LaunchPad, Grove Starter Kit. Compatible for TI\'s MSP432 MCU.',
      datasheet: 'https://github.com/Seeed-Studio/LaunchPad_Kit',
    },
    {
      name: 'CC3100 WiFi Boosterpack',
      quantity: 1,
      image: wifiBooster,
      category: 'Dev Kit',
      description: 'SimpleLink™ Transceiver For Use With CC3100. Compatible with TI\'s MSP432 MCU.',
      datasheet: 'https://www.ti.com/lit/ds/symlink/cc3100.pdf?HQS=TI-null-null-digikeymode-df-pf-null-wwe&ts=1601662678109',
    },
    {
      name: 'Breadboard Boosterpack',
      quantity: 1,
      image: breadboardBooster,
      category: 'Dev Kit',
      description: 'MCU LaunchPad Starter Kit. Compatible with TI\'s MSP432 MCU.',
      datasheet: 'https://media.digikey.com/pdf/Data%20Sheets/Seeed%20Technology/106060002_Web.pdf',
    },
  ]

  return (
    <div className='w-full'>
      <HardwareBox 
        title='Base Parts'
        xl={true}
      >
        {base.map(({ name, quantity, image, category, description, datasheet }, idx) => 
          <div key={idx} className='w-28 sm:w-40 text-center'>
            <motion.div
              whileHover={{ y: -8 }}
              className='w-28 sm:w-40 h-28 sm:h-40 text-center rounded-full hover:shadow-glow transition-shadow duration-150 ease-in-out cursor-pointer'
              onClick={() => toggleModal(name, quantity, image, category, description, datasheet)}
            >
              <Image
                alt={'Image of ' + name}
                src={image}
                objectFit='contain'
                className='rounded-full'
              />
            </motion.div>
            <div className='mt-3 text-base md:text-base md:text-lg'>
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
        {motionAddon.map(({ name, quantity, image, category, description, datasheet }, idx) => 
          <div key={idx} className='w-28 sm:w-40 text-center'>
            <motion.div
              whileHover={{ y: -8 }}
              className='w-28 sm:w-40 h-28 sm:h-40 text-center rounded-full hover:shadow-glow transition-shadow duration-150 ease-in-out cursor-pointer'
              onClick={() => toggleModal(name, quantity, image, category, description, datasheet)}
            >
              <Image
                alt={'Image of ' + name}
                src={image}
                objectFit='contain'
                className='rounded-full'
              />
            </motion.div>
            <div className='mt-3 text-base md:text-lg'>
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
        {audioVisualAddon.map(({ name, quantity, image, category, description, datasheet }, idx) => 
          <div key={idx} className='w-28 sm:w-40 text-center'>
            <motion.div
              whileHover={{ y: -8 }}
              className='w-28 sm:w-40 h-28 sm:h-40 text-center rounded-full hover:shadow-glow transition-shadow duration-150 ease-in-out cursor-pointer'
              onClick={() => toggleModal(name, quantity, image, category, description, datasheet)}
            >
              <Image
                alt={'Image of ' + name}
                src={image}
                objectFit='contain'
                className='rounded-full'
              />
            </motion.div>
            <div className='mt-3 text-base md:text-lg'>
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
        {tiBox.map(({ name, quantity, image, category, description, datasheet }, idx) => 
          <div key={idx} className='w-28 sm:w-40 text-center'>
            <motion.div
              whileHover={{ y: -8 }}
              className='w-28 sm:w-40 h-28 sm:h-40 text-center rounded-full hover:shadow-glow transition-shadow duration-150 ease-in-out cursor-pointer'
              onClick={() => toggleModal(name, quantity, image, category, description, datasheet)}
            >
              <Image
                alt={'Image of ' + name}
                src={image}
                objectFit='contain'
                className='rounded-full'
              />
            </motion.div>
            <div className='mt-3 text-base md:text-lg'>
              <b>{name}</b> {quantity > 1 && ('(x' + quantity + ')')}
            </div>
          </div>
        )}
      </HardwareBox>
      <HardwareModal
        show={modalOpen}
        handler={toggleModal}
        image={selectedImage}
        name={selectedName}
        quantity={selectedQuantity}
        category={selectedCategory}
        description={selectedDescription}
        datasheet={selectedDatasheet}
      />
    </div>
  )
}