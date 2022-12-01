import { useState } from 'react'
import TaskPercentage from './TaskPercentage';
import { Disclosure } from '@headlessui/react'
import AddGoalTeam from './addGoalTeam';
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
import AddTeamKr from './addTeamKr';

function TeamsGoal({
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
  const [itemTask, setItemTask] = useState({ name: "", finalDate: "" })

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

    if (Object.keys(item).length === 0 ||
      item.name === "" ||
      item.descriptions === "" ||
      item.toQuarterly === "" ||
      item.toYearly === "" ||
      item.fromQuarterly === "" ||
      item.fromYearly === ""
    ) {
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
          setQueryUpdate((x) => !x)
          navigate({
            pathname: `/empresas/${idCompany}/objetivo/${idGoal}`,
            search: `?update=${queryUpdate}`
          })

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
      return { ...state, [target.name]: target.value }
    })
  }

  const createTask = async (event) => {
    event.preventDefault()

    const idGoalsTeamKr = krs.idgoalTeamsKr
    const { data } = await tasksApi.create(idCompany, { ...itemTask, idGoalsTeamKr })
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

        closeAddTaskModal()
      })
      .catch((error) => {
        console.error(error)
        setMessage("Algo deu errado!")
      })

  }

  const updateTask = (idTaskUser, idUser) => {
    const user = teamUsers?.filter(e => e.idUser === parseInt(idUser))[0]
    const idTeamUser = user.idTeamUser

    taskUsersApi.update(idTaskUser, { idTeamUser })
      .then(() => {
        setMessage("Usuário adicionado com sucesso")
        setQueryUpdate((x) => !x)
        navigate({
          pathname: `/empresas/${idCompany}/objetivo/${idGoal}`,
          search: `?update=${queryUpdate}`
        })

      })
      .catch((error) => {
        console.error(error)
        setMessage("Algo deu errado!")
      })
  }

  const goalTeamKrsUpdate = (idGoalTeamKrs, idProcessGoalsTeams, yeaPercentage, quaPercentage) => {
    const data = { done: done + krs?.doneGoalsTeamKr }

    goalTeamsKrsApi.update(idGoalTeamKrs, data)
      .then(() => {
        const newData = {
          idProcessGoalTeam: idProcessGoalsTeams,
          idGoalsTeamKr: idGoalTeamKrs,
          quaPercentage,
          yeaPercentage
        }

        historyGoalTeamKrApi.create(idCompany, newData)

        setMessage("Atualizado")
        setQueryUpdate((x) => !x)
        navigate({
          pathname: `/empresas/${idCompany}/objetivo/${idGoal}`,
          search: `?update=${queryUpdate}`
        })

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
                <div className='flex flex-row w-full'>
                  <Disclosure.Button className='flex flex-row items-center justify-around w-full bg-white rounded-lg cursor-pointer'>
                    <div className='flex items-center'>
                      <span> {goalTeams.nameTeam} </span>
                    </div>

                    <div className='percentage-container-disclosure w-[20%]'>
                      <div className='percentage-bar-disclosure w-[0%]'></div>
                    </div>

                    <TaskPercentage
                    />


                  </Disclosure.Button>

                  <AddGoalTeam
                    closeModal={closeModalGoalTeam}
                    openModal={openModalGoalTeam}
                    isOpen={isOpenGoalTeam}
                    createGoalsTeam={createGoalsTeam}
                    modelChange={modelChange}
                    idTeam={goalTeams.idTeam}
                    item={item}
                  />
                </div>

                <Disclosure.Panel className="mt-2 flex flex-col">
                  {(goalTeamByGoalTeam.filter(e => e.idTeam === goalTeams.idTeam) || []).map((x, i) => {
                    return (
                      <>
                        <div key={i} className='text-gray-600 bg-[#D9D9D9] rounded-t-md px-2 py-1 mt-4 flex flex-row justify-around items-center'>
                          <span className=''> {x.nameGoalTeam}
                            <span className="text-gray-400 text-xs mx-2"> descrição </span>
                          </span>
                          {x.idGoalTeam && <span className='cursor-pointer' onClick={() => openModalTeamKr(x.idGoalTeam)}>Adicionar Krs</span>}

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

                        <div className='flex flex-col w-full justify-center rounded-b-md'>
                          {(goalTeamByKrs.filter(e => e.idGoalTeam === x.idGoalTeam) || []).map((kr, i) => {
                            return (
                              <>
                                <div className={`${i === 0 || i % 2 === 0 ? "flex flex-col bg-gray-300" : "flex flex-col bg-gray-200"}`}>
                                  <div key={i} className={`${i === 0 || i % 2 === 0 ? "flex items-center justify-around w-full p-2" : "flex items-center justify-around w-full p-2"}`}>
                                    <div>
                                      <p> {kr.nameGoalsTeamKr} </p>
                                    </div>

                                    <div>
                                      <span onClick={() => openTeamKrModal(kr)} className='cursor-pointer'>
                                        Metas
                                      </span>
                                    </div>

                                    <div>
                                      <span onClick={() => openAddTaskModal(kr)} className='cursor-pointer text-center'>
                                        Adicionar tarefas
                                      </span>
                                      <AddTask
                                        isOpen={addTaskModal}
                                        message={message}
                                        closeModal={closeAddTaskModal}
                                        modelChange={changeModal}
                                        createTask={createTask}
                                        item={itemTask}
                                      />
                                    </div>

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
                                  </div>

                                  <ListTasks
                                    tasksUser={tasksUser}
                                    kr={kr}
                                    teamUsers={teamUsers}
                                    setUser={setUser}
                                    updateTask={updateTask}
                                    user={user}
                                    navigate={navigate}
                                    idGoal={idGoal}
                                    idCompany={idCompany}
                                    setQueryUpdate={setQueryUpdate}
                                    queryUpdate={queryUpdate}
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

export default TeamsGoal;