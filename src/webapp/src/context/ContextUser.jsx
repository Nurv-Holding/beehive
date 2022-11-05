import { useEffect, useState } from "react"
import { createContext } from "react"
import { useParams, useSearchParams } from "react-router-dom"
import companiesApi from "../api/companiesApi"
import goalKrsApi from "../api/goalKrsApi"
import goalsApi from "../api/goalsApi"
import teamsApi from "../api/teamsApi"
import usersApi from "../api/usersApi"

export const ContextUser = createContext()

export const ContextUserProvider = ({ children }) => {
    const [goals, setGoals] = useState([])
    const [goal, setGoal] = useState({})
    const [goalKrs, setGoalKrs] = useState([])
    const [users, setUsers] = useState([])
    const [teams, setTeams] = useState([])
    const [item, setItem] = useState({})
    const [companies, setCompanies] = useState([])
    const [searchParams] = useSearchParams()
    const { idGoal, idCompany } = useParams()
    const update = searchParams.get('update')

    useEffect(() => {
        handlerUsers()
        handlerGoals()
        handlerTeams()
        handlerCompanies()
        handleGoal()
        handleGoalKrs()

    },[idGoal, update])

    const handlerUsers = async () => {
        const {data} = await usersApi.getAll()
        setUsers(data)
    }

    const handleGoal = async () => {
        const { data } = await goalsApi.getById(idGoal, 1)
    
        setGoal(data)
      }
    
      const handleGoalKrs = async () => {
        const { data } = await goalKrsApi.getByGoal(1, idGoal)
    
        setGoalKrs(data)
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
                    goal,
                    idGoal,
                    goalKrs,
                    users,
                    teams,
                    modelChange,
                    item,
                    companies,
                    idCompany
                }
            }
        >
            {children}
        </ContextUser.Provider> 
    )
}