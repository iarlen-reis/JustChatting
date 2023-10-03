import React from 'react'
import styles from '@/components/ChatCard/ChatCard.module.css'

interface ChatCardContentProps {
  children: React.ReactNode
}
const ChatCardContent = ({ children }: ChatCardContentProps) => {
  return <div className={styles.group__details}>{children}</div>
}

export default ChatCardContent
