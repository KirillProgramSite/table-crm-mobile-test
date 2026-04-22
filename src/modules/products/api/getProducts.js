import axios from "axios"


export const getProducts = async (token, search = "") => {
    const res = await axios.get("https://app.tablecrm.com/api/v1/nomenclature/", {
        params: {
            token: token,
            limit: 100,
            search: search,
            with_prices: true,
        }
    })

    return res.data.result;
}