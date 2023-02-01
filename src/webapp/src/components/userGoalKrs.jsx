import Modal from "./CompanyMenuPanel/Goals/components/Modal"
import { useState } from 'react'
import { Disclosure } from '@headlessui/react'
import CloseKr from "./CloseKr"
import UserCloseKr from "./UserCloseKr"

function UserGoalKrs() {

  let [isOpenUpdate, setIsOpenUpdate] = useState(false)
  let [isOpenFinishKr, setIsOpenFinishKr] = useState(false)

  function openModalCloseKr() {
    setIsOpenFinishKr(true)
  }

  function openModalUpdate() {
    setIsOpenUpdate(true)
  }

  function openModalUpdate() {
    setIsOpenUpdate(true)
  }

  function closeModal() {
    setIsOpenFinishKr(false)
    setIsOpenUpdate(false)
  }

  return (
    <>
      <div className="bg-white rounded-md p-0.5 mt-4 flex flex-col">
        <Disclosure>
          <Disclosure.Button className='grid grid-cols-2 content-center justify-items-center w-full p-4 cursor-pointer'>
            <div className='flex items-center'>
              <span className="capitalize font-semibold"> Nome do Objetivo </span>
              <div className="bg-green-500 rounded-full p-1.5 ml-2 border"></div>
            </div>

            <span className="text-gray-600 text-sm">Atualizado (data aqui)</span>
          </Disclosure.Button>

          <Disclosure.Panel className='w-full p-8 grid grid-cols-3 gap-4 justify-center items-center'>
            <div className="flex flex-col">
              <div className="w-full">
                <div className="flex flex-col mt-4">
                  <h5>Meta Trimestral:</h5>
                  <div className="flex flex-row">
                    <span className="text-gray-600 text-xs mr-4">De: (valorAqui)</span>
                    <span className="text-gray-600 text-xs ml-4">Para: (valorAqui)</span>
                  </div>

                  <div className='percentage-container-disclosure w-[80%] mt-2 overflow-hidden'>
                    <div className="percentage-bar-quartely"></div>
                  </div>
                  {/* <style>{`
                                .percentage-bar-quartely {
                                  height: 1rem;
                                  border-radius: 0.25rem;
                                  --tw-bg-opacity: 1;
                                  background-color: rgb(31 98 222/ var(--tw-bg-opacity));
                                  width: ${calcPercentage(goalKr.doneGoalsKr, goalKr.fromQuarterlyGoalKrs)}%;
                                }
                            `}</style> */}
                  <span className="text-xs">(valorAqui)% concluído</span>
                  <span className="text-gray-600 text-sm mt-2">Atual: (valorAqui)</span>
                </div>

                <div className="flex flex-col">
                  <h5>Meta Anual:</h5>
                  <div className="flex flex-row">
                    <span className="text-gray-600 text-xs mr-4">De: (valorAqui)</span>
                    <span className="text-gray-600 text-xs ml-4">Para: (valorAqui)</span>
                  </div>
                  <div className='percentage-container-disclosure w-[80%] mt-2 overflow-hidden'>
                    <div className='percentage-bar-yearly'></div>
                  </div>
                  {/* <style>{`
                                .percentage-bar-yearly {
                                  height: 1rem;
                                  border-radius: 0.25rem;
                                  --tw-bg-opacity: 1;
                                  background-color: rgb(31 98 222/ var(--tw-bg-opacity));
                                  width: ${calcPercentage(goalKr.doneGoalsKr, goalKr.fromYearlyGoalsKr)}%;
                                }
                            `}</style> */}
                  <span className="tetx-xs">(valorAqui)% concluído</span>
                  <span className="text-gray-600 text-sm mt-2">Atual: (valorAqui)</span>
                </div>

                <div className="w-2/4">
                  <Modal isOpen={isOpenUpdate} closeModal={closeModal}>
                    <span className="text-gray-600 text-xs mx-2">
                      Atualizado em: (dataAqui)
                    </span>
                    <div className="flex flex-col gap-[2%] mt-4">
                      <div className="flex gap-2 items-center">
                        <form className="flex flex-col gap-5">
                          <input type="text" className="input-style" name="done" placeholder="Atualizar os dados" />
                          <span>Descrição</span>
                          <textarea className="p-2 input-style min-h-[50px]" name="note" cols="60" rows="3"></textarea>
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
                <button onClick={openModalUpdate} className="modal-btn h-[30px]">
                  Atualizar valores
                </button>

                <button className="modal-btn h-[30px]">
                  Histórico
                </button>

                <UserCloseKr
                  isOpen={isOpenFinishKr}
                  closeModal={closeModal}
                  openModal={openModalCloseKr}
                />
              </div>
            </div>

            <div>
              {/* <ChartGoalQuartely
                items={
                  historyGoalKrs.filter(e => e?.idGoalKr === goalKr.idgoalsKr)
                }
                initialValue={goalKr}
                title={"Trimestral"}
              /> */}
            </div>

            <div>
              {/* <ChartGoalYearly
                items={
                  historyGoalKrs.filter(e => e?.idGoalKr === goalKr.idgoalsKr)
                }
                title={"Anual"}
              /> */}
            </div>

          </Disclosure.Panel>
        </Disclosure>
      </div>
    </>
  )
}

export default UserGoalKrs;