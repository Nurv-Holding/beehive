
import { Tab } from '@headlessui/react'
import MapaResumo from './MapaResumo'

function Resumo() {
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
                            <MapaResumo/>
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

export default Resumo