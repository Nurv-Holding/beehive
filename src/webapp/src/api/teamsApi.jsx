import axios from "axios"

const host = 'http://localhost:3002'

const getAll = (idCompany) => axios.get(`${host}/teams/c/${idCompany}`)
const getById = (idTeam, idCompany) => axios.get(`${host}/teams/${idTeam}/c/${idCompany}`)
const create = (idCompany, data) => axios.post(`${host}/teams/c/${idCompany}`,data)
const getAllTeamsByGoals = (idCompany) => axios.get(`${host}/processGoalsTeams/all/teams/goals/${idCompany}`)

export default {
    getAll,
    create,
    getById,
    getAllTeamsByGoals
}