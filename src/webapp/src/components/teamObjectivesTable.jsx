import Modal from "./empresasTabPanels/objetivos/components/Modal"
import { useState } from 'react'
import { calcDate } from '../utilis';
import TaskPercentage from './TaskPercentage';

function TeamObjectivesTable({ goalKrs }) {
    //Modal
    let [isOpen, setIsOpen] = useState(false)

    function closeModal() {
      setIsOpen(false)
    }
  
    function openModal() {
      setIsOpen(true)
    }

    return (
      <>
        {(goalKrs || []).map((goalKr) => {
          return(
              <div onClick={openModal} className='flex flex-row items-center justify-around w-full bg-white p-4 rounded-lg cursor-pointer'>
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
        <Modal isOpen={isOpen} closeModal={closeModal} title={"Faturar R$500.000"}>
          <span className="text-gray-500">Precisamos Faturar R$500.000</span>
  
          <div className="flex gap-[2%] mt-4">
            <div className="flex flex-col w-[48%]">
              <span>Objetivo Trimestral</span>
              <div className='percentage-container-disclosure w-[90%]'>
                <div className='percentage-bar-disclosure w-[45%]'></div>
              </div>
            </div>
  
            <div className="flex flex-col w-[48%]">
              <span>Objetivo Anual</span>
              <div className='percentage-container-disclosure w-[90%]'>
                <div className='percentage-bar-disclosure w-[45%]'></div>
              </div>
            </div>
          </div>
        </Modal>
      </>
    );
}

export default TeamObjectivesTable;