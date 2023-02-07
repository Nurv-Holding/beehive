import { Outlet, useNavigate, useParams, useSearchParams } from 'react-router-dom';
import Header from '../../Header';
import { Tab } from '@headlessui/react'
import RegisterPrinciples from '../../../pages/RegisterPrinciples';
import { useState } from 'react';
import principlesApi from '../../../api/principlesApi';
import RegisterProposals from '../../RegisterProposals';
import proposalsApi from '../../../api/proposalsApi';
import RegisterGoals from '../../RegisterGoals';
import goalsApi from '../../../api/goalsApi';
import { useContext } from 'react';
import { ContextCompany } from '../../../context/ContextCompany';
import AuthorizeAccess from '../../AuthorizeAccess';

function FormMenuWayOfBeing() {
    const {payload} = useContext(ContextCompany)
    const navigate = useNavigate()
    const [item, setItem] = useState({title:"", description:""})
    const [goal, setGoal] = useState({name:"", descriptions:""})
    const [searchParams, setSearchParams] = useSearchParams()
    const [message, setMessage] = useState("")
    const {idCompany, idFutureVision} = useParams()

    const modelChange = ({ target }) => {
        setItem((state) => {
            return {...state,[target.name]: target.value}
        })
    }

    const modelChangeGoal = ({ target }) => {
        setGoal((state) => {
            return {...state,[target.name]: target.value}
        })
    }

    const path = `/company/${idCompany}/formfuturevisionchildren/${idFutureVision}`

    const registerGoals = (event) => {
        event.preventDefault()
        searchParams.delete('update')
        setSearchParams(searchParams)

        if(item.name === "" || item.descriptions === "")
            setMessage("Os campos precisam ser preeenchidos")

        else{
            goalsApi.create(idCompany,{...goal, author:payload.id, idFutureVision:parseInt(idFutureVision)})
            .then(() => {
                setMessage({name:"", descriptions:""})
                setMessage("Cadastro realizado com sucesso")
                navigate({
                  pathname: `${path}`,
                  search: `?update=${true}`
                })
              })
              .catch((error) => {
                console.error(error)
                setMessage("Algo deu errado!")
              })
        }
    }

    const registerProposals = (event) => {
        event.preventDefault()
        searchParams.delete('update')
        setSearchParams(searchParams)

        if(item.title === "" || item.description === "")
            setMessage("Os campos precisam ser preeenchidos")

        else{
            proposalsApi.create(idCompany,{...item, idFutureVision:parseInt(idFutureVision)})
            .then(() => {
                setMessage("Cadastro realizado com sucesso")
                navigate({
                  pathname: `${path}`,
                  search: `?update=${true}`
                })
              })
              .catch((error) => {
                console.error(error)
                setMessage("Algo deu errado!")
              })
        }
    }


    const routerBack = () => {
        navigate(`/company/${idCompany}`)
    }

    const redirectRouter = (path) => {
        navigate(path)
    }

    return (
        <>
            <AuthorizeAccess userAutorized={["adminMaster","adminCorporate"]}>

            <main className='flex h-full text-black'>
                <Tab.Group>
                    <Tab.List className='container-nav-empresas'>

                        <Tab className='nav-btn'>
                            {({ selected }) => (
                                <button onClick={() => redirectRouter(`register/principles`)}
                                    className={
                                        selected ? 'text-bee-blue-clean bg-gray-100 ' : ''
                                    }
                                >
                                    Princípio
                                </button>
                            )}
                        </Tab>

                        <Tab className='nav-btn'>
                            {({ selected }) => (
                                <button
                                    className={
                                        selected ? 'text-bee-blue-clean bg-gray-100' : ''
                                    }
                                >
                                    Propósito
                                </button>
                            )}
                        </Tab>

                        <Tab className='nav-btn'>
                            {({ selected }) => (
                                <button
                                    className={
                                        selected ? 'text-bee-blue-clean bg-gray-100' : ''
                                    }
                                >
                                    Objetivo
                                </button>
                            )}
                        </Tab>

                        <Tab className='nav-btn'>
                            {({ selected }) => (
                                <button onClick={routerBack}
                                    className={
                                        selected ? 'text-bee-blue-clean bg-gray-100' : ''
                                    }
                                >
                                    Voltar
                                </button>
                            )}
                        </Tab>
                    </Tab.List>

                    <div className='w-full flex flex-col items-center mt-8'>
                        <div className='w-full'>
                            <Tab.Panels>
                                <Outlet />
{/* 
                                <Tab.Panel className='w-full flex flex-col items-center'>
                                    <RegisterProposals
                                    handleSubmit={registerProposals} 
                                    message={message} 
                                    modelChange={modelChange}
                                    />
                                </Tab.Panel>

                                <Tab.Panel className='w-full flex flex-col items-center'>
                                    <RegisterGoals
                                    handleSubmit={registerGoals} 
                                    message={message} 
                                    modelChange={modelChangeGoal}
                                    goal={goal}
                                    />
                                </Tab.Panel> */}
                            </Tab.Panels>
                        </div>
                    </div>
                </Tab.Group>
            </main>
            </AuthorizeAccess>
        </>
    )

}

export default FormMenuWayOfBeing