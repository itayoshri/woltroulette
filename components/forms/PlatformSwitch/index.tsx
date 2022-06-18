import Link from 'next/link'
import { platform } from 'os'
import { useProvider } from '../../../contexts'
import { Platform, platforms } from '../../../contexts/types'
import ClickablePlatform from './Platform'

export default function PlatformSwitch() {
  const { platform: selectedPlatform } = useProvider()
  return (
    <div className="flex flex-col bg-white overflow-hidden border-2 border-gray-300 rounded-xl">
      <ClickablePlatform {...selectedPlatform} />
      {platforms
        .filter((platform) => selectedPlatform.symbol !== platform.symbol)
        .map((platform, index) => (
          <ClickablePlatform {...platform} key={index} />
        ))}
    </div>
  )
}
