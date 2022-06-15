import { ReactNode } from 'react'

export default function Layout({
  className = '',
  children,
}: {
  className?: string
  children: ReactNode
}) {
  return (
    <div className="flex py-4 flex-col items-center h-full overflow-hidden max-h-screen absolute w-full">
      {children}
    </div>
  )
}
