import { json, Link } from 'react-router-dom'
import { Tab } from '@headlessui/react'
import FormObjetivos from './objetivos/formObjetivos'
import ListaObjetivos from './objetivos/listaObjetivos'
import { useContext } from 'react'
import { ContextUser } from '../../context/ContextUser'

function Objetivos() {
    const {goals} = useContext(ContextUser)

    return (
        <Tab.Group>
        <Tab.List className='w-full h-full flex flex-col items-center mt-8'>
            <div className='w-11/12 flex flex-row gap-2'>
                <Tab className='nav-btn'>
                {({ selected }) => (
                    /* Use the `selected` state to conditionally style the selected tab. */
                    <button
                    className={
                        selected ? 'bg-[#5500C3]' : 'bg-[#E6E6E6] text-black'
                    }
                    >
                    Cadrastamento
                    </button>
                )}
                </Tab>
                

                <Tab className='nav-btn'>
                {({ selected }) => (
                    /* Use the `selected` state to conditionally style the selected tab. */
                    <button
                    className={
                        selected ? 'bg-[#5500C3]' : 'bg-[#E6E6E6] text-black'
                    }
                    >
                    Lista
                    </button>
                )}
                </Tab>
            </div>
        </Tab.List>

        <div className='w-full h-full flex flex-col items-center mt-8'>
            <div className='w-11/12'>

            <Tab.Panels>
            <Tab.Panel className='container-empresas'>
                <FormObjetivos/>
            </Tab.Panel>

            <Tab.Panel className='container-empresas'>
            <ListaObjetivos goals={goals}/>
            </Tab.Panel>
            </Tab.Panels>
        </div>
        </div>
      </Tab.Group>
    )
}

export default Objetivos