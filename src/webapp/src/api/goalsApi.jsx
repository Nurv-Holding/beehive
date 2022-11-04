import axios from "axios"

const host = 'http://localhost:3002'

const getAll = (idCompany=1) => axios.get(`${host}/goals/c/${idCompany}`)
const getById = (idGoal, idCompany=1) => axios.get(`${host}/goals/${idGoal}/c/${idCompany}`)

export default {
    getAll,
    getById
}