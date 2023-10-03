import React from 'react'
import Image from 'next/image'
import styles from './GroupParticipants.module.css'
interface GroupParticipantImageProps {
  image: string
  name: string
}
const GroupParticipantImage = ({ image, name }: GroupParticipantImageProps) => {
  return (
    <Image
      src={image}
      alt={name}
      width={48}
      height={48}
      className={styles.participant__image}
    />
  )
}

export default GroupParticipantImage
