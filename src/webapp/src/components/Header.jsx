import { NavLink, useNavigate } from "react-router-dom"
import logo from "../media/photos/BE-HIVE1-01.png"
import jwtDecode from "jwt-decode"

const Header = () => {
    const isLogin = !!localStorage.getItem("token")
    const payload = !!localStorage.getItem("token") ? jwtDecode(localStorage.getItem("token")) : null
    const navigate = useNavigate()

    const logout = () => {
        localStorage.clear("token")
        navigate("/login")
    }

    return (
        <header>
            <div className="flex flex-row items-center gap-4">
                <div className="w-[80px]">
                    <img src={logo} className="w-full" alt="logo" />
                </div>
                {isLogin &&
                    <span className="hover:cursor-default"> Olá, <span className="hover:text-[#5500C3]">{payload?.name}</span> </span>
                }
                
            </div>

            <nav>
                <NavLink to="/">
                    <span className="hover:text-[#5500C3]">Home</span>
                </NavLink>
                {isLogin &&
                    <div className="">
                        <button type="button" onClick={logout} className="ml-2 text-sm hover:text-red-500"> <span>Sair</span> </button>
                    </div>
                }

            </nav>
        </header>
    )
}

export default Header