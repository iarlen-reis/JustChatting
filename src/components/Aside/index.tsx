import styles from './Aside.module.css'
import AsideHeader from '@/components/AsideHeader'
import AsideGroups from '@/components/AsideGroups'
import AsideFooter from '@/components/AsideFooter'

const Aside = () => {
  return (
    <aside className={styles.aside}>
      <AsideHeader />
      <AsideGroups />
      <AsideFooter />
    </aside>
  )
}

export default Aside
