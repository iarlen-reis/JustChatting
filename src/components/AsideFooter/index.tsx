'use client'
import Link from 'next/link'
import Image from 'next/image'
import { LogOutIcon } from 'lucide-react'
import GroupImage from '/public/group.jpg'
import styles from './AsideFooter.module.css'
import { useSession, signOut } from 'next-auth/react'

const AsideFooter = () => {
  const { data: session } = useSession()

  const handleLogout = () => {
    signOut()
  }

  if (!session?.user) {
    return null
  }

  return (
    <div className={styles.aside__footer}>
      <button onClick={handleLogout}>
        <LogOutIcon size={28} color="#fff" />
      </button>
      <Link href="/profile">
        <Image
          src={session.user.image ?? GroupImage}
          alt="profile"
          width={40}
          height={40}
        />
      </Link>
    </div>
  )
}

export default AsideFooter
