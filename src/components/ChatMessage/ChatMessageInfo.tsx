import React from 'react'
import styles from '@/components/ChatMessage/ChatMessage.module.css'
interface ChatMessageInfoProps {
  children: React.ReactNode
}
const ChatMessageInfo = ({ children }: ChatMessageInfoProps) => {
  return <div className={styles.message__info}>{children}</div>
}

export default ChatMessageInfo
