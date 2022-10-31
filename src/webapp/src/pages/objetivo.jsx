import { useContext } from 'react';
import { Link } from 'react-router-dom'
import Header from '../components/Header';
import TeamObjectivesPercentage from '../components/teamObjectivesPercentage';
import TeamObjectivesTable from '../components/teamObjectivesTable';
import { ContextUser } from '../context/ContextUser';

function Objetivo() {
  const {tasksToGoal} = useContext(ContextUser)

  return (
    <>
      <Header />

      <main>
        <div className='flex flex-col items-center'>
          <TeamObjectivesPercentage />
          <TeamObjectivesTable tasksToGoal={tasksToGoal} />
        </div>
      </main>
    </>
  );
}

export default Objetivo;
    