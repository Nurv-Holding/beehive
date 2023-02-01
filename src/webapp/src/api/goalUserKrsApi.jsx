import axios from "axios"

const host = 'http://localhost:3002'

const getAll = (idCompany) => axios.get(`${host}/goalsUser/c/${idCompany}`)
const getById = (idGoal, idCompany) => axios.get(`${host}/goalsUser/${idGoal}/c/${idCompany}`)
const create = (idCompany,data) => axios.post(`${host}/goalsUser/c/${idCompany}`,data)
const update = (idGoal, data) => axios.put(`${host}/goalsUser/${idGoal}`,data)
const getAllKrsByUser = (idCompany, idUser) => axios.get(`${host}/goalsUser/all/c/${idCompany}/user/${idUser}/krs`)

export default {
    getAll,
    getById,
    create,
    update,
    getAllKrsByUser
}