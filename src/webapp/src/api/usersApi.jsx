import axios from "axios"

const host = 'http://localhost:3002'

const getAll = (idCompany) => axios.get(`${host}/users/c/${idCompany}`)
const create = (idCompany,data) => axios.post(`${host}/users/c/${idCompany}`,data)
const createEmployee = (idCompany,data) => axios.post(`${host}/employees/c/${idCompany}`,data)

export default {
    getAll,
    create,
    createEmployee
}