import { Link } from 'react-router-dom'
import OkrsPercentage from '../components/okrsPercentage';
import OkrsTable from '../components/okrs-table';

function okrs() {
  return (
    <>
      <header>
        <span className='cursor-default'>nossa plataforma</span>

        <nav>
          <Link to="/">
            <span>Home</span>
          </Link>
          
          <Link to="/gerenciamentodetime">
            <span>Gerenciamento de time</span>
          </Link>
          
          <Link to="/okrs">
            <span className='current-page'>OKR's</span>
          </Link>
          
          <Link to="/carreira">
            <span>Carreira</span>
          </Link>
        </nav>
      </header>

      <main className='flex flex-col items-center'>
        <OkrsPercentage />

        <OkrsTable />
      </main>
    </>
  );
}

export default okrs;