import { NavLink } from "react-router-dom"
import logo from "../media/photos/BE-HIVE1-01.png"

const Header = () => {
    return(
        <header>
            <div className="w-[80px]">
                <img src={logo} className="w-full" alt="logo" />
            </div>

            <nav>
            <NavLink to="/">
                <span>Home</span>
            </NavLink>
            
            {/* <NavLink to="/gerenciamentodetime">
                <span>Gerenciamento de time</span>
            </NavLink>

            <NavLink to="/empresas">
                <span>empresas</span>
            </NavLink> */}
            </nav>
        </header>
    )
}

export default Header