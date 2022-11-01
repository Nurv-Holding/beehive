import axios from "axios"

const host = 'http://localhost:3002'

const getAll = (idCompany=1) => axios.get(`${host}/tasks/c/${idCompany}`)
const create = (idCompany=1,data) => axios.post(`${host}/tasks/c/${idCompany}`,data)

export default {
    getAll,
    create
}