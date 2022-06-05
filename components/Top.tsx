import Logo from './Logo'
import { Wrapper } from './types'

export default function Top({ children }: Wrapper) {
  return (
    <div className="flex flex-col gap-4 py-2 w-full justify-center items-center m-0 border-b-[1px] border-gray-200 pb-4">
      <Logo className="w-10 right-6" />
      {children}
    </div>
  )
}
