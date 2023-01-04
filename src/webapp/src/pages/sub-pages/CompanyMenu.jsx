import { useState } from 'react'
import { Tab } from '@headlessui/react'
import Users from '../../components/CompanyMenuPanel/Users/Users'
import Teams from '../../components/CompanyMenuPanel/Teams/Teams'
import Goals from '../../components/CompanyMenuPanel/Goals/Goals'
import TitleCompany from '../../components/TitleCompany'
import WayOfBeing from '../../components/CompanyMenuPanel/wayOfBeing/wayOfBeing'

export default function CompanyMenu( { company } ) {
  return (
    <div className='flex h-full'>
      <Tab.Group>
        <Tab.List className='container-nav-empresas'>

        <TitleCompany className="text-bee-blue-clean" name={company?.name} />

          <Tab>
            {({ selected }) => (
              <button
                className={
                  selected ? 'text-bee-blue-clean bg-gray-200' : ''
                }
              >
                Jeito de ser
              </button>
            )}
          </Tab>

          <Tab>
            {({ selected }) => (
              <button
                className={
                  selected ? 'text-bee-blue-clean bg-gray-200' : ''
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
                  selected ? 'text-bee-blue-clean bg-gray-200' : ''
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
                  selected ? 'text-bee-blue-clean bg-gray-200' : ''
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
              <WayOfBeing />
            </Tab.Panel>

            <Tab.Panel>
              <Goals />
            </Tab.Panel>

            <Tab.Panel>
              <Teams />
            </Tab.Panel>

            <Tab.Panel>
              <Users />
            </Tab.Panel>
          </Tab.Panels>
        </div>
      </Tab.Group>
    </div>
  )
}