import React from 'react'

interface GroupParticipantNameProps {
  name: string
}

const GroupParticipantName = ({ name }: GroupParticipantNameProps) => {
  return <span>{name}</span>
}

export default GroupParticipantName
