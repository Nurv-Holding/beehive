import React from 'react'
import { Link } from 'react-router-dom';

const header = () => {
  return (
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
            <span>Carreira</span>
          </Link>

          <Link to="/empresas">
            <span>empresas</span>
          </Link>
        </nav>
      </header>
  )
}

export default header;