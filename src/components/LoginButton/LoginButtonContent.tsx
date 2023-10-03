import React from 'react'

interface LoginButtonContentProps {
  children: React.ReactNode
}
const LoginButtonContent = ({ children }: LoginButtonContentProps) => {
  return <>{children}</>
}

export default LoginButtonContent
