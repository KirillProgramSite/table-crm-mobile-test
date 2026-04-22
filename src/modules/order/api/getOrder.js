import axios from "axios"


export const getOrderAPI = async (token) => {
    const resWarehouses = await axios.get("https://app.tablecrm.com/api/v1/warehouses/", {
        params:{
            token: token,
        }
    })

    const resPaybox = await axios.get("https://app.tablecrm.com/api/v1/payboxes/", {
        params:{
            token: token,
        }
    })

    const resOrganizations = await axios.get("https://app.tablecrm.com/api/v1/organizations/", {
        params:{
            token: token,
        }
    })

    const resPriceTypes = await axios.get("https://app.tablecrm.com/api/v1/price_types/", {
        params:{
            token: token,
        }
    })


    return {
        warehouses: resWarehouses.data.result,
        payboxes: resPaybox.data.result,
        organizations: resOrganizations.data.result,
        priceTypes: resPriceTypes.data.result
    };
}