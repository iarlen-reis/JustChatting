'use client'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from './Header.module.css'
import { useSession } from 'next-auth/react'
import LogoImage from '/public/images/logo.png'

const Header = () => {
  const { data: session } = useSession()
  return (
    <header className={styles.header}>
      <div className={styles.header__container}>
        <Link
          href="/"
          className={styles.header__logo}
          aria-label="Link para página inicial."
        >
          <Image
            src={LogoImage}
            alt="Logo da aplicação JustChatting"
            width={130}
            height={20}
          />
        </Link>
        <ul className={styles.header__links}>
          {!session?.user?.email ? (
            <li>
              <Link href="/login">Login</Link>
            </li>
          ) : (
            <li>
              <Link href="/chats">Chats</Link>
            </li>
          )}
        </ul>
      </div>
    </header>
  )
}

export default Header
