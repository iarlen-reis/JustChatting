'use client'
import socket from '@/utils/socket'
import { SendIcon } from 'lucide-react'
import styles from './ChatForm.module.css'
import { useSession } from 'next-auth/react'
import { FormProvider, useForm } from 'react-hook-form'
import { useState } from 'react'

interface IChatFormProps {
  id: string
}

interface IFormProps {
  text: string
}

interface IMessageResponseProps {
  loading: boolean
}

const ChatForm = ({ id }: IChatFormProps) => {
  const { data: session } = useSession()
  const methods = useForm<IFormProps>()
  const [sendMessageLoading, setSendMessageLoading] = useState<boolean>(false)

  const handleSubmit = (data: IFormProps) => {
    setSendMessageLoading(true)
    if (!session?.user || !data.text.trim().length) {
      return null
    }

    const message = {
      text: data.text,
      createdBy: session.user.email as string,
      groupId: id,
    }

    socket.emit('message', message)

    socket.on('send-message-loading', ({ loading }: IMessageResponseProps) => {
      setSendMessageLoading(loading)
    })

    methods.reset()
  }

  return (
    <FormProvider {...methods}>
      <form
        className={styles.chat__form}
        onSubmit={methods.handleSubmit(handleSubmit)}
      >
        <input
          type="text"
          className={styles.chat__input}
          placeholder="Digite sua mensagem"
          {...methods.register('text', {
            required: true,
          })}
        />
        <button className={styles.chat__button} disabled={sendMessageLoading}>
          <SendIcon color="white" size={28} />
        </button>
      </form>
    </FormProvider>
  )
}

export default ChatForm
