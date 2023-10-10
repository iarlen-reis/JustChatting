import { formatName } from '@/utils/formatName'
import React from 'react'

interface GroupParticipantNameProps {
  name: string
}

const GroupParticipantName = ({ name }: GroupParticipantNameProps) => {
  const formatedName = formatName(name)
  return <span>{formatedName}</span>
}

export default GroupParticipantName
