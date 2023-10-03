import React from 'react'

interface GroupParticipantEmailProps {
  email: string
}
const GroupParticipantEmail = ({ email }: GroupParticipantEmailProps) => {
  return <span>{email}</span>
}

export default GroupParticipantEmail
