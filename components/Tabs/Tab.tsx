export interface TabProps {
  label: string
  onClick(): unknown
  selected: boolean
}

export default function Tab({ label, onClick, selected }: TabProps) {
  return (
    <button
      className={`flex flex-col items-center rounded-full justify-between pt-4 md:justify-center md:pt-0 md:px-5 w-full h-14 md:h-12 font-bold ${
        selected
          ? 'text-white bg-primary-500'
          : 'text-gray-300 md:text-gray-400 bg-white hover:shadow-lg shadow-black'
      }`}
      onClick={() => onClick()}
    >
      {label}
      <div
        className={`w-full h-[3px] md:hidden ${
          selected ? 'bg-primary-500' : ''
        }`}
      />
    </button>
  )
}
