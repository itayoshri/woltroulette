import { useState } from 'react'
import Tab from './Tab'

export default function Tabs({ onChange }: { onChange(number: any): unknown }) {
  const [selected, setSelected] = useState(0)
  const changeSelected = (number: number) => {
    setSelected(number)
    onChange(number)
  }

  return (
    <div className="w-full justify-between flex h-11">
      <Tab
        label="פריט"
        onClick={() => changeSelected(0)}
        selected={selected == 0}
      />
      <Tab
        label="מסעדה"
        onClick={() => changeSelected(1)}
        selected={selected == 1}
      />
    </div>
  )
}
