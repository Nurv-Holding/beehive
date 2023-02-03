import Modal from "./CompanyMenuPanel/Goals/components/Modal"
import { useState } from 'react'
import { Disclosure } from '@headlessui/react'
import CloseKr from "./CloseKr"
import FinishingGoalUsersKrs from "./FinishingGoalUsersKrs"
import { calcPercentage } from "../utils/utilis"
import ChartGoalQuartely from "./ChartGoalQuartely"
import ChartGoalYearly from "./ChartGoalYearly"
import { json, useNavigate, useSearchParams } from "react-router-dom"
import { useContext } from "react"
import { ContextCompany } from "../context/ContextCompany"
import goalUserApi from "../api/goalUserApi"
import historyGoalsUserKrsApi from "../api/historyGoalsUserKrsApi"

function GoalUsersKrs({ kr, finishGoalUsersKr }) {
  const [isOpenUpdate, setIsOpenUpdate] = useState(false)
  const [isOpenFinishKr, setIsOpenFinishKr] = useState(false)
  const [searchParams, setSearchParams] = useSearchParams()
  const [message, setMessage] = useState("")
  const [itemUpdated, setItemUpdated] = useState({ done: null, note: "" })
  const {idCompany, idUser, historyGoalUsersKrs, idGoal} = useContext(ContextCompany)
  const navigate = useNavigate()

  function openModalFinishingKr() {
    setIsOpenFinishKr(true)
  }

  const pathHistory = `/company/${idCompany}/user/${idUser}/history/${kr?.idKr}`
  const path= `/company/${idCompany}/user/${idUser}/goal/${idGoal}`

  function openModalUpdate() {
    setIsOpenUpdate(true)
  }

  function closeModal() {
    setIsOpenFinishKr(false)
    setIsOpenUpdate(false)
  }

  const redirectHistory = () => {
    navigate(`${pathHistory}`)
  }

  const changeModel = ({target}) => {
    setItemUpdated((state) => {
      return {...state, [target.name]: target.value}
    })
  }

  const goalKrsUpdate = async (event) => {
    event.preventDefault()

    searchParams.delete('update')
    setSearchParams(searchParams)

    if (!itemUpdated.done || itemUpdated.note === "") {
      setMessage("Primeiro precisa preencher os campos")

    } else {
      const done = parseInt(itemUpdated.done)
      const data = { done: done + kr?.done }

      const result = await goalUserApi.updateKr(kr.idKr, data)
      const goalUserKr = result.data

      const newData = {
        idGoalsUserKr: goalUserKr.id,
        quaPercentage: calcPercentage((kr?.done + done), kr?.fromQuarterly),
        yeaPercentage: calcPercentage((kr?.done + done), kr?.fromYearly),
        to: kr?.done,
        from: data.done,
        status: !!kr?.krStatus,
        note: itemUpdated.note
      }

      historyGoalsUserKrsApi.create(idCompany, newData)
        .then(() => {
          setMessage("Atualizado")
          navigate({
            pathname: `${path}`,
            search: `?update=${true}`
          })

          closeModal()
        })
        .catch((error) => {
          console.error(error)
          setMessage("Algo deu errado")
        })
    }

  }

  return (
    <>
      <div className={`${!(!!kr.krStatus) ? "bg-white rounded-md p-0.5 mt-4 flex flex-col" : "bg-gray-200 rounded-md p-0.5 mt-4 flex flex-col"}`}>
        <Disclosure>
          <Disclosure.Button className='grid grid-cols-2 content-center justify-items-center w-full p-4 cursor-pointer'>
            <div className='flex items-center'>
              <span className="capitalize font-semibold"> {kr.idKr} {kr.nameKr} </span>
              <div className={`${!(!!kr.krStatus) ? "bg-green-500 rounded-full p-1.5 ml-2 border" : "bg-red-500 rounded-full p-1.5 ml-2 border"}`}></div>
            </div>

            <span className="text-gray-600 text-sm">Atualizado (data aqui)</span>
          </Disclosure.Button>

          <Disclosure.Panel className='w-full p-8 grid grid-cols-3 gap-4 justify-center items-center'>
            <div className="flex flex-col">
              <div className="w-full">
                <div className="flex flex-col mt-4">
                  <h5>Meta Trimestral:</h5>
                  <div className="flex flex-row">
                    <span className="text-gray-600 text-xs mr-4">De: {kr.fromQuarterly} </span>
                    <span className="text-gray-600 text-xs ml-4">Para: {kr.toQuarterly} </span>
                  </div>

                  <div className='percentage-container-disclosure w-[80%] mt-2 overflow-hidden'>
                    <div className="percentage-bar-quartely"></div>
                  </div>
                  <style>{`
                                .percentage-bar-quartely {
                                  height: 1rem;
                                  border-radius: 0.25rem;
                                  --tw-bg-opacity: 1;
                                  background-color: rgb(31 98 222/ var(--tw-bg-opacity));
                                  width: ${calcPercentage(kr.done, kr.fromQuarterly)}%;
                                }
                            `}</style>
                  <span className="text-xs">{calcPercentage(kr.done, kr.fromQuarterly)}% concluído</span>
                  <span className="text-gray-600 text-sm mt-2">Atual: {kr.done}</span>
                </div>

                <div className="flex flex-col">
                  <h5>Meta Anual:</h5>
                  <div className="flex flex-row">
                    <span className="text-gray-600 text-xs mr-4">De: {kr.fromYearly}</span>
                    <span className="text-gray-600 text-xs ml-4">Para: {kr.toYearly}</span>
                  </div>
                  <div className='percentage-container-disclosure w-[80%] mt-2 overflow-hidden'>
                    <div className='percentage-bar-yearly'></div>
                  </div>
                  <style>{`
                                .percentage-bar-yearly {
                                  height: 1rem;
                                  border-radius: 0.25rem;
                                  --tw-bg-opacity: 1;
                                  background-color: rgb(31 98 222/ var(--tw-bg-opacity));
                                  width: ${calcPercentage(kr.done, kr.fromYearly)}%;
                                }
                            `}</style>
                  <span className="tetx-xs">{calcPercentage(kr.done, kr.fromYearly)}% concluído</span>
                  <span className="text-gray-600 text-sm mt-2">Atual: {kr.done}</span>
                </div>

                <div className="w-2/4">
                  <Modal isOpen={isOpenUpdate} closeModal={closeModal}>
                    <span className="text-gray-600 text-xs mx-2">
                      Atualizado em: (dataAqui)
                    </span>
                    <div className="flex flex-col gap-[2%] mt-4">
                      <div className="flex gap-2 items-center">
                        <form onSubmit={goalKrsUpdate} className="flex flex-col gap-5">
                          <input type="text" className="input-style" onChange={changeModel} name="done" placeholder="Atualizar os dados" />
                          <span>Descrição</span>
                          <textarea className="p-2 input-style min-h-[50px]" onChange={changeModel} name="note" cols="60" rows="3"></textarea>
                          <button type="submit" className="submit-button">OK</button>
                          <span className="text-red-600">
                            {/* <span className={`${message === "Aqui vai uma mensagem" ? 'hidden' : 'block'}`}> {message} </span> */}
                          </span>
                        </form>
                      </div>
                    </div>
                  </Modal>
                </div>

              </div>

              <div className="flex gap-2 mt-2">
                {!(!!kr.krStatus) &&
                <button onClick={openModalUpdate} className="modal-btn h-[30px]">
                  Atualizar valores
                </button>
                }


                <button onClick={redirectHistory} className="modal-btn h-[30px]">
                  Histórico
                </button>
                
                {!(!!kr.krStatus) &&
                <FinishingGoalUsersKrs
                  isOpen={isOpenFinishKr}
                  closeModal={closeModal}
                  openModal={openModalFinishingKr}
                  kr={kr}
                  finishGoalUsersKr={finishGoalUsersKr}
                />
                }

              </div>
            </div>

            <div>
              <ChartGoalQuartely
                items={
                  (historyGoalUsersKrs || []).filter(e => e?.idGoalsUserKr === kr.idKr)
                }
                initialValue={kr}
                title={"Trimestral"}
              />
            </div>

            <div>
              <ChartGoalYearly
                items={
                  (historyGoalUsersKrs || []).filter(e => e?.idGoalsUserKr === kr.idKr)
                }
                initialValue={kr}
                title={"Anual"}
              />
            </div>

          </Disclosure.Panel>
        </Disclosure>
      </div>
    </>
  )
}

export default GoalUsersKrs;