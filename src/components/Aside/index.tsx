import styles from './Aside.module.css'
import AsideHeader from '@/components/AsideHeader'
import AsideGroups from '@/components/AsideGroups'
import AsideFooter from '@/components/AsideFooter'
import AsideDirects from '@/components/AsideDirects'

const Aside = () => {
  return (
    <aside className={styles.aside}>
      <AsideHeader />
      <AsideGroups />
      <AsideDirects />
      <AsideFooter />
    </aside>
  )
}

export default Aside
