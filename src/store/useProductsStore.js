import { getProducts } from "@/modules/products/api/getProducts";
import { create } from "zustand";



export const useProductsStore = create((set, get) => ({
  products: [],
  setProducts: async (token) => {
    const resProducts = await getProducts(token);
    set({ products: resProducts });
  },

  searchProduct: (token, search) => {
    if(!search) {
      get().setProducts(token);
      return;
    }

    const resProducts = get().products.filter((product) => product.name.toLowerCase().includes(search.toLowerCase()));
    set({ products: resProducts });
  }
}));
