import { Button } from "@/components/ui/button"
import useCartStore from "@/store/useCartStore"
import { Add01Icon, Delete02Icon, Remove01Icon } from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"



const CartItem = ({ cart }) => {
    const { deleteFromCart, plusQuantity, minusQuantity } = useCartStore()

    return (
        <div className="border rounded-lg p-4 mb-2">
            <div className="flex items-center justify-between mb-5">
                <div className="">
                    <h3 className="font-bold">{cart.name}</h3>
                </div>
                <Button onClick={() => deleteFromCart(cart.id)} className="bg-red-500 text-white hover:bg-red-600">
                    <HugeiconsIcon icon={Delete02Icon} />
                </Button>
            </div>

            <hr />

            <div className="flex justify-between items-center mt-5">
                <div className="inline-flex items-center border rounded-xl overflow-hidden">
                    <Button
                        variant="ghost"
                        size="icon"
                        className="rounded-none h-10 w-10"
                        onClick={() => minusQuantity(cart.id)}
                    >
                        <HugeiconsIcon icon={Remove01Icon} size={18} />
                    </Button>

                    <div className="w-12 h-10 flex items-center justify-center text-lg font-medium border-x">
                        {cart.quantity}
                    </div>

                    <Button
                        variant="ghost"
                        size="icon"
                        className="rounded-none h-10 w-10"
                        onClick={() => plusQuantity(cart.id)}
                    >
                        <HugeiconsIcon icon={Add01Icon} size={18} />
                    </Button>
                </div>
                <div className="">
                <p>Сумма: {cart?.prices[0]?.price ? cart.prices[0].price * cart.quantity : 0}</p>
            </div>
            </div>
        </div>
    )
}

export default CartItem