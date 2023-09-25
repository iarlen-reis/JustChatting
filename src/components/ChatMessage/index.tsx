'use client'
import MessageSelf from '../MessageSelf'
import { useEffect, useRef } from 'react'
import { useSession } from 'next-auth/react'
import styles from './ChatMessage.module.css'
import MessageOther from '@/components/MessageOther'
import { useMessageGroup } from '@/hooks/useMessageGroup'

interface IChatMessage {
  id: string
}

const ChatMessage = ({ id }: IChatMessage) => {
  const { data: session } = useSession()
  const { messages } = useMessageGroup(id)

  const listRef = useRef<HTMLUListElement>(null)

  useEffect(() => {
    if (listRef.current) {
      listRef.current.scrollTop = listRef.current.scrollHeight
    }
  }, [messages])

  return (
    <ul className={styles.chat} ref={listRef}>
      {messages &&
        messages.map((message) => {
          return message.creator.email === session?.user?.email ? (
            <MessageSelf
              text={message.text}
              name={message.creator.name}
              image={message.creator.image}
              createdAt={message.createdAt}
              key={message.id}
            />
          ) : (
            <MessageOther
              text={message.text}
              name={message.creator.name}
              image={message.creator.image}
              createdAt={message.createdAt}
              key={message.id}
            />
          )
        })}
    </ul>
  )
}

export default ChatMessage
