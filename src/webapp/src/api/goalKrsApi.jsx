import axios from "axios"
import { host } from "../utils/utilis"

const getAll = (idCompany) => axios.get(`${host}/goalsKrs/c/${idCompany}`)
const create = (idCompany,data) => axios.post(`${host}/goalsKrs/c/${idCompany}`,data)
const getByGoal = (idCompany,idGoal) => axios.get(`${host}/goals/${idGoal}/krs/c/${idCompany}`)
const getById = (idCompany,idGoalKr) => axios.get(`${host}/goalsKrs/${idGoalKr}/c/${idCompany}`)
const update = (idGoalKrs,data) => axios.put(`${host}/goalsKrs/${idGoalKrs}`, data)

const goalKrsApi = {
    getAll,
    getByGoal,
    create,
    update,
    getById
}

export default goalKrsApi