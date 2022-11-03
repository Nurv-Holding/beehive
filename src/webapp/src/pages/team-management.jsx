import Header from '../components/header';
import MenuTeamManagement from '../components/menuTeamManagement';

function teamManagement() {
  return (
    <>
      <Header />

      <main className='flex flex-col items-center py-8'>
        <MenuTeamManagement/>
      </main>
    </>
  );
}

export default teamManagement;