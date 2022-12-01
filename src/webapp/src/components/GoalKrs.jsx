import Modal from "./CompanyMenuPanel/Goals/components/Modal"
import { useContext, useState } from 'react'
import { calcPercentage } from '../utilis';
import goalKrsApi from "../api/goalKrsApi";
import moment from "moment";
import { useNavigate, useSearchParams } from "react-router-dom";
import { ContextUser } from "../context/ContextUser";
import { Disclosure } from '@headlessui/react'
import historyGoalKrApi from "../api/historyGoalKrApi";
import ChartGoalQuartely from "./ChartGoalQuartely";
import ChartGoalYearly from "./ChartGoalYearly";
import { useEffect } from "react";

function GoalKrs({
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
    setQueryUpdate((x) => !x)

    const newData = {
      idGoal: parseInt(idGoal),
      idGoalKr: goalKr.idgoalsKr,
      quaPercentage: calcPercentage((goalKr.doneGoalsKr + done), goalKr.fromQuarterlyGoalKrs),
      yeaPercentage: calcPercentage((goalKr.doneGoalsKr + done), goalKr.fromYearlyGoalsKr)
    }

    goalKrsApi.update(goalKr.idgoalsKr, data)
      .then(() => {
        setMessage("Atualizado")

        historyGoalKrApi.create(idCompany, newData)

        console.log("queryUpdate", queryUpdate)

        navigate({
          pathname: `/empresas/${idCompany}/objetivo/${idGoal}`,
          search: `?update=${queryUpdate}`
        })

        closeModal()
      })
      .catch((error) => {
        console.error(error)
        setMessage("Algo deu errado")
      })
  }

  return (
    <>
      {(goalKrs || []).map((goalKr, i) => {
        return (
          <div key={i} className="bg-white rounded-md p-0.5 mt-4 flex flex-col">
            <Disclosure>
              <Disclosure.Button className='flex flex-row items-center justify-around w-full bg-white p-4 cursor-pointer'>
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
                      <h5>Meta Trimestral:</h5>
                      <div className="flex flex-row">
                        <span className="text-gray-600 text-xs mr-4">De: {goalKr.toQuarterlyGoalKrs}</span>
                        <span className="text-gray-600 text-xs ml-4">Para: {goalKr.fromQuarterlyGoalKrs}</span>
                      </div>

                      <div className='percentage-container-disclosure w-[80%] mt-2 overflow-hidden'>
                        <div className="percentage-bar-quartely"></div>
                      </div>
                      <style>{`
                                .percentage-bar-quartely {
                                  height: 1rem;
                                  border-radius: 0.25rem;
                                  --tw-bg-opacity: 1;
                                  background-color: rgb(85 0 195 / var(--tw-bg-opacity));
                                  width: ${calcPercentage(goalKr.doneGoalsKr, goalKr.fromQuarterlyGoalKrs)}%;
                                }
                            `}</style>
                      <span className="text-xs">{calcPercentage(goalKr.doneGoalsKr, goalKr.fromQuarterlyGoalKrs)}% concluído</span>
                      <span className="text-gray-600 text-sm mt-2">Atual: {goalKr.doneGoalsKr}</span>
                    </div>

                    <div className="flex flex-col gap-[2%] mt-4">
                    <h5>Meta Anual:</h5>
                      <div className="flex flex-row">
                        <span className="text-gray-600 text-xs mr-4">De: {goalKr.toYearlyGoalsKr}</span>
                        <span className="text-gray-600 text-xs ml-4">Para: {goalKr.fromYearlyGoalsKr}</span>
                      </div>
                      <div className='percentage-container-disclosure w-[80%] mt-2 overflow-hidden'>
                        <div className='percentage-bar-yearly'></div>
                      </div>
                      <style>{`
                                .percentage-bar-yearly {
                                  height: 1rem;
                                  border-radius: 0.25rem;
                                  --tw-bg-opacity: 1;
                                  background-color: rgb(85 0 195 / var(--tw-bg-opacity));
                                  width: ${calcPercentage(goalKr.doneGoalsKr, goalKr.fromYearlyGoalsKr)}%;
                                }
                            `}</style>
                      <span className="tetx-xs">{calcPercentage(goalKr.doneGoalsKr, goalKr.fromYearlyGoalsKr)}% concluído</span>
                      <span className="text-gray-600 text-sm mt-2">Atual: {goalKr.doneGoalsKr}</span>
                    </div>

                    <button className="modal-btn h-[30px] mt-2" onClick={() => openModal(goalKr)}>
                      Atualizar valores
                    </button>

                    <div className="w-2/4">
                      <Modal isOpen={isOpen} closeModal={closeModal}>
                        <span className="text-gray-600 text-xs mx-2">
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
                    </div>

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
            </Disclosure>
          </div>
        )
      })}
    </>
  )
}

export default GoalKrs;