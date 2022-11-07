import { useState } from 'react'
import TaskPercentage from './TaskPercentage';
import { Disclosure } from '@headlessui/react'
import AddGoalTeam from './addGoalTeam';
import AddTeamKr from './addTeamKr';
import goalTeamsKrsApi from '../api/goalTeamsKrsApi';
import TeamKrModal from './teamKrModal';

function TeamObjectivesTeams({
  teams = null,
  goalTeamsByTeam,
  idCompany,
  idGoal,
  createGoalsTeam,
  modelChange,
  item,
  goalTeamByGoalTeam,
  goalTeamsKrs,
  goalTeamByKrs,
  searchParams,
  navigate }) {

  const [isOpen, setIsOpen] = useState(false)
  const [isOpenGoalTeam, setIsOpenGoalTeam] = useState(false)
  const [isOpenTeamKr, setIsOpenTeamKr] = useState(false)
  const [done, setDone] = useState(0)
  const [idGoalsTeam, setIdGoalsTeam] = useState(null)
  const [goalKr, setGoalKr] = useState({})
  const [isOpenTeam, setIsOpenTeam] = useState(false)
  const [krsByTeam, setKrsByTeam] = useState([])
  const [message, setMessage] = useState("Aqui vai uma mensagem")
  const [isOpenTeamKrModal, setIsOpenTeamKrModal] = useState(false)

  function stateDone({ target }) {
    setDone(target.value)
  }

  function closeTeamKrModal() {
    setIsOpenTeamKrModal(false)
  }

  function openTeamKrModal() {
    setIsOpenTeamKrModal(true)
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

  function openModalTeamKr(id) {
    setIsOpenTeamKr(true)
    setIdGoalsTeam(id)
  }

  function closeModalTeamKr() {
    setIsOpenTeamKr(false)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    
    if(Object.keys(item).length === 0 || 
    item.name === "" || 
    item.descriptions === "" ||
    item.quarterly === "" ||
    item.yearly === ""
    ){
      setMessage("Precisa preeencher os campos vazios")
    } else {
      const data = {
        ...item,
        idGoalsTeam,
        quarterly: parseInt(item.quarterly),
        yearly: parseInt(item.yearly)
      }

      goalTeamsKrsApi.create(idCompany, data)
        .then(() => {
          setMessage("KR criado com sucesso")
          navigate({
            pathname: `/empresas/${idCompany}/objetivo/${idGoal}`,
            search: '?update=true'
          })
          searchParams.delete("update")

          closeModalTeamKr()
        })
        .catch((error) => {
          console.error(error)
          setMessage("Algo deu errado!")
        })
    }
  }

  return (
    <>
      {(goalTeamsByTeam || []).map((goalTeams) => {
        return (
          <>
            <Disclosure>
              <div className='flex flex-col w-full bg-white p-4 my-4 rounded-lg'>
                <Disclosure.Button className='flex flex-row items-center justify-around w-full bg-white rounded-lg cursor-pointer'>
                  <div className='flex items-center'>
                    <span> {goalTeams.nameTeam} </span>
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
                    idTeam={goalTeams.idTeam}
                  />
                </Disclosure.Button>

                <Disclosure.Panel className="mt-2 flex flex-col">
                  {(goalTeamByGoalTeam.filter(e => e.idTeam === goalTeams.idTeam) || []).map((x) => {
                    return (
                      <>
                      <div className='text-gray-600 bg-[#D9D9D9] rounded-md px-2 py-1 my-1 flex flex-row justify-around items-center'>
                        <span className=''> {x.nameGoalTeam}
                          <span className="text-gray-400 text-xs mx-2"> descrição </span>
                        </span>
                        <span className='cursor-pointer' onClick={() => openModalTeamKr(x.idGoalTeam)}>Adicionar Krs</span>
                        
                        <AddTeamKr 
                          closeModal={closeModalTeamKr}
                          handleSubmit={handleSubmit}
                          isOpen={isOpenTeamKr}
                          nameGoalTeam={goalTeams.nameGoalTeam}
                          modelChange={modelChange}
                          message={message}
                          item={item}
                        />
                      </div>

                        <div className='flex flex-col items-center rounded-b-md bg-[#c3c2c2]'>
                          {(goalTeamByKrs.filter(e => e.idGoalTeam === x.idGoalTeam) || []).map((kr) => {
                            return (
                              <>
                                <div className='flex flex-row justify-around items-center w-full px-2'>
                                  <div className='w-2/4'>
                                    <p> {kr.nameGoalsTeamKr} </p>
                                  </div>

                                  <TeamKrModal
                                    nameGoalTeam={kr.nameGoalsTeamKr}
                                    closeModal={closeTeamKrModal}
                                    openModal={openTeamKrModal}
                                    isOpen={isOpenTeamKrModal}
                                  />
                                </div>
                              </>

                            )
                          })}

                        </div>
                      </>
                    )
                  })}
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