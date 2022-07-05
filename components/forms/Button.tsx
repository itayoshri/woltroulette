import { ReactNode } from 'react'
import { useProvider } from '../../contexts'

export interface ButtonProps {
  children: ReactNode
  onClick(): unknown
  className?: string
}

export default function Button({
  children,
  onClick,
  className = '',
}: ButtonProps) {
  const { platform } = useProvider()

  return (
    <button
      className={`flex w-fit font-bold items-center justify-center h-11 px-3 gap-6 text-white rounded-lg bg-primary-500
       ${className}`}
      onClick={() => onClick()}
    >
      {children}
    </button>
  )
}
