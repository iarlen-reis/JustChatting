import Image from 'next/image'

import styles from './MessageOther.module.css'
import { formateDateToDDMMYYYY } from '@/utils/formatDate'

interface IMessageOtherProps {
  name: string
  text: string
  image: string
  createdAt: string
}

const MessageOther = ({ name, text, image, createdAt }: IMessageOtherProps) => {
  return (
    <li className={styles.message__other}>
      <div className={styles.message__details}>
        <div className={styles.message__info}>
          <Image
            src={image}
            alt="profile"
            width={48}
            height={48}
            className={styles.message__image}
          />
          <div className={styles.message__header}>
            <span>{name}</span>
            <span>{formateDateToDDMMYYYY(createdAt)}</span>
          </div>
        </div>
        <p>{text}</p>
      </div>
    </li>
  )
}

export default MessageOther
