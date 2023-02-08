import axios from "axios"

const host = process.env.REACT_APP_HOSTPROD

const create = (idCompany,data) => axios.post(`${host}/taskUsers/c/${idCompany}`,data)
const getAll = (idCompany) => axios.get(`${host}/taskUsers/c/${idCompany}`)
const getByUserAndKrs = (idCompany, idGoal) => axios.get(`${host}/taskUsers/user/${idGoal}/krs/c/${idCompany}`)
const getTasksUserByGoal = (idCompany, idUser) => axios.get(`${host}/taskUsers/user/${idUser}/c/${idCompany}/goal`)
const update = (idTaskUser, data) => axios.put(`${host}/taskUsers/${idTaskUser}`, data)

const taskUsersApi = {
    create,
    getAll,
    getByUserAndKrs,
    update,
    getTasksUserByGoal
}

export default taskUsersApi