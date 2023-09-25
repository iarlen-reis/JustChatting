import { socket } from '@/utils/socket'
import { useSession } from 'next-auth/react'
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
  loading: boolean
}

export const useMessageGroup = (id: string): IUseMessageGroup => {
  const [messages, setMessages] = useState<IMessageProps[]>([])
  const [loading, setLoading] = useState(false)
  const { data: session } = useSession()

  useEffect(() => {
    socket.connect()
    socket.emit('join-group', id)
    setLoading(true)

    if (!session?.user?.email) return

    socket.emit('group-messages', session?.user?.email)

    socket.on(id, (newMessage: IMessageProps[]) => {
      setMessages(newMessage)
      setLoading(false)
    })

    return () => {
      socket.disconnect()
    }
  }, [id, session])

  return {
    messages,
    loading,
  }
}
