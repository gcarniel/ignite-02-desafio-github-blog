import { formatDistance, subDays } from 'date-fns'
import { ptBR } from 'date-fns/locale'

export function formatDate(date: Date) {
  return formatDistance(new Date(date), new Date(), {
    addSuffix: true,
    locale: ptBR,
  })
}
