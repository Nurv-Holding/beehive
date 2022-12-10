import { useEffect, useState } from "react"
import { createContext } from "react"
import { useParams, useSearchParams } from "react-router-dom"
import companiesApi from "../api/companiesApi"
import goalKrsApi from "../api/goalKrsApi"
import goalsApi from "../api/goalsApi"
import goalsTeamApi from "../api/goalsTeamApi"
import teamsApi from "../api/teamsApi"
import teamsUsersApi from "../api/teamsUsersApi"
import usersApi from "../api/usersApi"
import jwtDecode from "jwt-decode"

export const ContextUser = createContext()

export const ContextUserProvider = ({ children }) => {
    const [goals, setGoals] = useState([])
    const [usersByCompany, setUsersByCompany] = useState([])
    const [users, setUsers] = useState([])
    const [teams, setTeams] = useState([])
    const [item, setItem] = useState({})
    const [goalAndTeams, setGoalAndTeams] = useState([])
    const [searchParams] = useSearchParams()
    const { idGoal, idCompany } = useParams()
    const [companyGoals, setCompanyGoals] = useState([])
    const [teamUsers, setTeamUsers] = useState([])
    const update = searchParams.get('update')
    const token = localStorage.getItem("token")
    const payload = token? jwtDecode(token): null

    useEffect(() => {
        handlerUsersByCompany()
        handlerGoals()
        handlerTeams()
        handlerTeamUsers()
        setItem({})
        handlerUsers()
        handlerCompanyGoals()
        handlerGoalAndTeams()
        
    },[idCompany, update])

    const handlerTeamUsers = async () => {
        const {data} = await teamsUsersApi.getAllTeamsAndUsers(idCompany)
        setTeamUsers(data)
    }

    const handlerGoalAndTeams = async () => {
        const {data} = await goalsTeamApi.getAllGoalGroupByTeam(idCompany)
        setGoalAndTeams(data)
    }

    const handlerCompanyGoals = async () => {
        const {data} = await companiesApi.getCompanyAndGoals(idCompany)
        setCompanyGoals(data)
    }

    const handlerUsersByCompany = async () => {
        const {data} = await usersApi.getAllByCompany(idCompany)
        setUsersByCompany(data)
    }

    const handlerUsers = async () => {
        const {data} = await usersApi.getAll(idCompany)
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
                    usersByCompany,
                    users,
                    teams,
                    companyGoals,
                    modelChange,
                    teamUsers,
                    item,
                    goalAndTeams,
                    idCompany,
                    token,
                    payload
                }
            }
        >
            {children}
        </ContextUser.Provider> 
    )
}