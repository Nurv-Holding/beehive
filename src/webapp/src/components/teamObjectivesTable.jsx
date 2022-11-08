import Modal from "./empresasTabPanels/objetivos/components/Modal"
import { useContext, useState } from 'react'
import { calcPercentage } from '../utilis';
import goalKrsApi from "../api/goalKrsApi";
import moment from "moment";
import { json, useNavigate, useSearchParams } from "react-router-dom";
import { ContextUser } from "../context/ContextUser";
import { Disclosure } from '@headlessui/react'
import historyGoalKrApi from "../api/historyGoalKrApi";
import ChartGoalQuartely from "./ChartGoalQuartely";
import ChartGoalYearly from "./ChartGoalYearly";

function TeamObjectivesTable({
  goalKrs,
  idCompany,
  setQueryUpdate,
  queryUpdate,
  historyGoalKrs }) {

  let [isOpen, setIsOpen] = useState(false)
  const { idGoal } = useContext(ContextUser)
  const [done, setDone] = useState(0)
  const [goalKr, setGoalKr] = useState({})
  const [message, setMessage] = useState("")
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()

  function stateDone({ target }) {
    setDone(parseInt(target.value))
  }

  function closeModal() {
    setIsOpen(false)
  }

  function openModal(goalKr) {
    setGoalKr(goalKr)
    setIsOpen(true)
  }

  const goalKrsUpdate = () => {
    const data = { done: done + goalKr?.doneGoalsKr }

    const newData = {
      idGoal: parseInt(idGoal),
      idGoalKr: goalKr.idgoalsKr,
      quaPercentage: calcPercentage((goalKr.doneGoalsKr + done), goalKr.QuarterlyGoalKrs),
      yeaPercentage: calcPercentage((goalKr.doneGoalsKr + done), goalKr.yearlyGoalsKr)
    }

    console.log("goalKr", goalKr)

    console.log("newData", newData)

    goalKrsApi.update(goalKr.idgoalsKr, data)
      .then(() => {
        setMessage("Atualizado")

        historyGoalKrApi.create(idCompany, newData)

        console.log("queryUpdate", queryUpdate)
        setQueryUpdate((x) => !x)
        navigate({
          pathname: `/empresas/${idCompany}/objetivo/${idGoal}`,
          search: `?update=${queryUpdate}`
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
          <div className="bg-white rounded-md p-0.5 mt-4 flex flex-col">
            <Disclosure>
              <Disclosure.Button key={goalKr.id} className='flex flex-row items-center justify-around w-full bg-white p-4 cursor-pointer'>
                <div className='flex items-center'>
                  <span> {goalKr.nameGoalsKr} </span>
                  <div className='w-3 h-3 ml-2 rounded-full bg-yellow-400 border border-black'></div>
                </div>

                <div className='profile-photo-task'>
                  <img src="https://thispersondoesnotexist.com/image" />
                </div>

                <span className="text-gray-600 text-sm">Atualizado {moment(goalKr?.updateGoalsTasks).format('DD/MM/YY')} as {moment(goalKr?.updateGoalsTasks).format('HH:mm')}</span>
              </Disclosure.Button>

              <Disclosure.Panel className='w-full bg-white p-8 grid grid-cols-3 gap-4 justify-center items-center'>
                <div className="flex flex-col items-center">
                  <div className="w-full">
                    <div className="flex flex-col gap-[2%] mt-4">
                      <span>Meta Trimestral <span className="text-gray-600 text-xs">{goalKr.QuarterlyGoalKrs}</span></span>
                      <div className='percentage-container-disclosure w-[90%] mt-2'>
                        <div className='percentage-bar-disclosure w-[45%]'></div>
                      </div>
                      <span className="text-xs">{calcPercentage(goalKr.doneGoalsKr, goalKr.QuarterlyGoalKrs)}% concluído</span>
                      <span className="text-gray-600 text-sm mt-2">Atual: {goalKr.doneGoalsKr}</span>
                    </div>

                    <div className="flex flex-col gap-[2%] mt-4">
                      <span>Meta Anual <span className="text-gray-600 text-xs">{goalKr.yearlyGoalsKr}</span></span>
                      <div className='percentage-container-disclosure w-[90%] mt-2'>
                        <div className='percentage-bar-disclosure w-[45%]'></div>
                      </div>
                      <span className="tetx-xs">{calcPercentage(goalKr.doneGoalsKr, goalKr.yearlyGoalsKr)}% concluído</span>
                      <span className="text-gray-600 text-sm mt-2">Atual: {goalKr.doneGoalsKr}</span>
                    </div>

                    <button className="modal-btn h-[30px] mt-2" onClick={() => openModal(goalKr)}>
                      Atualizar valores
                    </button>
                  </div>
                </div>

                <div>
                  <ChartGoalQuartely
                    items={
                      historyGoalKrs.filter(e => e?.idGoalKr === goalKr.idgoalsKr)
                    }
                    title={"Trimestral"}
                  />
                </div>

                <div>
                  <ChartGoalYearly
                    items={
                      historyGoalKrs.filter(e => e?.idGoalKr === goalKr.idgoalsKr)
                    }
                    title={"Anual"}
                  />
                </div>

              </Disclosure.Panel>
              <Modal isOpen={isOpen} closeModal={closeModal}>

                <span className="text-gray-600 text-xs mx-2">
                  {JSON.stringify(goalKr.doneGoalsKr)}
                  Atualizado em: {moment(goalKr?.updateGoalsTasks).format('DD/MM/YY')} as {moment(goalKr?.updateGoalsTasks).format('HH:mm')}
                </span>
                <div className="flex flex-col gap-[2%] mt-4">
                  <div className="flex gap-2 items-center">
                    <div>
                      <input type="text" onChange={stateDone} className="input-style" name="done" placeholder="Atualizar os dados" />
                    </div>
                    <button type="button" onClick={() => { goalKrsUpdate() }} className="submit-button">OK</button>
                  </div>
                </div>
              </Modal>
            </Disclosure>
          </div>
        )
      })}
    </>
  )
}

export default TeamObjectivesTable;