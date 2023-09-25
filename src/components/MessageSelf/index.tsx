import Image from 'next/image'
import styles from './MessageSelf.module.css'

import React from 'react'
import { useSession } from 'next-auth/react'
import { formateDateToDDMMYYYY } from '@/utils/formatDate'

interface IMessageSelfProps {
  name: string
  text: string
  image: string
  createdAt: string
}

const MessageSelf = ({ name, text, image, createdAt }: IMessageSelfProps) => {
  const { data: session } = useSession()

  if (!session?.user) {
    return null
  }
  return (
    <li className={styles.message__self}>
      <div className={styles.message__details}>
        <div className={styles.message__info}>
          <div className={styles.message__header}>
            <span>{name}</span>
            <span>{formateDateToDDMMYYYY(createdAt)}</span>
          </div>
          <Image
            src={image}
            alt="profile"
            width={48}
            height={48}
            className={styles.message__image}
          />
        </div>
        <p>{text}</p>
      </div>
    </li>
  )
}

export default MessageSelf
