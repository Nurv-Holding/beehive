import axios from "axios"

const host = 'http://localhost:3002'

const getAll = (idCompany=1) => axios.get(`${host}/goalsKrs/c/${idCompany}`)
const create = (idCompany=1,data) => axios.post(`${host}/goalsKrs/c/${idCompany}`,data)
const getByGoal = (idCompany=1,idGoal) => axios.get(`${host}/goals/${idGoal}/krs/c/${idCompany}`)

export default {
    getAll,
    getByGoal,
    create
}