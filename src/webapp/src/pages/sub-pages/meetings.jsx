import { Link } from 'react-router-dom'
import TeamObjectivesPercentage from '../../components/teamObjectivesPercentage';
import TeamObjectivesTable from '../../components/teamObjectivesTable';

function meetings() {
  return (
    <div className='flex flex-col items-center'>
      <TeamObjectivesPercentage />
      <TeamObjectivesTable />
    </div>
  );
}

export default meetings;