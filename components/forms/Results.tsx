export interface IPlaceResult {
  placeId: string
  place: string
}

export interface ResultsProps {
  results: IPlaceResult[]
  onClick(index): unknown
}

export default function Results({ results, onClick }: ResultsProps) {
  return (
    <div className="flex flex-col w-full bg-white shadow-xl shadow-black/20 border-gray-300 border-2 overflow-hidden rounded-xl absolute top-14">
      {results.map((result, index) => (
        <button
          key={index}
          onClick={() => onClick(index)}
          className="w-full py-1 text-right px-3"
        >
          {result.place}
        </button>
      ))}
    </div>
  )
}
