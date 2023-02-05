import ListTeams from './ListTeams'
import { useContext } from 'react'
import { useState } from 'react'
import teamsApi from '../../../api/teamsApi'
import { ContextUser } from '../../../context/ContextUser'
import { useEffect } from 'react'
import goalsTeamApi from '../../../api/goalsTeamApi'
import usersApi from '../../../api/usersApi'

function Teams() {
    const { teams, idCompany, goals } = useContext(ContextUser)
    const [goalTeams, setGoalTeams] = useState([])
    const [allTeams, setAllTeams] = useState([])
    const [teamsByKrs, setTeamsByKrs] = useState([])
    const [teamByTeam, setTeamByTeam] = useState([])
    const [users, setUsers] = useState([])

    useEffect(() => {
        const handleGoalTeamsByTeam = async () => {
            const { data } = await goalsTeamApi.getAllGoalGroupByTeam(idCompany)
            setGoalTeams(data)
        }
    
        const handleTeamsByTeams = async () => {
            const { data } = await teamsApi.getByTeams(idCompany)
            setTeamByTeam(data)
        }
    
        const handleUsers = async () => {
            const { data } = await usersApi.getAllByCompany(idCompany)
            setUsers(data)
        }
    
        const handleTeamsByGoals = async () => {
            const { data } = await teamsApi.getAllTeams(idCompany)
            setAllTeams(data)
        }
    
        const handleTeamsByKrs = async () => {
            const { data } = await teamsApi.getAllTeamsByKrs(idCompany)
            setTeamsByKrs(data)
        }

        handleGoalTeamsByTeam()
        handleTeamsByGoals()
        handleTeamsByKrs()
        handleUsers()
        handleTeamsByTeams()

    },[idCompany])

    return (
        <div className='w-full flex flex-col h-full'>
            <ListTeams 
            teams={teams} 
            goals={goals} 
            goalTeams={goalTeams}
            allTeams={allTeams}
            users={users}
            teamsByKrs={teamsByKrs}
            teamByTeam={teamByTeam}
            />
        </div>
    )
}

export default Teams