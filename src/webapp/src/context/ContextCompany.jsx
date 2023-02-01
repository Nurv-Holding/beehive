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
import goalUserKrsApi from "../api/goalUserKrsApi"

export const ContextCompany = createContext()

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
    const [company, setCompany] = useState({name:"", cnpj:"", createdAt:"", updatedAt:""})
    const update = searchParams.get('update')
    const token = localStorage.getItem("token")
    const payload = token? jwtDecode(token): null
    const [goalKrs, setGoalKrs] = useState([])
    const [goalUserKrs, setGoalUserKrs] = useState([])
    const [newGoalUsersKrs, setNewGoalUsersKrs] = useState([])
    const [krs, setKrs] = useState([])
    const [newTeamsUser, setNewTeamsUser] = useState([])

    useEffect(() => {
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
        returnNewTeamsUser()
        handlerGoalUserKrs()
        returnNewGoalUsersKrs()
        
    },[idCompany, update])

    const returnNewTeamsUser = async () => {
        const {data} = await teamsUsersApi.getAllTeamsAndUsers(idCompany)

        setNewTeamsUser(() => {
            return data.reduce((acum, current) => {
        
                const teamsUser = acum.find(f => f.id === current.idUser) || 
                {name: current.nameUser, id:current.idUser, idTeamUser:current.idTeamUser, email:current.emailUser, teams: []}
                teamsUser.teams.push({...current})
                
                return [...acum.filter(e => e.id !== current.idUser), teamsUser]
        
            }, [])
        })
    }

    const returnNewGoalUsersKrs = async () => {
        const {data} = await goalUserKrsApi.getAllKrsByUser(idCompany, payload.id)

        setNewGoalUsersKrs(() => {
            return data.reduce((acum, current) => {

                const goal = acum.find(f => f.idGoalUser === current.idGoalUser) || 
                {nameGoal: current.nameGoal,idGoalUser:current.idGoalUser, nameGoalUser:current.nameGoalUser, idGoal:current.idGoal, idUser:current.idUser, nameUser:current.nameUser, krs: []}
                goal.krs.push({...current})
                
                return [...acum.filter(e => e.idGoalUser !== current.idGoalUser), goal]
        
            }, [])
        })
    }

    const handlerGoalKrs = async () => {
        const {data} = await goalKrsApi.getAll(idCompany)
        setGoalKrs(data)
    }

    const handlerGoalUserKrs = async () => {
        if(payload){
            const {data} = await goalUserKrsApi.getAllKrsByUser(idCompany, payload.id)
            setGoalUserKrs(data)
        }
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

    const modelChange = ({ target }) => {
        setItem((state) => {
            return {...state,[target.name]: target.value}
        })
    }

    return(
        <ContextCompany.Provider 
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
                    newTeamsUser,
                    newGoalUsersKrs,
                    goalKrs,
                    krs,
                    goalUserKrs
                }
            }
        >
            {children}
        </ContextCompany.Provider> 
    )
}