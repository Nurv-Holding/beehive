import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import Header from '../../Header';
import { Tab } from '@headlessui/react'
import RegisterPrinciples from '../../RegisterPrinciples';
import { useState } from 'react';
import principlesApi from '../../../api/principlesApi';
import RegisterProposals from '../../RegisterProposals';
import proposalsApi from '../../../api/proposalsApi';
import RegisterGoals from '../../RegisterGoals';
import goalsApi from '../../../api/goalsApi';
import jwtDecode from 'jwt-decode';

function FormMenuWayOfBeing() {
    const navigate = useNavigate()
    const [item, setItem] = useState({title:"", description:""})
    const [goal, setGoal] = useState({name:"", descriptions:""})
    const [searchParams, setSearchParams] = useSearchParams()
    const [message, setMessage] = useState("")
    const {idCompany, idFutureVision} = useParams()
    const token = localStorage.getItem("token")
    const payload = token? jwtDecode(token): null

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

    const registerGoals = (event) => {
        event.preventDefault()
        searchParams.delete('update')
        setSearchParams(searchParams)

        if(item.name === "" || item.descriptions === "")
            setMessage("Os campos precisam ser preeenchidos")

        else{
            goalsApi.create(idCompany,{...goal, author:payload.id, idFutureVision:parseInt(idFutureVision)})
            .then(() => {
                setMessage("Cadastro realizado com sucesso")
                navigate({
                  pathname: `/formfuturevisionchildren/${idFutureVision}/${idCompany}`,
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
                  pathname: `/formfuturevisionchildren/${idFutureVision}/${idCompany}`,
                  search: `?update=${true}`
                })
              })
              .catch((error) => {
                console.error(error)
                setMessage("Algo deu errado!")
              })
        }
    }

    const registerPrinciples = (event) => {
        event.preventDefault()
        searchParams.delete('update')
        setSearchParams(searchParams)

        if(item.title === "" || item.description === "")
            setMessage("Os campos precisam ser preeenchidos")

        else{
            principlesApi.create(idCompany,{...item, idFutureVision:parseInt(idFutureVision)})
            .then(() => {
                setMessage("Cadastro realizado com sucesso")
                navigate({
                  pathname: `/formfuturevisionchildren/${idFutureVision}/${idCompany}`,
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

    return (
        <>
            <Header />

            <main className='flex h-full'>
                <Tab.Group>
                    <Tab.List className='container-nav-empresas'>

                        <Tab className='nav-btn'>
                            {({ selected }) => (
                                <button
                                    className={
                                        selected ? 'text-[#5500C3] bg-gray-200' : ''
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
                                        selected ? 'text-[#5500C3] bg-gray-200' : ''
                                    }
                                >
                                    Proposito
                                </button>
                            )}
                        </Tab>

                        <Tab className='nav-btn'>
                            {({ selected }) => (
                                <button
                                    className={
                                        selected ? 'text-[#5500C3] bg-gray-200' : ''
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
                                        selected ? 'text-[#5500C3] bg-gray-200' : ''
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
                                <Tab.Panel className='w-full flex flex-col items-center'>
                                    <RegisterPrinciples 
                                    handleSubmit={registerPrinciples} 
                                    message={message} 
                                    modelChange={modelChange}
                                    item={item} 
                                    />
                                </Tab.Panel>

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
                                    />
                                </Tab.Panel>
                            </Tab.Panels>
                        </div>
                    </div>
                </Tab.Group>
            </main>
        </>
    )

}

export default FormMenuWayOfBeing