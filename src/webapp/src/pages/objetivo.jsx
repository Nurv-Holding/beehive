import { useEffect } from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import tasksApi from '../api/tasksApi';
import Header from '../components/header';
import TeamObjectivesNewTask from '../components/teamObjectivesNewTask';
import TeamObjectivesTable from '../components/teamObjectivesTable';
import { ContextUser } from '../context/ContextUser';
import goalsApi from '../api/goalsApi';
import goalKrsApi from '../api/goalKrsApi';

function Objetivo() {
  const { modelChange, item } = useContext(ContextUser)
  const [goal, setGoal] = useState({})
  const [goalKrs, setGoalKrs] = useState([])
  const [message, setMessage] = useState("Aqui vai uma mensagem")
  const { idGoal } = useParams()

  useEffect(() => {
    handleGoal()
    handleGoalKrs()

  }, [idGoal])

  let [isOpen, setIsOpen] = useState(false)

  function closeModal() {
      setIsOpen(false)
  }

  function openModal() {
      setIsOpen(true)
  }

  const handleGoal = async () => {
    const {data} = await goalsApi.getById(idGoal,1)

    setGoal(data)
  }

  const handleGoalKrs = async () => {
    const {data} = await goalKrsApi.getByGoal(1,idGoal)

    setGoalKrs(data)
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    const data = {
      ...item,
      idGoal:parseInt(idGoal),
      quarterly:parseInt(item.quarterly),
      yearly:parseInt(item.yearly)
    }

    goalKrsApi.create(1,data)
    .then(() => {
      setMessage("KR criado com sucesso")
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

      <div className='flex flex-col items-center'>
        <div className='w-11/12'>
          <div className='container-two-percentage'>
            <div className='container-percentage-okr flex flex-col'>
              <span className='text-bold text-2xl text-white'>{goal.name}</span>
              <span className='text-bold text-lg mt-2 text-gray-400'>Empresa 1</span>
            </div>

            <TeamObjectivesNewTask
              message={message}
              handleSubmit={handleSubmit}
              modelChange={modelChange}
              isOpen={isOpen}
              closeModal={closeModal}
              openModal={openModal}
              item={item}
            />
          </div>

          <TeamObjectivesTable goalKrs={goalKrs}
          />
        </div>
      </div>

      <div className='flex flex-col items-center'>
        <div className='w-11/12'>
          <div className='container-two-percentage'>
            <div className='container-percentage-okr flex flex-col'>
              <span className='text-bold text-2xl text-white'>times responsaveis</span>
              <span className='text-bold text-lg mt-2 text-white'>Empresa 1</span>
            </div>

            <TeamObjectivesNewTask
              message={message}
              handleSubmit={handleSubmit}
              modelChange={modelChange}
            />
          </div>

          <TeamObjectivesTable goalKrs={goalKrs}
          />
        </div>
      </div>
    </>
  );
}

export default Objetivo;
