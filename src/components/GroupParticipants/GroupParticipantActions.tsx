import React from 'react'
import styles from './GroupParticipants.module.css'

interface IGroupParticipantActionsProps {
  children: React.ReactNode
}

const GroupParticipantActions = ({
  children,
}: IGroupParticipantActionsProps) => {
  return <div className={styles.participant__actions}>{children}</div>
}

export default GroupParticipantActions
