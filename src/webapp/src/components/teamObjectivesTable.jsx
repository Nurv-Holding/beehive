import { Link } from 'react-router-dom'
import { Disclosure } from '@headlessui/react'
import { calcDate } from '../utilis';
import TaskPercentage from './TaskPercentage';

function teamObjectivesTable({ tasksToGoal, returnQuantify, total, totalDone, returnQuantifyDone }) {

  return (
    <div className='flex flex-col items-center w-full'>
      <div className="w-11/12 rounded-2xl bg-white p-2 mt-4">
        {(tasksToGoal || []).map((task) => {
          return(
            <>
            <Disclosure>
            {({ open }) => (
            <>
              <Disclosure.Button className="flex flex-row w-full items-center justify-between rounded-lg px-4 py-2">
                <div className='flex flex-row items-center'>
                  <span>&gt;&nbsp;</span>
                  <span> {task.nameTask} </span>
                  <div className='w-3 h-3 ml-2 rounded-full bg-yellow-400 border border-black'></div>
                </div>
                <span>{calcDate(task.finalDate) >= 0? `Faltam ${calcDate(task.finalDate)} Dias`: `${calcDate(task.finalDate)} Dias de atraso`}</span>

                <div className='profile-photo-task'>
                  <img src="https://thispersondoesnotexist.com/image"/>
                </div>
                
                <div className='percentage-container-disclosure'>
                  <div className='percentage-bar-disclosure w-[50%]'></div>
                </div>

                <TaskPercentage 
                  returnQuantify={returnQuantify} 
                  idTask={task?.idTask} 
                  total={total}
                  totalDone={totalDone}
                  returnQuantifyDone={returnQuantifyDone}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="">
                <div className='flex flex-col ml-6'>

                <div className='flex flex-row items-center'>
                  <span className='task-doer'> {task.nameUser} </span>
                </div>

                <div className='task-date'>
                  <span> {task.initialDate} </span>
                  <span> {task.finalDate} </span>
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