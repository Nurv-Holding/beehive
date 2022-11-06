import { json } from 'react-router-dom';
import { useState } from 'react'
import TaskPercentage from './TaskPercentage';
import Modal from "./empresasTabPanels/objetivos/components/Modal"
import { Disclosure } from '@headlessui/react'
import AddTeamKR from './addTeamKR';

function TeamObjectivesTeams({ teams = null, goalTeamsKrs }) {
  let [isOpen, setIsOpen] = useState(false)
  const [done, setDone] = useState(0)
  const [goalKr, setGoalKr] = useState({})
  const [isOpenTeam, setIsOpenTeam] = useState(false)

  function stateDone({ target }) {
    setDone(target.value)
  }

  function closeModal() {
    setIsOpen(false)
  }

  function openModal(goalKr) {
    setGoalKr(goalKr)
    setIsOpen(true)
  }

  function openModalTeam() {
    setIsOpenTeam(true)
  }

  function closeModalTeam() {
    setIsOpenTeam(false)
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

                  <AddTeamKR
                  />
                </Disclosure.Button>

                <Disclosure.Panel className="mt-2 flex flex-col">
                  <div className='text-gray-600 bg-[#D9D9D9] rounded-md px-2 py-1 my-1 flex flex-row justify-around items-center'>
                    <span className=''>Aumentar número de clientes
                      <span className="text-gray-400 text-xs mx-2">Objetivo: Faturamento</span></span>

                    <span className='cursor-pointer' onClick={openModal}>Metas</span>
                    <Modal isOpen={isOpen} closeModal={closeModal}>
                      <span className="text-lg uppercase mx-2">Aumentar número de clientes</span>
                      <span className="text-gray-600 text-xs mx-2">
                        Atualizado em:
                      </span>
                      <div className="flex flex-col gap-[2%] mt-4">
                        <div className="flex gap-2 items-center">
                          <div>
                            <input type="text" className="input-style" name="done" placeholder="Atualizar os dados" />
                          </div>
                          <button type="button" className="submit-button">OK</button>
                        </div>
                        <div className="flex flex-col gap-[2%] mt-4">
                          <span>Meta Trimestral <span className="text-gray-600 text-xs"></span></span>
                          <div className='percentage-container-disclosure w-[90%] mt-2'>
                            <div className='percentage-bar-disclosure w-[45%]'></div>
                          </div>
                          <span className="text-xs">% concluído</span>
                          <span className="text-gray-600 text-sm mt-2">Atual:</span>
                        </div>

                        <div className="flex flex-col gap-[2%] mt-4">
                          <span>Meta Anual <span className="text-gray-600 text-xs"></span></span>
                          <div className='percentage-container-disclosure w-[90%] mt-2'>
                            <div className='percentage-bar-disclosure w-[45%]'></div>
                          </div>
                          <span className="tetx-xs">% concluído</span>
                          <span className="text-gray-600 text-sm mt-2">Atual: </span>
                        </div>
                      </div>
                    </Modal>
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