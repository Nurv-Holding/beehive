import { NavLink, useNavigate } from "react-router-dom"
import logo from "../media/photos/BE-HIVE1-01.png"
import jwtDecode from "jwt-decode"

const Header = () => {
    const isLogin = !!localStorage.getItem("token")
    const payload = !!localStorage.getItem("token")? jwtDecode(localStorage.getItem("token")): null
    const navigate = useNavigate()

    const logout = () => {
        localStorage.clear("token")
        navigate("/login")
    }

    return(
        <header>
            <div className="w-[80px]">
                <img src={logo} className="w-full" alt="logo" />
            </div>

            <nav className="flex justify-end">
            <NavLink to="/">
                <span>Home</span>
            </NavLink>
            {isLogin &&
            <div>
                <span> Olá, {payload?.name} </span>
                <button type="button" onClick={logout} className=""> Sair </button>
            </div>
            }

            </nav>
        </header>
    )
}

export default Header