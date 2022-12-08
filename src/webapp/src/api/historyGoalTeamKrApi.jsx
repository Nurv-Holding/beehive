import axios from "axios"

const host = 'http://localhost:3002'

const create = (idCompany,data) => axios.post(`${host}/hGoalsTeamKrs/history/${idCompany}`,data)
const getByKrs = (idCompany, idGoal, idTeam) => axios.get(`${host}/hGoalsTeamKrs/c/${idCompany}/g/${idGoal}/t/${idTeam}/history/krs`)

export default {
    create,
    getByKrs
}