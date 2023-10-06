'use client'
import Link from 'next/link'
import styles from './AsideHeader.module.css'
import { HomeIcon, Minimize2Icon, PenSquareIcon } from 'lucide-react'

interface IAsideHeaderProps {
  handleMenu: () => void
}

const AsideHeader = ({ handleMenu }: IAsideHeaderProps) => {
  return (
    <div className={styles.aside__header}>
      <Link href="/chats" className={styles.home__link}>
        <HomeIcon color="white" /> JustChatting
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
