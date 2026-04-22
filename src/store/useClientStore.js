import { getClientAPI } from "@/modules/client/api/getClientAPI";
import { create  } from "zustand";



export const useClientStore = create((set) => ({
  client: null,
  setClient: async (token, phone) => {
    const resClient = await getClientAPI(token, phone);
    set({ client: resClient.result[0] });
  },
}));