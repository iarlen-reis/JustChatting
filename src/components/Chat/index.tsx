'use client'
import styles from './Chat.module.css'
import { useEffect, useRef } from 'react'
import { useSession } from 'next-auth/react'
import { ChatMessage } from '../ChatMessage'

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

interface IChat {
  id: string
  hook: (id: string) => IUseMessageGroup
}

const Chat = ({ hook, id }: IChat) => {
  const { data: session } = useSession()

  const { messages } = hook(id)

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
            <ChatMessage.Root type="self" key={message.id}>
              <ChatMessage.Info>
                <ChatMessage.Header>
                  <ChatMessage.Name name={message.creator.name} />
                  <ChatMessage.CreatedAt createdAt={message.createdAt} />
                </ChatMessage.Header>
                <ChatMessage.Image
                  image={message.creator.image}
                  name={message.creator.name}
                />
              </ChatMessage.Info>
              <ChatMessage.Text text={message.text} />
            </ChatMessage.Root>
          ) : (
            <ChatMessage.Root type="other" key={message.id}>
              <ChatMessage.Info>
                <ChatMessage.Image
                  image={message.creator.image}
                  name={message.creator.name}
                />
                <ChatMessage.Header>
                  <ChatMessage.Name name={message.creator.name} />
                  <ChatMessage.CreatedAt createdAt={message.createdAt} />
                </ChatMessage.Header>
              </ChatMessage.Info>
              <ChatMessage.Text text={message.text} />
            </ChatMessage.Root>
          )
        })}
    </ul>
  )
}

export default Chat
