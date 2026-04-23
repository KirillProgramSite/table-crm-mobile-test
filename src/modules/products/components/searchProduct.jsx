import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useProductsStore } from "@/store/useProductsStore"
import { Search01Icon } from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"
import { useForm } from "react-hook-form"


const SearchProduct = ({token}) => {
    const {searchProduct} = useProductsStore()

    const { register, handleSubmit } = useForm();

    const submitSearchProduct = async (data) => {
        searchProduct(token, data.product)
    }


    return(
        <div className="flex items-center gap-2 my-5">
            <Input placeholder="Найти товар" {...register("product")} />
            <Button onClick={handleSubmit(submitSearchProduct)}>
                <HugeiconsIcon icon={Search01Icon} />
            </Button>
        </div>
    )
}

export default SearchProduct