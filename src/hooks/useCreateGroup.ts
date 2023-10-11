import { useState } from 'react'
import socket from '@/utils/socket'

interface IGroupProps {
  name: string
  image: string
  createdBy: string
}

interface IGroupResponse {
  loading: boolean
}

interface IUseCreateGroup {
  handleCreateGroup: (group: IGroupProps) => void
  loading: boolean
}

export const useCreateGroup = (): IUseCreateGroup => {
  const [loading, setLoading] = useState(false)

  const handleCreateGroup = (group: IGroupProps) => {
    setLoading(true)
    socket.emit('create-group', group)

    socket.on('create-group', ({ loading }: IGroupResponse) => {
      setLoading(loading)
    })
  }

  return {
    handleCreateGroup,
    loading,
  }
}
