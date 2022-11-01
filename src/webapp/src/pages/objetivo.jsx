import { useEffect } from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import subtasksApi from '../api/subtasksApi';
import Header from '../components/Header';
import TeamObjectivesNewTask from '../components/teamObjectivesNewTask';
import TeamObjectivesPercentage from '../components/teamObjectivesPercentage';
import TeamObjectivesTable from '../components/teamObjectivesTable';
import { ContextUser } from '../context/ContextUser';

function Objetivo() {
  const { tasksToGoal } = useContext(ContextUser)
  const { tasksToGoalQuantify } = useContext(ContextUser)
  const { tasksToGoalQuantifyDone } = useContext(ContextUser)
  const [total, setTotal] = useState([])
  const [totalDone, setTotalDone] = useState([])

  const returnQuantify = async () => {
    const { data } = await subtasksApi.getAllTaskQuantifySubtasks()

    setTotal(data)
  }

  const returnQuantifyDone = async () => {
    const { data } = await subtasksApi.getByIdTaskQuantifySubtasksDone()

    setTotalDone(data)
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

            <TeamObjectivesNewTask/>
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
