import { ptBR } from 'date-fns/locale';
import { format } from 'date-fns';

export default function formatDateToBR(date: string): string {
  return format(new Date(date), 'dd MMM y', { locale: ptBR });
}
