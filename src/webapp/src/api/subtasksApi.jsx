import axios from "axios"

const host = 'http://localhost:3002'

const getAll = () => axios.get(`${host}/subtasks`)
const getByIdTaskSubtasks = (idTask) => axios.get(`${host}/tasks/${idTask}/subtasks/c/${1}`)
const getAllTaskQuantifySubtasks = () => axios.get(`${host}/tasks/t/q/subtasks/c/${1}`)
const getByIdTaskQuantifySubtasksDone = () => axios.get(`${host}/tasks/t/q/subtasks/c/${1}/done`)

export default {
    getAll,
    getByIdTaskSubtasks,
    getAllTaskQuantifySubtasks,
    getByIdTaskQuantifySubtasksDone
}