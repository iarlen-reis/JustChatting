'use client'
import { FormProvider, useForm } from 'react-hook-form'
import styles from './CreateGroup.module.css'
import { InputField } from '@/components/InputField'
import { useSession } from 'next-auth/react'
import { ChangeEvent, useState, useRef } from 'react'
import Image from 'next/image'
import GroupImage from '/public/images/default-group.png'
import { useCreateGroup } from '@/hooks/useCreateGroup'
import { toast } from 'react-toastify'

interface IFormProps {
  name: string
  image: string
}

const CreateGroup = () => {
  const methods = useForm<IFormProps>()
  const { data: session } = useSession()
  const [selectedImage, setSelectedImage] = useState<string>('')
  const { handleCreateGroup, loading } = useCreateGroup()
  const imageRef = useRef<HTMLInputElement | null>(null)

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]

    if (file) {
      const reader = new FileReader()

      reader.onload = (event) => {
        setSelectedImage(event.target?.result as string)
      }

      reader.readAsDataURL(file)
    }
  }

  const handleCreate = (data: IFormProps) => {
    if (!session?.user?.email) return

    if (!selectedImage) {
      return toast.error('Selecione uma imagem')
    }

    handleCreateGroup({
      name: data.name,
      image: selectedImage,
      createdBy: session.user.email,
    })

    methods.reset()
    setSelectedImage('')
  }

  return (
    <div className={styles.page}>
      <div className={styles.new__group}>
        <h1>Criar novo grupo</h1>
        <FormProvider {...methods}>
          <form
            onSubmit={methods.handleSubmit(handleCreate)}
            className={styles.form}
          >
            <div className={styles.preview__image}>
              <Image
                src={selectedImage || GroupImage}
                alt="group"
                width={400}
                height={400}
                onClick={() => {
                  imageRef.current?.click()
                }}
              />
            </div>
            <div className={styles.form__inputs}>
              <input
                className={styles.form__input__image}
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                ref={imageRef}
              />
              <InputField
                name="name"
                label="Nome do grupo:"
                placeholder="Nome do grupo"
                className={styles.form__input__name}
                rules={{ required: 'Campo obrigatório.' }}
              />
            </div>
            <button
              type="submit"
              className={styles.form__button}
              disabled={loading}
            >
              {!loading ? 'Criar grupo' : 'Criando...'}
            </button>
          </form>
        </FormProvider>
      </div>
    </div>
  )
}

export default CreateGroup
