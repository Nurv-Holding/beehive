import axios from "axios"

const host = 'http://localhost:3002'

const getAll = () => axios.get(`${host}/subtasks`)
const getByIdTaskSubtasks = (idTask) => axios.get(`${host}/tasks/${idTask}/subtasks/c/${1}`)
const getByIdTaskQuantifySubtasks = (idTask) => axios.get(`${host}/tasks/${idTask}/q/subtasks/c/${1}`)
const getByIdTaskQuantifySubtasksDone = (idTask) => axios.get(`${host}/tasks/${idTask}/q/subtasks/c/${1}/done`)

export default {
    getAll,
    getByIdTaskSubtasks,
    getByIdTaskQuantifySubtasks,
    getByIdTaskQuantifySubtasksDone
}