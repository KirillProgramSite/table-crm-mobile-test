import axios from "axios";


export const getClientAPI = async (token, phone) => {
    const res = await axios.get("https://app.tablecrm.com/api/v1/contragents/", {
        params: {
            token: token,
            phone: phone,
        },
    })
    return res.data;
}