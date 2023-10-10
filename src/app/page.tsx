import Image from 'next/image'
import styles from './page.module.css'
import HeaderFooter from '@/components/HeaderFooter'
import HomeChatImage from '/public/images/talking-home.png'
import Link from 'next/link'

export default function Home() {
  return (
    <HeaderFooter>
      <div className={styles.home}>
        <section className={styles.home__content}>
          <div className={styles.home__description}>
            <h1>Junte seus amigos e formem grupos incriveis!</h1>
            <div className={styles.home__extra__info}>
              <p>Convide amigos</p>
              <p>Divirta-se</p>
            </div>
          </div>
          <div className={styles.home__details}>
            <div className={styles.home__image}>
              <Image
                src={HomeChatImage}
                alt="imagem de um chat de grupo"
                width={800}
                height={800}
              />
            </div>
            <div className={styles.home__info}>
              <div className={styles.home__apresentation}>
                <h2>Facilidade e simplicidade</h2>
                <p>
                  Você está pronto para uma experiência de chat como nunca
                  antes? O <span>JustChatting</span> é a sua plataforma
                  definitiva para criar grupos de conversa e se conectar com
                  amigos de forma rápida e fácil.
                </p>
              </div>
              <ul className={styles.home__features}>
                <li>- Crie Grupos Personalizados.</li>
                <li>- Convite Simples.</li>
                <li>- Privacidade e Segurança.</li>
              </ul>
              <div className={styles.home__extra__apresentation}>
                <h2>Comece agora!</h2>
                <p>
                  Junte-se a nós hoje mesmo e comece a criar grupos e a
                  conversar com amigos de forma mais prática do que nunca.
                </p>
                <Link href="/login">Criar conta</Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </HeaderFooter>
  )
}
