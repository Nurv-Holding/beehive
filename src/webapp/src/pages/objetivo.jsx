import { useEffect } from 'react';
import { Tab } from '@headlessui/react'
import { useState } from 'react';
import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import subtasksApi from '../api/subtasksApi';
import tasksApi from '../api/tasksApi';
import Header from '../components/Header';
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
  const { idGoal } = useParams()

  const returnQuantify = async () => {
    const { data } = await subtasksApi.getAllTaskQuantifySubtasks()

    setTotal(data)
  }

  const returnQuantifyDone = async () => {
    const { data } = await subtasksApi.getByIdTaskQuantifySubtasksDone()

    setTotalDone(data)
  }

  const handlerTasks = async () => {}

  const handleSubmit = (event) => {
    event.preventDefault()

    if (Object.keys(item).length === 0 &&
      item.name === "" || item.descriptions === "" ||
      item.initialDate === "" || item.finalDate === "") {
      setMessage("Precisa preencher os campos vazios")

    }else{
        const newIdGoal = parseInt(idGoal)
        tasksApi.create(1,{...item, idGoal:newIdGoal})
        .then(() => setMessage("Cadastro Realizado!"))
        .catch(() => setMessage("Algo deu errado!!"))
    }
  }

  return (
    <>
      <Header />

      <main className='flex flex-col items-center'>
        <Tab.Group>
          <Tab.List className='w-11/12 mt-4'>
            <div className='w-full flex flex-row gap-2'>
              <Tab className='nav-btn'>
                {({ selected }) => (
                  /* Use the `selected` state to conditionally style the selected tab. */
                  <button
                    className={
                      selected ? 'bg-[#5500C3] text-white' : 'bg-white'
                    }
                  >
                    Objetivo
                  </button>
                )}
              </Tab>

            <TeamObjectivesNewTask
              item={item}
              message={message} 
              handleSubmit={handleSubmit}
              modelChange={modelChange}
            />

              <Tab className='nav-btn'>
                {({ selected }) => (
                  /* Use the `selected` state to conditionally style the selected tab. */
                  <button
                    className={
                      selected ? 'bg-[#5500C3] text-white' : 'bg-white'
                    }
                  >
                    Tarefas
                  </button>
                )}
              </Tab>
            </div>
          </Tab.List>

          <div className='w-11/12'>
            <Tab.Panels>
              <Tab.Panel>
                <div className='flex flex-col items-center'>
                  <h1 className='text-white text-bold text-2xl mt-2'> {tasksToGoalQuantify.nameGoal} </h1>
                  <div className='container-two-percentage'>
                    <TeamObjectivesPercentage
                      tasksToGoalQuantify={tasksToGoalQuantify}
                      tasksToGoalQuantifyDone={tasksToGoalQuantifyDone}
                    />

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
              </Tab.Panel>

              <Tab.Panel className='container-empresas'>
                <TaskList/>
              </Tab.Panel>
            </Tab.Panels>
          </div>
        </Tab.Group>
      </main>
    </>
  );
}

export default Objetivo;
