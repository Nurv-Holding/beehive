import axios from "axios"

const host = process.env.REACT_APP_HOSTLOCAL

const getAll = (idCompany) => axios.get(`${host}/furureVisions/c/${idCompany}`)
const create = (idCompany,data) => axios.post(`${host}/furureVisions/c/${idCompany}`,data)

const futureVisionApi = {
    getAll,
    create
}

export default futureVisionApi