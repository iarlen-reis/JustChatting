'use client'
import Image from 'next/image'
import styles from './Details.module.css'
import { useMembersGroup } from '@/hooks/useMembersGroup'
import { GroupParticipant } from '@/components/GroupParticipants'
import { useSession } from 'next-auth/react'
import { useEffect } from 'react'
import { redirect } from 'next/navigation'

interface IParams {
  params: {
    id: string
  }
}

const Details = ({ params }: IParams) => {
  const { group, fetchingGroup } = useMembersGroup(params.id)
  const { data: session } = useSession()

  const email = session?.user?.email as string

  const isAllowed =
    group?.members.findIndex((member) => member.email === email) !== -1

  useEffect(() => {
    if (!isAllowed) {
      return redirect('/chats')
    }
  }, [isAllowed])

  return (
    <>
      {!fetchingGroup && (
        <div className={styles.details}>
          <>
            <div className={styles.details__image}>
              <Image
                src={group?.image as string}
                alt="imagem do grupo"
                width={300}
                height={300}
              />
            </div>
            <div className={styles.details__info}>
              <div className={styles.details__titles}>
                <h1>{group?.name}</h1>
                <p>
                  <span>{group?.createdBy}</span>
                </p>
              </div>
              {/* <div className={styles.details__description}>
                <h2>Descrição do grupo:</h2>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Voluptatem cupiditate odio laboriosam minus eaque dolorem
                  doloremque aperiam modi blanditiis, odit excepturi.
                </p>
              </div> */}
            </div>
            <div className={styles.details__members}>
              <h2>Membros do grupo: ({group?.members.length})</h2>
              <ul>
                {group?.members.map((member) => (
                  <GroupParticipant.Root key={member.id}>
                    <GroupParticipant.Image
                      image={member.image}
                      name={member.name}
                    />
                    <GroupParticipant.Content>
                      <GroupParticipant.Name name={member.name} />
                    </GroupParticipant.Content>
                  </GroupParticipant.Root>
                ))}
              </ul>
            </div>
          </>
        </div>
      )}
    </>
  )
}

export default Details
