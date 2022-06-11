export interface ResultsProps {
  results: string[]
  onClick(index): unknown
}

export default function Results({ results, onClick }: ResultsProps) {
  return (
    <div className="w-full relative">
      {results.map((result, index) => (
        <button key={index} onClick={() => onClick(index)}>
          {result}
        </button>
      ))}
    </div>
  )
}
