import axios from "axios"

const host = "https://beehive-teste-app.onrender.com"

const getAll = (idCompany) => axios.get(`${host}/proposals/c/${idCompany}`)
const create = (idCompany,data) => axios.post(`${host}/proposals/c/${idCompany}`,data)

export default {
    getAll,
    create
}