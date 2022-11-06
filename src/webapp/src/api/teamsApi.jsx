import axios from "axios"

const host = 'http://localhost:3002'

const getAll = (idCompany) => axios.get(`${host}/teams/c/${idCompany}`)
const create = (idCompany, data) => axios.post(`${host}/teams/c/${idCompany}`,data)

export default {
    getAll,
    create
}