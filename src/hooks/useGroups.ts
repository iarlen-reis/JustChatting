import { socket } from '@/utils/socket'
import { useSession } from 'next-auth/react'
import { useEffect, useState } from 'react'

interface IGroupProps {
  id: string
  name: string
  updatedAt: string
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
    socket.connect()
    setLoading(true)

    if (!session?.user?.email) return

    socket.emit('groups', session?.user?.email)

    socket.on('user-groups', (data: IGroupProps[]) => {
      console.log(data)
      setGroups(data)
      setLoading(false)
    })

    return () => {
      socket.disconnect()
    }
  }, [session?.user?.email])

  return {
    groups,
    loading,
  }
}
