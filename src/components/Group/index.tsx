'use client'
import Link from 'next/link'
import styles from './Group.module.css'
import { usePathname } from 'next/navigation'
import Image, { StaticImageData } from 'next/image'
import { formateDateToDDMMYYYY } from '@/utils/formatDate'

interface IGroupProps {
  id: string
  image: StaticImageData
  name: string
  updatedAt: string
}
const Group = ({ id, image, name, updatedAt }: IGroupProps) => {
  const pathname = usePathname()
  const isActiveRouter = pathname.includes(id)
  return (
    <li>
      <Link
        href={`/chats/group/${id}`}
        className={`${styles.group} ${isActiveRouter ? styles.active : ''}`}
      >
        <Image
          src={image}
          alt={name}
          width={48}
          height={48}
          className={styles.group__image}
        />
        <div className={styles.group__details}>
          <span>{name}</span>
          <p>{formateDateToDDMMYYYY(updatedAt)}</p>
        </div>
      </Link>
    </li>
  )
}

export default Group
