import { Link } from 'react-router-dom'
import Team from '../pages/sub-pages/team';
import Pdi from '../pages/sub-pages/pdi';
import TeamObjectives from '../pages/sub-pages/teamObjectives';
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
                    selected ? 'bg-[#5500C3] text-white' : 'bg-white'
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
                    selected ? 'bg-[#5500C3] text-white' : 'bg-white'
                  }
                >
                  Plano de desenvolvimento pessoal
                </button>
              )}
            </Tab>
          </div>
        </Tab.List>

        <div className='w-full'>
        <Tab.Panels>
          <Tab.Panel>
            <Team/>
          </Tab.Panel>

          <Tab.Panel>
            <Pdi/>
          </Tab.Panel>
        </Tab.Panels>
        </div>
      </Tab.Group>
    )
}

export default menuTeamManagement