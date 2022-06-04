export interface TabProps {
  label: string
  onClick(): unknown
  selected: boolean
}

export default function Tab({ label, onClick, selected }: TabProps) {
  return (
    <button
      className={`flex flex-col items-center justify-between w-full h-11 font-bold before:bg-primary-500 ${
        selected ? 'text-primary-500' : ''
      }`}
      onClick={() => onClick()}
    >
      {label}
      <div className={`w-full h-[3px] ${selected ? 'bg-primary-500' : ''}`} />
    </button>
  )
}
