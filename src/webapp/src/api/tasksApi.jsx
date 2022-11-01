import axios from "axios"

const host = 'http://localhost:3002'

const create = (idCompany=1,data) => axios.post(`${host}/tasks/c/${idCompany}`,data)
const getAll = (idCompany=1,idGoal) => axios.get(`${host}/tasks/c/${idCompany}/goal/${idGoal}`)

export default {
    create,
    getAll
}