import { useSession } from 'next-auth/react'
import React, { ComponentProps, ElementType } from 'react'

interface IGroupParticipantActionProps extends ComponentProps<'button'> {
  handleRemoveMember: (email: string) => void
  icon: ElementType
  colorIcon?: string
  sizeIcon?: number
  email: string
}
const GroupParticipantAction = ({
  handleRemoveMember,
  icon: Icon,
  colorIcon = '#fff',
  sizeIcon = 20,
  email,
  ...props
}: IGroupParticipantActionProps) => {
  const { data: session } = useSession()

  if (!session?.user) {
    return null
  }

  const handleDelete = () => {
    handleRemoveMember(email)
  }

  return (
    <>
      <button onClick={handleDelete} {...props}>
        <Icon size={sizeIcon} color={colorIcon} />
      </button>
    </>
  )
}

export default GroupParticipantAction
