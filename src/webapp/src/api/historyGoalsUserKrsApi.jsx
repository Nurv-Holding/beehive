import axios from "axios"

const host = 'http://localhost:3002'

const getAll = (idCompany) => axios.get(`${host}/history/goalsUserKrs/c/${idCompany}`)
const getHistoryKrsUsersByGoal = (idCompany, idGoalsUserKr) => axios.get(`${host}/history/goalsUserKrs/c/${idCompany}/krs/${idGoalsUserKr}`)
const getById = (idGoal, idCompany) => axios.get(`${host}/history/goalsUserKrs/${idGoal}/c/${idCompany}`)
const create = (idCompany,data) => axios.post(`${host}/history/goalsUserKrs/c/${idCompany}`,data)
const update = (idGoal, data) => axios.put(`${host}/history/goalsUserKrs/${idGoal}`,data)

const historyGoalsUserKrsApi = {
    getAll,
    getById,
    create,
    update,
    getHistoryKrsUsersByGoal
}

export default historyGoalsUserKrsApi