import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from './Header.module.css'
import LogoImage from '/public/images/logo.png'

const Header = () => {
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
      </div>
    </header>
  )
}

export default Header
