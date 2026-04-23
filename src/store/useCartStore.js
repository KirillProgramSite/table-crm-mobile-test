import { getProductById } from "@/modules/cart/api/getProductById";
import { create } from "zustand";



const useCartStore = create((set) => ({
    cart: [],
    addToCart: async (token, id) => {
        const product = await getProductById(token, id);

        set((state) => {
            const existingProduct = state.cart.find(
                (item) => item.id === product.id
            );

            if (existingProduct) {
                return {
                    cart: state.cart.map((item) =>
                        item.id === product.id
                            ? { ...item, quantity: item.quantity + 1 }
                            : item
                    ),
                };
            }

            return {
                cart: [...state.cart, { ...product, quantity: 1 }],
            };
        });
    },
    deleteFromCart: (productId) => {
        set((state) => {
            return { cart: state.cart.filter((item) => item.id !== productId) };
        });
    },

    plusQuantity: (productId) => {
        set((state) => {
            return {
                cart: state.cart.map((item) =>
                    item.id === productId
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                ),
            };
        });
    },

    minusQuantity: (productId) => {
        set((state) => {
            return {
                cart: state.cart.map((item) =>
                    item.id === productId
                        ? { ...item, quantity: item.quantity - 1 }
                        : item
                ),
            };
        });
    },


}));

export default useCartStore;