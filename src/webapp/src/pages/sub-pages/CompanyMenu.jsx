import { useState } from 'react'
import { Tab } from '@headlessui/react'
import Users from '../../components/CompanyMenuPanel/Users/Users'
import Teams from '../../components/CompanyMenuPanel/Teams/Teams'
import Goals from '../../components/CompanyMenuPanel/Goals/Goals'
import Summary from '../../components/CompanyMenuPanel/Summary/Summary'

export default function CompanyMenu() {
  return (
    <div className='flex h-full'>
      <Tab.Group>
        <Tab.List className='container-nav-empresas'>
          <Tab>
            {({ selected }) => (
              <button
                className={
                  selected ? 'text-[#5500C3]' : ''
                }
              >
                Resumo
              </button>
            )}
          </Tab>

          <Tab>
            {({ selected }) => (
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
              <Summary />
            </Tab.Panel>

            <Tab.Panel>
              <Goals />
            </Tab.Panel>

            <Tab.Panel>
              <Teams />
            </Tab.Panel>

            <Tab.Panel className='w-full'>
              <Users />
            </Tab.Panel>
          </Tab.Panels>
        </div>
      </Tab.Group>
    </div>
  )
}