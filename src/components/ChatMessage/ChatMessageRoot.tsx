import React from 'react'
import styles from '@/components/ChatMessage/ChatMessage.module.css'

interface ChatMessageRootProps {
  children: React.ReactNode
  type: 'self' | 'other'
}
const ChatMessageRoot = ({ children, type }: ChatMessageRootProps) => {
  const choiceStyled =
    type === 'self' ? styles.message__self : styles.message__other
  return (
    <li className={choiceStyled}>
      <div className={styles.message__details}>{children}</div>
    </li>
  )
}

export default ChatMessageRoot
