import { Link } from 'react-router-dom'
import { Tab } from '@headlessui/react'
import FormTarefas from './tarefas/formTarefas'
import ListaTarefas from './tarefas/listaTarefas'

function tarefas() {
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
                    Cadrastamento
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
                <FormTarefas/>
            </Tab.Panel>

            <Tab.Panel className='container-empresas'>
                <ListaTarefas/>
            </Tab.Panel>
            </Tab.Panels>
        </div>
        </div>
      </Tab.Group>
    )
}

export default tarefas