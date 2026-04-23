import axios from "axios"


export const getProducts = async (token) => {
    const res = await axios.get("https://app.tablecrm.com/api/v1/nomenclature/", {
        params: {
            token: token,
            limit: 100,
            with_prices: true,
        }
    })

    return res.data.result;
}