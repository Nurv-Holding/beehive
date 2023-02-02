import axios from "axios"

const host = "https://beehive-teste-app.onrender.com"

const getAll = (idCompany) => axios.get(`${host}/goals/c/${idCompany}`)
const getById = (idGoal, idCompany) => axios.get(`${host}/goals/${idGoal}/c/${idCompany}`)
const create = (idCompany,data) => axios.post(`${host}/goals/c/${idCompany}`,data)
const update = (idGoal, data) => axios.put(`${host}/goals/${idGoal}`,data)

export default {
    getAll,
    getById,
    create,
    update
}