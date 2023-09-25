import Link from 'next/link'
import styles from './AsideHeader.module.css'
import { HomeIcon, PlusIcon } from 'lucide-react'

const AsideHeader = () => {
  return (
    <div className={styles.aside__header}>
      <Link href="/chats" className={styles.home__link}>
        <HomeIcon color="white" /> JustChatting
      </Link>
      <Link href="/chats/create" className={styles.create__link}>
        <PlusIcon color="white" />
      </Link>
    </div>
  )
}

export default AsideHeader
