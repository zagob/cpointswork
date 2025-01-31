import { clsx, type ClassValue } from "clsx"
import { eachDayOfInterval, endOfMonth, startOfMonth } from "date-fns"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getAllDaysOfMonth(month: number, year: number) {
  const startDate = startOfMonth(new Date(year, month - 1, 1))
  const endDate = endOfMonth(new Date(year, month - 1, 1))

  const days = eachDayOfInterval({start: startDate, end: endDate})

  return days.map((day) => ({
    date: day.toLocaleDateString('pt-BR'),
  })).sort((a, b) => a.date.localeCompare(b.date))
}

export function getAllMonthsOfYear() {
  const months = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ];

  return months.map((month, index) => ({
    number: index + 1, // Número do mês (1 a 12)
    name: month, // Nome do mês
  }));
}