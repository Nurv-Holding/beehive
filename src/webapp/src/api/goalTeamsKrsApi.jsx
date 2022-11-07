import axios from "axios"

const host = 'http://localhost:3002'

const getByGoal = (idCompany,idGoal) => axios.get(`${host}/goalsTeam/${idGoal}/krs/c/${idCompany}`)
const create = (idCompany, data) => axios.post(`${host}/goalsTeamKrs/c/${idCompany}`, data)
const getByTeamAndKrs = (idCompany, idTeam) => axios.get(`${host}/goalsTeam/t/krs/${idTeam}/c/${idCompany}`)
const getByTeam = (idCompany, idGoal) => axios.get(`${host}/goalsTeam/p/${idGoal}/c/${idCompany}`)
const getGroupByTeam = (idCompany, idGoal) => axios.get(`${host}/goalsTeam/g/t/${idGoal}/c/${idCompany}`)
const getGroupByGoalTeam = (idCompany, idGoal) => axios.get(`${host}/goalsTeam/g/t/goal/${idGoal}/c/${idCompany}`)
const getGroupByKrs = (idCompany, idGoal) => axios.get(`${host}/goalsTeamKrs/krs/g/goal/${idGoal}/c/${idCompany}`)

export default {
    getByGoal,
    create,
    getByTeamAndKrs,
    getByTeam,
    getGroupByTeam,
    getGroupByGoalTeam,
    getGroupByKrs
    
}