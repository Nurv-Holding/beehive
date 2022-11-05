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

function Objetivo() {
  const { teams, idGoal, goal, goalKrs } = useContext(ContextUser)
  const [update, setUpdate] = useState(false)
  const { modelChange, item } = useContext(ContextUser)
  const [message, setMessage] = useState("Aqui vai uma mensagem")
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()

  let [isOpen, setIsOpen] = useState(false)

  function updateData() {
    setIsOpen(false)
  }

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
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
          pathname: `/objetivo/${idGoal}`,
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
          </div>

          <TeamObjectivesTable 
            goalKrs={goalKrs} 
            updateData={updateData} 
            update={update}
            loading={loading}
            />

          <div className='border-t mt-6 pt-8 border-white'>
            <span className='text-bold text-lg text-white uppercase'>TIMES</span>
            <TeamObjectivesTeams teams={teams} />
          </div>
        </div>
      </main>
    </>
  )
}

export default Objetivo;
