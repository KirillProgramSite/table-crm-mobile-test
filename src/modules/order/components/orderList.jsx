import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
    SelectLabel,
} from "@/components/ui/select"
import { useOrderStore } from "@/store/useOrderStore"
import { useEffect } from "react"

const OrderList = () => {
    const order = useOrderStore((state) => state.order)

    useEffect(() => {
        console.log(order?.organizations?.map((org) => org.id));
    }, [order])

    return (
        <div>
            <h1>Параметры продажи</h1>
            <p>Вы можете выбрать организацию, счёт, склад и тип цены</p>

            <form>
                <Select disabled={!order}>
                    <SelectTrigger className="w-full max-w-48">
                        <SelectValue placeholder="Выберите организацию" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            <SelectLabel>Организация</SelectLabel>
                            {order ? order.organizations.map((org) => (
                                <SelectItem key={org.id} value={String(org.id)}>{org.type}</SelectItem>
                            )) : null}
                        </SelectGroup>
                    </SelectContent>
                </Select>

                <Select disabled={!order}>
                    <SelectTrigger className="w-full max-w-48">
                        <SelectValue placeholder="Выберите счёт" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            <SelectLabel>Счёт</SelectLabel>
                            {order ? order.payboxes.map((paybox) => (
                                <SelectItem key={paybox.id} value={String(paybox.id)}>{paybox.name}</SelectItem>
                            )) : null}
                        </SelectGroup>
                    </SelectContent>
                </Select>


                <Select disabled={!order}>
                    <SelectTrigger className="w-full max-w-48">
                        <SelectValue placeholder="Выберите склад" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            <SelectLabel>Склад</SelectLabel>
                            {order ? order.warehouses.map((warehouse) => (
                                <SelectItem key={warehouse.id} value={String(warehouse.id)}>{warehouse.name}</SelectItem>
                            )) : null}
                        </SelectGroup>
                    </SelectContent>
                </Select>

                <Select disabled={!order}>
                    <SelectTrigger className="w-full max-w-48">
                        <SelectValue placeholder="Выберите тип цены" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            <SelectLabel>Тип цены</SelectLabel>
                            {order ? order.priceTypes.map((priceType) => (
                                <SelectItem key={priceType.id} value={String(priceType.id)}>{priceType.name}</SelectItem>
                            )) : null}
                        </SelectGroup>
                    </SelectContent>
                </Select>
            </form>
        </div>
    )
}

export default OrderList