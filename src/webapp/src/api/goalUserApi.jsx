import axios from "axios"

const host = 'http://localhost:3002'

const getAll = (idCompany) => axios.get(`${host}/goalsUser/c/${idCompany}`)
const getById = (idGoal, idCompany) => axios.get(`${host}/goalsUser/${idGoal}/c/${idCompany}`)
const create = (idCompany,data) => axios.post(`${host}/goalsUser/c/${idCompany}`,data)
const update = (idGoal, data) => axios.put(`${host}/goalsUser/${idGoal}`,data)
const getAllKrsByUser = (idCompany, idUser) => axios.get(`${host}/goalsUser/all/c/${idCompany}/user/${idUser}/krs`)
const getAllKrsByCompany = (idCompany) => axios.get(`${host}/goalsUser/all/c/${idCompany}/krs`)

//krs
const getAllKrs = (idCompany) => axios.get(`${host}/goalsUserKrs/c/${idCompany}`)
const getByIdKr = (idCompany, idGoalsUserKr) => axios.get(`${host}/goalsUserKrs/${idGoalsUserKr}/c/${idCompany}`)
const createKr = (idCompany,data) => axios.post(`${host}/goalsUserKrs/c/${idCompany}`,data)
const updateKr = (idGoal, data) => axios.put(`${host}/goalsUserKrs/${idGoal}`,data)

export default {
    getAll,
    getById,
    create,
    update,
    getAllKrsByUser,
    getAllKrsByCompany,
    getAllKrs,
    getByIdKr,
    createKr,
    updateKr
}