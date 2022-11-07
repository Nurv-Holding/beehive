import axios from "axios"

const host = 'http://localhost:3002'

const getByGoal = (idCompany,idGoal) => axios.get(`${host}/goalsTeam/${idGoal}/krs/c/${idCompany}`)
const create = (idCompany, data) => axios.post(`${host}/goalsTeamKrs/c/${idCompany}`, data)
const getByTeamAndKrs = (idCompany, idTeam) => axios.get(`${host}/goalsTeam/t/krs/${idTeam}/c/${idCompany}`)
const getByTeam = (idCompany, idGoal) => axios.get(`${host}/goalsTeam/p/${idGoal}/c/${idCompany}`)

export default {
    getByGoal,
    create,
    getByTeamAndKrs,
    getByTeam
    
}