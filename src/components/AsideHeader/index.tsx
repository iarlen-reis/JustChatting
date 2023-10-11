'use client'
import Link from 'next/link'
import Image from 'next/image'
import styles from './AsideHeader.module.css'
import LogoImage from '/public/images/logo.png'
import { Minimize2Icon, PenSquareIcon } from 'lucide-react'

interface IAsideHeaderProps {
  handleMenu: () => void
}

const AsideHeader = ({ handleMenu }: IAsideHeaderProps) => {
  return (
    <div className={styles.aside__header}>
      <Link href="/chats" className={styles.home__link}>
        <Image
          src={LogoImage}
          alt="Logo da aplicação JustChatting"
          width={120}
          height={20}
        />
      </Link>
      <div className={styles.aside__actions}>
        <Link
          href="/chats/create"
          className={styles.aside__link}
          title="criar grupo"
          aria-label="Criar um novo grupo"
        >
          <PenSquareIcon color="white" />
        </Link>
        <button
          onClick={handleMenu}
          title="Fechar"
          aria-label="Fechar menu lateral"
        >
          <Minimize2Icon color="white" />
        </button>
      </div>
    </div>
  )
}

export default AsideHeader
