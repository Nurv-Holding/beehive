import axios from "axios"

const host = 'http://localhost:3002'

const create = (idCompany,data) => axios.post(`${host}/tasks/c/${idCompany}`,data)
const getAll = (idCompany,idGoal) => axios.get(`${host}/tasks/c/${idCompany}/goal/${idGoal}`)
const update = (idUser, data) => axios.get(`${host}/tasks/${idUser}`,data)
const getByIdQuantifySubtasks = (idCompany=1, idTask) => axios.get(`${host}/tasks/t/${idTask}/q/subtasks/c/${idCompany}`)
const getQuantifySubtasksDone = (idCompany=1, idTask) => axios.get(`${host}/tasks/t/${idTask}/q/subtasks/c/${idCompany}/done`)

export default {
    create,
    getAll,
    update,
    getByIdQuantifySubtasks,
    getQuantifySubtasksDone
}