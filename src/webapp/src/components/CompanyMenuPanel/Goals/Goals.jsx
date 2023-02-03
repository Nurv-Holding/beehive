import { json, Link, useNavigate, useParams, useSearchParams } from 'react-router-dom'
import { Tab } from '@headlessui/react'
import FormGoal from './FormGoal'
import { useContext } from 'react'
import { ContextUser } from '../../../context/ContextUser'
import { useState } from 'react'
import goalsApi from '../../../api/goalsApi'
import jwtDecode from "jwt-decode"
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