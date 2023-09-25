'use client'
import { signIn } from 'next-auth/react'
import { FcGoogle } from 'react-icons/fc'
import { VscGithub } from 'react-icons/vsc'
import styles from './LoginButton.module.css'
import { useUser } from '@/hooks/useUser'

const LoginButton = () => {
  const { user } = useUser()
  const loginWithGoogle = () => {
    signIn('google')
  }

  const loginWithGithub = () => {
    signIn('github')
  }

  console.log(user)

  return (
    <div className={styles.button__container}>
      <button onClick={loginWithGoogle} className={styles.login__button}>
        Faça login com Google <FcGoogle size={20} />
      </button>
      <span>ou</span>
      <button onClick={loginWithGithub} className={styles.login__button}>
        Faça login com Github <VscGithub size={20} />
      </button>
    </div>
  )
}

export default LoginButton
