import { useEffect, useState } from "react"
import { createContext } from "react"
import { useParams } from "react-router-dom"
import goalsApi from "../api/goalsApi"

export const ContextUser = createContext()

export const ContextUserProvider = ({ children }) => {
    const [tasksToGoals, setTasksToGoals] = useState([])
    const [goals, setGoals] = useState([])
    const [tasksToGoal, setTasksToGoal] = useState([])
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
    const {idGoal} = useParams()

    useEffect(() => {
        handlerGoalsTasks()
        handlerGoals()
        handlerGoalTasks()
        handleGoalTasksQuantify()
        handleGoalTasksQuantifyDone()

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

    return(
        <ContextUser.Provider 
            value={
                {
                    tasksToGoals,
                    tasksToGoal,
                    tasksToGoalQuantify,
                    tasksToGoalQuantifyDone,
                    goals
                }
            }
        >
            {children}
        </ContextUser.Provider> 
    )
}