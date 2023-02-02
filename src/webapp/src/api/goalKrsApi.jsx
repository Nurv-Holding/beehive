import axios from "axios"

const host = "https://beehive-teste-app.onrender.com"

const getAll = (idCompany) => axios.get(`${host}/goalsKrs/c/${idCompany}`)
const create = (idCompany,data) => axios.post(`${host}/goalsKrs/c/${idCompany}`,data)
const getByGoal = (idCompany,idGoal) => axios.get(`${host}/goals/${idGoal}/krs/c/${idCompany}`)
const getById = (idCompany,idGoalKr) => axios.get(`${host}/goalsKrs/${idGoalKr}/c/${idCompany}`)
const update = (idGoalKrs,data) => axios.put(`${host}/goalsKrs/${idGoalKrs}`, data)

export default {
    getAll,
    getByGoal,
    create,
    update,
    getById
}