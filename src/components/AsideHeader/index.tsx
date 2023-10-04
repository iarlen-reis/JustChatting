import Link from 'next/link'
import styles from './AsideHeader.module.css'
import { Contact, HomeIcon, PlusIcon } from 'lucide-react'

const AsideHeader = () => {
  return (
    <div className={styles.aside__header}>
      <Link href="/chats" className={styles.home__link}>
        <HomeIcon color="white" /> JustChatting
      </Link>
      <div className={styles.aside__actions}>
        <Link href="/chats/contact" className={styles.aside__link}>
          <Contact color="white" />
        </Link>
        <Link href="/chats/create" className={styles.aside__link}>
          <PlusIcon color="white" />
        </Link>
      </div>
    </div>
  )
}

export default AsideHeader
