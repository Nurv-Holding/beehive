import { Link } from 'react-router-dom'
import TeamObjectivesPercentage from '../components/teamObjectivesPercentage';
import TeamObjectivesTable from '../components/teamObjectivesTable';

function objetivo() {
  return (
    <>
      <main>
        <div className='flex flex-col items-center'>
            <TeamObjectivesPercentage />
            <TeamObjectivesTable />
        </div>
      </main>
    </>
  );
}

export default objetivo;
    