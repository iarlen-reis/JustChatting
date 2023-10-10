'use client'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'
import { SessionProvider } from 'next-auth/react'

interface IProvidersProps {
  children: React.ReactNode
}

const Providers = ({ children }: IProvidersProps) => {
  return (
    <SessionProvider>
      {children}
      <ToastContainer />
    </SessionProvider>
  )
}

export default Providers
