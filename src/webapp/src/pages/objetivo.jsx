import { useContext } from 'react';
import Header from '../components/Header';
import TeamObjectivesPercentage from '../components/teamObjectivesPercentage';
import TeamObjectivesTable from '../components/teamObjectivesTable';
import { ContextUser } from '../context/ContextUser';

function Objetivo() {
  const {tasksToGoal} = useContext(ContextUser)
  const {tasksToGoalQuantify} = useContext(ContextUser)
  const {tasksToGoalQuantifyDone} = useContext(ContextUser)

  return (
    <>
      <Header />

      <main>
        <div className='flex flex-col items-center'>
          <h1 className='text-white'> {tasksToGoalQuantify.nameGoal} </h1>
          <TeamObjectivesPercentage
            tasksToGoalQuantify={tasksToGoalQuantify}
            tasksToGoalQuantifyDone={tasksToGoalQuantifyDone}
          />
          <TeamObjectivesTable tasksToGoal={tasksToGoal} />
        </div>
      </main>
    </>
  );
}

export default Objetivo;
    