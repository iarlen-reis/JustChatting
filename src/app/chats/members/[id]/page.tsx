'use client'
import Link from 'next/link'
import { socket } from '@/utils/socket'
import { PlusIcon } from 'lucide-react'
import { useSession } from 'next-auth/react'
import styles from './MembersPage.module.css'
import { InputField } from '@/components/InputField'
import { FormProvider, useForm } from 'react-hook-form'
import { useMembersGroup } from '@/hooks/useMembersGroup'
import GroupParticipants from '@/components/GroupParticipants'

interface IMembersPageProps {
  params: {
    id: string
  }
}

interface IFormProps {
  email: string
}

const MembersPage = ({ params }: IMembersPageProps) => {
  const methods = useForm<IFormProps>()
  const { group, fetchingGroup } = useMembersGroup(params.id)
  const { data: session } = useSession()

  const handleAddMember = (data: IFormProps) => {
    socket.emit('add-member', {
      email: data.email,
      groupId: params.id,
    })

    methods.reset()
  }

  const handleRemoveMember = (email: string) => {
    const member = {
      email,
      groupId: params.id,
    }

    socket.emit('remove-member', member)
  }

  if (!group) {
    return
  }

  return (
    <div className={styles.members__page}>
      <ul className={styles.members__navigation}>
        <Link href={`/chats/group/${params.id}`}>{group.name}</Link>
        <li>&gt;</li>
        <li>Detalhes</li>
      </ul>
      {session?.user?.email === group.createdBy && (
        <div className={styles.members__content}>
          <h2>Adicionar um novo membro:</h2>
          <form
            onSubmit={methods.handleSubmit(handleAddMember)}
            className={styles.members__form}
          >
            <FormProvider {...methods}>
              <InputField
                label="E-mail:"
                name="email"
                placeholder="E-mail do membro"
                rules={{
                  required: 'E-mail é obrigatório',
                }}
              />
              <button type="submit">
                <PlusIcon size={20} color="#fff" />
                Adicionar
              </button>
            </FormProvider>
          </form>
        </div>
      )}
      <div className={styles.members__participants}>
        <h2>Membros do grupo</h2>
        <ul>
          {!fetchingGroup &&
            group.members.map((member) => (
              <GroupParticipants
                key={member.id}
                name={member.name}
                email={member.email}
                image={member.image}
                createdBy={group.createdBy}
                handleRemoveMember={handleRemoveMember}
              />
            ))}
        </ul>
      </div>
    </div>
  )
}

export default MembersPage
