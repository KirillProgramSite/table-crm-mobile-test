import { useProductsStore } from "@/store/useProductsStore";
import ProductCard from "./productCard";
import { ScrollArea } from "@/components/ui/scroll-area"



const ProductsList = () => {

    const {products} = useProductsStore()

    return(
        <ScrollArea className="h-100 mt-5 rounded-md border p-4">
            {products.length > 0 ? products.map((product) => <ProductCard key={product.id} product={product} />) : <p className="text-center">Товары не найдены</p>}
        </ScrollArea>
        
    )
}

export default ProductsList;

