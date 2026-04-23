


const postCell = async (token, cellData) => {
    const res = axios.post("https://app.tablecrm.com/api/v1/docs_sales/", cellData, {
        params: {
            token: token,
        },
    })
}

