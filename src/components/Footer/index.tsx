import React from 'react'
import styles from './Footer.module.css'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__container}>
        <div className={styles.footer__links}>
          <a href="#">Github</a>
          <a href="#">Github API</a>
        </div>
        <p className={styles.footer__copyright}>&copy; 2023 JustChatting</p>
      </div>
    </footer>
  )
}

export default Footer
