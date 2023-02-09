import ListTeams from '../components/CompanyMenuPanel/Teams/ListTeams'
import { useContext } from 'react'
import { useState } from 'react'
import teamsApi from '../api/teamsApi'
import { ContextCompany } from '../context/ContextCompany'
import { useEffect } from 'react'
import goalsTeamApi from '../api/goalsTeamApi'

function Teams() {
    const { teams, idCompany, goals, usersByCompany, payload } = useContext(ContextCompany)
    const [goalTeams, setGoalTeams] = useState([])
    const [allTeams, setAllTeams] = useState([])
    const [teamsByKrs, setTeamsByKrs] = useState([])
    const [teamByTeam, setTeamByTeam] = useState([])

    useEffect(() => {
        const handleGoalTeamsByTeam = async () => {
            const { data } = await goalsTeamApi.getAllGoalGroupByTeam(idCompany)
            setGoalTeams(data)
        }
    
        const handleTeamsByTeams = async () => {
            const { data } = await teamsApi.getByTeams(idCompany)
            setTeamByTeam(data)
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
        handleTeamsByTeams()

    },[idCompany])

    return (
        <div className='w-full flex flex-col h-full'>
            <ListTeams 
            teams={teams} 
            goals={goals} 
            goalTeams={goalTeams}
            allTeams={allTeams}
            users={usersByCompany}
            teamsByKrs={teamsByKrs}
            teamByTeam={teamByTeam}
            payload={payload}
            />
        </div>
    )
}

export default Teams