import Link from 'next/link'
import { usePathname } from 'next/navigation'
import styles from '@/components/ChatCard/ChatCard.module.css'
import React from 'react'

interface ChatCardRootProps {
  id: string
  children: React.ReactNode
}
const ChatCardRoot = ({ id, children }: ChatCardRootProps) => {
  const pathname = usePathname()
  const isActiveRouter = pathname.includes(id)

  return (
    <li>
      <Link
        href={`/chats/group/${id}`}
        className={`${styles.group} ${isActiveRouter ? styles.active : ''}`}
      >
        {children}
      </Link>
    </li>
  )
}

export default ChatCardRoot
