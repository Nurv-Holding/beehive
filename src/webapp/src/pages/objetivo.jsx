import { useEffect } from 'react';
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
  const {idGoal} = useParams()

  const returnQuantify = async () => {
    const { data } = await subtasksApi.getAllTaskQuantifySubtasks()

    setTotal(data)
  }

  const returnQuantifyDone = async () => {
    const { data } = await subtasksApi.getByIdTaskQuantifySubtasksDone()

    setTotalDone(data)
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    if(Object.keys(item).length === 0 && 
    item.name === "" || item.descriptions === "" || 
    item.initialDate === "" || item.finalDate === "")
    {
        setMessage("Precisa preencher os campos vazios")

    }else{
        console.log("item",item)
        tasksApi.create({...item, idGoal})
        .then(() => setMessage("Cadastro Realizado!"))
        .catch(() => setMessage("Algo deu errado!!"))
    }
  }

  return (
    <>
      <Header />

      <main>
        <div className='flex flex-col items-center'>
          <h1 className='text-white text-bold text-2xl mt-8'> {tasksToGoalQuantify.nameGoal} </h1>
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
      </main>
    </>
  );
}

export default Objetivo;
