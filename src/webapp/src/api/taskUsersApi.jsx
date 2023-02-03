import axios from "axios"

const host = "https://beehive-teste-app.onrender.com"

const create = (idCompany,data) => axios.post(`${host}/taskUsers/c/${idCompany}`,data)
const getAll = (idCompany) => axios.get(`${host}/taskUsers/c/${idCompany}`)
const getByUserAndKrs = (idCompany, idGoal) => axios.get(`${host}/taskUsers/user/${idGoal}/krs/c/${idCompany}`)
const update = (idTaskUser, data) => axios.put(`${host}/taskUsers/${idTaskUser}`, data)

export {
    create,
    getAll,
    getByUserAndKrs,
    update
}