import socket from '@/utils/socket'

import { useEffect, useState } from 'react'

interface IMessageProps {
  creator: {
    id: string
    name: string
    email: string
    image: string
  }
  id: string
  text: string
  createdAt: string
}

interface IUseMessageGroup {
  messages: IMessageProps[]
}

export const useMessageGroup = (id: string): IUseMessageGroup => {
  const [messages, setMessages] = useState<IMessageProps[]>([])

  useEffect(() => {
    socket.connect()
    socket.emit('join-group', id)

    socket.on(id, (oldMessages: IMessageProps[]) => {
      setMessages(oldMessages)
    })

    socket.on('message', (newMessage: IMessageProps) => {
      setMessages((prevMessages) => [...prevMessages, newMessage])
    })

    return () => {
      socket.disconnect()
    }
  }, [id])

  return {
    messages,
  }
}
