import axios from "axios"

const host = 'http://localhost:3002'

const getAll = () => axios.get(`${host}/goals`)
const getAllGoalsTask = () => axios.get(`${host}/goals/c/${1}/tasks`)
const getByIdGoalTask = (idGoal) => axios.get(`${host}/goals/${idGoal}/c/${1}/tasks`)
const getByIdGoalQuantifyTask = (idGoal) => axios.get(`${host}/goals/${idGoal}/c/${1}/q/tasks`)

export default {
    getAll,
    getAllGoalsTask,
    getByIdGoalTask,
    getByIdGoalQuantifyTask
}