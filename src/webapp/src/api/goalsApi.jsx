import axios from "axios"

const host = 'http://localhost:3002'

const getAll = () => axios.get(`${host}/goals`)
const getAllGoalsTask = () => axios.get(`${host}/goals/c/${1}/tasks`)
const getByIdGoalTasksUsers = (idGoal) => axios.get(`${host}/goals/${idGoal}/c/${1}/tasks/users`)
const getByIdGoalQuantifyTask = (idGoal) => axios.get(`${host}/goals/${idGoal}/c/${1}/q/tasks`)
const getByIdGoalQuantifyTaskDone = (idGoal) => axios.get(`${host}/goals/${idGoal}/c/${1}/q/tasks/done`)

export default {
    getAll,
    getAllGoalsTask,
    getByIdGoalTasksUsers,
    getByIdGoalQuantifyTask,
    getByIdGoalQuantifyTaskDone
}