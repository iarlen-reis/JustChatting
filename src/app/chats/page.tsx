import Image from 'next/image'
import styles from './Chats.module.css'
import axios from 'axios'
import { getServerSession } from 'next-auth'
import TalkingImage from '/public/images/talking.png'
import { authOptions } from '@/utils/authOptions'

const Chats = async () => {
  const session = await getServerSession(authOptions)

  await axios.post(
    'https://justchatting-back-end-production.up.railway.app/users',
    {
      email: session?.user?.email,
      name: session?.user?.name,
      image: session?.user?.image,
    },
  )

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
