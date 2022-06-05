import RestaurantButton from './RestaurantButton'

export interface RestaurantProps {
  name: string
  link: string
  image: string
}

export default function Restaurant({ name, link, image }: RestaurantProps) {
  return (
    <div className="w-full flex flex-col gap-3 bg-white shadow-lg shadow-black/30 pb-4 rounded-xl overflow-hidden">
      <p className="flex justify-center items-center w-full">
        <img src={image as string} alt={name} />
      </p>
      <div className="flex flex-col px-4 gap-3">
        <div className="flex flex-col">
          <h1 className="text-2xl font-extrabold">{name}</h1>
        </div>
        <RestaurantButton name={name} link={link} />
      </div>
    </div>
  )
}
