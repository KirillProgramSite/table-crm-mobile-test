import { Button } from "@/components/ui/button"
import useCartStore from "@/store/useCartStore"
import { ShoppingBasketAdd01Icon } from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"



const ProductCard = ({ product, token }) => {
    const {addToCart} = useCartStore()

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
            <Button onClick={() => addToCart(token, product.id)} className="bg-blue-500 text-white hover:bg-blue-600">
                <HugeiconsIcon icon={ShoppingBasketAdd01Icon} />
            </Button>
        </div>
    )
}

export default ProductCard