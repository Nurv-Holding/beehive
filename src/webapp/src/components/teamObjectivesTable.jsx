import Modal from "./empresasTabPanels/objetivos/components/Modal"
import { useState } from 'react'
import { calcDate } from '../utilis';
import TaskPercentage from './TaskPercentage';

function TeamObjectivesTable({ goalKrs }) {
  //Modal
  let [isOpen, setIsOpen] = useState(false)
  const [goalKrName, setGoalKrName] = useState("")
  const [done, setDone] = useState(0)
  const [goalKrQuarterly, setGoalKrQuarterly] = useState("")
  const [goalKryearly, setGoalKrYearly] = useState("")

  function stateDone({target}) {
    setDone(target.value)
  }

  function closeModal() {
    setIsOpen(false)
  }

  function openModal(name, quarterly, yearly) {
    setIsOpen(true)
    setGoalKrName(name)
    setGoalKrQuarterly(quarterly)
    setGoalKrYearly(yearly)
  }

  return (
    <>
      {(goalKrs || []).map((goalKr) => {
        return (
          <div key={goalKr.id} onClick={() => openModal(goalKr.nameGoalsKr, goalKr.QuarterlyGoalKrs, goalKr.yearlyGoalsKr)} className='flex flex-row items-center justify-around w-full bg-white p-4 mb-4 rounded-lg cursor-pointer'>
            <div className='flex items-center'>
              <span> {goalKr.nameGoalsKr} </span>
              <div className='w-3 h-3 ml-2 rounded-full bg-yellow-400 border border-black'></div>
            </div>
            <span>Faltam 4 dias</span>

            <div className='profile-photo-task'>
              <img src="https://thispersondoesnotexist.com/image" />
            </div>

            <div className='percentage-container-disclosure w-[20%]'>
              <div className='percentage-bar-disclosure w-[45%]'></div>
            </div>

            <TaskPercentage
            />
          </div>
        )
      })}
      <Modal isOpen={isOpen} closeModal={closeModal}>
        <span className="text-lg uppercase"> {goalKrName} <span className="text-gray-600 text-xs">Atualizado: 04/11/22</span></span>

        <div className="flex flex-col gap-[2%] mt-4">
          <div className="flex gap-2 items-center">
            <div>
              <input type="text" onChange={stateDone} className="input-style" name="done" placeholder="Atualizar os dados"/>
            </div>
            <button className="submit-button">ADD</button>
            <button className="submit-button">OK</button>
          </div>
          <div className="flex flex-col gap-[2%] mt-4">
            <span>Meta Trimestral <span className="text-gray-600 text-xs">{goalKrQuarterly}</span></span>
            <div className='percentage-container-disclosure w-[90%] mt-2'>
              <div className='percentage-bar-disclosure w-[45%]'></div>
            </div>
            <span className="text-gray-600 text-sm mt-2">Atual: {done}</span>
          </div>

          <div className="flex flex-col gap-[2%] mt-4">
            <span>Meta Anual <span className="text-gray-600 text-xs">{goalKryearly}</span></span>
            <div className='percentage-container-disclosure w-[90%] mt-2'>
              <div className='percentage-bar-disclosure w-[45%]'></div>
            </div>
            <span className="text-gray-600 text-sm mt-2">Atual: R$30.000</span>
          </div>
        </div>
      </Modal>
    </>
  );
}

export default TeamObjectivesTable;