import { useState } from 'react'
import { Tab } from '@headlessui/react'
import Usuarios from '../../components/empresasTabPanels/usuarios'
import Times from '../../components/empresasTabPanels/times'
import Objetivos from '../../components/empresasTabPanels/objetivos'
import Tarefas from '../../components/empresasTabPanels/tarefas'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  return (
    <Tab.Group>
        <Tab.List className='container-nav-empresas'>
            <Tab>
              {({ selected }) => (
                /* Use the `selected` state to conditionally style the selected tab. */
                <button
                  className={
                    selected ? 'text-[#5500C3]' : ''
                  }
                >
                  Usuários
                </button>
              )}
            </Tab>
            

            <Tab>
              {({ selected }) => (
                /* Use the `selected` state to conditionally style the selected tab. */
                <button
                  className={
                    selected ? 'text-[#5500C3]' : ''
                  }
                >
                  Times
                </button>
              )}
            </Tab>

            <Tab>
              {({ selected }) => (
                /* Use the `selected` state to conditionally style the selected tab. */
                <button
                  className={
                    selected ? 'text-[#5500C3]' : ''
                  }
                >
                  Objetivos
                </button>
              )}
            </Tab>
        </Tab.List>

        <div className='w-full'>
        <Tab.Panels className='text-white'>
          <Tab.Panel>
            <Usuarios/>
          </Tab.Panel>

          <Tab.Panel>
            <Times/>
          </Tab.Panel>

          <Tab.Panel className='w-full'>
            <Objetivos/>
          </Tab.Panel>
        </Tab.Panels>
        </div>
      </Tab.Group>
  )
}