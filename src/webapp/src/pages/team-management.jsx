import { Link } from 'react-router-dom'
import MenuTeamManagement from '../components/menuTeamManagement';

function teamManagement() {
  return (
    <>
      <header>
        <span className='cursor-default'>nossa plataforma</span>

        <nav>
          <Link to="/">
            <span>Home</span>
          </Link>

          <Link to="/listadeobjetivos">
            <span>Objetivos</span>
          </Link>
          
          <Link to="/gerenciamentodetime">
            <span className='current-page'>Gerenciamento de time</span>
          </Link>
          
          <Link to="/carreira">
            <span>Carreira</span>
          </Link>

          <Link to="/empresas">
            <span>empresas</span>
          </Link>
        </nav>
      </header>

      <main className='flex flex-col items-center py-8'>
        <MenuTeamManagement/>
      </main>
    </>
  );
}

export default teamManagement;