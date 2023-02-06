import axios from "axios"

const host = 'http://localhost:3002'

const getAll = (idCompany) => axios.get(`${host}/goalsTeam/c/${idCompany}`)
const create = (idCompany,data) => axios.post(`${host}/goalsTeam/c/${idCompany}`,data)
const getByGoal = (idCompany,idGoal) => axios.get(`${host}/goalsTeam/goal/${idGoal}/c/${idCompany}`)
const getKrsByGoal = (idCompany,idGoal) => axios.get(`${host}/goalsTeam/${idGoal}/krs/c/${idCompany}`)
const getById = (idCompany,idGoal) => axios.get(`${host}/goalsTeam/${idGoal}/c/${idCompany}`)
const getAllProcess = (idCompany) => axios.get(`${host}/goalsTeam/c/process/${idCompany}`)
const createProcess = (idCompany,data) => axios.post(`${host}/goalsTeam/process/c/${idCompany}`,data)
const updateProcess = (id,data) => axios.put(`${host}/goalsTeam/process/${id}`,data)
const getByTeam = (idCompany, idTeam) => axios.get(`${host}/goalsTeam/t/${idTeam}/c/${idCompany}`)
const getGroupByTeam = (idCompany, idGoal) => axios.get(`${host}/goalsTeam/${idGoal}/c/${idCompany}`)
const getAllGoalGroupByTeam = (idCompany) => axios.get(`${host}/goals/g/p/process/c/${idCompany}`)
const getTeamsAndUsersByGoal = (idCompany, idUser, idGoal) => axios.get(`${host}/processGoalsTeams/teams/c/${idCompany}/users/${idUser}/goal/${idGoal}`)
const getTeamsAndUsersByUser = (idCompany, idUser) => axios.get(`${host}/processGoalsTeams/all/teams/c/${idCompany}/users/${idUser}`)

export default {
    getAll,
    create,
    getByGoal,
    getKrsByGoal,
    getById,
    getAllProcess,
    getByTeam,
    createProcess,
    updateProcess,
    getGroupByTeam,
    getAllGoalGroupByTeam,
    getTeamsAndUsersByGoal,
    getTeamsAndUsersByUser
}