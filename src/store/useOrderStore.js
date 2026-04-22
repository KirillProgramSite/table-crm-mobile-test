import { getOrderAPI } from "@/modules/order/api/getOrder";
import { create  } from "zustand";



export const useOrderStore = create((set) => ({
  order: null,
  setOrder: async (token) => {
    const resOrder = await getOrderAPI(token);
    set({ order: resOrder });
  },
}));