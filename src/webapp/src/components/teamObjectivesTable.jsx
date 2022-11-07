import Modal from "./empresasTabPanels/objetivos/components/Modal"
import { useContext, useState } from 'react'
import { calcDate, calcPercentage } from '../utilis';
import TaskPercentage from './TaskPercentage';
import goalKrsApi from "../api/goalKrsApi";
import moment from "moment";
import { useNavigate, useSearchParams } from "react-router-dom";
import { ContextUser } from "../context/ContextUser";
import { Disclosure } from '@headlessui/react'

function TeamObjectivesTable({ goalKrs, idCompany }) {
  let [isOpen, setIsOpen] = useState(false)
  const { idGoal } = useContext(ContextUser)
  const [done, setDone] = useState(0)
  const [goalKr, setGoalKr] = useState({})
  const [message, setMessage] = useState("")
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()

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

  const goalKrsUpdate = (idGoalKrs, done) => {
    const data = { done: parseInt(done) + goalKr?.doneGoalsKr }

    goalKrsApi.update(idGoalKrs, data)
      .then(() => {
        setMessage("Atualizado")
        navigate({
          pathname: `/empresas/${idCompany}/objetivo/${idGoal}`,
          search: '?update=true'
        })
        searchParams.delete("update")

        closeModal()
      })
      .catch((error) => {
        console.error(error)
        setMessage("Algo deu errado")
      })
  }

  return (
    <>
      {(goalKrs || []).map((goalKr) => {
        return (
          <Disclosure>
            <Disclosure.Button key={goalKr.id} onClick={() => openModal(goalKr)} className='flex flex-row items-center justify-around w-full bg-white p-4 mb-4 rounded-lg cursor-pointer'>
              <div className='flex items-center'>
                <span> {goalKr.nameGoalsKr} </span>
                <div className='w-3 h-3 ml-2 rounded-full bg-yellow-400 border border-black'></div>
              </div>

              <div className='profile-photo-task'>
                <img src="https://thispersondoesnotexist.com/image" />
              </div>

              <span>Atualizado em</span>

              <span>Atualizar valores</span>
            </Disclosure.Button>
            <Disclosure.Panel className="text-gray-500">
              Yes! You can purchase a license that you can share with your entire
              team.
            </Disclosure.Panel>
          </Disclosure>
        )
      })}


      {/* {(goalKrs || []).map((goalKr) => {
        return (
          <div key={goalKr.id} onClick={() => openModal(goalKr)} className='flex flex-row items-center justify-around w-full bg-white p-4 mb-4 rounded-lg cursor-pointer'>
            <div className='flex items-center'>
              <span> {goalKr.nameGoalsKr} </span>
              <div className='w-3 h-3 ml-2 rounded-full bg-yellow-400 border border-black'></div>
            </div>

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
        <span className="text-lg uppercase mx-2"> {goalKr.nameGoalsKr}</span>
        <span className="text-gray-600 text-xs mx-2">
            Atualizado em: {moment(goalKr?.updateGoalsTasks).format('DD/MM/YY')} as {moment(goalKr?.updateGoalsTasks).format('HH:mm')} 
        </span>
        <div className="flex flex-col gap-[2%] mt-4">
          <div className="flex gap-2 items-center">
            <div>
              <input type="text" onChange={stateDone} className="input-style" name="done" placeholder="Atualizar os dados" />
            </div>
            <button type="button" onClick={() => { goalKrsUpdate(goalKr.idgoalsKr, done) }} className="submit-button">OK</button>
          </div>
          <div className="flex flex-col gap-[2%] mt-4">
            <span>Meta Trimestral <span className="text-gray-600 text-xs">{goalKr.QuarterlyGoalKrs}</span></span>
            <div className='percentage-container-disclosure w-[90%] mt-2'>
              <div className='percentage-bar-disclosure w-[45%]'></div>
            </div>
            <span className="text-xs">{calcPercentage(goalKr.doneGoalsKr,goalKr.QuarterlyGoalKrs)}% concluído</span>
            <span className="text-gray-600 text-sm mt-2">Atual: {goalKr.doneGoalsKr}</span>
          </div>

          <div className="flex flex-col gap-[2%] mt-4">
            <span>Meta Anual <span className="text-gray-600 text-xs">{goalKr.yearlyGoalsKr}</span></span>
            <div className='percentage-container-disclosure w-[90%] mt-2'>
              <div className='percentage-bar-disclosure w-[45%]'></div>
            </div>
            <span className="tetx-xs">{calcPercentage(goalKr.doneGoalsKr,goalKr.yearlyGoalsKr)}% concluído</span>
            <span className="text-gray-600 text-sm mt-2">Atual: {goalKr.doneGoalsKr}</span>
          </div>
        </div>
      </Modal> */}
    </>
  )
}

export default TeamObjectivesTable;