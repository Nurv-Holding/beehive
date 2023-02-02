import axios from "axios"

const host = "https://beehive-teste-app.onrender.com"

const getAll = (idCompany) => axios.get(`${host}/teams/c/${idCompany}`)
const getById = (idTeam, idCompany) => axios.get(`${host}/teams/${idTeam}/c/${idCompany}`)
const create = (idCompany, data) => axios.post(`${host}/teams/c/${idCompany}`,data)
const getAllTeams = (idCompany) => axios.get(`${host}/processGoalsTeams/all/teams/${idCompany}`)
const getByTeams = (idCompany) => axios.get(`${host}/processGoalsTeams/by/teams/${idCompany}`)
const getAllTeamsByKrs = (idCompany) => axios.get(`${host}/processGoalsTeams/all/teams/krs/${idCompany}`)

export default {
    getAll,
    create,
    getById,
    getAllTeams,
    getAllTeamsByKrs,
    getByTeams
}