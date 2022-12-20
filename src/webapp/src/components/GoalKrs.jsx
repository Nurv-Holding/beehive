import Modal from "./CompanyMenuPanel/Goals/components/Modal"
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
import { useEffect } from "react";
import CloseKr from "./CloseKr";
import { Link } from "react-router-dom";

function GoalKrs({
  goalKrs,
  idCompany,
  historyGoalKrs,
  redirectHistory,
  goal,
  payload,
  token }) {

  let [isOpen, setIsOpen] = useState(false)
  const { idGoal } = useContext(ContextUser)
  const [done, setDone] = useState(0)
  const [goalKr, setGoalKr] = useState({})
  const [message, setMessage] = useState("")
  const navigate = useNavigate()
  const [description, setDescription] = useState("")
  const [searchParams, setSearchParams] = useSearchParams()
  const [isOpenFinishKr, setIsOpenFinishKr] = useState(false)
  const [finishKr, setFinishKr] = useState()
  const [note, setNote] = useState("")

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
    searchParams.delete('update')
    setSearchParams(searchParams)

    if(!done || description === ""){
      setMessage("Primeiro precisa preencher os campos")

    }else{
      const data = { done: done + goalKr?.doneGoalsKr }

      const newData = {
        idGoal: parseInt(idGoal),
        idGoalKr: goalKr.idgoalsKr,
        user: payload?.name,
        quaPercentage: calcPercentage((goalKr?.doneGoalsKr + done), goalKr?.fromQuarterlyGoalKrs),
        yeaPercentage: calcPercentage((goalKr?.doneGoalsKr + done), goalKr?.fromYearlyGoalsKr),
        to: goalKr?.doneGoalsKr,
        from: data.done,
        status: !!goalKr?.status,
        note: description
      }
  
      goalKrsApi.update(goalKr.idgoalsKr, data)
        .then(() => {
          setMessage("Atualizado")
  
          historyGoalKrApi.create(idCompany, newData)
  
          navigate({
            pathname: `/company/${idCompany}/goal/${idGoal}`,
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

  function closeModalFinishKr() {
    setIsOpenFinishKr(false)
  }

  const finishGoalKr = async (idGoalKr) => {
    searchParams.delete('update')
    setSearchParams(searchParams)

    if(note === ""){
      setMessage("Primeiro precisa preencher os campos")

    }else{
      const {data} = await historyGoalKrApi.getAll(idCompany)
      const history = data.length !== 0? data[data.length - 1]: null
      const result = await goalKrsApi.update(idGoalKr, {status: true})
      const goalKr = result.data
  
      const newData = {
        idGoal: parseInt(idGoal),
        idGoalKr: goalKr?.id,
        user: payload?.name,
        quaPercentage: history?.quaPercentage || 0,
        yeaPercentage: history?.yeaPercentage || 0,
        to: history?.to || 0,
        from: history?.from || 0,
        status: !!goalKr?.status,
        note
      }
  
      historyGoalKrApi.create(idCompany, newData)
      .then(() => {
          navigate({
            pathname: `/company/${idCompany}/goal/${idGoal}`,
            search: `?update=${true}`
          })
  
          closeModalFinishKr()
        })
        .catch((error) => {
          console.error(error)
          setMessage("Algo deu errado!")
        })
    }

  }

  function openModalCloseKr() {
    setIsOpenFinishKr(true)
  }

  return (
    <>
      {(goalKrs || []).map((goalKr, i) => {
        return (
          <div key={i} className={`${!(!!goalKr.status) && !(!!goal.status)? "bg-white rounded-md p-0.5 mt-4 flex flex-col":"bg-gray-200 rounded-md p-0.5 mt-4 flex flex-col"}`}>
            <Disclosure>
              <Disclosure.Button className='flex flex-row items-center justify-around w-full p-4 cursor-pointer'>
                <div className='flex items-center'>
                  <span> {goalKr.nameGoalsKr} </span>
                  <div className={`${!(!!goalKr.status) && !(!!goal.status)? "bg-green-500 rounded-full p-1.5 ml-2 border border-black":"bg-red-500 rounded-full p-1.5 ml-2 border border-black"}`}></div>
                </div>

                <div className='profile-photo-task'>
                  <img src="https://thispersondoesnotexist.com/image" />
                </div>

                <span className="text-gray-600 text-sm">Atualizado {moment(goalKr?.updateGoalsTasks).format('DD/MM/YY')} as {moment(goalKr?.updateGoalsTasks).format('HH:mm')}</span>
              </Disclosure.Button>

              <Disclosure.Panel className='w-full p-8 grid grid-cols-3 gap-4 justify-center items-center'>
                <div className="flex flex-col">
                  <div className="w-full">
                    <div className="flex flex-col mt-4">
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

                    <div className="flex flex-col">
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

                    <div className="w-2/4">
                      <Modal isOpen={isOpen} closeModal={closeModal}>
                        <span className="text-gray-600 text-xs mx-2">
                          Atualizado em: {moment(goalKr?.updateGoalsTasks).format('DD/MM/YY')} as {moment(goalKr?.updateGoalsTasks).format('HH:mm')}
                        </span>
                        <div className="flex flex-col gap-[2%] mt-4">
                          <div className="flex gap-2 items-center">
                            <div className="flex flex-col gap-5">
                              <input type="text" onChange={stateDone} className="input-style" name="done" placeholder="Atualizar os dados" />
                              <h4> Lições aprendidas </h4>
                              <textarea className="p-2" name="description" onChange={({ target }) => setDescription(target.value)} cols="60" rows="3"></textarea>
                              <button type="button" onClick={() => goalKrsUpdate()} className="submit-button">OK</button>
                              {message}
                            </div>
                          </div>
                        </div>
                      </Modal>
                    </div>

                  </div>

                  <div className="flex gap-2 mt-2">
                    {(!(!!goalKr?.status) && !(!!goal?.status)) &&
                      <button className="modal-btn h-[30px]" onClick={() => openModal(goalKr)}>
                        Atualizar valores
                      </button>
                    }

                    <button onClick={() => redirectHistory(`history-kr/${goalKr?.idgoalsKr}`)} className="modal-btn h-[30px]">
                        Histórico
                    </button>
                    {(!(!!goalKr?.status) && !(!!goal?.status)) &&
                      <CloseKr
                      nameKr={goalKr.nameGoalsKr}
                      idGoalKr={goalKr.idgoalsKr}
                      isOpen={isOpenFinishKr}
                      closeModal={closeModalFinishKr}
                      openModal={openModalCloseKr}
                      finishGoalKr={finishGoalKr}
                      setNote={setNote}
                      message={message}
                    />
                    }
                  </div>
                </div>

                <div>
                  <ChartGoalQuartely
                    items={
                      historyGoalKrs.filter(e => e?.idGoalKr === goalKr.idgoalsKr)
                    }
                    initialValue={goalKr}
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