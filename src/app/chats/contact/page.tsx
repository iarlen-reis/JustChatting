'use client'
import { FormProvider, useForm } from 'react-hook-form'
import styles from './Contact.module.css'
import ContactImage from '/public/images/contact.png'
import { InputField } from '@/components/InputField'
import Image from 'next/image'
import { useSession } from 'next-auth/react'
import socket from '@/utils/socket'

interface IFormProps {
  email: string
}

const ContactPage = () => {
  const methods = useForm<IFormProps>()
  const { data: session } = useSession()

  const handleAddContact = (data: IFormProps) => {
    if (!session?.user?.email || !data.email.trim().length) return

    const createContact = {
      email: data.email,
      createdBy: session.user.email,
    }

    socket.emit('add-contact', createContact)
  }
  return (
    <div className={styles.contact}>
      <div className={styles.contact__header}>
        <h1 className={styles.contact__title}>Adicionar novo contato</h1>
        <Image
          src={ContactImage}
          alt="contact"
          width={300}
          height={300}
          className={styles.contact__image}
        />
      </div>
      <form
        className={styles.contact__form}
        onSubmit={methods.handleSubmit(handleAddContact)}
      >
        <FormProvider {...methods}>
          <InputField
            name="email"
            label="E-mail do contato:"
            placeholder="E-mail do contato"
          />
          <button type="submit" disabled>
            Adicionar
          </button>
        </FormProvider>
      </form>
    </div>
  )
}

export default ContactPage
