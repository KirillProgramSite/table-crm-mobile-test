import { getProducts } from "@/modules/products/api/getProducts";
import { create } from "zustand";



export const useProductsStore = create((set) => ({
  products: [],
  setProducts: async (token) => {
    const resProducts = await getProducts(token);
    set({ products: resProducts });
  }
}));
