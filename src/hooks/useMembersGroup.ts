import socket from '@/utils/socket'
import { toast } from 'react-toastify'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { useSession } from 'next-auth/react'

interface IGroupProps {
  name: string
  createdBy: string
  image: string
  members: {
    id: string
    name: string
    email: string
    image: string
  }[]
}

interface IMemberProps {
  email: string
  groupId: string
}

interface IUseMembersGroup {
  group: IGroupProps | null
  fetchingGroup: boolean
  addMemberLoading: boolean
  removerMemberLoading: boolean
  handleAddMember: (data: IMemberProps) => void
  handleRemoveMember: (data: IMemberProps) => void
}

interface IMemberResponseProps {
  error?: string
  warning?: string
  loading: boolean
}

export const useMembersGroup = (groupId: string): IUseMembersGroup => {
  const router = useRouter()
  const { data: session } = useSession()
  const [group, setGroup] = useState<IGroupProps | null>(null)
  const [fetchingGroup, setFetchingGroup] = useState<boolean>(false)
  const [addMemberLoading, setAddMemberLoading] = useState<boolean>(false)
  const [removerMemberLoading, setRemoverMemberLoading] =
    useState<boolean>(false)

  useEffect(() => {
    socket.connect()
    setFetchingGroup(true)

    socket.emit('members-group', groupId)

    socket.on('group', (group: IGroupProps) => {
      setGroup(group)
      setFetchingGroup(false)
    })

    socket.on('error', ({ error, loading }: IMemberResponseProps) => {
      setAddMemberLoading(loading)
      toast.error(error)
    })

    socket.on('warn', ({ warning, loading }: IMemberResponseProps) => {
      setAddMemberLoading(loading)
      toast.warn(warning)
    })

    return () => {
      socket.off('group')
      socket.off('error')
      socket.off('warn')
      socket.disconnect()
    }
  }, [groupId])

  const handleAddMember = (data: IMemberProps) => {
    setAddMemberLoading(true)
    socket.emit('add-member', {
      email: data.email,
      groupId: data.groupId,
    })

    socket.on('add-member', ({ loading }: IMemberResponseProps) => {
      setAddMemberLoading(loading)
    })
  }

  const handleRemoveMember = (data: IMemberProps) => {
    setRemoverMemberLoading(true)
    socket.emit('remove-member', {
      email: data.email,
      groupId: data.groupId,
    })

    socket.on('remove-member', ({ loading }: IMemberResponseProps) => {
      setRemoverMemberLoading(loading)

      if (session?.user?.email === data.email) {
        toast.success('Voce saiu do grupo.')
        router.push('/chats')
      }
    })
  }

  return {
    group,
    fetchingGroup,
    handleAddMember,
    handleRemoveMember,
    addMemberLoading,
    removerMemberLoading,
  }
}
