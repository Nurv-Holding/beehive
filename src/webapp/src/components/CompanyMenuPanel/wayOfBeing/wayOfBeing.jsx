
import { Tab } from '@headlessui/react'
import { useState } from 'react'
import { useContext, useEffect } from 'react'
import futureVisionApi from '../../../api/futureVisionApi'
import principlesApi from '../../../api/principlesApi'
import proposalsApi from '../../../api/proposalsApi'
import { ContextUser } from '../../../context/ContextUser'
import FutureVision from '../../fututeVision'
import Principles from '../../principles'
import Proposals from '../../proposals'
import { Link } from 'react-router-dom'

function WayOfBeing() {
    const { idCompany } = useContext(ContextUser)
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
                <Link
                    to={`/registerfuturevision/${idCompany}`} className="w-10 aspect-square rounded-lg bg-white text-bee-blue-clean hover:bg-bee-blue-strong hover:text-white flex justify-center text-center items-center font-bold text-xl px-2"
                >
                    +
                </Link>
            </div>

            <div className='flex flex-col w-[90%] mx-auto'>
                <Tab.Group>
                    <Tab.List className='w-full flex flex-col items-center mt-8'>
                        <div className='w-11/12 flex flex-row gap-2'>
                            <Tab className='nav-btn'>
                                {({ selected }) => (
                                    <button
                                        className={
                                            selected ? 'bg-bee-blue-clean' : 'bg-white text-black'
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
                                            selected ? 'bg-bee-blue-clean' : 'bg-white text-black'
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
                                            selected ? 'bg-bee-blue-clean' : 'bg-white text-black'
                                        }
                                    >
                                        Propópsitos
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