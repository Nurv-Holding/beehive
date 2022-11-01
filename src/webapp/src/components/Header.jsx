import { NavLink } from "react-router-dom"

const Header = () => {
    return(
        <header>
            <span className='cursor-default'>nossa plataforma</span>

            <nav>
            <NavLink to="/">
                <span>Home</span>
            </NavLink>

            <NavLink to="/listadeobjetivos">
                <span>Objetivos</span>
            </NavLink>
            
            <NavLink to="/gerenciamentodetime">
                <span>Gerenciamento de time</span>
            </NavLink>

            <NavLink to="/empresas">
                <span>empresas</span>
            </NavLink>
            </nav>
        </header>
    )
}

export default Header