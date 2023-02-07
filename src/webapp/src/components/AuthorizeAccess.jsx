import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { ContextCompany } from "../context/ContextCompany"
import Loading from "./Loading"


const AuthorizeAccess = ({ children, userAutorized }) => {
    const { profile } = useContext(ContextCompany)
    // const { pathname } = useLocation()
    const navigate = useNavigate()

    const routerBack = () => {
        navigate(-1)
    }

    return (
        <>
            {

                !profile ? <Loading /> :
                    userAutorized.some((x) => x?.toLowerCase() === profile?.name?.toLowerCase()) ?
                        children :
                        <>
                            <button onClick={routerBack} className="p-3 mt-8 shadow-md text-xl rounded-full flex justify-center items-center bg-white hover:bg-bee-blue-strong hover:text-white hover:cursor-pointer absolute m-2 left-12">
                                <ion-icon name="arrow-back-outline"></ion-icon>
                            </button>

                            <div className="w-full h-[90vh] flex flex-col justify-center items-center">

                                <div
                                    className="
                                    bg-white p-8 shadow-md rounded-md text-center font-bold
                                    text-xl cursor-default flex flex-col justify-center items-center gap-8
                                "
                                >
                                    <span>
                                        Usuário não autorizado <br />
                                        para este tipo de atividade
                                    </span>

                                    <img
                                        className="w-20 object-contain"
                                        src="https://uxwing.com/wp-content/themes/uxwing/download/emoji-emoticon/sad-face-icon.svg"
                                        alt="sad icon"
                                    />
                                </div>
                            </div>
                        </>
            }

        </>
    )
}

export default AuthorizeAccess