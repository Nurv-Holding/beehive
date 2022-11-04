import { Link } from 'react-router-dom'
import { Disclosure } from '@headlessui/react'
import TaskPercentage from './TaskPercentage';

function teamObjectivesTable({ goalKrs }) {

  return (
    <div className='flex flex-col items-center w-full'>
      <div className="w-full rounded-2xl bg-white p-2 mt-4">
        {(goalKrs || []).map((goalKr) => {
          return(
            <>
            <Disclosure>
            {({ open }) => (
            <>
              <Disclosure.Button className="flex flex-row w-full items-center justify-between rounded-lg px-4 py-2">
                <div className='flex flex-row items-center'>
                  <span>&gt;&nbsp;</span>
                  <span> {goalKr.nameGoalsKr} </span>
                  <div className='w-3 h-3 ml-2 rounded-full bg-yellow-400 border border-black'></div>
                </div>

                <Link>
                  LINK PARA KR
                </Link>
                
                <span>???? </span>

                <div className='profile-photo-task'>
                  <img src="https://thispersondoesnotexist.com/image"/>
                </div>
                
                <div className='percentage-container-disclosure'>
                  <div className='percentage-bar-disclosure w-[50%]'></div>
                </div>

                <TaskPercentage 

                />
              </Disclosure.Button>
              <Disclosure.Panel className="">
                <div className='flex flex-col ml-6'>

                <div className='flex flex-row items-center'>
                  <span className='task-doer'> ??? </span>
                </div>

                <div className='task-date'>
                  <span> ??? </span>
                  <span> ???? </span>
                </div>

                </div>
              </Disclosure.Panel>
            </>
          )}
          </Disclosure>
          </>
          )
        })}

      </div>
    </div>
  );
}

export default teamObjectivesTable;