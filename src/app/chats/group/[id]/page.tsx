import styles from './GroupPage.module.css'
import ChatForm from '@/components/ChatForm'
import ChatHeader from '@/components/ChatHeader'
import ChatMessage from '@/components/ChatMessage'
import axios from 'axios'

interface GroupPageProps {
  params: {
    id: string
  }
}

interface IGroupProps {
  group: {
    id: string
    name: string
  }
}

const GroupPage = async ({ params }: GroupPageProps) => {
  const response = await axios.get<IGroupProps>(
    `http://localhost:3333/group/${params.id}`,
  )

  const group = response.data.group

  return (
    <div className={styles.group__page}>
      <ChatHeader name={group.name} id={group.id} />
      <ChatMessage id={params.id} />
      <ChatForm id={params.id} />
    </div>
  )
}

export default GroupPage
