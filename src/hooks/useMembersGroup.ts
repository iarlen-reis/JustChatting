import { socket } from '@/utils/socket'
import { useEffect, useState } from 'react'

interface IGroupProps {
  name: string
  createdBy: string
  members: {
    id: string
    name: string
    email: string
    image: string
  }[]
}

interface IUseMembersGroup {
  group: IGroupProps | null
  fetchingGroup: boolean
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

    return () => {
      socket.disconnect()
    }
  }, [groupId])

  return {
    group,
    fetchingGroup,
  }
}
