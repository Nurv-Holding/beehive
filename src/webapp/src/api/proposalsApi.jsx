import axios from "axios"

const host = process.env.HOST

const getAll = (idCompany) => axios.get(`${host}/proposals/c/${idCompany}`)
const create = (idCompany,data) => axios.post(`${host}/proposals/c/${idCompany}`,data)

export default {
    getAll,
    create
}