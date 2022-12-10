
import { Tab } from '@headlessui/react'
import { useState } from 'react'
import { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import goalKrsApi from '../../../api/goalKrsApi'
import goalTeamsKrsApi from '../../../api/goalTeamsKrsApi'
import { ContextUser } from '../../../context/ContextUser'
import GoalsList from './GoalsList'

function Summary() {
    const {companyGoals, idCompany, goalAndTeams} = useContext(ContextUser)
    const {idGoal} = useParams()
    const [goalKrs, setGoalKrs] = useState([])
    const [krs, setKrs] = useState([])

    useEffect(() => {
        handlerGoalKrs()
        handlerKrs()

    },[idGoal])

    const handlerGoalKrs = async () => {
        const {data} = await goalKrsApi.getAll(idCompany)
        setGoalKrs(data)
    }

    const handlerKrs = async () => {
        const {data} = await goalTeamsKrsApi.getAllGroupByKrs(idCompany)
        setKrs(data)
    }

    return (
        <Tab.Group>
            <Tab.List className='w-full h-full flex flex-col items-center mt-8'>
                <div className='w-11/12 flex flex-row gap-2'>
                    <Tab className='nav-btn'>
                        {({ selected }) => (
                            <button
                                className={
                                    selected ? 'bg-[#5500C3]' : 'bg-white text-black'
                                }
                            >
                                Resumo
                            </button>
                        )}
                    </Tab>

                    <Tab className='nav-btn'>
                        {({ selected }) => (
                            <button
                                className={
                                    selected ? 'bg-[#5500C3]' : 'bg-white text-black'
                                }
                            >
                                Visão de Futuro
                            </button>
                        )}
                    </Tab>

                    <Tab className='nav-btn'>
                        {({ selected }) => (
                            <button
                                className={
                                    selected ? 'bg-[#5500C3]' : 'bg-white text-black'
                                }
                            >
                                Princípios
                            </button>
                        )}
                    </Tab>

                    <Tab className='nav-btn'>
                        {({ selected }) => (
                            <button
                                className={
                                    selected ? 'bg-[#5500C3]' : 'bg-white text-black'
                                }
                            >
                                Propostas
                            </button>
                        )}
                    </Tab>
                </div>
            </Tab.List>

            <div className='w-full h-full flex flex-col items-center mt-8'>
                <div className='w-11/12'>
                    <Tab.Panels>
                        <Tab.Panel>
                            <GoalsList 
                                companyGoals={companyGoals} 
                                goalKrs={goalKrs} 
                                goalAndTeams={goalAndTeams}
                                krs={krs} 
                            />
                        </Tab.Panel>

                        <Tab.Panel className='container-empresas'>
                            visao de futuro
                        </Tab.Panel>

                        <Tab.Panel className='container-empresas'>
                            principios
                        </Tab.Panel>

                        <Tab.Panel className='container-empresas'>
                            propostas
                        </Tab.Panel>
                    </Tab.Panels>
                </div>
            </div>
        </Tab.Group>
    )
}

export default Summary