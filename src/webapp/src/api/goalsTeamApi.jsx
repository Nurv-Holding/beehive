import axios from "axios"

const host = 'http://localhost:3002'

const getAll = (idCompany) => axios.get(`${host}/goalsTeam/c/${idCompany}`)
const create = (idCompany,data) => axios.get(`${host}/goalsTeam/c/${idCompany}`,data)
const getByGoal = (idCompany,idGoal) => axios.get(`${host}/goalsTeam/goal/${idGoal}/c/${idCompany}`)
const getById = (idCompany,idGoal) => axios.get(`${host}/goalsTeam/${idGoal}/c/${idCompany}`)

export default {
    getAll,
    create,
    getByGoal,
    getById
}