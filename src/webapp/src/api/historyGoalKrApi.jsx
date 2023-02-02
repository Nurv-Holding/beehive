import axios from "axios"

const host = process.env.HOST

const create = (idCompany,data) => axios.post(`${host}/hGoalsKrs/history/${idCompany}`,data)
const getAll = (idCompany) => axios.get(`${host}/hGoalsKrs/history/${idCompany}`)
const HistoryGoalKrByKr = (idCompany, idGoal, idgoalsKr) => axios.get(`${host}/hGoalsKrs/history/${idCompany}/${idGoal}/${idgoalsKr}`)

export default {
    create,
    getAll,
    HistoryGoalKrByKr
}