import styles from './Login.module.css'
import LoginButton from '@/components/LoginButton'

const Login = () => {
  return (
    <div className={styles.container}>
      <div className={styles.login}>
        <div className={styles.login__image}></div>
        <div className={styles.login__content}>
          <div className={styles.login__title}>
            <h1>JustChatting</h1>
            <p>Faça login e divirta-se com seus amigos!</p>
          </div>
          <LoginButton />
        </div>
      </div>
    </div>
  )
}

export default Login
