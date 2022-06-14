import OrderButton from './OrderButton'

export interface ItemProps {
  name: string
  price: number
  image: string
  link: string
  restaurant: string
}

const NIS = '₪'

export default function Item({
  name,
  price,
  image,
  link,
  restaurant,
}: ItemProps) {
  const priceString = `${price / 100} ₪`

  return (
    <div className="w-full flex flex-col gap-3 bg-white shadow-lg shadow-black/30 pb-4 rounded-xl overflow-hidden">
      <p className="flex justify-center items-center w-full">
        <img src={image as string} alt={name} />
      </p>
      <div className="flex flex-col px-4 gap-3">
        <div className="flex flex-col">
          <h2 className="text-sm font-semibold">{restaurant}</h2>
          <h1 className="text-2xl font-extrabold">{name}</h1>
          <h3 className=" text-primary-500">{priceString}</h3>
        </div>
        <OrderButton price={priceString} link={link} />
      </div>
    </div>
  )
}
