import React from 'react'
import { formateDateToDDMMYYYY } from '@/utils/formatDate'

interface ChatMessageCreatedAtProps {
  createdAt: string
}
const ChatMessageCreatedAt = ({ createdAt }: ChatMessageCreatedAtProps) => {
  return <span>{formateDateToDDMMYYYY(createdAt)}</span>
}

export default ChatMessageCreatedAt
