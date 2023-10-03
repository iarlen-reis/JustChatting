import React from 'react'

interface ChatMessageTextProps {
  text: string
}

const ChatMessageText = ({ text }: ChatMessageTextProps) => {
  return <p>{text}</p>
}

export default ChatMessageText
