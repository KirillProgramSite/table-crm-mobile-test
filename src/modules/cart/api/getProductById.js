import axios from "axios"



export const getProductById = async(token, id) => {
    const res = await axios.get(`https://app.tablecrm.com/api/v1/nomenclature/`, {
        params: {
            token: token,
            with_prices: true,
        }
    })

    return res.data.result.find((product) => product.id === id);
}