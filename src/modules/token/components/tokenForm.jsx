import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useOrderStore } from "@/store/useOrderStore"
import { useProductsStore } from "@/store/useProductsStore"
import { useTokenStore } from "@/store/useTokenStore"
import { useForm } from "react-hook-form"

const TokenForm = () => {

    const { setToken, token } = useTokenStore()
    const { setOrder } = useOrderStore()
    const { register, handleSubmit } = useForm();
    const { setProducts } = useProductsStore()

    const submitAddToken = (data) => {
        setToken(data.token)
        setOrder(data.token)
        setProducts(data.token)
    }


  return (
    <div>
        <h1 className="mb-4">Введите токен</h1>
        <p className="mb-2">Ставьте токен чтобы включить кассу и загрузить справочники</p>

        <form onSubmit={handleSubmit(submitAddToken)}>
            <Input className="mb-2" type="text" placeholder="Введите токен" {...register("token")} />
            <Button type="submit">Подключить</Button>
        </form>
    </div>
  )
}

export default TokenForm