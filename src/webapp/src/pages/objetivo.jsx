import { useEffect } from 'react';
import { Tab } from '@headlessui/react'
import { useState } from 'react';
import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import subtasksApi from '../api/subtasksApi';
import tasksApi from '../api/tasksApi';
import Header from '../components/header';
import TeamObjectivesNewTask from '../components/teamObjectivesNewTask';
import TeamObjectivesPercentage from '../components/teamObjectivesPercentage';
import TeamObjectivesTable from '../components/teamObjectivesTable';
import { ContextUser } from '../context/ContextUser';
import TaskList from '../components/empresasTabPanels/tarefas/listaTarefas';

function Objetivo() {
  const { tasksToGoal,
    tasksToGoalQuantify,
    tasksToGoalQuantifyDone,
    modelChange,
    item
  } = useContext(ContextUser)

  const [total, setTotal] = useState([])
  const [totalDone, setTotalDone] = useState([])
  const [message, setMessage] = useState("Aqui vai uma mensagem")
  const [tasks, setTasks] = useState([])
  const { idGoal } = useParams()

  useEffect(() => {
    handlerTasks()

  }, [idGoal])

  const returnQuantify = async () => {
    const { data } = await subtasksApi.getAllTaskQuantifySubtasks()

    setTotal(data)
  }

  const returnQuantifyDone = async () => {
    const { data } = await subtasksApi.getByIdTaskQuantifySubtasksDone()

    setTotalDone(data)
  }

  const handlerTasks = async () => {
    const { data } = await tasksApi.getAll(1, idGoal)

    setTasks(data)
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    if (Object.keys(item).length === 0 &&
      item.name === "" || item.descriptions === "" ||
      item.initialDate === "" || item.finalDate === "") {
      setMessage("Precisa preencher os campos vazios")

    } else {
      const newIdGoal = parseInt(idGoal)
      tasksApi.create(1, { ...item, idGoal: newIdGoal })
        .then(() => setMessage("Cadastro Realizado!"))
        .catch(() => setMessage("Algo deu errado!!"))
    }
  }

  return (
    <>
      <Header />

      <main className='flex flex-col items-center'>
        <div className='w-11/12'>
          <h1 className='text-white text-bold text-2xl mt-2'> {tasksToGoalQuantify.nameGoal} </h1>
          <div className='container-two-percentage'>
            <div className='container-percentage-okr flex flex-col'>
              <span className='text-bold text-2xl text-white'>Ser uma empresa financeiramente sustentavel</span>
              <span className='text-bold text-lg mt-2 text-gray-400'>Empresa 1</span>
            </div>

            <TeamObjectivesNewTask
              message={message}
              handleSubmit={handleSubmit}
              modelChange={modelChange}
            />
          </div>

          <TeamObjectivesTable
            tasksToGoal={tasksToGoal}
            returnQuantify={returnQuantify}
            returnQuantifyDone={returnQuantifyDone}
            total={total}
            totalDone={totalDone}
          />
        </div>
      </main>
    </>
  );
}

export default Objetivo;
