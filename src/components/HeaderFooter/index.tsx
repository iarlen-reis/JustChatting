import React from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

interface HeaderFooter {
  children: React.ReactNode
}

const HeaderFooter = ({ children }: HeaderFooter) => {
  return (
    <React.Fragment>
      <Header />
      {children}
      <Footer />
    </React.Fragment>
  )
}

export default HeaderFooter
