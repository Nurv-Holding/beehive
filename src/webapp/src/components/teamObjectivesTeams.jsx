import { useState } from 'react'
import TaskPercentage from './TaskPercentage';
import { Disclosure } from '@headlessui/react'
import AddGoalTeam from './addGoalTeam';
import AddTeamKr from './addTeamKr';
import goalTeamsKrsApi from '../api/goalTeamsKrsApi';

function TeamObjectivesTeams({ 
  teams = null, 
  goalTeamsByTeam,
  idCompany,
  idGoal,
  createGoalsTeam, 
  modelChange, 
  item,
  goalTeamsKrs, 
  searchParams, 
  navigate }) {

  const [isOpen, setIsOpen] = useState(false)
  const [isOpenGoalTeam, setIsOpenGoalTeam] = useState(false)
  const [isOpenTeamKr, setIsOpenTeamKr] = useState(false)
  const [done, setDone] = useState(0)
  const [goalKr, setGoalKr] = useState({})
  const [isOpenTeam, setIsOpenTeam] = useState(false)
  const [krsByTeam, setKrsByTeam] = useState([])
  const [message, setMessage] = useState("Aqui vai uma mensagem")

  function stateDone({ target }) {
    setDone(target.value)
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

  function openModalTeamKr() {
    setIsOpenTeamKr(true)
  }

  function closeModalTeamKr() {
    setIsOpenTeamKr(false)
  }

  const handleKrsByTeam = (idTeam) => {

    return goalTeamsKrsApi.getByTeamAndKrs(idCompany, idTeam)
    .then(x => setKrsByTeam(x.data))
    
  }

  const handleSubmit = (idGoalsTeam) => {
    
    if(Object.keys(item).length === 0 || 
    item.name === "" || 
    item.descriptions === "" ||
    item.quarterly === "" ||
    item.yearly === ""
    ){
      setMessage("Precisa preeencher os campos vazios")
    }else{
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
                  <div className='text-gray-600 bg-[#D9D9D9] rounded-md px-2 py-1 my-1 flex flex-row justify-around items-center'>
                    <span className=''> {goalTeams.nameGoalTeam}
                      <span className="text-gray-400 text-xs mx-2"> descrição </span>
                    </span>
                    
                    
                    <AddTeamKr 
                      closeModal={closeModalTeamKr} 
                      isOpen={isOpenTeamKr}
                      openModal={openModalTeamKr}
                      nameGoalTeam={goalTeams.nameGoalTeam}
                      handleSubmit={handleSubmit}
                      modelChange={modelChange}
                      idGoalTeam={goalTeams.idGoalTeam}
                      message={message}
                      item={item}
                    />
                  </div>

                  <div>
                  {(goalTeamsKrs || []).map((kr) => {
                    return(
                      <>
                        <p> {kr.nameGoalsTeamKr} </p>
                      </>
                    )
                  })}
   
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