import axios from 'axios'
import { useQuery } from 'react-query'

interface IUserProps {
  user: {
    id: string
    name: string
    email: string
  }
}
export const useUser = () => {
  const { data: user } = useQuery(['user'], async () => {
    const response = await axios.get<IUserProps>(
      'http://localhost:3000/api/auth/session',
    )

    return response.data
  })

  return {
    user,
  }
}
