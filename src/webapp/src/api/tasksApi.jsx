import axios from "axios"

const host = process.env.HOST

const create = (idCompany,data) => axios.post(`${host}/tasks/c/${idCompany}`,data)
const remove = (idTask) => axios.delete(`${host}/tasks/${idTask}`)
const getAll = (idCompany,idGoal) => axios.get(`${host}/tasks/c/${idCompany}/goal/${idGoal}`)
const update = (idUser, data) => axios.get(`${host}/tasks/${idUser}`,data)
const getByIdQuantifySubtasks = (idCompany=1, idTask) => axios.get(`${host}/tasks/t/${idTask}/q/subtasks/c/${idCompany}`)
const getQuantifySubtasksDone = (idCompany=1, idTask) => axios.get(`${host}/tasks/t/${idTask}/q/subtasks/c/${idCompany}/done`)

export default {
    create,
    remove,
    getAll,
    update,
    getByIdQuantifySubtasks,
    getQuantifySubtasksDone
}