import axios from "axios"

const host = 'http://localhost:3002'

const create = (idCompany,data) => axios.post(`${host}/taskUsers/c/${idCompany}`,data)
const getAll = (idCompany) => axios.get(`${host}/taskUsers/c/${idCompany}`)

export default {
    create,
    getAll
}