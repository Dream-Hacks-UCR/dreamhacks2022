import React, { useState } from 'react'
import { motion } from 'framer-motion'
import QuestionAnswer from "./QuestionAnswer"

import styles from '../styles/Accordion.module.css'

export default function FaqAccordion() {
  const [selected, setSelected] = useState('General')

  const general = [
    {
      question: 'What is a hackathon?',
      answer: 'A hackathon is an event where individuals or a group of individuals are challenged to turn their creative ideas into actual working creations in a limited time frame. At the end of the time frame, contestants demo their creations to judges in order to win prizes.'
    },
    {
      question: 'How does a "hardware hackathon" work?',
      answer: 'A "hardware hackathon" works like any other hackathon, except whatever project that will be made and submitted must include a hardware component.'
    },
    {
      question: 'What if I have no experience with hardware?',
      answer: 'That\'s perfectly alright, and you won\'t be alone! During the hackathon, we\'ll provide you with the resources you need to get started. There will also be mentors who will help you along the way.'
    },
    {
      question: 'How do I apply?',
      answer: 'You can apply right on this website! You will first need to sign in with just your email (no password required). You will then need to fill out a check-in form to apply. Applications are reviewed on a rolling basis, so you will be notified about your application status within 24 hours through this website and via email. Applications will be available starting mid-December, and they will close mid-March.'
    },
    {
      question: 'Does this event cost money?',
      answer: 'This event does not cost any money! However if you will be traveling from out of state, we unfortunately will not be able to reimburse travel costs.'
    },
    {
      question: 'Where do I sleep?',
      answer: 'Wherever you can! We unfortunately will not be providing rooms where you can sleep, so please help yourself in finding a comfortable corner to sleep at.'
    },
  ]

  const participation = [
    {
      question: 'Who can participate?',
      answer: 'Lotus Hacks is open to university and high school students in the United States.'
    },
    {
      question: 'What will I need to participate?',
      answer: 'You will need a laptop, stuff you would bring to a sleepover (e.g. pillow, blanket, toothbrush, etc.), and an ID. We also encourage you to create teams of up to 4 people. If you\'re unable to form a team before the start date, we\'ll help group you up with other hackers.'
    },
    {
      question: 'If I\'m residing outside of the U.S., can I still participate?',
      answer: 'Unfortunately due to COVID-19 restrictions, we will only be taking applications from those qualified in the United States.'
    },
    {
      question: 'Will I be able to form teams?',
      answer: 'Yes, you will be able to form teams up to 4 people. If you need help forming a team, contact us at lotushacksucr@gmail.com.'
    },
    {
      question: 'What if I don\'t have a team?',
      answer: 'If you\'re unable to form a team, contact us beforehand at lotushacksucr@gmail.com and we will help group you up with other hackers. Otherwise, we\'ll help group you into a team on the day of.'
    },
    {
      question: 'How many people can be in my team?',
      answer: 'You can have a maximum of 4 people on your team, including yourself.'
    },
  ]

  const projects = [
    {
      question: 'Can I use a project I\'ve aleady worked on?',
      answer: 'No, you will need to start working on an entirely new project within the given time frame. Projects that have been started before the start time or have been submitted to other hackathons will be disqualified.'
    },
    {
      question: 'What if I don\'t have an idea on what to make?',
      answer: 'That\'s alright! On the day of, we\'ll provide you with resources to get started with and there will be workshops to get inspiration from. You will also be working with a team, so coming up with an idea will be easier.'
    },
    {
      question: 'Do I have to make a project?',
      answer: 'Yes, since due to COVID-19 restrictioons, we will only be accepting applicants who intend to create a project.'
    },
    {
      question: 'What can I build?',
      answer: 'You can build anything you want as long as it\'s a unique creation and includes a hardware component!'
    },
    {
      question: 'What resources are there to help me build a project?',
      answer: 'We will provide the hardware kits listed in the previous section at the venue on the day of. We will also have mentors who can help you get started and workshops where you can get ideas from.'
    },
    {
      question: 'How do I submit?',
      answer: 'Since this will be an in-person event, you will have the opportunity to demo your projects to judges. So, you will be able to submit your project by the end of the time frame at the venue.'
    },
  ]

  return (
    <div className={styles.wrapper}>
      <div className={styles.selectButtons}>
        <motion.button
          alt='General questions category'
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.995 }}
          className={
            selected === 'General' 
              ? `${styles.selected} ${styles.button}` 
              : `${styles.button}`
          }
          onClick={() => setSelected('General')}
        >
          General
        </motion.button>
        <motion.button
          alt='Participation questions category'
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.995 }}
          className={
            selected === 'Participation' 
              ? `${styles.selected} ${styles.button}` 
              : `${styles.button}`
          }
          onClick={() => setSelected('Participation')}
        >
          Participation
        </motion.button>
        <motion.button
          alt='Projects questions category'
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.995 }}
          className={
            selected === 'Projects' 
              ? `${styles.selected} ${styles.button}` 
              : `${styles.button}`
          }
          onClick={() => setSelected('Projects')}
        >
          Projects
        </motion.button>
      </div>
      { selected === 'General' && general.map(({ question, answer }) =>
        <QuestionAnswer
          question={question}
          answer={answer}
        />
      )}
      { selected === 'Participation' && participation.map(({ question, answer }) =>
        <QuestionAnswer
          question={question}
          answer={answer}
        />
      )}
      { selected === 'Projects' && projects.map(({ question, answer }) =>
        <QuestionAnswer
          question={question}
          answer={answer}
        />
      )}
    </div>
  )
}