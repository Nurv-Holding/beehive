import axios from "axios"

const host = "https://beehive-teste-app.onrender.com"

const getAll = (idCompany) => axios.get(`${host}/furureVisions/c/${idCompany}`)
const create = (idCompany,data) => axios.post(`${host}/furureVisions/c/${idCompany}`,data)

export default {
    getAll,
    create
}