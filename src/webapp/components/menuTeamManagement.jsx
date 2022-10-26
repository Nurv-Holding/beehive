import { Link } from 'react-router-dom'
import Team from '../pages/sub-pages/team';
import Meetings from '../pages/sub-pages/meetings';
import Pdi from '../pages/sub-pages/pdi';
import { Tab } from '@headlessui/react'

function menuTeamManagement() {
    return (
        <Tab.Group>
        <Tab.List className='w-11/12'>
          <div className='w-full flex flex-row gap-2'>
            <Tab className='nav-btn'>
              {({ selected }) => (
                /* Use the `selected` state to conditionally style the selected tab. */
                <button
                  className={
                    selected ? 'bg-[#5500C3] text-white' : 'bg-[#E6E6E6]'
                  }
                >
                  Time
                </button>
              )}
            </Tab>
            

            <Tab className='nav-btn'>
              {({ selected }) => (
                /* Use the `selected` state to conditionally style the selected tab. */
                <button
                  className={
                    selected ? 'bg-[#5500C3] text-white' : 'bg-[#E6E6E6]'
                  }
                >
                  Plano de desenvolvimento pessoal
                </button>
              )}
            </Tab>

            <Tab className='nav-btn'>
              {({ selected }) => (
                /* Use the `selected` state to conditionally style the selected tab. */
                <button
                  className={
                    selected ? 'bg-[#5500C3] text-white' : 'bg-[#E6E6E6]'
                  }
                >
                  Objetivos de time
                </button>
              )}
            </Tab>
          </div>
        </Tab.List>

        <div className='container-team-management'>
        <Tab.Panels>
          <Tab.Panel>
            <Team/>
          </Tab.Panel>

          <Tab.Panel>
            <Pdi/>
          </Tab.Panel>

          <Tab.Panel>
            <Meetings />
          </Tab.Panel>
        </Tab.Panels>
        </div>
      </Tab.Group>
    )
}

export default menuTeamManagement