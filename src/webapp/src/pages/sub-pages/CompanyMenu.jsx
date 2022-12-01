import { useState } from 'react'
import { Tab } from '@headlessui/react'
import Usuarios from '../../components/CompanyMenuPanel/usuarios'
import Times from '../../components/CompanyMenuPanel/times'
import Goals from '../../components/CompanyMenuPanel/objetivos'
import Tarefas from '../../components/CompanyMenuPanel/tarefas'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function CompanyMenu() {
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
              Objetivos
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
              Usuários
            </button>
          )}
        </Tab>
      </Tab.List>

      <div className='w-full'>
        <Tab.Panels className='text-white'>
          <Tab.Panel>
            <Goals />
          </Tab.Panel>

          <Tab.Panel>
            <Times />
          </Tab.Panel>

          <Tab.Panel className='w-full'>
            <Usuarios />
          </Tab.Panel>
        </Tab.Panels>
      </div>
    </Tab.Group>
  )
}