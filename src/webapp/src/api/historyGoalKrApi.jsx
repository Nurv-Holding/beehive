import axios from "axios"

const host = 'http://localhost:3002'

const create = (idCompany,data) => axios.post(`${host}/hGoalsKrs/history/${idCompany}`,data)
const getAll = (idCompany) => axios.get(`${host}/hGoalsKrs/history/${idCompany}`)

export default {
    create,
    getAll
}