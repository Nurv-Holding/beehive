import { useEffect } from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import Header from '../components/header';
import TeamObjectivesNewTask from '../components/teamObjectivesNewTask';
import TeamObjectivesTable from '../components/teamObjectivesTable';
import TeamObjectivesTeams from '../components/teamObjectivesTeams';
import { ContextUser } from '../context/ContextUser';
import goalsApi from '../api/goalsApi';
import goalKrsApi from '../api/goalKrsApi';
import goalsTeamApi from '../api/goalsTeamApi';
import goalTeamsKrsApi from '../api/goalTeamsKrsApi';
import AddTeam from '../components/addTeam';

function Objetivo() {
  const { idGoal, idCompany, teams } = useContext(ContextUser)
  const { modelChange, item } = useContext(ContextUser)
  const [message, setMessage] = useState("Aqui vai uma mensagem")
  const [loading, setLoading] = useState(false)
  const [goal, setGoal] = useState({})
  const [goalKrs, setGoalKrs] = useState([])
  const [goalTeamsKrs, setGoalTeamsKrs] = useState([])
  const [ooalTeam, setGoalTeam] = useState([])
  const [ooalTeams, setGoalTeams] = useState([])
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const [isOpen, setIsOpen] = useState(false)
  const [isOpenTeam, setIsOpenTeam] = useState(false)
  const update = searchParams.get('update')

  useEffect(() => {
    handleGoal()
    handleGoalKrs()
    handleGoalTeamsKrs()
    handleGoalTeam()
    handleGoalTeams()

  }, [idGoal, idCompany, update])

  function updateData() {
    setIsOpen(false)
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

  const handleGoal = async () => {
    const { data } = await goalsApi.getById(idGoal, idCompany)

    setGoal(data)
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

    if (Object.keys(item).length === 0) {
      setMessage("Precisa selecionar um time")

    } else if (data.length !== 0) {
      setMessage("Time já selecionado")

    } else {
      goalsTeamApi.createProcess(idCompany, { idTeam, idGoal: newIdGoal })
        .then(() => {
          setMessage("Time adicionado sucesso")
          navigate({
            pathname: `/empresas/${idCompany}/objetivo/${idGoal}`,
            search: '?update=true'
          })
          searchParams.delete("update")

          closeModal()
        })
        .catch((error) => {
          console.error(error)
          setMessage("Algo deu errado!")
        })
    }
  }

  const createGoalsTeam = async (event, idTeam) => {
    event.preventDefault()

    const newIdGoal = parseInt(idGoal)

    const { data } = await goalsTeamApi.create(idCompany, { ...item, idGoal: newIdGoal })
    const idGoalsTeam = data.id
    const goalsTeamByTeam = goalTeamsKrs.filter(e => e.idTeam === idTeam)

    goalsTeamApi.updateProcess(goalsTeamByTeam.idProcessGoalsTeams, { idGoalsTeam })
      .then(() => {
        setMessage("Ojetivo criado com sucesso")
        navigate({
          pathname: `/empresas/${idCompany}/objetivo/${idGoal}`,
          search: '?update=true'
        })
        searchParams.delete("update")

        closeModal()
      })
      .catch((error) => {
        console.error(error)
        setMessage("Algo deu errado!")
      })
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    const data = {
      ...item,
      idGoal: parseInt(idGoal),
      quarterly: parseInt(item.quarterly),
      yearly: parseInt(item.yearly)
    }

    goalKrsApi.create(1, data)
      .then(() => {
        setMessage("KR criado com sucesso")
        navigate({
          pathname: `/empresas/${idCompany}/objetivo/${idGoal}`,
          search: '?update=true'
        })
        searchParams.delete("update")

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
              <span className='text-bold text-xl text-white uppercase'>{goal.name}</span>
              <span className='text-bold text-lg mt-2 text-white'>Empresa 1</span>
            </div>

            <div className='container-percentage-okr flex flex-row justify-around'>
              <TeamObjectivesNewTask
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
            </div>
          </div>

          <TeamObjectivesTable
            goalKrs={goalKrs}
            updateData={updateData}
            update={update}
            loading={loading}
            idCompany={idCompany}
          />

          <div className='border-t mt-6 pt-8 border-white'>
            <span className='text-bold text-xl mt-2 text-white'>Times</span>
            <TeamObjectivesTeams goalTeamsKrs={goalTeamsKrs} />
          </div>
        </div>
      </main>
    </>
  )
}

export default Objetivo;
