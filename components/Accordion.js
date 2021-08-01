import QuestionAnswer from "./QuestionAnswer";

import styles from '../styles/Accordion.module.css'

export default function Accordion() {
  return (
    <div className={styles.wrapper}>
      <QuestionAnswer
        question='What is a hackathon?'
        answer='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
      />
      <QuestionAnswer
        question='Where will I submit?'
        answer='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
      />
      <QuestionAnswer
        question='Can I use a project I&apos;ve aleady worked on?'
        answer='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
      />
    </div>
  )
}