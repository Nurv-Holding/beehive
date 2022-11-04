import Modal from "./empresasTabPanels/objetivos/components/Modal"
import { useState } from 'react'
import { calcDate } from '../utilis';
import TaskPercentage from './TaskPercentage';

function TeamObjectivesTeams({ teams }) {
  //Modal
  let [isOpen, setIsOpen] = useState(false)

  function openModal() {
    setIsOpen(true)
  }

  function closeModal() {
    setIsOpen(false)
  }

  return (
    <>
      {(teams || []).map((team) => {
        return (
          <>
            <div className='flex flex-row items-center justify-around w-full bg-white p-4 mb-4 rounded-lg cursor-pointer'>
              <div className='flex items-center'>
                <span> {team.name} </span>
              </div>

              <div className='percentage-container-disclosure w-[20%]'>
                <div className='percentage-bar-disclosure w-[45%]'></div>
              </div>

              <TaskPercentage
              />
            </div>
          </>
        )
      })}
    </>
  );
}

export default TeamObjectivesTeams;