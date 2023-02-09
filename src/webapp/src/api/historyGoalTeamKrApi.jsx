import axios from "axios"
import { host } from "../utils/utilis"

const create = (idCompany,data) => axios.post(`${host}/hGoalsTeamKrs/history/${idCompany}`,data)
const getByKrs = (idCompany, idGoal, idTeam) => axios.get(`${host}/hGoalsTeamKrs/c/${idCompany}/g/${idGoal}/t/${idTeam}/history/krs`)
const getAllByKrs = () => axios.get(`${host}/hGoalsTeamKrs/p/history/krs`)

const historyGoalTeamKrApi = {
    create,
    getByKrs,
    getAllByKrs
}

export default historyGoalTeamKrApi