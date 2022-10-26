import { Link } from 'react-router-dom'
import Example from './sub-pages/empresasMenu';

function empresas() {
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
          
          <Link to="/carreira">
            <span>Carreira</span>
          </Link>

          <Link to="/empresas">
            <span className='current-page'>empresas</span>
          </Link>
        </nav>
      </header>

      <main className='w-full flex flex-row'>
          <Example/>
      </main>
    </>
  );
}

export default empresas;