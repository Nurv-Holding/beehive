import { useContext } from 'react'
import { ContextCompany } from '../context/ContextCompany'
import GoalsList from '../components/CompanyMenuPanel/Goals/GoalsList'

function Goals() {
    const { companyGoals, idCompany, goalAndTeams, krs, goalKrs } = useContext(ContextCompany)

    return (
        <div className='w-full h-full flex flex-col items-center mt-8'>
            <GoalsList
                companyGoals={companyGoals}
                goalKrs={goalKrs}
                goalAndTeams={goalAndTeams}
                krs={krs}
                idCompany={idCompany}
            />
        </div>
    )
}

export default Goals