import React from 'react'
import { formateDateToDDMMYYYY } from '@/utils/formatDate'

interface ChatCardUpdatedAtProps {
  updatedAt: string
}

const ChatCardUpdatedAt = ({ updatedAt }: ChatCardUpdatedAtProps) => {
  return <p>{formateDateToDDMMYYYY(updatedAt)}</p>
}

export default ChatCardUpdatedAt
