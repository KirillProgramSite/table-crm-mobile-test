import { Badge } from "@/components/ui/badge"
import ClientForm from "@/modules/client/components/clientForm"
import OrderList from "@/modules/order"
import ProductsList from "@/modules/products/components/productsList"
import TokenForm from "@/modules/token"
import { useClientStore } from "@/store/useClientStore"
import { useOrderStore } from "@/store/useOrderStore"
import { useProductsStore } from "@/store/useProductsStore"
import { useTokenStore } from "@/store/useTokenStore"
import { useEffect } from "react"


const App = () => {
  const token = useTokenStore((state) => state.token)
  const client = useClientStore((state) => state.client)
  const order = useOrderStore((state) => state.order)
  const products = useProductsStore((state) => state.products)

  useEffect(() => {
    console.log(products);
  }, [products])

  // useEffect(() => {
  //   console.log(order);
  // }, [order])

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

      <ProductsList />
    </div>
  )
}
export default App
