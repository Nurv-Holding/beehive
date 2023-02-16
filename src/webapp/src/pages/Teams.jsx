import ListTeams from '../components/CompanyMenuPanel/Teams/ListTeams'
import { useContext } from 'react'
import { ContextCompany } from '../context/ContextCompany'

function Teams() {
    const { 
        usersByCompany, 
        payload,
        teamByTeam,
        teamsByKrs,
        allTeams
    } = useContext(ContextCompany)
    
    return (
        <div className='w-full flex flex-col h-full'>
            <ListTeams 
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