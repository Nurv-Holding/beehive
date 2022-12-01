import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import { Tab } from '@headlessui/react'
import FormTimes from './times/formTimes'
import ListaTimes from './times/listaTimes'
import { useContext } from 'react'
import { ContextUser } from '../../context/ContextUser'
import TimesCards from './times/TimesCards'
import { useState } from 'react'
import teamsApi from '../../api/teamsApi'

function Times() {
    const { teams, modelChange, item, idCompany } = useContext(ContextUser)
    const [message, setMessage] = useState("Aqui vai uma mensagem")
    const navigate = useNavigate()
    const [searchParams] = useSearchParams()

    const handleSubmit = (event) => {
        event.preventDefault()

        if(Object.keys(item).length === 0 || item.name === "" || item.descriptions === ""){
            setMessage("Precisa preencher os campos vazios")

        }else{
            teamsApi.create(idCompany, item)
            .then(() => {
                setMessage("Time criado com sucesso")
                navigate({
                  pathname: `/empresas/${idCompany}`,
                  search: '?update=true'
                })
                searchParams.delete("update")
            })
            .catch((error) => {
                console.error(error)
                setMessage("Algo deu errado!")
            })
        }
    }

    return (
        <Tab.Group>
            <Tab.List className='w-full h-full flex flex-col items-center mt-8'>
                <div className='w-11/12 flex flex-row gap-2'>
                    <Tab className='nav-btn'>
                        {({ selected }) => (
                            /* Use the `selected` state to conditionally style the selected tab. */
                            <button
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
                            /* Use the `selected` state to conditionally style the selected tab. */
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
                            <ListaTimes teams={teams} />
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
    )
}

export default Times