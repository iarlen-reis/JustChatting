'use client'
import Chat from '@/components/Chat'
import styles from './GroupPage.module.css'
import ChatForm from '@/components/ChatForm'
import ChatHeader from '@/components/ChatHeader'
import { useMessageGroup } from '@/hooks/useMessageGroup'
import { useSession } from 'next-auth/react'
import { useMembersGroup } from '@/hooks/useMembersGroup'
import { redirect } from 'next/navigation'
import { useEffect } from 'react'

interface GroupPageProps {
  params: {
    id: string
  }
}

const GroupPage = ({ params }: GroupPageProps) => {
  const { data: session } = useSession()
  const { group } = useMembersGroup(params.id)

  const email = session?.user?.email as string

  const isAllowed =
    group?.members.findIndex((member) => member.email === email) !== -1

  useEffect(() => {
    if (!isAllowed) {
      return redirect('/chats')
    }
  }, [isAllowed])

  return (
    <div className={styles.group__page}>
      <ChatHeader id={params.id} />
      <Chat hook={useMessageGroup} id={params.id} />
      <ChatForm id={params.id} />
    </div>
  )
}

export default GroupPage
