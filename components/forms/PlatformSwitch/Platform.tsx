import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import { useProvider } from '../../../contexts'
import { Platform } from '../../../contexts/types'

export interface PlatformProps {
  symbol: Platform
  image: { color: StaticImageData; gray: StaticImageData }
  link: string
}

export default function ClickablePlatform({
  symbol,
  image,
  link,
}: PlatformProps) {
  const { platform, setPlatform } = useProvider()

  return (
    <Link href={link}>
      <button
        onClick={() => setPlatform({ symbol, image, link })}
        className="py-2 px-3 bg-white"
      >
        {platform.symbol === symbol ? (
          <Image src={image.color} alt={symbol} width={30} height={30} />
        ) : (
          <Image src={image.gray} alt={symbol} width={30} height={30} />
        )}
      </button>
    </Link>
  )
}
