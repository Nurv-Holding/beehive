import { Link } from 'react-router-dom'
import Profile from '../components/profile';
import Compromisses from '../components/compromisses';
import Tasks from '../components/tasks';
import Reminder from '../components/reminder';
import Calendar from '../components/calendar';
import Methodology from '../components/methodology';

function Home() {
  return (
    <>
      <header>
        <span className='cursor-default'>nossa plataforma</span>

        <nav>
          <Link to="/">
            <span className='current-page'>Home</span>
          </Link>

          <Link to="/listadeobjetivos">
            <span>Objetivos</span>
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
        <div className='grid-container'>

{/* FIRST COL */}
          <div className='grid-col'>
            <Profile />
            <Compromisses />
          </div>

{/* SECOND COL */}
            <div className='grid-col'>
              <Tasks />
              <Reminder />
            </div>

{/* THIRD COL */}
            <div className='grid-col'>
              <Calendar />

              <Methodology />
            </div>
          </div>
      </main>
    </>
  );
}

export default Home;