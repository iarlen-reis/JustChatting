import socket from '@/utils/socket'
import { toast } from 'react-toastify'
import { useEffect, useState } from 'react'

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
  handleAddMember: (data: IMemberProps) => void
  handleRemoveMember: (data: IMemberProps) => void
}

export const useMembersGroup = (groupId: string): IUseMembersGroup => {
  const [group, setGroup] = useState<IGroupProps | null>(null)
  const [fetchingGroup, setFetchingGroup] = useState<boolean>(false)

  useEffect(() => {
    socket.connect()
    setFetchingGroup(true)

    socket.emit('members-group', groupId)

    socket.on('group', (group: IGroupProps) => {
      setGroup(group)
      setFetchingGroup(false)
    })

    socket.on('error', (error: string) => {
      toast.error(error)
    })

    return () => {
      socket.off('group')
      socket.off('error')
      socket.disconnect()
    }
  }, [groupId])

  const handleAddMember = (data: IMemberProps) => {
    socket.emit('add-member', {
      email: data.email,
      groupId: data.groupId,
    })
  }

  const handleRemoveMember = (data: IMemberProps) => {
    socket.emit('remove-member', {
      email: data.email,
      groupId: data.groupId,
    })
  }

  return {
    group,
    fetchingGroup,
    handleAddMember,
    handleRemoveMember,
  }
}
