import socket from '@/utils/socket'
import { useEffect, useState } from 'react'
import { useSession } from 'next-auth/react'

interface IGroupProps {
  id: string
  name: string
  updatedAt: string
  image: string
}

interface IUseGroups {
  groups: IGroupProps[]
  loading: boolean
}

export const useGroups = (): IUseGroups => {
  const { data: session } = useSession()
  const [groups, setGroups] = useState<IGroupProps[]>([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    if (!session?.user?.email) return

    socket.emit('groups', session.user.email)

    socket.on(session.user.email, (data: IGroupProps[]) => {
      setGroups(data)
      setLoading(false)
    })

    return () => {
      if (!session?.user?.email) return
      socket.off(session.user.email)
    }
  }, [session?.user?.email])

  return {
    groups,
    loading,
  }
}
