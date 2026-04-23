import { Badge } from "@/components/ui/badge"
import CartList from "@/modules/cart/components/cartList"
import ClientForm from "@/modules/client/components/clientForm"
import OrderList from "@/modules/order"
import ProductsList from "@/modules/products/components/productsList"
import SearchProduct from "@/modules/products/components/searchProduct"
import TokenForm from "@/modules/token"
import useCartStore from "@/store/useCartStore"
import { useClientStore } from "@/store/useClientStore"
import { useOrderStore } from "@/store/useOrderStore"
import { useProductsStore } from "@/store/useProductsStore"
import { useTokenStore } from "@/store/useTokenStore"
import { useEffect } from "react"


const App = () => {
  const token = useTokenStore((state) => state.token)

  return (
    <div className="min-h-screen flex flex-col px-5">
      <div className="flex justify-between items-center">
        <h1 className="my-5 font-bold">Table CRM Mobile </h1>
        <Badge variant={token ? "default" : "destructive"}>
        {token ? "Подключен" : "Не подключен"}
      </Badge>
      </div>


      <TokenForm />


      <ClientForm />


      <OrderList />

      <SearchProduct token={token} />
      <ProductsList token={token} />
      <CartList />
    </div>
  )
}
export default App
