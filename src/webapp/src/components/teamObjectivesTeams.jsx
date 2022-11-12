import { useState } from 'react'
import TaskPercentage from './TaskPercentage';
import { Disclosure } from '@headlessui/react'
import AddGoalTeam from './addGoalTeam';
import AddTeamKr from './addTeamKr';
import goalTeamsKrsApi from '../api/goalTeamsKrsApi';
import TeamKrModal from './teamKrModal';
import historyGoalTeamKrApi from '../api/historyGoalTeamKrApi';
import tasksApi from '../api/tasksApi';
import teamsUsersApi from '../api/teamsUsersApi';
import taskUsersApi from '../api/taskUsersApi';
import AddTask from './addTask';
import { calcDate } from '../utilis';
import moment from 'moment';
import ListTasks from './listTasks';

function TeamObjectivesTeams({
  teams = null,
  goalTeamsByTeam,
  idCompany,
  idGoal,
  createGoalsTeam,
  modelChange,
  item,
  goalTeamByGoalTeam,
  closeModalGoalTeam,
  goalTeamsKrs,
  historyGoalTeamKrs,
  openModalGoalTeam,
  isOpenGoalTeam,
  goalTeamByKrs,
  teamUsers,
  tasksUser,
  setQueryUpdate,
  queryUpdate,
  searchParams,
  navigate }) {

  const [isOpen, setIsOpen] = useState(false)
  const [krs, setKrs] = useState({})
  const [isOpenTeamKr, setIsOpenTeamKr] = useState(false)
  const [done, setDone] = useState(0)
  const [idGoalsTeam, setIdGoalsTeam] = useState(null)
  const [user, setUser] = useState(null)
  const [goalKr, setGoalKr] = useState({})
  const [addTaskModal, setAddTaskModal] = useState(false)
  const [isOpenTeam, setIsOpenTeam] = useState(false)
  const [krsByTeam, setKrsByTeam] = useState([])
  const [message, setMessage] = useState("Aqui vai uma mensagem")
  const [isOpenTeamKrModal, setIsOpenTeamKrModal] = useState(false)
  const [itemTask, setItemTask] = useState({name:"", finalDate:""})

  function stateDone({ target }) {
    setDone(parseInt(target.value))
  }

  const closeAddTaskModal = () => {
    setAddTaskModal(false)
  }

  const openAddTaskModal = (items) => {
    setAddTaskModal(true)
    setKrs(items)
  }

  function closeTeamKrModal() {
    setIsOpenTeamKrModal(false)
  }

  function openTeamKrModal(item) {
    setIsOpenTeamKrModal(true)
    setKrs(item)
  }

  function closeModal() {
    setIsOpen(false)
  }

  function openModal(goalKr) {
    setGoalKr(goalKr)
    setIsOpen(true)
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
    item.toQuarterly === "" ||
    item.toYearly === "" ||
    item.fromQuarterly === "" ||
    item.fromYearly === ""
    ){
      setMessage("Precisa preeencher os campos vazios")
    } else {
      const data = {
        ...item,
        idGoalsTeam,
        toQuarterly: parseInt(item.toQuarterly),
        toYearly: parseInt(item.toYearly),
        fromQuarterly: parseInt(item.fromQuarterly),
        fromYearly: parseInt(item.fromYearly)
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

  const changeModal = ({ target }) => {
    setItemTask((state) => {
      return {...state,[target.name]: target.value}
    })
  }

  const createTask = async (event) => {
    event.preventDefault()

    const idGoalsTeamKr = krs.idgoalTeamsKr
    const {data} = await tasksApi.create(idCompany, {...itemTask,idGoalsTeamKr})
    const idTaskCreated = data.id

    const newData = {
      idTeamUser: null,
      idTask: idTaskCreated
    }

    taskUsersApi.create(idCompany, newData)
    .then(() => {
      setMessage("Tarefa criada com sucesso")
      setQueryUpdate((x) => !x)
      navigate({
        pathname: `/empresas/${idCompany}/objetivo/${idGoal}`,
        search: `?update=${queryUpdate}`
      })
      searchParams.delete("update")

      closeModalTeamKr()
    })
    .catch((error) => {
      console.error(error)
      setMessage("Algo deu errado!")
    })

  }

  const updateTask = (idTaskUser, idUser) => {
    const user = teamUsers?.filter(e=> e.idUser === parseInt(idUser))[0]
    const idTeamUser = user.idTeamUser

    console.log("idTaskUser", idTaskUser)
    console.log("idTeamUser", idTeamUser)

    taskUsersApi.update(idTaskUser, { idTeamUser })
    .then(() => {
      setMessage("Usuário adicionado com sucesso")
      navigate({
        pathname: `/empresas/${idCompany}/objetivo/${idGoal}`,
        search: '?update=true'
      })
      setUser("")
      searchParams.delete("update")
    })
    .catch((error) => {
      console.error(error)
      setMessage("Algo deu errado!")
    })
  }

  const goalTeamKrsUpdate = (idGoalTeamKrs, idProcessGoalsTeams, yeaPercentage, quaPercentage) => {
    const data = { done:done + krs?.doneGoalsTeamKr }

    goalTeamsKrsApi.update(idGoalTeamKrs, data)
      .then(() => {
        const newData = {
          idProcessGoalTeam:idProcessGoalsTeams,
          idGoalsTeamKr:idGoalTeamKrs,
          quaPercentage,
          yeaPercentage
        }

        console.log("newData",newData)

        historyGoalTeamKrApi.create(idCompany, newData)

        setMessage("Atualizado")
        navigate({
          pathname: `/empresas/${idCompany}/objetivo/${idGoal}`,
          search: '?update=true'
        })
        searchParams.delete("update")

        closeTeamKrModal()

      })
      .catch((error) => {
        console.error(error)
        setMessage("Algo deu errado")
      })
  }

  return (
    <>
      {(goalTeamsByTeam || []).map((goalTeams, i) => {
        return (
          <>
            <Disclosure key={i}>
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
                    item={item}
                  />
                </Disclosure.Button>

                <Disclosure.Panel className="mt-2 flex flex-col">
                  {(goalTeamByGoalTeam.filter(e => e.idTeam === goalTeams.idTeam) || []).map((x,i) => {
                    return (
                      <>
                      <div key={i} className='text-gray-600 bg-[#D9D9D9] rounded-t-md px-2 py-1 mt-4 flex flex-row justify-around items-center'>
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
                          {(goalTeamByKrs.filter(e => e.idGoalTeam === x.idGoalTeam) || []).map((kr, i) => {
                            return (
                              <>
                                <div key={i} className='flex items-center w-full p-2'>
                                  <div className='w-2/4'>
                                    <p> {kr.nameGoalsTeamKr} </p>
                                  </div>
                                  <span onClick={() => openTeamKrModal(kr)} className='cursor-pointer w-2/4'>
                                      Metas
                                  </span>
                                  <span onClick={() => openAddTaskModal(kr)} className='cursor-pointer text-center w-2/4'>
                                      Adicionar Tarefas
                                  </span>
                                  <TeamKrModal
                                    stateDone={stateDone}
                                    done={done}
                                    nameGoalTeam={kr.nameGoalsTeamKr}
                                    closeModal={closeTeamKrModal}
                                    openModal={openTeamKrModal}
                                    isOpen={isOpenTeamKrModal}
                                    historyGoalTeamKrs={historyGoalTeamKrs}
                                    krs={krs}
                                    goalTeamKrsUpdate={goalTeamKrsUpdate}
                                  />
                                  <AddTask
                                    isOpen={addTaskModal}
                                    message={message}
                                    closeModal={closeAddTaskModal}
                                    modelChange={changeModal}
                                    createTask={createTask}
                                    item={itemTask}
                                  />
                                </div>
                                <ListTasks
                                  tasksUser={tasksUser}
                                  kr={kr}
                                  teamUsers={teamUsers}
                                  setUser={setUser}
                                  updateTask={updateTask}
                                  user={user}
                                />
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