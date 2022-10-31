import { Link } from 'react-router-dom'
import MenuTeamManagement from '../components/menuTeamManagement';

function teamManagement() {
  return (
    <>
      <main className='flex flex-col items-center py-8'>
        <MenuTeamManagement/>
      </main>
    </>
  );
}

export default teamManagement;