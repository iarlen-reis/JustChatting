import React, { ComponentProps } from 'react'
import styles from '@/components/LoginButton/LoginButton.module.css'

interface LoginButtonRootProps extends ComponentProps<'button'> {
  children: React.ReactNode
  socialMethod: 'google' | 'github'
  onClick: () => void
}
const LoginButtonRoot = ({
  children,
  onClick,
  socialMethod,
  ...props
}: LoginButtonRootProps) => {
  const choiceStyled =
    socialMethod === 'google' ? styles.login__google : styles.login__github

  return (
    <button {...props} onClick={onClick} className={choiceStyled}>
      {children}
    </button>
  )
}

export default LoginButtonRoot
