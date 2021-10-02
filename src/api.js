import axios from 'axios'

const api = axios.create({
    baseURL: `http://localhost:8080/api`
})

export const fetchInvoices = async () => {
    const data = await api.get("/invoices")
    try {
        return await data.data.data
    } catch (e) {
        console.log("error", e)
    }
}

export const fetchInvoiceDetail = async (invoice_no) => {
    const data = await api.get("/invoices/" + invoice_no)
    try {
        return await data.data
    } catch (e) {
        console.log("error", e)
    }
}