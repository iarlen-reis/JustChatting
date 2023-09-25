'use client'
import { socket } from '@/utils/socket'
import { SendIcon } from 'lucide-react'
import styles from './ChatForm.module.css'
import { useSession } from 'next-auth/react'
import { FormProvider, useForm } from 'react-hook-form'

interface IChatFormProps {
  id: string
}

interface IFormProps {
  text: string
}

const ChatForm = ({ id }: IChatFormProps) => {
  const { data: session } = useSession()
  const methods = useForm<IFormProps>()

  const handleSubmit = (data: IFormProps) => {
    if (!session?.user) {
      return null
    }

    if (!data.text.trim().length) {
      return
    }

    const message = {
      text: data.text,
      createdBy: session.user.email as string,
      groupId: id,
    }

    socket.emit('group-message', message)

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
        <button className={styles.chat__button}>
          <SendIcon color="white" size={28} />
        </button>
      </form>
    </FormProvider>
  )
}

export default ChatForm
