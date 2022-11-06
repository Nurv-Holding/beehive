import { useEffect, useState } from "react"
import { createContext } from "react"
import { useParams, useSearchParams } from "react-router-dom"
import companiesApi from "../api/companiesApi"
import goalKrsApi from "../api/goalKrsApi"
import goalsApi from "../api/goalsApi"
import goalsTeamApi from "../api/goalsTeamApi"
import teamsApi from "../api/teamsApi"
import usersApi from "../api/usersApi"

export const ContextUser = createContext()

export const ContextUserProvider = ({ children }) => {
    const [goals, setGoals] = useState([])
    const [users, setUsers] = useState([])
    const [teams, setTeams] = useState([])
    const [item, setItem] = useState({})
    const [searchParams] = useSearchParams()
    const { idGoal, idCompany } = useParams()
    const update = searchParams.get('update')

    useEffect(() => {
        handlerUsers()
        handlerGoals()
        handlerTeams()
        
    },[idCompany, update])

    const handlerUsers = async () => {
        const {data} = await usersApi.getAll()
        setUsers(data)
    }

    const handlerTeams = async () => {
        const {data} = await teamsApi.getAll(idCompany)
        setTeams(data)
    }

    const handlerGoals = async () => {
        const {data} = await goalsApi.getAll(idCompany)
        setGoals(data)
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
                    goals,
                    idGoal,
                    users,
                    teams,
                    modelChange,
                    item,
                    idCompany
                }
            }
        >
            {children}
        </ContextUser.Provider> 
    )
}