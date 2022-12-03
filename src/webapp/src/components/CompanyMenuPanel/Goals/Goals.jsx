import { json, Link, useNavigate, useParams, useSearchParams } from 'react-router-dom'
import { Tab } from '@headlessui/react'
import FormGoal from './FormGoal'
import ListGoals from './ListGoals'
import { useContext } from 'react'
import { ContextUser } from '../../../context/ContextUser'
import { useState } from 'react'
import goalsApi from '../../../api/goalsApi'
import jwtDecode from "jwt-decode"

function Goals() {
    const { goals, item, modelChange, idCompany } = useContext(ContextUser)
    const [message, setMessage] = useState("Aqui vai uma mensagem")
    const navigate = useNavigate()
    const [searchParams] = useSearchParams()
    const token = localStorage.getItem("token")
    const payload = token? jwtDecode(token): null

    const handleSubmit = (event) => {
        event.preventDefault()

        if (Object.values(item).length === 0 || item.name === "" || item.descriptions === "")
            setMessage("Os campos precisam ser preenchidos")
        else {
            goalsApi.create(idCompany, {...item, author: payload?.id})
                .then(() => {
                    setMessage("Cadastro realizado")
                    navigate({
                        pathname: `/company/${idCompany}`,
                        search: '?update=true'
                    })

                    searchParams.delete("update")

                })
                .catch((error) => {
                    console.error(error)
                    setMessage(error)
                })
        }


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
                                Objetivos
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
                                Cadrastamento
                            </button>
                        )}
                    </Tab>
                </div>
            </Tab.List>

            <div className='w-full h-full flex flex-col items-center mt-8'>
                <div className='w-11/12'>

                    <Tab.Panels>
                        <Tab.Panel className='container-empresas'>
                            <ListGoals goals={goals} />
                        </Tab.Panel>

                        <Tab.Panel className='container-empresas'>
                            <FormGoal
                                modelChange={modelChange}
                                handleSubmit={handleSubmit}
                                message={message}
                            />
                        </Tab.Panel>
                    </Tab.Panels>
                </div>
            </div>
        </Tab.Group>
    )
}

export default Goals