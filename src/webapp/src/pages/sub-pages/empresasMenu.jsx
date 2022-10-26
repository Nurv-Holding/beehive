import { useState } from 'react'
import { Tab } from '@headlessui/react'

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
                    selected ? 'bg-[#5500C3] text-white' : 'bg-[#E6E6E6]'
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
                    selected ? 'bg-[#5500C3] text-white' : 'bg-[#E6E6E6]'
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
                    selected ? 'bg-[#5500C3] text-white' : 'bg-[#E6E6E6]'
                  }
                >
                  Empresas
                </button>
              )}
            </Tab>

            <Tab>
              {({ selected }) => (
                /* Use the `selected` state to conditionally style the selected tab. */
                <button
                  className={
                    selected ? 'bg-[#5500C3] text-white' : 'bg-[#E6E6E6]'
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
                    selected ? 'bg-[#5500C3] text-white' : 'bg-[#E6E6E6]'
                  }
                >
                  Tarefas
                </button>
              )}
            </Tab>
        </Tab.List>

        <div className='w-full'>
        <Tab.Panels className='text-white'>
          <Tab.Panel>
            teste 1
          </Tab.Panel>

          <Tab.Panel>
            teste 2
          </Tab.Panel>

          <Tab.Panel className='w-full'>
            teste 3
          </Tab.Panel>

          <Tab.Panel className='w-full'>
            teste 4
          </Tab.Panel>

          <Tab.Panel className='w-full'>
            teste 5
          </Tab.Panel>
        </Tab.Panels>
        </div>
      </Tab.Group>
  )
}