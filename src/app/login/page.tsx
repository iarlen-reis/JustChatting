'use client'
import Image from 'next/image'
import styles from './Login.module.css'
import { signIn } from 'next-auth/react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { FcGoogle } from 'react-icons/fc'
import { VscGithub } from 'react-icons/vsc'
import LoginImage from 'public/images/login.png'
import { LoginButton } from '@/components/LoginButton'
import LoginMobileImage from 'public/images/login-mobile.png'

const Login = () => {
  const handleLoginWithGoogle = () => {
    signIn('google')
  }

  const handleLoginWithGithub = () => {
    signIn('github')
  }
  return (
    <>
      <Header />
      <div className={styles.container}>
        <div className={styles.login}>
          <div className={styles.login__image}>
            <Image src={LoginImage} alt="login" width={300} height={300} />
          </div>
          <div className={styles.login__content}>
            <div className={styles.login__title}>
              <h1>JustChatting</h1>
              <p>Faça login e divirta-se com seus amigos!</p>
              <Image
                src={LoginMobileImage}
                alt="login mobile"
                width={150}
                height={150}
              />
            </div>
            <div className={styles.login__actions}>
              <LoginButton.Container>
                <LoginButton.Root
                  socialMethod="google"
                  onClick={handleLoginWithGoogle}
                >
                  <LoginButton.Content>
                    <LoginButton.Text text="Faça login com o Google" />
                    <LoginButton.Icon icon={FcGoogle} />
                  </LoginButton.Content>
                </LoginButton.Root>
                <LoginButton.Divisor text="ou" />
                <LoginButton.Root
                  socialMethod="github"
                  onClick={handleLoginWithGithub}
                >
                  <LoginButton.Content>
                    <LoginButton.Text text="Faça login com o GitHub" />
                    <LoginButton.Icon icon={VscGithub} />
                  </LoginButton.Content>
                </LoginButton.Root>
              </LoginButton.Container>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Login
