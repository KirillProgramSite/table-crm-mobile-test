import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useClientStore } from "@/store/useClientStore"
import { useTokenStore } from "@/store/useTokenStore"
import { useForm } from "react-hook-form"

const ClientForm = () => {

    const { setClient, client } = useClientStore()
    const { token } = useTokenStore()
    const { register, handleSubmit } = useForm();

    const submitSearchClient = async (data) => {
        setClient(token, data.phone)
        console.log(client);
        
    }


  return (
    <div>
        <h1 className="mb-4">Введите номер телефона</h1>
        <p className="mb-2">Введите номер телефона для поиска клиента</p>

        <form onSubmit={handleSubmit(submitSearchClient)}>
            <Input className="mb-2" type="text" placeholder="Введите номер телефона" {...register("phone")} />
            <Button type="submit">Найти клиента</Button>
        </form>

        {client ? <p>Клиент найден: {client.name}</p> : null}
    </div>
  )
}

export default ClientForm