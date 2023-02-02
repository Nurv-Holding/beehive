import axios from "axios"

const host = process.env.HOST

const getAll = (idCompany) => axios.get(`${host}/furureVisions/c/${idCompany}`)
const create = (idCompany,data) => axios.post(`${host}/furureVisions/c/${idCompany}`,data)

export default {
    getAll,
    create
}