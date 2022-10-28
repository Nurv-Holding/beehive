import { Link } from 'react-router-dom'

function carreira() {
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
            <span>Gerenciamento de time</span>
          </Link>
          
          <Link to="/carreira">
            <span className='current-page'>Carreira</span>
          </Link>

          <Link to="/empresas">
            <span>empresas</span>
          </Link>
        </nav>
      </header>

      <main>
          
      </main>
    </>
  );
}

export default carreira;