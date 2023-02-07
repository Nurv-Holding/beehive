import axios from "axios"

const host = 'http://localhost:3002'

const getAll = (idCompany) => axios.get(`${host}/furureVisions/c/${idCompany}`)
const create = (idCompany,data) => axios.post(`${host}/furureVisions/c/${idCompany}`,data)

const futureVisionApi = {
    getAll,
    create
}

export default futureVisionApi