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
import goalTeamsKrsApi from "../api/goalTeamsKrsApi"

export const ContextUser = createContext()

export const ContextUserProvider = ({ children }) => {
    const [goals, setGoals] = useState([])
    const [usersByCompany, setUsersByCompany] = useState([])
    const [users, setUsers] = useState([])
    const [teams, setTeams] = useState([])
    const [item, setItem] = useState({})
    const [goalAndTeams, setGoalAndTeams] = useState([])
    const [searchParams] = useSearchParams()
    const { idGoal, idCompany, idTeam } = useParams()
    const [companyGoals, setCompanyGoals] = useState([])
    const [teamUsers, setTeamUsers] = useState([])
    const [company, setCompany] = useState({name:"", cnpj:"", createdAt:"", updatedAt:""})
    const update = searchParams.get('update')
    const token = localStorage.getItem("token")
    const payload = token? jwtDecode(token): null
    const [goalKrs, setGoalKrs] = useState([])
    const [krs, setKrs] = useState([])
    

    useEffect(() => {
        const handlerGoalKrs = async () => {
            const {data} = await goalKrsApi.getAll(idCompany)
            setGoalKrs(data)
        }
        
        const handlerKrs = async () => {
            const {data} = await goalTeamsKrsApi.getAllGroupByKrs(idCompany)
            setKrs(data)
        }
    
        const handlerTeamUsers = async () => {
            const {data} = await teamsUsersApi.getAllTeamsAndUsers(idCompany)
            setTeamUsers(data)
        }
    
        const handleCompany = async () => {
            const {data}= await companiesApi.getById(idCompany)
            setCompany(data)
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

        handlerUsersByCompany()
        handlerGoals()
        handlerTeams()
        handlerTeamUsers()
        setItem({})
        handlerUsers()
        handlerCompanyGoals()
        handlerGoalAndTeams()
        handleCompany()
        handlerGoalKrs()
        handlerKrs()
        
    },[idCompany, update])

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
                    company,
                    modelChange,
                    teamUsers,
                    item,
                    goalAndTeams,
                    idCompany,
                    token,
                    payload,
                    goalKrs,
                    idTeam,
                    krs
                }
            }
        >
            {children}
        </ContextUser.Provider> 
    )
}