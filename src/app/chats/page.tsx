'use client'
import Image from 'next/image'
import styles from './Chats.module.css'
import TalkingImage from '/public/images/talking.png'

const Chats = () => {
  return (
    <div className={styles.chat__container}>
      <div className={styles.chat__description}>
        <h1>JustChatting</h1>
        <p>Convoque seus amigos e façam parte de grupos incriveis!</p>
      </div>
      <div className={styles.chat__image}>
        <Image src={TalkingImage} alt="talking" width={500} height={500} />
      </div>
    </div>
  )
}

export default Chats
