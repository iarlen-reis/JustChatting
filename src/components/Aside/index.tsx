'use client'
import styles from './Aside.module.css'
import AsideHeader from '@/components/AsideHeader'
import AsideGroups from '@/components/AsideGroups'
import AsideFooter from '@/components/AsideFooter'
import AsideMobile from '@/components/AsideMobile'
import { useState } from 'react'

const Aside = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(true)

  const handleMenu = () => {
    setIsOpenMenu(!isOpenMenu)
  }
  return (
    <>
      {isOpenMenu ? (
        <AsideMobile handleMenu={handleMenu} />
      ) : (
        <aside className={`${styles.aside} ${styles.closed}`}>
          <AsideHeader handleMenu={handleMenu} />
          <AsideGroups />
          <AsideFooter />
        </aside>
      )}
    </>
  )
}

export default Aside
