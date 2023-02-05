import axios from "axios"

const host = process.env.REACT_APP_HOSTPROD

const create = (idCompany,data) => axios.post(`${host}/hGoalsKrs/history/${idCompany}`,data)
const getAll = (idCompany) => axios.get(`${host}/hGoalsKrs/history/${idCompany}`)
const HistoryGoalKrByKr = (idCompany, idGoal, idgoalsKr) => axios.get(`${host}/hGoalsKrs/history/${idCompany}/${idGoal}/${idgoalsKr}`)

const historyGoalKrApi = {
    create,
    getAll,
    HistoryGoalKrByKr
}

export default historyGoalKrApi