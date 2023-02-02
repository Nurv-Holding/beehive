import axios from "axios"

const host = process.env.HOST

const getAll = (idCompany) => axios.get(`${host}/principles/c/${idCompany}`)
const create = (idCompany,data) => axios.post(`${host}/principles/c/${idCompany}`,data)

export default {
    getAll,
    create
}