'use client'
import styles from './AsideGroups.module.css'
import { useGroups } from '@/hooks/useGroups'
import { ChatCard } from '@/components/ChatCard'
import ChatSkeleton from '@/components/ChatSkeleton'

const AsideGroups = () => {
  const { groups, loading } = useGroups()

  return (
    <div className={styles.aside__groups}>
      <span>Grupos</span>
      <ul className={styles.group__list}>
        {!loading ? (
          groups &&
          groups.map((group) => (
            <ChatCard.Root id={group.id} key={group.id}>
              <ChatCard.Image image={group.image} name={group.name} />
              <ChatCard.Content>
                <ChatCard.Name name={group.name} />
                <ChatCard.UpdatedAt updatedAt={group.updatedAt} />
              </ChatCard.Content>
            </ChatCard.Root>
          ))
        ) : (
          <>
            <ChatSkeleton />
            <ChatSkeleton />
            <ChatSkeleton />
          </>
        )}
      </ul>
    </div>
  )
}

export default AsideGroups
