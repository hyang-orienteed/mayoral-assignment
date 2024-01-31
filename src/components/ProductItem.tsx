import Image from 'next/image';
import { Product } from 'types'

const ProductItem = ({ product }: { product: Product }) => {
    const { imageUrl, name, price, colors, discount } = product;
    return (
        <div className="flex flex-col gap-3 p-4 text-center border-solid border border-sky-200 rounded items-center shadow-md">
            <div className='w-full aspect-[5/6] bg-slate-200'>
                <Image
                    src={imageUrl}
                    width={"100%"}
                    height={"100%"}
                    alt='product image'
                />
            </div>

            <span>
                {name}
            </span>
            <div className="flex flex-col p-5">
                <span data-testid="price" className={discount ? "line-through" : ""}>
                    {`${price} €`}
                </span>
                {discount && (
                    <span data-testid="discount" className="text-red-500">
                        {`${(price * (1 - discount / 100)).toFixed(2)} € (-${discount}%)`}
                    </span>
                )}
            </div>
            <div className="flex flex-col gap-4 mt-auto mb-2">
                {colors.length > 1 && (
                    <span data-testid="colors" className="text-gray-400">más colores</span>
                )}
                <button className="py-2 px-4 uppercase rounded-md bg-blue-500 text-sm text-white  w-fit">
                    añadir
                </button>
            </div>

        </div>
    )
}

export default ProductItem