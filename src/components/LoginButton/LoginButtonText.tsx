import React from 'react'

interface LoginButtonTextProps {
  text: string
}
const LoginButtonText = ({ text }: LoginButtonTextProps) => {
  return <>{text}</>
}

export default LoginButtonText
