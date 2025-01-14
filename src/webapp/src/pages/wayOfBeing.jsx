
import { Tab } from '@headlessui/react'
import { useState } from 'react'
import { useContext, useEffect } from 'react'
import futureVisionApi from '../api/futureVisionApi'
import principlesApi from '../api/principlesApi'
import proposalsApi from '../api/proposalsApi'
import { ContextCompany } from '../context/ContextCompany'
import FutureVision from '../components/fututeVision'
import Principles from '../components/principles'
import Proposals from '../components/proposals'
import { Link } from 'react-router-dom'

function WayOfBeing() {
    const { idCompany, payload } = useContext(ContextCompany)
    const [futureVisions, setFutureVisions] = useState([])
    const [principles, setPrinciples] = useState([])
    const [proposals, setProposals] = useState([])

    useEffect(() => {
        const handleFutureVision = async () => {
            const { data } = await futureVisionApi.getAll(idCompany)
            setFutureVisions(data)
        }
    
        const handlePrinciples = async () => {
            const { data } = await principlesApi.getAll(idCompany)
            setPrinciples(data)
        }
    
        const handleProposals = async () => {
            const { data } = await proposalsApi.getAll(idCompany)
            setProposals(data)
        }

        handleFutureVision()
        handlePrinciples()
        handleProposals()

    }, [idCompany])

    return (
        <div className='flex flex-row'>
            <div className='h-full-side-bar-calc w-14 bg-gray-200 flex flex-col items-center py-2'>
                {payload?.nameProfile !== "userCorporate" &&
                <Link
                    to={`/company/${idCompany}/registerfuturevision`} className="w-10 aspect-square rounded-lg bg-white text-bee-blue-clean hover:bg-bee-blue-clean hover:text-white flex justify-center text-center items-center font-bold text-xl px-2"
                >
                    +
                </Link>
                }

            </div>

            <div className='flex flex-col w-[90%] mx-auto'>
                <Tab.Group>
                    <Tab.List className='w-full flex flex-col items-center mt-8'>
                        <div className='w-11/12 flex flex-row gap-2'>
                            <Tab>
                                {({ selected }) => (
                                    <button
                                        className={
                                            selected ? 'bg-bee-blue-clean text-base rounded px-2 py-2 hover:bg-bee-blue-strong hover:text-white' : 'bg-white text-black text-base rounded px-2 py-2 hover:bg-bee-blue-clean hover:text-white'
                                        }
                                    >
                                        Visão de Futuro
                                    </button>
                                )}
                            </Tab>

                            <Tab>
                                {({ selected }) => (
                                    <button
                                        className={
                                            selected ? 'bg-bee-blue-clean text-base rounded px-2 py-2 hover:bg-bee-blue-strong hover:text-white' : 'bg-white text-black text-base rounded px-2 py-2 hover:bg-bee-blue-clean hover:text-white'
                                        }
                                    >
                                        Princípios
                                    </button>
                                )}
                            </Tab>

                            <Tab>
                                {({ selected }) => (
                                    <button
                                        className={
                                            selected ? 'bg-bee-blue-clean text-base rounded px-2 py-2 hover:bg-bee-blue-strong hover:text-white' : 'bg-white text-black text-base rounded px-2 py-2 hover:bg-bee-blue-clean hover:text-white'
                                        }
                                    >
                                        Propósitos
                                    </button>
                                )}
                            </Tab>
                        </div>
                    </Tab.List>

                    <div className='w-full flex flex-col items-center mt-8'>
                        <div className='w-11/12'>
                            <Tab.Panels>
                                <Tab.Panel className='container-empresas'>
                                    <FutureVision
                                    payload={payload} 
                                    idCompany={idCompany} 
                                    futureVisions={futureVisions} 
                                    />
                                </Tab.Panel>

                                <Tab.Panel className='container-empresas'>
                                    <Principles principles={principles} />
                                </Tab.Panel>

                                <Tab.Panel className='container-empresas'>
                                    <Proposals proposals={proposals} />
                                </Tab.Panel>
                            </Tab.Panels>
                        </div>
                    </div>
                </Tab.Group>
            </div>
        </div>
    )
}

export default WayOfBeing