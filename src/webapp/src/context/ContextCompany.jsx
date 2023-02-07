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
import goalUserKrsApi from "../api/goalUserApi"
import historyGoalsUserKrsApi from "../api/historyGoalsUserKrsApi"
import goalUserApi from "../api/goalUserApi"
import taskUsersApi from "../api/taskUsersApi"
import futureVisionApi from "../api/futureVisionApi"
import principlesApi from "../api/principlesApi"
import proposalsApi from "../api/proposalsApi"
import profilesApi from "../api/profilesApi"

export const ContextCompany = createContext()

export const ContextUserProvider = ({ children }) => {
    const [goals, setGoals] = useState([])
    const [goal, setGoal] = useState(null)
    const [usersByCompany, setUsersByCompany] = useState([])
    const [taskUsers, setTasksUsers] = useState([])
    const [users, setUsers] = useState([])
    const [teams, setTeams] = useState([])
    const [item, setItem] = useState({})
    const [goalAndTeams, setGoalAndTeams] = useState([])
    const [searchParams] = useSearchParams()
    const { idGoal, idCompany, idUser } = useParams()
    const [companyGoals, setCompanyGoals] = useState([])
    const [teamUsers, setTeamUsers] = useState([])
    const [company, setCompany] = useState({name:"", cnpj:"", createdAt:"", updatedAt:""})
    const update = searchParams.get('update')
    const [goalKrs, setGoalKrs] = useState([])
    const [goalUserKrs, setGoalUserKrs] = useState([])
    const [newGoalUsersKrs, setNewGoalUsersKrs] = useState([])
    const [newGoalUsersAllKrs, setNewGoalUsersAllKrs] = useState([])
    const [krs, setKrs] = useState([])
    const [newTeamsUser, setNewTeamsUser] = useState([])
    const [teamsAndUsersByGoal, setTeamsAndUsersByGoal] = useState([])
    const [teamsAndUsersByUser, setTeamsAndUsersByUser] = useState([])
    const [newAllTeamsAndUsers, setNewAllTeamsAndUsers] = useState([])
    const [historyGoalUsersKrs, setHistoryGoalUsersKrs] = useState([])
    const [futureVisions, setFutureVisions] = useState([])
    const [prinples, setPrinciples] = useState([])
    const [proposals, setProposals] = useState([])
    const [goalUsers, setGoalUsers] = useState([])
    const [newPayload, setNewPayload] = useState(null)
    const [profile, setProfile] = useState(null)
    
    useEffect(() => {
        const token = localStorage.getItem("token")
        const payload = token? jwtDecode(token): null
        setNewPayload(() => payload)

        const getOneProfile = async () => {
            const { data } = await profilesApi.getById(payload?.idProfile)
            setProfile(data)
        }

        const returnAllNewGoalsUsers = async () => {
            const {data} = await goalsTeamApi.getAllTeamsAndUsers(idCompany)

            setNewAllTeamsAndUsers(() => {
                let items = [];
                (data || []).forEach((f) => {
                    const verifyIdTeam = data.find(e => e.idGoal === f.idGoal && e.idUser === f.idUser)
                    if(items.length === 0) items.push(verifyIdTeam)
            
                    if(verifyIdTeam && !(items || []).some(s => s.idGoal === verifyIdTeam.idGoal && s.idUser === verifyIdTeam.idUser)) 
                        items.push(verifyIdTeam)
                    
                })
            
                return  items
            })

        }

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
            if(idUser){
                const {data} = await goalUserKrsApi.getAllKrsByUser(idCompany, idUser)
    
                setNewGoalUsersKrs(() => {
                    return data.reduce((acum, current) => {
        
                        const goal = acum.find(f => f.idGoalUser === current.idGoalUser) || 
                        {nameGoal: current.nameGoal,idGoalUser:current.idGoalUser, nameGoalUser:current.nameGoalUser, idGoal:current.idGoal, idUser:current.idUser, nameUser:current.nameUser, krs: []}
                        goal.krs.push({...current})
                        
                        return [...acum.filter(e => e.idGoalUser !== current.idGoalUser), goal]
                
                    }, [])
                })
            }else{
                setNewGoalUsersKrs([])
            }
        }
    
        const returnNewGoalUsersAllKrs = async () => {
            const {data} = await goalUserKrsApi.getAllKrsByCompany(idCompany)
    
            setNewGoalUsersAllKrs(() => {
                return data.reduce((acum, current) => {
    
                    const goal = acum.find(f => f.idGoalUser === current.idGoalUser) || 
                    {nameGoal: current.nameGoal,idGoalUser:current.idGoalUser, nameGoalUser:current.nameGoalUser, idGoal:current.idGoal, idUser:current.idUser, nameUser:current.nameUser, krs: []}
                    goal.krs.push({...current})
                    
                    return [...acum.filter(e => e.idGoalUser !== current.idGoalUser), goal]
            
                }, [])
            })
        }
    
        const handlerTeamsAndUsersByGoal = async () => {
            if(idUser){
                const {data} = await goalsTeamApi.getTeamsAndUsersByGoal(idCompany, idUser, idGoal)
                setTeamsAndUsersByGoal(data)
    
            }else{
                setTeamsAndUsersByGoal([])
            }
            
        }
    
        const handlerTeamsAndUsers = async () => {
            if(idUser){
                const {data} = await goalsTeamApi.getTeamsAndUsersByUser(idCompany, idUser)
                setTeamsAndUsersByUser(data)
    
            }else{
                setTeamsAndUsersByUser([])
            }
            
        }
    
        const handlerTasksUsers = async () => {
            if(idUser){
                const {data} = await taskUsersApi.getTasksUserByGoal(idCompany, idUser)
                setTasksUsers(data)
    
            }else{
                setTasksUsers([])
            }
        }
    
        const handlerFutureVisions = async () => {
            const {data} = await futureVisionApi.getAll(idCompany)
            setFutureVisions(data)
        }
    
        const handlerPrinciples = async () => {
            const {data} = await principlesApi.getAll(idCompany)
            setPrinciples(data)
        }
    
        const handlerProposals = async () => {
            const {data} = await proposalsApi.getAll(idCompany)
            setProposals(data)
        }
    
        const handlerHistoryGoalUsersKrs = async () => {
            const {data} = await historyGoalsUserKrsApi.getAll(idCompany)
            setHistoryGoalUsersKrs(data)
        }
    
        const handlerGoal = async () => {
            if(idGoal){
                const {data} = await goalsApi.getById(idGoal, idCompany)
                setGoal(data)
            }else{
                setGoal([])
            }
        }
    
        const handlerGoalUsers = async () => {
            const {data} = await goalUserApi.getAll(idCompany)
            setGoalUsers(data)
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

        getOneProfile()
        handlerUsersByCompany()
        returnAllNewGoalsUsers()
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
        handlerTeamsAndUsersByGoal()
        handlerHistoryGoalUsersKrs()
        handlerGoalUsers()
        handlerGoal()
        handlerTasksUsers()
        handlerTeamsAndUsers()
        handlerFutureVisions()
        handlerPrinciples()
        handlerProposals()
        returnNewGoalUsersAllKrs()
        
    },[idCompany, idGoal, update, idUser])

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
                    payload: newPayload,
                    newTeamsUser,
                    newGoalUsersKrs,
                    goalKrs,
                    krs,
                    goalUserKrs,
                    teamsAndUsersByGoal,
                    idUser,
                    historyGoalUsersKrs,
                    goalUsers,
                    goal,
                    taskUsers,
                    teamsAndUsersByUser,
                    futureVisions,
                    prinples,
                    proposals,
                    newGoalUsersAllKrs,
                    newAllTeamsAndUsers,
                    profile
                }
            }
        >
            {children}
        </ContextCompany.Provider> 
    )
}