import axios from "axios"

const host = "https://beehive-teste-app.onrender.com"

const getAll = (idCompany) => axios.get(`${host}/principles/c/${idCompany}`)
const create = (idCompany,data) => axios.post(`${host}/principles/c/${idCompany}`,data)

const principlesApi = {
    getAll,
    create
}

export default principlesApi