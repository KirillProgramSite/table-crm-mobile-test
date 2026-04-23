import { ScrollArea } from "@/components/ui/scroll-area"
import useCartStore from "@/store/useCartStore";
import CartItem from "./cartItem";



const CartList = () => {

    const {cart} = useCartStore()

    return(
        <ScrollArea className="h-100 mt-5 rounded-md border p-4">
            {cart.length > 0 ? cart.map((item) => <CartItem key={item.id} cart={item} />) : <p className="text-center">Корзина пуста</p>}
        </ScrollArea>
        
    )
}

export default CartList;

