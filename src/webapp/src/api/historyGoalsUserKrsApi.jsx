import axios from "axios"

const host = 'http://localhost:3002'

const getAll = (idCompany) => axios.get(`${host}/history/goalsUserKrs/c/${idCompany}`)
const getById = (idGoal, idCompany) => axios.get(`${host}/history/goalsUserKrs/${idGoal}/c/${idCompany}`)
const create = (idCompany,data) => axios.post(`${host}/history/goalsUserKrs/c/${idCompany}`,data)
const update = (idGoal, data) => axios.put(`${host}/history/goalsUserKrs/${idGoal}`,data)

export default {
    getAll,
    getById,
    create,
    update
}