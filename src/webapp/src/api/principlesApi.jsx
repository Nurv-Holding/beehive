import axios from "axios"

const host = 'http://localhost:3002'

const getAll = (idCompany) => axios.get(`${host}/principles/c/${idCompany}`)
const create = (idCompany,data) => axios.get(`${host}/principles/${idCompany}`,data)

export default {
    getAll,
    create
}