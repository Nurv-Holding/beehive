import axios from "axios"
import { host } from "../utils/utilis"

const getAll = (idCompany) => axios.get(`${host}/proposals/c/${idCompany}`)
const create = (idCompany,data) => axios.post(`${host}/proposals/c/${idCompany}`,data)

const proposalsApi = {
    getAll,
    create
}

export default proposalsApi