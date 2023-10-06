'use client'
import { MenuIcon } from 'lucide-react'
import { useSession } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import styles from './AsideMobile.module.css'

interface IAsideMobileProps {
  handleMenu: () => void
}

const AsideMobile = ({ handleMenu }: IAsideMobileProps) => {
  const { data: session } = useSession()

  if (!session?.user) {
    return null
  }
  return (
    <aside className={styles.aside__mobile}>
      <button className={styles.aside__mobile__button} onClick={handleMenu}>
        <MenuIcon color="white" />
      </button>
      {session.user.image && (
        <Link href="/chats/profile">
          <Image
            src={session.user.image}
            alt="profile"
            width={80}
            height={80}
          />
        </Link>
      )}
    </aside>
  )
}

export default AsideMobile
