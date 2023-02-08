import axios from "axios"
import { host } from "../utils/utilis"

const getAll = (idCompany) => axios.get(`${host}/principles/c/${idCompany}`)
const create = (idCompany,data) => axios.post(`${host}/principles/c/${idCompany}`,data)

const principlesApi = {
    getAll,
    create
}

export default principlesApi