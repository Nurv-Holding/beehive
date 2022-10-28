import { Link } from 'react-router-dom'
import TeamObjectivesPercentage from '../components/teamObjectivesPercentage';
import TeamObjectivesTable from '../components/teamObjectivesTable';

function objetivo() {
  return (
    <>
      <header>
        <span className='cursor-default'>nossa plataforma</span>

        <nav>
          <Link to="/">
            <span>Home</span>
          </Link>
          
          <Link to="/listadeobjetivos">
            <span className='current-page'>Objetivos</span>
          </Link>
          
          <Link to="/gerenciamentodetime">
            <span>Gerenciamento de time</span>
          </Link>
          
          <Link to="/carreira">
            <span>Carreira</span>
          </Link>

          <Link to="/empresas">
            <span>empresas</span>
          </Link>
        </nav>
      </header>

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
    