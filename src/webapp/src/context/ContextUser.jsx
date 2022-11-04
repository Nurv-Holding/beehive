import { useEffect, useState } from "react"
import { createContext } from "react"
import { useParams } from "react-router-dom"
import companiesApi from "../api/companiesApi"
import goalsApi from "../api/goalsApi"
import subtasksApi from "../api/subtasksApi"
import teamsApi from "../api/teamsApi"
import usersApi from "../api/usersApi"

export const ContextUser = createContext()

export const ContextUserProvider = ({ children }) => {
    const [goals, setGoals] = useState([])
    const [users, setUsers] = useState([])
    const [teams, setTeams] = useState({})
    const [item, setItem] = useState({})
    const [companies, setCompanies] = useState([])
    const { idGoal } = useParams()

    useEffect(() => {
        handlerUsers()
        handlerGoals()
        handlerTeams()
        handlerCompanies()

    },[idGoal])

    const handlerUsers = async () => {
        const {data} = await usersApi.getAll()
        setUsers(data)
    }

    const handlerTeams = async () => {
        const {data} = await teamsApi.getAll()
        setTeams(data)
    }

    const handlerGoals = async () => {
        const {data} = await goalsApi.getAll()
        setGoals(data)
    }

    const modelChange = ({ target }) => {
        setItem((state) => {
            return {...state,[target.name]: target.value}
        })
    }

    const handlerCompanies = async () => {
        const {data} = await companiesApi.getAll()
        setCompanies(data)
    }

    return(
        <ContextUser.Provider 
            value={
                {
                    goals,
                    users,
                    teams,
                    modelChange,
                    item,
                    companies
                }
            }
        >
            {children}
        </ContextUser.Provider> 
    )
}