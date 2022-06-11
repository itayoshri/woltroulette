import { SkeletonLine } from '.'

export default function LoadingRestaurant() {
  return (
    <div className="w-full flex flex-col gap-3 bg-white shadow-lg shadow-black/30 pb-4 rounded-xl overflow-hidden animate-pulse">
      <p className="flex justify-center items-center w-full overflow-hidden">
        <SkeletonLine className="w-[calc(100vw-2rem)] h-48" />
      </p>
      <div className="flex flex-col px-4 gap-3">
        <div className="flex flex-col">
          <SkeletonLine className="h-8 w-20" />
        </div>
      </div>
    </div>
  )
}
