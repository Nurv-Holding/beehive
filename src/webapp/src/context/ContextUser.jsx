import { useEffect, useState } from "react"
import { createContext } from "react"
import { useParams } from "react-router-dom"
import goalsApi from "../api/goalsApi"

export const ContextUser = createContext()

export const ContextUserProvider = ({ children }) => {
    const [tasksToGoals, setTasksToGoals] = useState([])
    const [goals, setGoals] = useState([])
    const [tasksToGoal, setTasksToGoal] = useState([])
    const [tasksToGoalQuantify, setTasksToGoalQuantify] = useState([])
    const {idGoal} = useParams()

    useEffect(() => {
        handlerGoalsTasks()
        handlerGoals()
        handlerGoalTasks()

    },[])

    const handlerGoalsTasks = async () => {
        const {data} = await goalsApi.getAllGoalsTask()
        setTasksToGoals(data)
    }

    const handlerGoals = async () => {
        const {data} = await goalsApi.getAll()
        setGoals(data)
    }

    const handlerGoalTasks = async () => {
        const {data} = await goalsApi.getByIdGoalTask(idGoal)
        setTasksToGoal(data)
    }

    const handleGoalTasksQuantify = () => {
        const {data} = goalsApi.getByIdGoalQuantifyTask(idGoal)
    }

    return(
        <ContextUser.Provider 
            value={
                {
                    tasksToGoals,
                    tasksToGoal,
                    goals
                }
            }
        >
            {children}
        </ContextUser.Provider> 
    )
}