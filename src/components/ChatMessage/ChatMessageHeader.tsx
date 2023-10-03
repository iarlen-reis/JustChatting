import React from 'react'
import styles from '@/components/ChatMessage/ChatMessage.module.css'

interface ChatMessageHeaderProps {
  children: React.ReactNode
}
const ChatMessageHeader = ({ children }: ChatMessageHeaderProps) => {
  return <div className={styles.message__header}>{children}</div>
}

export default ChatMessageHeader
