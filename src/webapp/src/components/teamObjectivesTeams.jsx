import { useState } from 'react'
import TaskPercentage from './TaskPercentage';
import { Disclosure } from '@headlessui/react'
import AddGoalTeam from './addGoalTeam';
import AddTeamKr from './addTeamKr';

function TeamObjectivesTeams({ teams = null, goalTeamsKrs, createGoalsTeam, modelChange }) {
  const [isOpen, setIsOpen] = useState(false)
  const [isOpenGoalTeam, setIsOpenGoalTeam] = useState(false)
  const [isOpenTeamKr, setIsOpenTeamKr] = useState(false)
  const [done, setDone] = useState(0)
  const [goalKr, setGoalKr] = useState({})
  const [isOpenTeam, setIsOpenTeam] = useState(false)

  function stateDone({ target }) {
    setDone(target.value)
  }

  function closeModal() {
    setIsOpen(false)
  }

  function closeModalGoalTeam() {
    setIsOpenGoalTeam(false)
  }

  function openModal(goalKr) {
    setGoalKr(goalKr)
    setIsOpen(true)
  }

  function openModalGoalTeam() {
    setIsOpenGoalTeam(true)
  }

  function openModalTeamKr() {
    setIsOpenTeamKr(true)
  }

  function closeModalTeamKr() {
    setIsOpenTeamKr(false)
  }

  return (
    <>
      {(goalTeamsKrs || []).map((goalTeamsKr) => {
        return (
          <>
            <Disclosure>
              <div className='flex flex-col w-full bg-white p-4 my-4 rounded-lg'>
                <Disclosure.Button className='flex flex-row items-center justify-around w-full bg-white rounded-lg cursor-pointer'>
                  <div className='flex items-center'>
                    <span> {goalTeamsKr.nameTeam} </span>
                  </div>

                  <div className='percentage-container-disclosure w-[20%]'>
                    <div className='percentage-bar-disclosure w-[45%]'></div>
                  </div>

                  <TaskPercentage
                  />

                  <AddGoalTeam 
                    closeModal={closeModalGoalTeam}
                    openModal={openModalGoalTeam}
                    isOpen={isOpenGoalTeam}
                    createGoalsTeam={createGoalsTeam}
                    modelChange={modelChange}
                    idTeam={goalTeamsKr.idTeam}
                  />
                </Disclosure.Button>

                <Disclosure.Panel className="mt-2 flex flex-col">
                  <div className='text-gray-600 bg-[#D9D9D9] rounded-md px-2 py-1 my-1 flex flex-row justify-around items-center'>
                    <span className=''> {goalTeamsKr.nameGoalTeam}
                      <span className="text-gray-400 text-xs mx-2"> descrição </span>
                    </span>
                    
                    <AddTeamKr 
                      closeModal={closeModalTeamKr} 
                      isOpen={isOpenTeamKr}
                      openModal={openModalTeamKr} 
                    />
                  </div>
                </Disclosure.Panel>
              </div>
            </Disclosure>
          </>
        )
      })}
    </>
  );
}

export default TeamObjectivesTeams;