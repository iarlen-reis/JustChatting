import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'

export const formateDateToDDMMYYYY = (date: string) => {
  return format(new Date(date), "d 'de' MMM, yyyy HH:mm", {
    locale: ptBR,
  })
}
