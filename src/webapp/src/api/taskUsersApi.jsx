import axios from "axios"

const host = 'http://localhost:3002'

const create = (idCompany,data) => axios.post(`${host}/taskUsers/c/${idCompany}`,data)
const getAll = (idCompany) => axios.get(`${host}/taskUsers/c/${idCompany}`)
const getByUserAndKrs = (idCompany, idGoal) => axios.get(`${host}/taskUsers/user/${idGoal}/krs/c/${idCompany}`)
const update = (idTeamUser, data) => axios.put(`${host}/taskUsers/${idTeamUser}`, data)

export default {
    create,
    getAll,
    getByUserAndKrs,
    update
}