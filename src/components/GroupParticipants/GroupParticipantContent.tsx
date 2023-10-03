import React from 'react'
import styles from './GroupParticipants.module.css'

interface GroupParticipantContentProps {
  children: React.ReactNode
}

const GroupParticipantContent = ({
  children,
}: GroupParticipantContentProps) => {
  return <div className={styles.participant__details}>{children}</div>
}

export default GroupParticipantContent
