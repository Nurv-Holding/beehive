import axios from "axios"

const host = 'http://localhost:3002'

const getAll = (idCompany) => axios.get(`${host}/members/teams/c/${idCompany}`)
const create = (idCompany, data) => axios.post(`${host}/members/teams/c/${idCompany}`,data)
const update = (idTeamUser, data) => axios.put(`${host}/members/${idTeamUser}/teams`,data)
const getById = (idTeamUser) => axios.put(`${host}/members/${idTeamUser}/teams`)

export default {
    getAll,
    create,
    update,
    getById
}