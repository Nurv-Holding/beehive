import { useEffect, useState } from "react"
import { createContext } from "react"
import { useParams } from "react-router-dom"
import goalsApi from "../api/goalsApi"
import subtasksApi from "../api/subtasksApi"
import teamsApi from "../api/teamsApi"
import usersApi from "../api/usersApi"

export const ContextUser = createContext()

export const ContextUserProvider = ({ children }) => {
    const [tasksToGoals, setTasksToGoals] = useState([])
    const [goals, setGoals] = useState([])
    const [tasksToGoal, setTasksToGoal] = useState([])
    const [users, setUsers] = useState([])
    const [teams, setTeams] = useState({})
    const [item, setItem] = useState({})
    const [tasksToGoalQuantify, setTasksToGoalQuantify] = useState({
        idGoal: null,
        nameGoal:"",
        totalTask: null
    })
    const [tasksToGoalQuantifyDone, setTasksToGoalQuantifyDone] = useState({
        idGoal: null,
        nameGoal:"",
        totalTaskDone: null
    })
    const { idGoal } = useParams()

    useEffect(() => {
        handlerUsers()
        handlerGoalsTasks()
        handlerGoals()
        handlerGoalTasks()
        handleGoalTasksQuantify()
        handleGoalTasksQuantifyDone()
        handlerTeams()

    },[idGoal])

    const handlerUsers = async () => {
        const {data} = await usersApi.getAll()
        setUsers(data)
    }

    const handlerTeams = async () => {
        const {data} = await teamsApi.getAll()
        setTeams(data)
    }

    const handlerGoalsTasks = async () => {
        const {data} = await goalsApi.getAllGoalsTask()
        setTasksToGoals(data)
    }

    const handlerGoals = async () => {
        const {data} = await goalsApi.getAll()
        setGoals(data)
    }

    const handlerGoalTasks = async () => {
        const {data} = await goalsApi.getByIdGoalTasksUsers(idGoal)
        setTasksToGoal(data)
    }

    const handleGoalTasksQuantify = async () => {
        const {data} = await goalsApi.getByIdGoalQuantifyTask(idGoal)
        console.log("handleGoalTasksQuantify",data)
        setTasksToGoalQuantify(data)
    }

    const handleGoalTasksQuantifyDone = async () => {
        const {data} = await goalsApi.getByIdGoalQuantifyTaskDone(idGoal)
        console.log("handleGoalTasksQuantifyDone",data)
        setTasksToGoalQuantifyDone(data)
    }

    const handlerTaskSubtasks = async () => {
        const {data} = await subtasksApi.getByIdTaskSubtasks(tasksToGoal)
        setTasksToGoal(data)
    }

    const modelChange = ({ target }) => {
        setItem((state) => {
            return {...state,[target.name]: target.value}
        })
    }

    return(
        <ContextUser.Provider 
            value={
                {
                    tasksToGoals,
                    tasksToGoal,
                    tasksToGoalQuantify,
                    tasksToGoalQuantifyDone,
                    goals,
                    users,
                    teams,
                    modelChange,
                    item
                }
            }
        >
            {children}
        </ContextUser.Provider> 
    )
}