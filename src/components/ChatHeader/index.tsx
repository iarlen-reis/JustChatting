'use client'
import { BadgeInfoIcon, UserPlusIcon } from 'lucide-react'
import styles from './ChatHeader.module.css'
import Link from 'next/link'
import { useMembersGroup } from '@/hooks/useMembersGroup'

interface IChatHeaderProps {
  id: string
}

const ChatHeader = ({ id }: IChatHeaderProps) => {
  const { group } = useMembersGroup(id)
  return (
    <div className={styles.chat__header}>
      <h1 className={styles.chat__title}>{group?.name}</h1>
      <div className={styles.chat__actions}>
        <Link href={`/chats/details/${id}`}>
          <BadgeInfoIcon size={28} color="#fff" />
        </Link>
        <Link href={`/chats/members/${id}`}>
          <UserPlusIcon size={28} color="#fff" />
        </Link>
      </div>
    </div>
  )
}

export default ChatHeader
