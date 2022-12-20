import axios from "axios"

const host = 'http://localhost:3002'

const getAll = (idCompany) => axios.get(`${host}/proposals/c/${idCompany}`)
const create = (idCompany,data) => axios.get(`${host}/proposals/${idCompany}`,data)

export default {
    getAll,
    create
}