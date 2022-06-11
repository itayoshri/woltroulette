export interface SkeletonLineProps {
  className: string
}

export function SkeletonLine({ className = '' }: SkeletonLineProps) {
  return <div className={`bg-gray-300 ${className}`} />
}
