'use client'
import Link from 'next/link'
import { PlusIcon, TrashIcon } from 'lucide-react'
import { useSession } from 'next-auth/react'
import styles from './MembersPage.module.css'
import { InputField } from '@/components/InputField'
import { FormProvider, useForm } from 'react-hook-form'
import { useMembersGroup } from '@/hooks/useMembersGroup'
import { GroupParticipant } from '@/components/GroupParticipants'

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
  const { data: session } = useSession()
  const { group, fetchingGroup, handleAddMember, handleRemoveMember } =
    useMembersGroup(params.id)

  const handleSubmit = (data: IFormProps) => {
    handleAddMember({ ...data, groupId: params.id })

    methods.reset()
  }

  const handleRemove = (email: string) => {
    handleRemoveMember({ email, groupId: params.id })
  }

  return (
    <div className={styles.members__page}>
      <ul className={styles.members__navigation}>
        <Link href={`/chats/group/${params.id}`}>{group?.name}</Link>
        <li>&gt;</li>
        <li>Detalhes</li>
      </ul>
      {group && session?.user?.email === group.createdBy && (
        <div className={styles.members__content}>
          <h2>Adicionar um novo membro:</h2>
          <form
            onSubmit={methods.handleSubmit(handleSubmit)}
            className={styles.members__form}
          >
            <FormProvider {...methods}>
              <InputField
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
            group &&
            group.members.map((member) => (
              <GroupParticipant.Root key={member.id}>
                <GroupParticipant.Image
                  image={member.image}
                  name={member.name}
                />
                <GroupParticipant.Content>
                  <GroupParticipant.Name name={member.name} />
                  <GroupParticipant.Email email={member.email} />
                </GroupParticipant.Content>
                <GroupParticipant.Actions>
                  <GroupParticipant.ActionConditional
                    email={member.email}
                    createdBy={group.createdBy}
                  >
                    <GroupParticipant.Action
                      icon={TrashIcon}
                      colorIcon="#f00"
                      email={member.email}
                      handleRemoveMember={handleRemove}
                    />
                  </GroupParticipant.ActionConditional>
                </GroupParticipant.Actions>
              </GroupParticipant.Root>
            ))}
        </ul>
      </div>
    </div>
  )
}

export default MembersPage
