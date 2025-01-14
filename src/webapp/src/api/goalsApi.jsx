import axios from "axios"
import { host } from "../utils/utilis"

const getAll = (idCompany) => axios.get(`${host}/goals/c/${idCompany}`)
const getById = (idGoal, idCompany) => axios.get(`${host}/goals/${idGoal}/c/${idCompany}`)
const create = (idCompany,data) => axios.post(`${host}/goals/c/${idCompany}`,data)
const update = (idGoal, data) => axios.put(`${host}/goals/${idGoal}`,data)

const goalsApi = {
    getAll,
    getById,
    create,
    update
}

export default goalsApi