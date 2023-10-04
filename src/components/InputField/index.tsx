import styles from './InputField.module.css'

import { InputHTMLAttributes } from 'react'
import { useController, useFormContext } from 'react-hook-form'

interface IInputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string
  type?: string
  label?: string
  rules?: object
  defaultValues?: string
}

export const InputField = ({
  name,
  type,
  rules,
  label,
  defaultValues,
  ...rest
}: IInputFieldProps) => {
  const { control } = useFormContext()

  const {
    field: { ref, ...inputProps },
    fieldState: { error },
  } = useController({
    name,
    control,
    rules,
    defaultValue: defaultValues || '',
  })

  return (
    <fieldset className={styles.input__fieldset}>
      <label className={styles.input__label}>{label}</label>
      <input
        type={type}
        className={styles.input}
        ref={ref}
        {...inputProps}
        {...rest}
      />
      {error && <small className={styles.input__error}>{error.message}</small>}
    </fieldset>
  )
}
