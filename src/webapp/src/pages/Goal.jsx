import { useState } from 'react';
import { useContext } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import AddKr from '../components/addKr';
import GoalKrs from '../components/GoalKrs';
import TeamsGoal from '../components/TeamsGoal';
import { ContextCompany } from '../context/ContextCompany';
import goalKrsApi from '../api/goalKrsApi';
import goalsTeamApi from '../api/goalsTeamApi';
import goalTeamsKrsApi from '../api/goalTeamsKrsApi';
import AddTeam from '../components/addTeam';
import historyGoalTeamKrApi from '../api/historyGoalTeamKrApi';
import historyGoalKrApi from '../api/historyGoalKrApi';
import taskUsersApi from '../api/taskUsersApi';
import CloseGoal from '../components/CloseGoal';
import { calcPercentage } from '../utils/utilis';
import TitleCompany from '../components/TitleCompany';
import tasksApi from '../api/tasksApi';

const Goal = () => {
  const {
    idGoal,
    idCompany,
    teams,
    modelChange,
    users,
    item,
    company,
    payload,
    token,
    teamUsers,
    tasksUser,
    historyGoalTeamKrs,
    historyGoalKrs,
    goalTeamByGoalTeam,
    goalTeamByKrs,
    goal,
    goalTeamsByTeam,
    goalTeamsKrs,
    goalKrsByGoal,
    loadingGoalKrs,
    loadingGoalTeamsByTeam
  } = useContext(ContextCompany)
  const [message, setMessage] = useState("")
  const [itemGoal, setItemGoal] = useState({ name: "", descriptions: "" })
  const navigate = useNavigate()
  const [searchParams, setSearchParams] = useSearchParams()
  const [isOpen, setIsOpen] = useState(false)
  const [isOpenTeam, setIsOpenTeam] = useState(false)
  const [isOpenGoalTeam, setIsOpenGoalTeam] = useState(false)
  const [isOpenCloseGoal, setIsOpenCloseGoal] = useState(false)
  const [idTeam, setIdTeam] = useState(null)
  const [noteTeamKr, setNoteTeamKr] = useState("")
  const [openModalFinishKr, setOpenModalFinishKr] = useState(false)
  const objectKr = {}
  const [itemKr, setItemKr] = useState(objectKr)
  const update = searchParams.get('update')

  const changeModelKr = ({ target }) => {
    setItemKr((state) => {
      return {...state, [target.name]: target.value}
    })
  }

  const path = `/company/${idCompany}/goals/${idGoal}`

  const updateData = () => {
    setIsOpen(false)
  }

  const closeModalFinishTeamKr = () => {
    setOpenModalFinishKr(false)
  }

  const closeModalGoalTeam = () => {
    setIsOpenGoalTeam(false)
  }

  const openModalGoalTeam = (id) => {
    setIsOpenGoalTeam(true)
    setIdTeam(id)
  }

  const closeModal = () => {
    setIsOpen(false)
  }

  const closeModalTeam = () => {
    setIsOpenTeam(false)
  }

  const openModal = () => {
    setIsOpen(true)
    setMessage("")
  }

  const openModalTeam = () => {
    setIsOpenTeam(true)
  }

  const openModalCloseGoal = () => {
    setIsOpenCloseGoal(true)
  }

  const closeModalCloseGoal = () => {
    setIsOpenCloseGoal(false)
  }

  const addTeamInGoal = async (event) => {
    event.preventDefault()

    searchParams.delete('update')
    setSearchParams(searchParams)

    const idTeam = parseInt(item?.team)
    const newIdGoal = parseInt(idGoal)

    const { data } = await goalsTeamApi.getByTeam(idCompany, idTeam)

    const hasTeam = data.filter(e => e.idGoal === newIdGoal && e.idTeam === parseInt(idTeam))

    if (Object.keys(item).length === 0) {
      setMessage("Precisa selecionar um time")

    } else if (hasTeam.length !== 0) {
      setMessage("Time já selecionado")

    } else {
      goalsTeamApi.createProcess(idCompany, { idTeam, idGoal: newIdGoal })
        .then(() => {
          setMessage("Time adicionado")
          navigate({
            pathname: `${path}`,
            search: `?update=${true}`
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
    searchParams.delete('update')
    setSearchParams(searchParams)

    const newIdGoal = parseInt(idGoal)

    const newData = {
      ...itemGoal,
      idGoal: newIdGoal,
      author: payload?.id
    }

    const { data } = await goalsTeamApi.create(idCompany, newData)
    const idGoalsTeam = data.id

    const goalsTeam = goalTeamsByTeam.filter(e => e.idTeam === idTeam)[0]

    if (goalsTeam?.idGoalTeam) {
      const data = {
        idGoalsTeam,
        idGoal: newIdGoal,
        idTeam
      }

      goalsTeamApi.createProcess(idCompany, data)
        .then(() => {
          setMessage("Ojetivo criado com sucesso")
          navigate({
            pathname: `${path}`,
            search: `?update=${true}`
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
          navigate({
            pathname: `${path}`,
            search: `?update=${true}`
          })

          closeModalGoalTeam()
        })
        .catch((error) => {
          console.error(error)
          setMessage("Algo deu errado!")
        })
    }

  }

  const routerBack = () => {
    navigate(`/company/${idCompany}/goals`)
  }

  const redirectHistory = (route) => {
    navigate(route)
  }

  const changeModel = ({ target }) => {
    setItemGoal((state) => {
      return { ...state, [target.name]: target.value }
    })
  }

  const finishGoalTeamKr = async (idGoalsTeamKr, idTeam, idProcessGoalTeam, note=null) => {
    searchParams.delete('update')
    setSearchParams(searchParams)

    const {data} = await goalTeamsKrsApi.update(idGoalsTeamKr, {status: true})
    const result = await historyGoalTeamKrApi.getByKrs(idCompany, idGoal, idTeam)
    const history = (result?.data || []).filter(e => e.idGoalsTeamKr === idGoalsTeamKr)
    const lastHistory = history[history.length - 1]

    const newData = {
      idProcessGoalTeam,
      idGoalsTeamKr,
      quaPercentage: lastHistory?.quaPercentageHistory,
      yeaPercentage: lastHistory?.yeaPercentageHistory,
      user: payload?.name,
      to: lastHistory?.to,
      from: lastHistory?.from,
      note: !note? noteTeamKr: note,
      status: data?.status
    }

    if(noteTeamKr === "" && !note){
      setMessage("Precisa preencher o campo vazio")

    }else{
      const {data} = await taskUsersApi.getByUserAndKrs(idCompany, idGoal)
      const tasks = data.filter(e => e.idGoalsTeamKr === idGoalsTeamKr)
      tasks.forEach(async (task) => {
        if(!task.done){
          await taskUsersApi.update(task.idTaskUser, {done: true, description: newData.note})

          if(!task.idUser){
            await tasksApi.remove(task.idTask)
          }
        }

      })

      historyGoalTeamKrApi.create(idCompany, newData)
      .then(() => {
        setMessage("Kr encerrado")
        navigate({
          pathname: `${path}`,
          search: `?update=${true}`
        })
  
        closeModalFinishTeamKr()
      })
      .catch((error) => {
        console.error(error)
        setMessage("Algo deu errado!")
      })
    }

  }

  const createKr = async (event) => {
    event.preventDefault()

    searchParams.delete('update')
    setSearchParams(searchParams)

    const data = {
      ...itemKr,
      idGoal: parseInt(idGoal),
      toQuarterly: parseInt(itemKr.toQuarterly),
      toYearly: parseInt(itemKr.toQuarterly),
      fromQuarterly: parseInt(itemKr.fromQuarterly),
      fromYearly: parseInt(itemKr.fromYearly),
      done: parseInt(itemKr.toQuarterly),
      author: payload?.id
    }

    console.log("item", itemKr)

    const result = await goalKrsApi.findByName(idCompany, itemKr?.name)
    const verifyNameKr = result.data

    console.log("idCompany", idCompany)
    console.log("name", itemKr?.name)
    console.log("verifyNameKr", verifyNameKr)
    
    if(!verifyNameKr){
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
        status: !!goalKr?.status,
        note: "Iniciando Kr"
      }
  
      historyGoalKrApi.create(idCompany, newData)
        .then(() => {
          setMessage("KR criado com sucesso")
          navigate({
            pathname: `${path}`,
            search: `?update=${true}`
          })
  
          closeModal()
        })
        .catch((error) => {
          console.error(error)
          setMessage("Algo deu errado!")
        })

    }else{
      setMessage("Já existe Kr cadastrado com esse nome")
    }

  }

  return (
    <>
      <main className='flex flex-col items-center pt-8 relative text-black'>
        <div className='w-11/12'>
          <div className='flex flex-row w-full justify-center items-center'>
            <button onClick={routerBack} className="p-3 shadow-md text-xl rounded-full flex justify-center items-center bg-bee-blue-clean hover:bg-bee-blue-strong text-white cursor-pointer absolute m-2 left-12">
              <ion-icon name="arrow-back-outline"></ion-icon>
            </button>

            <TitleCompany className='text-bee' name={company?.name} />
          </div>
          <div className='container-two-percentage'>
          <div className='container-percentage-okr flex flex-col'>
              <span className='font-bold text-xl text-bee-strong-1 uppercase'>{goal?.name}</span>
              <span className='font-bold text-lg mt-2 text-bee-blue-clean'> Criado por: {(users || [])?.filter(e => e.id === goal?.author)[0]?.name} </span>
            </div>
            {!(!!goal?.status) &&
              <div className='container-percentage-okr flex flex-row justify-end gap-4'>
                <AddKr
                  message={message}
                  nameGoal={goal?.name}
                  handleSubmit={createKr}
                  modelChange={changeModelKr}
                  isOpen={isOpen}
                  closeModal={closeModal}
                  openModal={openModal}
                  item={itemKr}
                />

                <AddTeam
                  message={message}
                  modelChange={modelChange}
                  isOpen={isOpenTeam}
                  closeModal={closeModalTeam}
                  openModal={openModalTeam}
                  teams={teams}
                  item={item}
                  addTeamInGoal={addTeamInGoal}
                />

                <CloseGoal
                  handleSubmit={createKr}
                  nameGoal={goal?.name}
                  isOpen={isOpenCloseGoal}
                  closeModal={closeModalCloseGoal}
                  openModal={openModalCloseGoal}
                  idGoal={idGoal}
                  idCompany={idCompany}
                  payload={payload}
                  goalKrs={goalKrsByGoal}
                  finishGoalTeamKr={finishGoalTeamKr}
                />
              </div>
            }
          </div>

          <GoalKrs
            goalKrs={goalKrsByGoal}
            updateData={updateData}
            update={update}
            idCompany={idCompany}
            historyGoalKrs={historyGoalKrs}
            token={token}
            payload={payload}
            users={users}
            goal={goal}
            redirectHistory={redirectHistory}
            path={path}
            loadingGoalKrs={loadingGoalKrs}
            
          />

          <div className='border-t mt-6 pt-4 border-white'>
            <span className='font-bold text-xl mt-2 text-bee-strong-1'>Times</span>
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
              setIdTeam={setIdTeam}
              payload={payload}
              goal={goal}
              closeModalFinishTeamKr={closeModalFinishTeamKr}
              openModalFinishKr={openModalFinishKr}
              setOpenModalFinishKr={setOpenModalFinishKr}
              finishGoalTeamKr={finishGoalTeamKr}
              redirectHistory={redirectHistory}
              setNoteTeamKr={setNoteTeamKr}
              idTeam={idTeam}
              messageFinish={message}
              path={path}
              loadingGoalTeamsByTeam={loadingGoalTeamsByTeam}
            />
          </div>
        </div>
      </main>
    </>
  )
}

export default Goal;
