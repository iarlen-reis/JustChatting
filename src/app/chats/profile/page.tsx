import Image from 'next/image'
import styles from './Profile.module.css'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/utils/authOptions'

const ProfilePage = async () => {
  const session = await getServerSession(authOptions)

  if (!session?.user?.image) {
    return null
  }

  return (
    <div className={styles.profile}>
      <Image
        src={session.user.image}
        alt={`imagem do usuário ${session.user.name}`}
        className={styles.profile__image}
        width={300}
        height={300}
      />
      <div className={styles.profile__details}>
        <h1>{session.user.name}</h1>
        <p>{session.user.email}</p>
      </div>
      {/* <ul className={styles.profile__stats}>
        <li>
          Grupos: <span>0</span>
        </li>
        <li>
          Contatos: <span>0</span>
        </li>
      </ul> */}
    </div>
  )
}

export default ProfilePage
