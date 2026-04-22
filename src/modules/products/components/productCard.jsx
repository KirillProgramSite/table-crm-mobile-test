import { ShoppingBasketAdd01Icon } from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"



const ProductCard = ({ product }) => {
    return (
        <div className="border rounded-lg p-4 flex items-center justify-between mb-2">
            <div className="">
                <h3 className="font-bold">{product.name}</h3>
                <p className={`text-sm ${product.prices?.[0]?.price ? 'text-green-500' : 'text-red-500'}`}>
                    {product.prices?.[0]?.price
                        ? `${product.prices[0].price} ₽`
                        : 'Нет цены'}
                </p>
            </div>
            <div className="">
                <HugeiconsIcon icon={ShoppingBasketAdd01Icon} />
            </div>
        </div>
    )
}

export default ProductCard