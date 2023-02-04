import axios from "axios"

const host = "https://beehive-teste-app.onrender.com"

const getByGoal = (idCompany,idGoal) => axios.get(`${host}/goalsTeam/${idGoal}/krs/c/${idCompany}`)
const getAll = (idCompany) => axios.get(`${host}/goalsTeamKrs/c/${idCompany}`)
const create = (idCompany, data) => axios.post(`${host}/goalsTeamKrs/c/${idCompany}`, data)
const getByTeamAndKrs = (idCompany, idTeam) => axios.get(`${host}/goalsTeam/t/krs/${idTeam}/c/${idCompany}`)
const getByTeam = (idCompany, idGoal) => axios.get(`${host}/goalsTeam/p/${idGoal}/c/${idCompany}`)
const getGroupByTeam = (idCompany, idGoal) => axios.get(`${host}/goalsTeam/g/t/${idGoal}/c/${idCompany}`)
const getGroupByGoalTeam = (idCompany, idGoal) => axios.get(`${host}/goalsTeam/g/t/goal/${idGoal}/c/${idCompany}`)
const getGroupByKrs = (idCompany, idGoal) => axios.get(`${host}/goalsTeamKrs/krs/g/goal/${idGoal}/c/${idCompany}`)
const getAllGroupByKrs = (idCompany) => axios.get(`${host}/goals/g/p/process/c/krs/${idCompany}`)
const update = (idGoal, data) => axios.put(`${host}/goalsTeamKrs/${idGoal}`,data)

const goalTeamsKrsApi = {
    getByGoal,
    create,
    getAll,
    getByTeamAndKrs,
    getByTeam,
    getGroupByTeam,
    getGroupByGoalTeam,
    getGroupByKrs,
    getAllGroupByKrs,
    update
}

export default goalTeamsKrsApi