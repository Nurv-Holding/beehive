import axios from "axios"

const host = process.env.REACT_APP_HOSTPROD

const getAll = (idCompany) => axios.get(`${host}/members/teams/c/${idCompany}`)
const create = (idCompany, data) => axios.post(`${host}/members/teams/c/${idCompany}`,data)
const update = (idTeamUser, data) => axios.put(`${host}/members/${idTeamUser}/teams`,data)
const getById = (idTeamUser) => axios.put(`${host}/members/${idTeamUser}/teams`)
const getAllTeamsAndUsers = (idCompany) => axios.get(`${host}/members/p/teams/c/${idCompany}`)

const teamsUsersApi = {
    getAll,
    create,
    update,
    getById,
    getAllTeamsAndUsers
}

export default teamsUsersApi