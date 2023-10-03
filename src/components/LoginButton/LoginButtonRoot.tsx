import React, { ComponentProps } from 'react'
import styles from '@/components/LoginButton/LoginButton.module.css'

interface LoginButtonRootProps extends ComponentProps<'button'> {
  children: React.ReactNode
  socialMethod: 'google' | 'github'
}
const LoginButtonRoot = ({ children, ...props }: LoginButtonRootProps) => {
  const choiceStyled =
    props.socialMethod === 'google'
      ? styles.login__google
      : styles.login__github

  return (
    <button {...props} className={choiceStyled}>
      {children}
    </button>
  )
}

export default LoginButtonRoot
