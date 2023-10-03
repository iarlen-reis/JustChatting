import React, { ElementType } from 'react'

interface LoginButtonIconProps {
  icon: ElementType
  iconSize?: number
}

const LoginButtonIcon = ({ icon: Icon, iconSize }: LoginButtonIconProps) => {
  return <Icon size={iconSize} />
}

export default LoginButtonIcon
