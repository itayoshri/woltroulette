import { ReactNode } from 'react'

export interface ButtonProps {
  children: ReactNode
  onClick(): unknown
}

export default function Button({ children, onClick }: ButtonProps) {
  return (
    <button
      className="flex w-fit font-bold items-center justify-center h-11 px-3 gap-6 text-white rounded-lg bg-primary-500"
      onClick={() => onClick()}
    >
      {children}
    </button>
  )
}
