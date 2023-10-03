import { useSession } from 'next-auth/react'
import React from 'react'

interface GroupParticipantActionConditionalProps {
  email: string
  createdBy: string
  children: React.ReactNode
}
const GroupParticipantActionConditional = ({
  email,
  createdBy,
  children,
}: GroupParticipantActionConditionalProps) => {
  const { data: session } = useSession()

  if (!session?.user) {
    return null
  }

  return (
    <>
      {(session.user.email === createdBy || session.user.email === email) &&
        children}
    </>
  )
}

export default GroupParticipantActionConditional
