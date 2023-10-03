import React from 'react'
import styles from '@/components/ChatMessage/ChatMessage.module.css'
import Image from 'next/image'

interface ChatMessageImageProps {
  image: string
  name: string
}
const ChatMessageImage = ({ image, name }: ChatMessageImageProps) => {
  return (
    <Image
      src={image}
      alt={`Imagem do perfil do usuário ${name}`}
      width={48}
      height={48}
      className={styles.message__image}
    />
  )
}

export default ChatMessageImage
