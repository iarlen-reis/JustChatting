import React from 'react'

interface ChatCardContentProps {
  name: string
}
const ChatCardName = ({ name }: ChatCardContentProps) => {
  return <span>{name}</span>
}

export default ChatCardName
