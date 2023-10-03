import React from 'react'

interface ChatMessageNameProps {
  name: string
}
const ChatMessageName = ({ name }: ChatMessageNameProps) => {
  return <span>{name}</span>
}

export default ChatMessageName
