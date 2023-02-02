import axios from "axios"

const host = process.env.HOST

const create = (idCompany,data) => axios.post(`${host}/taskUsers/c/${idCompany}`,data)
const getAll = (idCompany) => axios.get(`${host}/taskUsers/c/${idCompany}`)
const getByUserAndKrs = (idCompany, idGoal) => axios.get(`${host}/taskUsers/user/${idGoal}/krs/c/${idCompany}`)
const update = (idTaskUser, data) => axios.put(`${host}/taskUsers/${idTaskUser}`, data)

export default {
    create,
    getAll,
    getByUserAndKrs,
    update
}