import styles from '@/components/ChatCard/ChatCard.module.css'
import Image from 'next/image'
import React from 'react'

interface ChatCardImageProps {
  image: string
  name: string
}
const ChatCardImage = ({ image, name }: ChatCardImageProps) => {
  return (
    <Image
      src={image}
      alt={name}
      width={50}
      height={50}
      className={styles.group__image}
    />
  )
}

export default ChatCardImage
