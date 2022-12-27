import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import { Tab } from '@headlessui/react'
import FormTimes from './FormTeam'
import ListTeams from './ListTeams'
import { useContext } from 'react'
import { useState } from 'react'
import teamsApi from '../../../api/teamsApi'
import { ContextUser } from '../../../context/ContextUser'
import { useEffect } from 'react'
import goalTeamsKrsApi from '../../../api/goalTeamsKrsApi'
import goalsTeamApi from '../../../api/goalsTeamApi'

function Teams() {
    const { teams, modelChange, item, idCompany, goals } = useContext(ContextUser)
    const [message, setMessage] = useState("")
    const navigate = useNavigate()
    const [searchParams, setSearchParams] = useSearchParams()
    const [goalTeams, setGoalTeams] = useState([])

    useEffect(() => {
        handleGoalTeamsByTeam()

    },[idCompany])

    const handleGoalTeamsByTeam = async () => {
        const { data } = await goalsTeamApi.getAllGoalGroupByTeam(idCompany)
        setGoalTeams(data)
      }

    const handleSubmit = (event) => {
        event.preventDefault()

        searchParams.delete('update')
        setSearchParams(searchParams)

        if (Object.keys(item).length === 0 || item.name === "" || item.descriptions === "") {
            setMessage("Precisa preencher os campos vazios")

        } else {
            teamsApi.create(idCompany, item)
                .then(() => {
                    setMessage("Time criado com sucesso")
                    navigate({
                        pathname: `/company/${idCompany}`,
                        search: `?update=${true}`
                    })

                })
                .catch((error) => {
                    console.error(error)
                    setMessage("Algo deu errado!")
                })
        }
    }

    return (
        <div className='w-full flex flex-col h-full'>
            <ListTeams teams={teams} goals={goals} goalTeams={goalTeams} />

            <div className='hidden'>
                <Tab.Group>
                    <Tab.List className='w-full h-full flex flex-col items-center mt-8'>
                        <div className='w-11/12 flex flex-row gap-2'>
                            <Tab className='nav-btn'>
                                {({ selected }) => (
                                    <button onClick={() => setMessage("")}
                                        className={
                                            selected ? 'bg-[#5500C3]' : 'bg-white text-black'
                                        }
                                    >
                                        Times
                                    </button>
                                )}
                            </Tab>

                            <Tab className='nav-btn'>
                                {({ selected }) => (
                                    <button onClick={() => setMessage("")}
                                        className={
                                            selected ? 'bg-[#5500C3]' : 'bg-white text-black'
                                        }
                                    >
                                        Cadrastrar
                                    </button>
                                )}
                            </Tab>
                        </div>
                    </Tab.List>

                    <div className='w-full h-full flex flex-col items-center mt-8'>
                        <div className='w-11/12'>

                            <Tab.Panels>
                                <Tab.Panel className='container-empresas'>
                                    <ListTeams teams={teams} />
                                </Tab.Panel>

                                <Tab.Panel className='container-empresas'>
                                    <FormTimes
                                        changeModel={modelChange}
                                        handleSubmit={handleSubmit}
                                        message={message}
                                        item={item}
                                    />
                                </Tab.Panel>
                            </Tab.Panels>
                        </div>
                    </div>
                </Tab.Group>
            </div>
        </div>
    )
}

export default Teams