import { useState } from 'react'
import Tab from './Tab'

export default function Tabs() {
  const [selected, setSelected] = useState(0)

  return (
    <div className="w-full justify-between flex h-11">
      <Tab
        label="פריט"
        onClick={() => setSelected(0)}
        selected={selected == 0}
      />
      <Tab
        label="מסעדה"
        onClick={() => setSelected(1)}
        selected={selected == 1}
      />
    </div>
  )
}
