'use client'

import styles from './AsideGroups.module.css'

import Group from '../Group'
import GroupImage from '/public/group.jpg'
import ChatSkeleton from '../ChatSkeleton'
import { useGroups } from '@/hooks/useGroups'

const AsideGroups = () => {
  const { groups, loading } = useGroups()

  return (
    <div className={styles.aside__groups}>
      <span>Grupos</span>
      <ul className={styles.group__list}>
        {!loading ? (
          groups.map((group) => (
            <Group
              id={group.id}
              name={group.name}
              image={GroupImage}
              updatedAt={group.updatedAt}
              key={group.id}
            />
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
