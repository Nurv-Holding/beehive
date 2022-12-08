import { useEffect } from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import Header from '../components/Header';
import AddKr from '../components/addKr';
import GoalKrs from '../components/GoalKrs';
import TeamsGoal from '../components/TeamsGoal';
import { ContextUser } from '../context/ContextUser';
import goalsApi from '../api/goalsApi';
import goalKrsApi from '../api/goalKrsApi';
import goalsTeamApi from '../api/goalsTeamApi';
import goalTeamsKrsApi from '../api/goalTeamsKrsApi';
import AddTeam from '../components/addTeam';
import historyGoalTeamKrApi from '../api/historyGoalTeamKrApi';
import historyGoalKrApi from '../api/historyGoalKrApi';
import taskUsersApi from '../api/taskUsersApi';
import teamsUsersApi from '../api/teamsUsersApi';
import CloseGoal from '../components/CloseGoal';
import { calcPercentage } from '../utilis';

function Goal() {
  const { idGoal, idCompany, teams, modelChange, item, users, payload, token } = useContext(ContextUser)
  const [message, setMessage] = useState("Aqui vai uma mensagem")
  const [loading, setLoading] = useState(false)
  const [goal, setGoal] = useState({})
  const [goalKrs, setGoalKrs] = useState([])
  const [goalTeamsByTeam, setGoalTeamsByTeam] = useState([])
  const [goalTeamsKrs, setGoalTeamsKrs] = useState([])
  const [goalTeamByGoalTeam, setGoalTeamByGoalTeam] = useState([])
  const [goalTeamByKrs, setGoalTeamByKrs] = useState([])
  const [historyGoalTeamKrs, setHistoryGoalTeamKrs] = useState([])
  const [historyGoalKrs, setHistoryGoalKrs] = useState([])
  const [queryUpdate, setQueryUpdate] = useState(false)
  const [teamUsers, setTeamUsers] = useState([])
  const [ooalTeam, setGoalTeam] = useState([])
  const [ooalTeams, setGoalTeams] = useState([])
  const [itemGoal, setItemGoal] = useState({ name: "", descriptions: "" })
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const [isOpen, setIsOpen] = useState(false)
  const [isOpenTeam, setIsOpenTeam] = useState(false)
  const [isOpenGoalTeam, setIsOpenGoalTeam] = useState(false)
  const [isOpenCloseGoal, setIsOpenCloseGoal] = useState(false)
  const [idTeam, setIdTeam] = useState(null)
  const [tasksUser, setTasksUser] = useState([])
  const update = searchParams.get('update')

  useEffect(() => {
    handleGoal()
    handleGoalKrs()
    handleGoalTeamsByTeam()
    handleGoalTeam()
    handleGoalTeams()
    handleGoalTeamsKrs()
    handleGoalTeamByGoalTeam()
    handleGoalTeamByKrs()
    handleHistoryGoalTeamKrs()
    handleHistoryGoalKrs()
    handleTasksUser()
    handleTemaUsers()

  }, [idGoal, idCompany, update])

  function updateData() {
    setIsOpen(false)
  }

  function closeModalGoalTeam() {
    setIsOpenGoalTeam(false)
  }

  function openModalGoalTeam(id) {
    setIsOpenGoalTeam(true)
    setIdTeam(id)
  }

  function closeModal() {
    setIsOpen(false)
  }

  function closeModalTeam() {
    setIsOpenTeam(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  function openModalTeam() {
    setIsOpenTeam(true)
  }

  function openModalCloseGoal() {
    setIsOpenCloseGoal(true)
  }

  function closeModalCloseGoal() {
    setIsOpenCloseGoal(false)
  }

  const handleTasksUser = async () => {
    const { data } = await taskUsersApi.getByUserAndKrs(idCompany, idGoal)
    setTasksUser(data)
  }

  const handleTemaUsers = async () => {
    const { data } = await teamsUsersApi.getAllTeamsAndUsers(idCompany)
    setTeamUsers(data)
  }

  const handleHistoryGoalTeamKrs = async () => {
    const { data } = await historyGoalTeamKrApi.getByKrs()
    setHistoryGoalTeamKrs(data)

  }

  const handleHistoryGoalKrs = async () => {
    const { data } = await historyGoalKrApi.getAll(idCompany)
    setHistoryGoalKrs(data)
  }

  const handleGoalTeamByGoalTeam = async () => {
    const { data } = await goalTeamsKrsApi.getGroupByGoalTeam(idCompany, idGoal)
    setGoalTeamByGoalTeam(data)
  }

  const handleGoalTeamByKrs = async () => {
    const { data } = await goalTeamsKrsApi.getGroupByKrs(idCompany, idGoal)
    setGoalTeamByKrs(data)
  }

  const handleGoal = async () => {
    const { data } = await goalsApi.getById(idGoal, idCompany)
    setGoal(data)
  }

  const handleGoalTeamsByTeam = async () => {
    const { data } = await goalTeamsKrsApi.getGroupByTeam(idCompany, idGoal)
    setGoalTeamsByTeam(data)
  }

  const handleGoalTeamsKrs = async () => {
    const { data } = await goalTeamsKrsApi.getByGoal(idCompany, idGoal)
    setGoalTeamsKrs(data)
  }

  const handleGoalTeam = async () => {
    const { data } = await goalsTeamApi.getById(idCompany, idGoal)
    setGoalTeam(data)
  }

  const handleGoalTeams = async () => {
    const { data } = await goalsTeamApi.getByGoal(idCompany, idGoal)
    setGoalTeams(data)
  }

  const handleGoalKrs = async () => {
    const { data } = await goalKrsApi.getByGoal(idCompany, idGoal)
    setGoalKrs(data)
  }

  const addTeamInGoal = async (event) => {
    event.preventDefault()

    const idTeam = parseInt(item?.team)
    const newIdGoal = parseInt(idGoal)

    const { data } = await goalsTeamApi.getByTeam(idCompany, idTeam)

    const hasTeam = data.filter(e => e.idGoal == idGoal && e.idTeam == idTeam)

    if (Object.keys(item).length === 0) {
      setMessage("Precisa selecionar um time")

    } else if (hasTeam.length !== 0) {
      setMessage("Time já selecionado")

    } else {
      goalsTeamApi.createProcess(idCompany, { idTeam, idGoal: newIdGoal })
        .then(() => {
          setMessage("Time adicionado sucesso")
          setQueryUpdate((x) => !x)
          navigate({
            pathname: `/company/${idCompany}/goal/${idGoal}`,
            search: `?update=${queryUpdate}`
          })

          closeModalTeam()
        })
        .catch((error) => {
          console.error(error)
          setMessage("Algo deu errado!")
        })
    }
  }

  const createGoalsTeam = async (idTeam) => {
    console.log("idTeam", idTeam)

    const newIdGoal = parseInt(idGoal)

    const newData = {
      ...itemGoal,
      idGoal: newIdGoal,
      author: payload?.id
    }

    console.log("newData", newData)

    const { data } = await goalsTeamApi.create(idCompany, newData)
    const idGoalsTeam = data.id

    const goalsTeam = goalTeamsByTeam.filter(e => e.idTeam === idTeam)[0]
    console.log("goalsTeam", goalsTeam)

    if (goalsTeam?.idGoalTeam) {
      const data = {
        idGoalsTeam,
        idGoal: newIdGoal,
        idTeam
      }

      console.log("data", data)

      goalsTeamApi.createProcess(idCompany, data)
        .then(() => {
          setMessage("Ojetivo criado com sucesso")
          setQueryUpdate((x) => !x)
          navigate({
            pathname: `/company/${idCompany}/goal/${idGoal}`,
            search: `?update=${queryUpdate}`
          })

          closeModalGoalTeam()

        })
        .catch((error) => {
          console.error(error)
          setMessage("Algo deu errado!")
        })

    } else {
      goalsTeamApi.updateProcess(goalsTeam.idProcessGoalsTeams, { idGoalsTeam })
        .then(() => {
          setMessage("Ojetivo criado com sucesso")
          setQueryUpdate((x) => !x)
          navigate({
            pathname: `/company/${idCompany}/goal/${idGoal}`,
            search: `?update=${queryUpdate}`
          })

          closeModalGoalTeam()
        })
        .catch((error) => {
          console.error(error)
          setMessage("Algo deu errado!")
        })
    }

  }

  const redirectHistory = (route) => {
    navigate(route)
  }

  const changeModel = ({ target }) => {
    setItemGoal((state) => {
      return { ...state, [target.name]: target.value }
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    const data = {
      ...item,
      idGoal: parseInt(idGoal),
      toQuarterly: parseInt(item.toQuarterly),
      toYearly: parseInt(item.toQuarterly),
      fromQuarterly: parseInt(item.fromQuarterly),
      fromYearly: parseInt(item.fromYearly),
      done:parseInt(item.toQuarterly),
      author: payload?.id
    }

    const result = await goalKrsApi.create(idCompany, data)
    const goalKr = result.data

    const newData = {
      idGoal: parseInt(idGoal),
      idGoalKr: goalKr.id,
      user: payload?.name,
      quaPercentage: calcPercentage((goalKr?.done), goalKr?.fromQuarterly),
      yeaPercentage: calcPercentage((goalKr?.done), goalKr?.fromYearly),
      to: goalKr?.done,
      from: data.done,
      status: !!goalKr?.status
    }

    historyGoalKrApi.create(idCompany, newData)
    .then(() => {
      setMessage("KR criado com sucesso")
      setQueryUpdate((x) => !x)
      navigate({
        pathname: `/company/${idCompany}/goal/${idGoal}`,
        search: `?update=${queryUpdate}`
      })

      closeModal()
    })
    .catch((error) => {
      console.error(error)
      setMessage("Algo deu errado!")
    })
  }

  return (
    <>
      <Header />

      <main className='flex flex-col items-center'>
        <div className='w-11/12'>
          <div className='container-two-percentage'>
            <div className='container-percentage-okr flex flex-col'>
              <span className='text-bold text-xl text-white '>{goal.name}</span>
              <span className='text-bold text-lg mt-2 text-white'> Criado por: {(users || [])?.filter(e => e.id === goal.author)[0]?.name} </span>
            </div>
            {!(!!goal.status)&&
            <div className='container-percentage-okr flex flex-row justify-around'>
              <AddKr
                message={message}
                nameGoal={goal.name}
                handleSubmit={handleSubmit}
                modelChange={modelChange}
                isOpen={isOpen}
                closeModal={closeModal}
                openModal={openModal}
                item={item}
              />

              <AddTeam
                message={message}
                handleSubmit={handleSubmit}
                modelChange={modelChange}
                isOpen={isOpenTeam}
                closeModal={closeModalTeam}
                openModal={openModalTeam}
                teams={teams}
                item={item}
                addTeamInGoal={addTeamInGoal}
              />

              <CloseGoal
                handleSubmit={handleSubmit}
                nameGoal={goal.name}
                isOpen={isOpenCloseGoal}
                closeModal={closeModalCloseGoal}
                openModal={openModalCloseGoal}
                idGoal={idGoal}
                setQueryUpdate={setQueryUpdate}
                queryUpdate={queryUpdate}
                idCompany={idCompany}
              />
            </div>
            }
          </div>

          <GoalKrs
            goalKrs={goalKrs}
            updateData={updateData}
            update={update}
            loading={loading}
            idCompany={idCompany}
            setQueryUpdate={setQueryUpdate}
            queryUpdate={queryUpdate}
            historyGoalKrs={historyGoalKrs}
            token={token}
            payload={payload}
            users={users}
            goal={goal}
            redirectHistory={redirectHistory}
          />

          <div className='border-t mt-6 pt-4 border-white'>
            <span className='text-bold text-xl mt-2 text-white'>Times</span>
            <TeamsGoal
              goalTeamByGoalTeam={goalTeamByGoalTeam}
              goalTeamsByTeam={goalTeamsByTeam}
              goalTeamsKrs={goalTeamsKrs}
              createGoalsTeam={createGoalsTeam}
              modelChange={changeModel}
              searchParams={searchParams}
              navigate={navigate}
              idCompany={idCompany}
              closeModalGoalTeam={closeModalGoalTeam}
              isOpenGoalTeam={isOpenGoalTeam}
              openModalGoalTeam={openModalGoalTeam}
              idGoal={idGoal}
              goalTeamByKrs={goalTeamByKrs}
              item={itemGoal}
              historyGoalTeamKrs={historyGoalTeamKrs}
              tasksUser={tasksUser}
              teamUsers={teamUsers}
              setQueryUpdate={setQueryUpdate}
              queryUpdate={queryUpdate}
              payload={payload}
              goal={goal}
              redirectHistory={redirectHistory}
              idTeam={idTeam}
            />
          </div>
        </div>
      </main>
    </>
  )
}

export default Goal;
