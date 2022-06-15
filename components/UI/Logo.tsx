import Image from 'next/image'
import logo from '../../public/logo.png'

export interface IImageProps {
  className: string
}

export default function Logo({ className = '' }: IImageProps) {
  return (
    <p className={`${className} m-0 flex items-center justify-center`}>
      <Image src={logo} alt="logo" />
    </p>
  )
}
