import { useState } from 'react'
import socket from '@/utils/socket'

interface IGroupProps {
  name: string
  image: string
  createdBy: string
}

interface IUseCreateGroup {
  handleCreateGroup: (group: IGroupProps) => void
  loading: boolean
}

export const useCreateGroup = (): IUseCreateGroup => {
  const [loading, setLoading] = useState(false)

  const handleCreateGroup = (group: IGroupProps) => {
    setLoading(true)
    setTimeout(() => {
      socket.emit('create-group', group)
      setLoading(false)
    }, 1000)
  }

  return {
    handleCreateGroup,
    loading,
  }
}
