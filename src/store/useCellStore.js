import { create } from "zustand";


export const useCellStore = create((set) => ({
    client: null,
    organization: null,
    paybox: null,
    warehouse: null,
    priceType: null,
    operation: "Заказ",
    comment: "",
    goods: [],
    setClient: (client) => set({ client }),
    setOrganization: (organization) => set({ organization }),
    setPaybox: (paybox) => set({ paybox }),
    setWarehouse: (warehouse) => set({ warehouse }),
    setPriceType: (priceType) => set({ priceType }),
    addGoods: (goods) => set((state) => ({ goods: [...state.goods, ...goods] })),
    setComment: (comment) => set({ comment }),
}));