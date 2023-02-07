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
        <header
            className="
                w-full bg-white flex items-center px-10
                justify-between font-bold h-14 text-sm
            "
        >
            <div className="flex flex-row items-center justify-center gap-4">
                <div className="w-[80px]">
                    <img src={logo} className="w-full" alt="logo" />
                </div>
                {isLogin &&
                    <span className="hover:cursor-default"> Olá, <span className="hover:text-bee-blue-clean">{payload?.name}</span> </span>
                }

            </div>
            <nav className="flex flex-row gap-2 items-center">
                <NavLink to="/">
                    <span className="hover:text-bee-blue-clean">Home</span>
                </NavLink>

                {isLogin &&
                    <div className="">
                        <button type="button" onClick={logout} className="text-sm hover:text-red-500"> <span>Sair</span> </button>
                    </div>
                }

            </nav>
        </header>
    )
}

export default Header