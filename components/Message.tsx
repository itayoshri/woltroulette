export const ADD_LOCATION = 'בחרו מיקום ונסו שוב'

export interface MessageProps {
  message: string
}

export default function Message({ message }: MessageProps) {
  return (
    <div className="w-fit px-4 rounded-lg py-2 absolute top-10 h-fit border-[1px] text-red-500 border-red-500 bg-white z-40 animate-[messageIn_0.7s_ease]">
      {message}
    </div>
  )
}
