import { useContext } from 'react'
import { ContextUser } from '../../../context/ContextUser'
import GoalsList from './GoalsList'

function Goals() {
    const { companyGoals, goalAndTeams, krs, goalKrs } = useContext(ContextUser)

    return (
        <div className='w-full h-full flex flex-col items-center mt-8'>
            <GoalsList
                companyGoals={companyGoals}
                goalKrs={goalKrs}
                goalAndTeams={goalAndTeams}
                krs={krs}
            />
        </div>
    )
}

export default Goals