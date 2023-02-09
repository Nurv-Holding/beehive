import axios from "axios"
import { host } from "../utils/utilis"

const getAll = (idCompany) => axios.get(`${host}/furureVisions/c/${idCompany}`)
const create = (idCompany,data) => axios.post(`${host}/furureVisions/c/${idCompany}`,data)

const futureVisionApi = {
    getAll,
    create
}

export default futureVisionApi