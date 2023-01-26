import { useContext } from "react"
import { useState } from "react"
import { useEffect } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import profilesApi from "../api/profilesApi"
import { ContextCompany } from "../context/ContextCompany"
import Loading from "./Loading"


const AuthorizeAccess = ({ children, userAutorized }) => {
    const { idCompany, payload } = useContext(ContextCompany)
    const [profile, setProfile] = useState(null)
    const { pathname } = useLocation()
    const navigate = useNavigate()

    useEffect(() => {
        getOneProfile()
        console.log("profile", profile)

    }, [idCompany])

    const getOneProfile = async () => {
        const { data } = await profilesApi.getById(payload?.idProfile)
        setProfile(data)
    }

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