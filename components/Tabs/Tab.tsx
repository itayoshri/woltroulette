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
          ? 'md:text-white text-primary-500 md:bg-primary-500'
          : 'text-gray-300 md:text-gray-400 bg-white md:hover:shadow-lg md:shadow-black'
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
