import React from 'react'
import styles from './GroupParticipants.module.css'

interface GroupParticipantProps {
  children: React.ReactNode
}
const GroupParticipantRoot = ({ children }: GroupParticipantProps) => {
  return <li className={styles.participant}>{children}</li>
}

export default GroupParticipantRoot
