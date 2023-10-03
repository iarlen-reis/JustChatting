import React from 'react'
import styles from '@/components/LoginButton/LoginButton.module.css'

interface LoginButtonContainerProps {
  children: React.ReactNode
}
const LoginButtonContainer = ({ children }: LoginButtonContainerProps) => {
  return <div className={styles.button__container}>{children}</div>
}

export default LoginButtonContainer
